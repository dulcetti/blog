---
title: O que é e como resolver o Content Security Policy?
description: Você conhece a sigla CSP? Veja o que você precisa fazer para deixar
  sua nota melhor nessas reras de segurança
date: 2020-06-10 10:37:18
featuredImage: /uploads/2078029325_aeb938c3f9_b.jpg
photographer: teste
category: DevOps
---
E ae, meus nobres adoradores de cerveja, código e café. Mais um artigo por aqui no Blog, o primeiro de um assunto que eu tenho tratado na Wooza e tenho curtido bastante, DevSecOps. Em si eu nem criei uma categoria somente para ela, aí acabei colocando na categoria DevOps. Falarei aqui sobre o Content Security Policy, um cara bem importante.

```javascript
'use strict';
exports.handler = (event, context, callback) => {
  // Get contents of response
  const response = event.Records[0].cf.response;
  const headers = response.headers;

  // Set new headers
  headers['strict-transport-security'] = [{
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubdomains; preload'
  }];
  
  headers['x-content-type-options'] = [{
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }];
  headers['x-frame-options'] = [{
    key: 'X-Frame-Options',
    value: 'DENY'
  }];
  headers['x-xss-protection'] = [{
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  }];
  headers['referrer-policy'] = [{
    key: 'Referrer-Policy',
    value: 'same-origin'
  }];
  headers['set-cookie'] = [{
    key: 'Set-Cookie',
    value: 'HttpOnly; Secure; SameSite=Strict'
  }];

  //Return modified response
  callback(null, response);
};

```

<https://observatory.mozilla.org/analyze/brunodulcetti.com>