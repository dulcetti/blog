---
photographer: ''
title: Padrões e nomenclaturas no Git
description: Como você cria suas branches? E seus commits? Possui padrões? Veja
  como eu faço...
date: 2020-06-03T07:44:18.000Z
featuredImage: /uploads/git-log.jpg
category: Git
---

E ae, meus nobres "codeiros" adoradores de uma cerveja e/ou café, como estamos? Falarei aqui sobre algumas práticas de padrões e nomenclaturas no Git. Sim, será meu primeiro artigo sobre Git, ferramenta que gosto pra meireles.

## Padrão pra quê? Faz de qualquer jeito e que se foda...

Beleza, vai na fé, portanto, espero nunca ter que trabalhar contigo ou contribuir em algum repositório seu. Brincadeiras à parte, vou mostrar aqui algumas coisas que uso na Wooza, empresa onde eu trabalho e nos meus projetos pessoais.

## Padrões nos nomes de branches

Em termos de **padrões e nomenclaturas no Git**, acho esse ponto importante, mas confesso que não tão primordial assim. Mas acredito que é sempre sagaz ter um padrão de nomenclaturas e um nome explicativo nas branches.

### Os prefixos

![Desenho ilustrando branches no Git](/uploads/branching.png 'Desenho ilustrando branches no Git')

Sim, eu uso prefixos pré-definidos para criar uma branch. Segue abaixo a lista:

- bugfix/
- feature/
- hotfix/
- improvement/

Em si já dá pra saber um pouco sobre cada prefixo, mas vamos com uma breve explicação sobre eles...

#### bugfix/

Como o próprio nome já diz, é um BUG e precisa ser corrigido de forma imediata, o quanto antes. Num outro artigo eu explico melhor a utilização desse cara e _branches principais_.

#### feature/

O nome já diz também o que é, uma nova feature que será adicionada ao projeto, componente e afins.

#### hotfix/

Às vezes esse termo pode ser usado de outras formas, até mesmo para usar no lugar do bugfix. Porém, eu prefiro separar, deixar com semânticas diferentes.

Ele é bem similar ao bugfix/, porém, ele não é um BUG, mas sim uma correção, seja ela de cor, textos, alterações não tão urgentes, que não signifiquem BUG's.

#### improvement/

O nome já mostra para o que serve. Em si é uma melhoria para um fodasse já existente, seja de performance, de escrita, de layout, etc.

## Sagaz, Dulcetti. Só faltou falar dos commits

![Desenho com monitor marca do Git](/uploads/git-monitor.jpg)

Sim, sim. Em termos de padrões e nomenclaturas no Git, acho essa parte essencial. Eu gosto de analisar um PR olhando as mensagens de commit. Se elas forem bem explicativas, já consigo saber o porquê daquele PR.

Bom, claro, em si o PR seria pra isso, com sua descrição, etc. Mas isso pode ficar para mais um artigo futuro ;)

Pros meus commits eu uso o [Commitizen](https://github.com/commitizen/cz-cli). Bom, na verdade eu não uso ele não, mas sigo seus padrões. A grande merda foi que lá na Wooza usamos Windows, e esse cara não funcionou corretamente na minha máquina. Portanto, segui usando os padrões dele na mão mesmo.

### Instalação do commitizen

Só instalar globalmente na sua máquina:

```shell
yarn add global commitizen
```

Feito isso, agora pra usar é só lançar o comando seguinte no terminal:

```shell
git cz
```

Feito isso ele abrirá o painel com seus prefixos para você escolher. Vamos a eles...

### Prefixos do commitizen

![Imagem com os padrões do Commitizen](/uploads/add-commit.png)

Como deu pra ver, temos uma lista com os tipos de commit:

- **feat:** que serve para novas features que você adicionar
- **fix:** o nome já diz, serve para você corrigir algum fodasse lá
- **docs:** mais um fácil, para algo relacionado a documentações, README e afins
- **style:** mexeu no estilo, CSS? Manda brasa então nesse cara
- **refactor:** precisou alterar, melhorar algum fodasse? É esse caboclo aqui
- **perf:** quando você mexer em algo relacionado a performance, fique à vontade em usar esse aqui
- **test:** para testes, ok?
- **chore:** geralmente o mais emblemático. Serve para coisas relacionados a build, configs e afins. Por exemplo, mexeu em algo no package.json? Use esse cara, seja atualizando a versão do pacote ou instalando novas dependências

### E como usa esse commitizen ae no meu projeto?

Fácil, é só colocar esse cara aqui no seu package.json:

```json
"config": {
  "commitizen": {
    "path": "cz-conventional-changelog"
  }
 }
```

Veja o [repositório do Commitizen](https://github.com/commitizen/cz-cli).

## Mas claro, ainda dá pra melhorar usando com o Commitlint

Percebam que eu usei o `cz-conventional-changelog` na configuração. Aí precisamos instalar esses caras aqui dentro do seu projeto:

```shell
yarn add -D @commitlint/cli @commitlint/config-conventional
```

Depois disso você precisa configurar no package.json:

```json
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

### Mas o que esse cara faz?

Exatamente o que você pensou. Ele é um lint de mensagens de commit. Ele é uma melhoria do commitizen, porém, com essa verificação pra ver se a sua mensagem de commit está seguindo os padrões.

Eles também possuem uma lista de padrões de prefixos, segue abaixo:

- **build:** mais específicos para tarefas de build
- **ci:** para algo que você mexa na Integração Contínua dele
- **chore:** já expliquei esse lá em cima
- **docs:** esse também
- **feat:** esse também, caralha
- **fix:** droga, outro que já expliquei
- **perf:** VOU TER QUE REPETIR QUANTAS VEZES QUE JÁ EXPLIQUEI?
- **refactor:** blá, blá, blá...
- **revert:** Finalmente algum para eu explicar. O nome já diz o que é, certo? Caso você precise fazer um revert, manda ver nesse prefixo
- **style:** PENSEI QUE TIVESSE ACABADO
- **test:** pqp, chega...

### Mas Dulcetti, preciso de outros prefixos, como faço?

Não se preocupe, esse camarada possui um arquivo de configuração. Crie um arquivo chamado commitlint.config.js na raiz do seu projeto e coloque o conteúdo abaixo:

```javascript
module.exports = {
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
};
```

Percebam que ele possui um array com todos os padrões dele. Se quiser algum prefixo a mais, adicione lá. E caso queira remover algum, fique à vontade.

Percebam também que existem outras configurações antes da lista de prefixos. Algo como deixar o seu scopo de commit sempre em letra minúscula, o tamanho máximo que o header pode ter em caracteres, deixar o tipo vazio, em letra minúscula, dentre outras coisas. Dá pra fazer muita coisa bacanuda nesse fodasse ae.

Veja o [repositório do Commitlint](https://github.com/conventional-changelog/commitlint).

## Finalizando

Bom, tem mais coisas que eu posso escrever em mensagens de commits e afins, mas preferi deixar esse artigo focado só nesses dois caras. Em breve eu crio outro falando mais sobre branches, como preparo mensagens de commit, sem ser relacionado ao prefixo e afins, criação de Pull Requests, dentre outras coisas.

E ae, o que acharam? Faltou algo? Usam esses caras? Usam alguma outra coisa? Só falar ae.

Beijo na alcatra
