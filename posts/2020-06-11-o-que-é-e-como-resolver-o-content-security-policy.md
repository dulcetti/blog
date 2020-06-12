---
title: O que e e como resolver o Content Security Policy?
description: Você conhece a sigla CSP? Veja o que você precisa fazer para deixar
  sua nota melhor nessas reras de segurança
date: 2020-06-10T10:37:18.000Z
featuredImage: /uploads/2078029325_aeb938c3f9_b.jpg
photographer: teste
category: DevOps
---
E ae, meus nobres adoradores de cerveja, código e café. Mais um artigo por aqui no Blog, o primeiro de um assunto que eu tenho tratado na Wooza e tenho curtido bastante, DevSecOps. Em si eu nem criei uma categoria somente para ela, aí acabei colocando na categoria DevOps. Falarei aqui sobre o Content Security Policy, um cara bem importante e que vejo poucas discussões por aqui.

## Mas o que seria esse Content Security Policy?

Um fodasse sagaz para melhorar a segurança do conteúdo dos sites. Eles evitam ataques de Cross Site Scripting (XSS), injeção de dados, bloqueia outros sites de embedarem seus assets, seus arquivos de media, dentre outras diversas coisas.

Ele ainda não está 100% full power modafoca (nossa, séculos que eu não usava esse termo). Alguns atributos ainda não funcionam corretamente nos browsers.

### Esse cara é Cross-browser?

Em si, não, mas a vantagem é que ele dá merda em browsers antigos, as regras são simplesmente ignoradas.

## E como implementar essas seguranças?

É aparentemente simples, mas confesso que não é tanto assim, fora que pode ter algum stress que vou explicar pelo artigo.

Você precisará de até duas etapas de configuração. A parte do CSP você pode fazer tanto com meta-tags, quanto diretamente no servidor. Vou mostrar as duas formas. E tem também outras configurações que você precisa setar e que só dá pra fazer no servidor.

Mas claro, serviços como o Lambda, da AWS, e o Netlify fazem essa configuração ficar ridiculamente fácil de fazer.

## Mas primeiro vamos ver as notas...

Talvez você se pergunte: "Mas que caralha de nota é essa?". Relaxa, são notas que seu site recebe dependendo do nível de segurança que ele esteja. Vai de F até A+.

E podemos verificar em dois sites:

* <https://securityheaders.com/>
* <https://observatory.mozilla.org/>

Eu só conhecia o Observatory, mas recentemente eu vi esse Security Headers e gostei bastante. O que me deixa um pouco encucado é que um mesmo site pode ter notas diferentes nos sites. Viram ali em cima que minha nota estava tenebrosa antes de au aplicar as policies, né?

### Lista dos Scores

Existe uma pequena lista de coisas que os dois sites verificam, vamos ver abaixo:

* Content Security Policy: nem preciso falar, é o que estamos debatendo nesse artigo
* Cookies: verifica o quanto os cookies que seu site gera/possui estão limitados, protegidos de ataques e afins
* Cross-origin Resource Sharing: lembra do crossdomain, etc? Ele verifica se o conteúdo está acessível de outros domínios
* HTTP Public Key Pinning: é um cara opcional, que você pode bloquear interceptações de credenciais e dados confidenciais
* HTTP Strict Transport Security: é um fodasse importante, que avisa os agents do usuário a se conectarem ao site acessado apenas por HTTPS, mesmo se o esquema escolhido for HTTP.
* Redirection: verifica se está sendo redirecionando o site para https, mesmo que o usuário tente acessar o site diretamente por http
* Referrer Policy: verifica infos que serão passadas com requisições externas
* Subresource Integrity: um cara bem útil e simples de se resolver. Você adiciona chaves criptografadas em chamdas de arquivos que veem de uma CDN
* X-Content-Type-Options: um cara sagaz que diz que não carregará scripts e estilos que não estejam com o MIME Type definido corretamente
* X-Frame-Options: com esse cara você faz o controle de quem pode embedar seu conteúdo via iframe
* X-XSS-Protection: um header que protege de ataques XSS

Cada um deles possui um peso diferente e reflete de forma diferente na nota. E podemos resolver todos eles em até duas etapas. Vamos fazer esse fodasse?

## Botando a mão na massa, quer dizer, no código...

Primeiro vou mostrar somente a parte dos headers, não mexerei ainda na parte de Content Security Policy. Abaixo temos um código em Node usado no Lambda da AWS. Siga os passos abaixo:

1. Entre no [Console da AWS e ir no Lambda](https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions).
2. Depois clique no botão `Create function`
3. Selecione a opção `Author from scratch`
4. Dê um nome qualquer para sua função
5. Selecione `Node.js 12.x` em Runtime
6. Cole o código abaixo:

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

Somente com esses caras aí já conseguimos pular da nota D pra B. Uma bela evolução. Veja abaixo como fazer no Netlify:

1. Crie um arquivo `_headers` na raiz do seu site. Se for com o Gatsby, coloque na pasta static
2. Adicione as seguintes linhas nele:

```shell
/*
  Strict-Transport-Security: max-age=63072000; includeSubdomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: same-origin
  Set-Cookie: HttpOnly; Secure; SameSite=Strict
```

## Agora vamos voltar para o Content Security Policy realmente

Nesses caras anteriores nós mexemos somente em alguns headers, mas não mexemos no CSP em si. A vantagem é que podemos colocar o CSP via meta-tags. Se você achar dessa forma a mais simples ou não tenha acesso ao Netlify ou Lambda, manda brasa com ele mesmo.

A tag tem a seguinte estrutura:

```
<meta
  http-equiv="Content-Security-Policy"
  content="SUAS POLICIES VEEM AQUI"
/>

```

É uma meta-tag simples, mas só porque está sem o conteúdo ainda. Abaixo vou listar todas as policies que você pode setar:

* base-uri: aqui você limita o valor que pode ter na tag HTML <base>
* connect-src
* default-src: é o cara default. Quando você o declara, qualquer outra policy receberá o valor atribuído aqui como default
* font-src: define de onde virão as fontes
* form-action: define as actions dos seus formulários
* frame-ancestors
* frame-src: 
* img-src: configura todas as imagens do seu site
* manifest-src: define o arquivo manifest do seu site
* media-src: define as medias embedadas do seu site
* object-src: raramente você usará esse cara, é para os antigos arquivos de flash
* prefetch-src: é aquela tag <link> que faz os prefetchs de arquivos, você define aqui de onde eles podem vir
* script-src: configura os javascripts que serão acessados pela sua página
* style-src: define os estilos da sua página

<https://observatory.mozilla.org/analyze/brunodulcetti.com>