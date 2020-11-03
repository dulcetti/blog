---
title: Como criar variáveis de ambiente no Nextjs
description: Variáveis de ambiente no Next.js é bem fácil, mas existem casos com
  staging que precisamos de algo a mais
date: 2020-06-23T11:28:34.000Z
featuredImage: /uploads/environments-nuvens.jpg
photographer: <a
  href="https://unsplash.com/@noaa?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">NOAA</a>
category: JavaScript
---
E lá vamos nós com mais um artigo sobre JavaScript, o primeiro sobre o Next.js. Ainda não tenho tanto contato com ele, mas já temos um primeiro projeto na Wooza utilizando. Um dos pontos que precisávamos era de variáveis de ambiente no Next.js para funcionar nos nossos diversos (não me diga, Dulça?). Environments são fáceis de configurar no Next.js, porém, no nosso caso precisávamos de um algo mais. Veremos o que é...

## Mas como que configura variáveis de ambiente no Next.js?

Simples, basta criar os seguintes arquivos:

* env.local (ambiente local)
* env.development (ambiente de homologação - staging)
* env.production (ambiente de produção)

E dentro deles você coloca as variáveis, por exemplo:

```shell
API_URL=https://fodasse.com
DEFAULT_SCROWBLES=VALOR
```

Claro, esses valores podem ou devem ser diferentes para cada um deles.

## Beleza, Dulcetti, mas qual é o problema então?

Essas variáveis funcionam de boa localmente, durante o desenvolvimento e tudo mais. Porém, na hora do build, por exemplo, podem rolar problemas.

No caso do projeto da empresa nós usamos essas variáveis num service de captura de dados de uma API. No start do projeto, usando o `next dev` ou `next start`, ele pega corretamente as informações dos arquivos de environment, o primeiro de homologação e o segundo de produção.

O problema era na hora do Build do Next.js. Trabalhando com a parte de arquivos estáticos e geração de todas as págins nós não teríamos problema, porque no tempo de Build ele pega as informações que estão nos arquivos de environment. Mas na hora do acesso do usuário o service pega os dados de produção, que são os dados padrões. Isso porque as variáveis de ambientes só são acessadas no tempo de build, se perdem quando sobe pro servidor, S3 e afins.

Com isso, precisamos criar um arquivo JS com essas configurações pro nosso service acessar de qualquer lugar.

### E como são os ambientes, Bruno?

Temos três ambientes:

* **Desenvolvimento:** develop
* **Homologação:** homolog
* **Produção:** master

Como o `next build` pega por padrão as variáveis de ambiente de Produção, no CI/CD de Homologação acaba pegando as informações erradas, o que não queremos. Por isso eu precisava resolver isso, certo?

## Então mostra como resolveu a criação de variáveis de ambientes no Next.js, Dulça

![Variáveis de ambiente no Next.js](/uploads/environmental.jpg)

Simples. Precisamos instalar dois pacotes:

```shell
yarn add -D dotenv cross-env
```

Claro, se usar o `npm` você executa o comando `npm install --save-dev dotenv cross-env`. Depois disso você precisa adicionar ou alterar as tasks de build nos scripts do seu packaeg.json:

```json
{
  "name": "seu-pacote",
  "scripts": {
    "build:hmg": "npm run clear && npm run env:hmg next build && next export",
    "build:prod": "npm run clear && npm run env:prod next build && next export",
    "env:hmg": "cross-env ACTIVE_ENV=development",
    "env:prod": "cross-env ACTIVE_ENV=production",
    "start": "npm run env:hmg next dev",
    "start:prod": "npm run env:prod next start"
  }
}
```

Percebam que existem duas tasks de env: uma de hmg e outra para prod. Elas executam o cross-env, passando seus respectivos valores. Eu preferi usar `development` como valor para homologação por ser o valor default de desenvolvimento do Next.js, mas pode nomear como quiser.

### Ponto importante sobre desenvolvimento local

Percebam que só coloquei duas tasks, de hmg e prod, isso porque nesse projeto nós usamos o ambiente de HMG para o desenvolvimento local. Mas você, e deve, colocar as informações de desenvolvimento local apontando para o ambiente de DEV.

### Voltando...

Depois é só criar os dois arquivos de variáveis de ambiente, um com os dados de homologação chamado `.env.development` (ou com o sufixo que quiser):

