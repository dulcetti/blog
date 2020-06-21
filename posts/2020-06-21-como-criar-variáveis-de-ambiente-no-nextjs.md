---
title: Como criar variáveis de ambiente no Nextjs
description: Variáveis de ambiente no Next.js é bem fácil, mas existem casos com
  staging que precisamos de algo a mais
date: 2020-06-22T10:28:34.000Z
featuredImage: /uploads/environments-nuvens.jpg
photographer: <a
  href="https://unsplash.com/@noaa?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">NOAA</a>
category: JavaScript
---
E lá vamos nós com mais um artigo sobre JavaScript, o primeiro sobre o Next.js. Ainda não tenho tanto contato com ele, mas já temos um primeiro projeto na Wooza utilizando. Um dos pontos que precisávamos era de variáveis de ambiente no Next.js para diferentes ambientes (não me diga, Dulça?). Environments são fáceis de configurar no Next.js, porém, no nosso caso precisávamos de um algo mais. Veremos o que é...

## Mas como que configura variáveis de ambiente no Next.js?

Simples, basta criar os seguintes arquivos:

* env.local
* env.development
* env.production

E dentro deles você coloca as variáveis, por exemplo:

```shell
API_URL=https://fodasse.com
DEFAULT_SCROWBLES=VALOR
```

Claro, esses valores podem ou devem ser diferentes para cada um deles.

## Beleza, Dulcetti, mas qual é o problema então?

Essas variáveis funcionam de boa localmente, durante o desenvolvimento e tudo mais. Porém, na hora do build, por exemplo, podem rolar problemas.

asd

```shell
yarn add -D dotenv cross-env
```

Claro, se usar o `npm` você executa o comando `npm install --save-dev dotenv cross-env`.

```javascript
const fs = require('fs');
const activeEnv = process.env.ACTIVE_ENV === false ? 'development' : process.env.ACTIVE_ENV;

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

const env = {
  API_URL: process.env.API_URL,
  DEFAULT_SCROWBLES: process.env.DEFAULT_SCROWBLES,
};

const createEnvFile = () => {
  return new Promise((resolve, reject) => {
    fs.writeFile('environment.js', `export default ${JSON.stringify(env)}`, 'utf8', (error) => {
      return error ? reject(error) : resolve();
    });
  });
};

module.exports = createEnvFile;

```

asd

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

asd

```javascript
import env from '../../environment';

export const fetchData = async () => {
  const url = `${env.API_URL}/${env.DEFAULT_SCROWBLES}`;
  const result = await fetch(url).then((items) => items.json());

  const dataResult = result.data;

  return { dataResult };
};

```

asd