```
API_URL=https://hmg-fodasse.com
DEFAULT_SCROWBLES=VALOR_HMG
```

E outro com os dados de produção chamado `.env.production`:

```shell
API_URL=https://fodasse.com
DEFAULT_SCROWBLES=VALOR
```

Percebam que a URL é diferente, assim como a propriedade que inventei em cada um dos arquivos.

Lembrando que no local você coloca as informações que precisar, caso tenha um ambiente de desenvolvimento apartado.

### Vamos para o gerador do arquivo de enviroment:

E depois disso você precisa criar um Builder que gere um arquivo que será usado pelos services. Eu o batizei de `environment-builder.js`. Vamos a ele:

```javascript
const fs = require('fs');
const activeEnv = process.env.ACTIVE_ENV || 'development';

const env = require('dotenv').config({
  path: `.env.${activeEnv}`,
});

const createEnvFile = () => {
  return new Promise((resolve, reject) => {
    fs.writeFile('environment.js', `export default ${JSON.stringify(env.parsed)}`, 'utf8', (error) => {
      return error ? reject(error) : resolve();
    });
  });
};

module.exports = createEnvFile;
```

Nesse arquivo nós vimos que ele usa o `dotenv` para fazer a configuração baseado nos arquivos que foram criados, `.env.development` e `.env.production`.

E veja também que nas primeiras linhas ele pega o `process.env.ACTIVE_ENV`, que foi setado no package.json. Caso ele não exista, entra o padrão `development`. E depois uma variável `env` é criada com o config do dotenv.

Com isso, todas as variáveis que estão nos arquivos de environment são atribuídos a um objeto parseado pelo dotenv de acordo com o `ACTIVE_ENV` passado. Veja que na Promise a gente coloca um `JSON.stringify` com o nó `parsed`.

Um método `createEnvFile` é criado e exportado para ser executado em algum local que veremos logo, logo.

#### E o que esse método faz?

Ele cria um arquivo chamado `environment.js`, e é nesse arquivo que os services e afins vão se basear. Abaixo segue como o arquivo fica quando gerado:

```javascript
export default {
  'API_URL': 'https://fodasse.com',
  'DEFAULT_SCROWBLES': 'VALOR',
};
```

Porém, você precisa colocar esse arquivo no `.gitignore`, pois esse arquivo será gerado a cada start e build, já que ele sofre alterações dependendo do ambiente.

### Exportando esse environment.js no next-config.js

Aí você acaba se perguntando "Mas como que eu gero esse fodasse?". E é bem tranquilo, só vai depender de como você tem o seu next-config.js. Caso não tenha nenhum plugin e afins, é só colocar a execução do `createEnvFile()` no `module.exports`:

```javascript
const createEnvFile = require('./environment-builder');

module.exports = createEnvFile();
```

Mas pode ser que você já use plugins, como o `next-images`, aí precisa adicionar dentro da configuração dele, passando o webpack, executando o método `createEnvFile()` e retornando as configurações:

```javascript
const withImages = require('next-images');
const createEnvFile = require('./environment-builder');

module.exports = withImages({
  webpack: (config) => {
    createEnvFile();
    return config;
  },
});
```

### Praticamente tudo pronto, agora é só capturar nas services

Agora que temos o arquivo `environment.js` gerado, use à vontade. Veja um exemplo numa service fodasse:

```javascript
import env from '../../environment';

export const fetchData = async () => {
  const url = `${env.API_URL}/${env.DEFAULT_SCROWBLES}`;
  const result = await fetch(url).then((items) => items.json());
  const dataResult = result.data;

  return { dataResult };
};
```

Claro, é um exemplo completamente fodasse, você faz o que quiser, manipulações, Builders, tratamento de erros e afins, mas só quis mostrar que agora você pode importar o objeto exportado no arquivo `environment.js`.

## Finalizando

Espero que tenha ajudado vocês aí, que tenham conseguido entender o propósito do artigo, os motivos e porquês. Depois dessas alterações nós alteramos o Build da Pipeline de Homologação, adicionando a task de homologação `build:hmg`.

Ficou alguma dúvida? Mandem nos comentários. Precisa de melhorias? Mandem brasa nos comentários também, tamo junto ;)

Beijo na alcatra.

**\[EDITED]**

Atualizei o código do Builder, dando uma simplificada. Valeu, Filipe ;)

**\[/EDITED]**
