---
title: O que é e como resolver o Content Security Policy
description: Você conhece a sigla CSP? Veja o que você precisa fazer para deixar
  sua nota melhor nessas regras de segurança
date: 2020-06-10T10:37:18.000Z
featuredImage: /uploads/csp-traffic.jpg
photographer: ''
category: DevOps
---

E ae, meus nobres adoradores de cerveja, código e café. Mais um artigo por aqui no Blog. O primeiro de um assunto que eu tenho tratado na Wooza e tenho curtido bastante, **DevSecOps**. Em si eu nem criei uma categoria somente para ela, aí acabei colocando na categoria DevOps. Falarei aqui sobre o **Content Security Policy**, um cara bem importante e que vejo poucas discussões atualmente.

## Mas o que seria esse Content Security Policy?

Um fodasse sagaz para melhorar a segurança do conteúdo dos sites. Ele evita ataques de Cross Site Scripting (XSS), injeção de dados, bloqueia outros sites de embedarem seus assets, seus arquivos de media, dentre outras diversas coisas.

Ele ainda não está 100% full power modafoca (nossa, séculos que eu não usava esse termo). Alguns atributos ainda não funcionam corretamente nos browsers.

### Esse cara é Cross-browser?

Em si, não, mas a vantagem é que ele dá merda em browsers antigos, as regras são simplesmente ignoradas.

## E como implementar essas diretivas?

![Content Security Pollicy](/uploads/content-security-policy.jpg)

É aparentemente simples, mas confesso que não é tanto assim, fora que pode ter algum stress que vou explicar pelo artigo.

Você precisará de até duas etapas de configuração. A parte do CSP você pode fazer tanto com [meta-tags](https://www.brunodulcetti.com/quais-e-como-utilizar-as-meta-tags-na-sua-pagina/), quanto diretamente no servidor com Headers. Vou mostrar as duas formas. E tem também outras configurações que você precisa setar e que só dá pra fazer com Headers.

Mas claro, serviços como o [Lambda](https://aws.amazon.com/pt/lambda/), da AWS, e o [Netlify](https://www.netlify.com/) fazem essa configuração ficar ridiculamente fácil de fazer.

## Mas primeiro vamos ver as notas...

Talvez você se pergunte: "Mas que caralha de nota é essa?". Relaxa, são notas que seu site recebe dependendo do nível de segurança que ele esteja. Vai de F até A+.

![Nota D+ no Observatory](/uploads/primeira-nota.jpg)

E podemos verificar em dois sites:

- <https://securityheaders.com/>
- <https://observatory.mozilla.org/>

Eu só conhecia o Observatory, mas recentemente eu vi esse Security Headers e gostei bastante. O que me deixa um pouco encucado é que um mesmo site pode ter notas diferentes nos sites. Viram ali em cima que minha nota estava tenebrosa antes de au aplicar as policies, né?

### Lista dos Scores

Existe uma pequena lista de coisas que os dois sites verificam, vamos ver abaixo:

- **Content Security Policy:** nem preciso falar, é o que estamos debatendo nesse artigo
- **Cookies:** verifica o quanto os cookies que seu site gera/possui estão limitados, protegidos de ataques e afins
- **Cross-origin Resource Sharing:** lembra do crossdomain, etc? Ele verifica se o conteúdo está acessível de outros domínios
- **HTTP Public Key Pinning:** é um cara opcional, que você pode bloquear interceptações de credenciais e dados confidenciais
- **HTTP Strict Transport Security:** é um fodasse importante, que avisa os agents do usuário a se conectarem ao site acessado apenas por HTTPS, mesmo se o esquema escolhido for HTTP.
- **Redirection:** verifica se está sendo redirecionando o site para https, mesmo que o usuário tente acessar o site diretamente por http
- **Referrer Policy:** verifica infos que serão passadas com requisições externas
- **Subresource Integrity:** um cara bem útil e simples de se resolver. Você adiciona chaves criptografadas em chamdas de arquivos que veem de uma CDN
- **X-Content-Type-Options:** um cara sagaz que diz que não carregará, por exemplo, scripts e estilos que não estejam com o MIME Type definido corretamente
- **X-Frame-Options:** com esse cara você faz o controle de quem pode embedar seu conteúdo via iframe
- **X-XSS-Protection:** um header que protege de ataques XSS

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
  headers['strict-transport-security'] = [
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=63072000; includeSubdomains; preload',
    },
  ];

  headers['x-content-type-options'] = [
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff',
    },
  ];
  headers['x-frame-options'] = [
    {
      key: 'X-Frame-Options',
      value: 'DENY',
    },
  ];
  headers['x-xss-protection'] = [
    {
      key: 'X-XSS-Protection',
      value: '1; mode=block',
    },
  ];
  headers['referrer-policy'] = [
    {
      key: 'Referrer-Policy',
      value: 'same-origin',
    },
  ];
  headers['set-cookie'] = [
    {
      key: 'Set-Cookie',
      value: 'HttpOnly; Secure; SameSite=Strict',
    },
  ];

  //Return modified response
  callback(null, response);
};
```

![Nota B no Observatory](/uploads/nota-b.jpg)

Somente com esses caras aí já conseguimos pular da nota D pra B no Observatory. Uma bela evolução.

### E no Netlify, #comofas?

Veja abaixo como fazer no Netlify:

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

- **base-uri:** aqui você limita o valor que pode ter na tag HTML `<base>`
- **child-src:** define valores válidos de web workers que são chamados por `<frame>` ou `<iframe>`
- **connect-src:** esse cara é muito importante e parece um pouco complexo para solucionar, mas depois fica tranquilo. Mais abaixo falarei melhor dele, mal e porcamente falando são suas conexões com serviços, APIs, AJAX, etc
- **default-src:** é o cara default que todas as diretivas que possuem o sufixo `-src` recebem caso não tenham setado nada. Quando você o declara, qualquer outra policy receberá o valor atribuído aqui como default
- **font-src:** define de onde virão as fontes
- **form-action:** define as actions dos seus formulários
- **frame-ancestors:** tanto esse quanto o frame-src parecem simples, porém, tem casos onde você precisa tomar cuidados. Explicarei melhor abaixo
- **frame-src:** assim como o anterior, precisa de cuidados, mas seria relacionados a integração de iframes na sua página
- **img-src:** configura todas as imagens do seu site
- **manifest-src:** define o arquivo manifest do seu site
- **media-src:** define as medias embedadas do seu site
- **navigate-to:** nesse cara você pode limitar por onde o usuário pode navegar, seja por formulários, cliques em links ou chamadas por `window.location`. Caso você use o `form-action` junto com o `navigate-to`, o primeiro será priorizado, descartanto o navigate
- **object-src:** raramente você usará esse cara, é para os antigos arquivos de flash
- **plugin-types:** você define o MIME type que quer aceitar nas tags `<object>` e `<embed>`, que em si nem são mais utilizadas. E caso você use applets, é só adicionar o valor `application/x-java-applet`
- **prefetch-src:** é aquela tag `<link>` que faz os prefetchs de arquivos, você define aqui de onde eles podem vir
- **report-to:** aqui você passa um grupo de `Report-To` que você adicionou no header HTTP de resposta. Nunca usei, se precisar é só dar uma olhada na [documentação na W3C](https://w3c.github.io/reporting/)
- **sandbox:** similar ao atributo do iframe, você pode liberar, bloquear algumas coisas, como plugins, popups e afins. Esse cara possui diversos valores pra você utilizar, [veja aqui uma lista deles](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox#Syntax)
- **script-src:** configura os javascripts que serão acessados pela sua página
- **style-src:** define os estilos da sua página
- worker-src: define Workers, SharedWorkers ou service workers válidos

Existem ainda alguns outras policies, mas como não mostrarei exemplos delas, e nem de algumas que eu listei acima, vou deixar pra lá

### E como eu coloco esses valores?

Simples, coloca tudo separado por ponto e vírgula `;`, mesmo se tiver uma ou mais diretivas. Farei um exemplo abaixo:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self';" />
```

Confesso que não achei lá muito amigável, mas vou tentar explicar a sequência correta de atribuição de valores:

1. policy que você quer adicionar, por exemplo, `default-src`, mas sem estar entre aspas
2. depois você coloca o(s) valor(es). Esses valores podem ou não estar entre aspas simples

#### Mas caralha, como assim podem ou não?

Simples, existem valores padrões, comuns que podem ser usadas nas policies, esses caras podem ter OU NÃO (sim, realmente confuso) precisar de aspas simples. Explicarei abaixo, relaxa o fodasse ae.

### Valores comuns para as propriedades no Content Security Policy

Abaixo eu vou listar os valores comuns, ou seja, que podem ser usados em todas (ou quase) as policies.

- **'self'** - como o nome já diz, serve seu próprio site, só aceitará coisas vindo dele
- **'none'** - esse ae bloqueia geral
- **blob:** - prestem atenção que esse cara não tem aspas e possui os dois pontos após a palavra. Esse cara serve para liberar blobs (adoro esse termo)
- **data:** - se você precisar de algo via Base64, precisará adicionar esse caboclo, e assim como o blob, ele não tem aspas e possui os dois pontos logo após a palavra
- **ws:\*** - usado para WebSockets, bem importante prestar atenção nesse cara, principalmente em projetos rodando localmente
- **gap:** - é um scheme especial do iOS, portanto, pode ser necessário que você utilize, até mesmo no `default-src`
- **'unsafe-inline'** - esse cara é restrito para algumas policies somente, como a `style-src` e `script-src`. Com esse cara você libera adicão de códigos inline no seu HTML, tanto de estilos, quanto scripts
- **'unsafe-eval'** - esse é restrito ao `script-src` e libera o uso do `eval`. Falarei mais sobre ele
- **\*** - esse cara já dá para se ter uma ideia, serve para liberar a porra toda. Altamente recomendável a não utilização desse caboclo

### Múltiplos valores

E claro que você pode usar múltiplos valores, senão estaríamos fudidos. E fazer isso é bem simples, segue abaixo:

```erb
<meta
      http-equiv="Content-Security-Policy"
      content="default-src 'none';
               style-src 'self' data: outrosite.com;
               script-src 'self' blob: data: outrosite.com;"
/>
```

Quebrei a linha para ficar melhor visualmente, mas pode manter numa linha só também. Percebam que no `style-src` e `script-src` têm mais de um valor nessas policies, separados por espaços e somente o 'self' que possui aspas.

Vejam também que nesse caso aí eu liberei que estilos e scripts viessem de outro site chamado outrosite.com.

### E o que acontece se eu não passar os valores corretos?

Isso depende. Várias coisas podem acontecer, como por exemplo, um vídeo não abrir, um Google Analytics parar de gravar dados ou até mesmo o site todo parar de funcionar.

## Mas por que diabos então eu tenho que usar essa bosta?

Já ouviram falar da [LGPD](https://www.lgpdbrasil.com.br/)? E da [ISO 27001](https://www.consignet.com.br/lei-geral-protecao-iso-27001/)? Muitas empresas terão que entrar nesse esquema, seus clientes e afins. Já tem um tempo que os clientes da Wooza estão correndo atrás para ter todas essas proteções, cobranças já estão sendo feitas, etc.

Mas óbvio que nem tudo é tão simples assim. Não é só colocar o CSP e os Headers que está tudo ok, claro que não. Você precisa avaliar quais estilos, scripts e afins que serão permitidos, abertos.

Mas o pior disso é o famoso GTM, o Google Tag Manager, que a maioria das pessoas, empresas têm usado.

### Qual o problema do GTM?

![Google Tag Manager](/uploads/google-tag-manager.jpg)

Como você adiciona os scripts por lá, eles serão injetados sem nem que você, desenvolvedor, perceba. E imagina o cenário onde o cliente possui um GTM, a sua empresa outro. Sim, isso mesmo, dois GTM's. E imagina que esse seu cliente possui uma agência de publicidade que cuida de toda a parte de mídia, publicidade e afins.

Olha o quanto que essa relação pode dar merda, pois se a comunicação não estiver ok, quando essa agência subir um fodasse novo lá, não irá funcionar, porque você, desenvolvedor, não adicionou esse cara na whitelist do CSP.

#### Vejamos um exemplo...

Pense no seguinte cenário. Você está com uma Landing Page rolando de boa, com seu Content Security Policy na paz, funcionando certinho.

Agora imagine que seu cliente fará uma campanha fodástica no Jornal Nacional, com isso, essa agência acaba colocando uma nova feature, seja imagem, pixel, vídeo, dentre outros via GTM. E aí essas novas URL's não estão na whitelist dessa Landing Page. O que você acha que acontecerá?

A campanha não vai funcionar corretamente. E quem que o cliente vai reclamar? Com a agência? Óbvio que não, com a empresa onde você trabalha, claro. E quem vai se fuder nessa? Sim, você mesmo, desenvolvedor ordinário que está lendo esse post neste momento.

Para a agência tudo estará ok, pois a campanha foi adicionada corretamente via Sales Force, ou afins, pra depois ser adicionada via GTM. Porém, como a sua empresa não foi avisada, essas novas URL's não estarão na whitelist, como já falei trocentas vezes nesse artigo.

Faço exemplo fugindo do código porque eu tenho certeza que eles acontecerão com a Wooza, empresa onde eu trabalho, e com a empresa de vocês e várias outras.

E para resolver isso é relativamente simples, mas mexe com comunicação, algo que nunca é simples. Portanto, prepare-se, dará merda.

## VOLTEMOS AO CÓDIGO, DULCETTI...

![Laptop quase fechado simulando segurança](/uploads/seguranca-computador.jpg)

Photo by [Philipp Katzenberger](https://unsplash.com/@fantasyflip?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Calma, caralha, não precisa gritar. Vamos ver aqui um lista de possibilidades de valores para as diretivas

- **\*.codepen.io** - abertura de subdomínios
- **api.github.com** - abertura para somente um subdomínio
- **https://disqus.com** - Domínio completo

Isso é bem simples de entender, certo? Talvez o último que pareça meio que "Caralha, mas se eu já defini todos os subdomínios, por que preciso dessa URL completa também?". Concordo, e acho até que poderia ter alguma atualização pra aceitar.

A explicação é que como o https://disqus.com não está num subdomínio, www por exemplo, ele então não é enxergado pela regra \*.disqus.com, portanto, você precisa desse cara também em alguns casos.

## Boas práticas de Content Security Policy

Agora farei uma lista de boas práticas e exemplos de tipos de arquivos que você quiser utilizar. A primeira boa prática é usar valor 'none' para o `default-src`.

Eu uso? Não, que se foda. Mas claro, por enquanto. O valor 'none' te deixa meio estressado, principalmente para a diretiva `prefetch-src`.

### Como assim, estressa?

Pensa no seguinte cenário, você tem o seu site/blog no Gatsby, Next JS, ou qualquer outro. Por boa prática esses caras vão colocar os arquivos estáticos nos prefetchs. O problema é que com o none esses caras não serão enxergados pelos prefetchs, dando erros no console. Explicarei melhor sobre isso mais abaixo.

### `frame-src` e `frame-ancestors`

Esse cara pode ser meio chato de entender às vezes, principalmmente pelo segundo. O primeiro serve para você liberar iframes no seu site que vêm de outros domínios, por exemplo, embedar vídeos do Youtube.

O segundo é o inverso, caso o seu produto precise ser "acessado", embedado via iframe, então você precisa adicionar esse segundo cara. Para um cara como o YouTube, por exemplo, provavelmente precisaria adicionar o \*, pois seus ancestrais, nossos blogs por exemplo, poderão usar o embed.

Esse cara raramente será utilizado e uma boa prática é deixa-lo como `'none'`. Mas preste atenção se o seu produto será usado em outros locais. Por exemplo, na Wooza nós temos várias modais que são abertas pelos sites dos clientes, portanto, para cada modal as URL's desses clientes e parceiros precisam ser adicionadas no `frame-ancestors`.

Como eu uso o YouTube e o Disqus, precisei colocar esses caras. E certamente usarei o CodePen, talvez o Vimeo e Facebook também. Com isso, eu utilizo da seguinte maneira:

```shell
frame-ancestors 'self';
frame-src 'none' https://disqus.com *.youtube.com* .vimeo.com *.codepen.io* .facebook.com;
```

Cada vez que você for usando outras ferramentas, precisará atualizar esse cara, beleza? Assim como o `frame-ancestors`. Meu Blog não serve para ser embedado em lugar nenhum, então eu deixo `'none'` mesmo.

### `base-uri`, `form-action`, `manifest-src`, `media-src` e `object-src`

Resolvi falar desses juntos porque são caras que uso valores defaults, e também porque não uso mais de um valor. Abaixo segue como eu utilizo:

```shell
base-uri 'self';
form-action 'self';
manifest-src 'self';
media-src 'self';
object-src 'none';
```

O `base-uri` e o `manifest-src` eu nem preciso explicar, certo? O `object-src` eu acredito que também não, só deixei bloqueado o carregamento de arquivos falsh e afins.

O `form-action` que talvez você precise trocar, pois está limitado para somente aceitar actions do mesmo domínio. Caso você use algum serviço externo de formulários, precisará adicionar esse domínio aqui.

E o `media-src` você pode ter que adicionar outras URL's também, caso use vídeos ou áudios de outros lugares que não sejam por iframes.

### `font-src`, `img-src`, `script-src` e `style-src`

Esses fodasses são os mais "simples complicados". Simples de entender, mas a parte complicada são os múltiplos valores que você precisa colocar e atualizar, dependendo dos casos.

Abaixo segue como eu coloco no meu blog:

```shell
font-src 'self' data: *.cloudfront.net;
img-src 'self' data: blob: *.google-analytics.com *.viglink.com *.disqus.com *.disquscdn.com ce.lijit.com *.cloudfront.net *.githubusercontent.com;
script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: *.google-analytics.com *.disqus.com *.disquscdn.com *.cloudfront.net;
style-src 'self' 'unsafe-inline' blob: *.disquscdn.com;
```

Vejam que o 'self' está em todos, o que é o básico. Você precisa abrir esses arquivos estáticos a partir do seu domínio, ambiente, etc.

No `font-src` eu tive que colocar o data: e a URL do cloudfront, abirndo para todos os subdomínios. Não sou tão fã de usar o \*., mas em casos como esses é necessário, pois você nunca sabe qual URL que será aberta. Na verdade nem precisaria desse cara, mas para eu conseguir enxergar nos Deploys Previews do Netlify, tive que colocar esse cara.

No `img-src` temos algo parecido com o de fontes, mas ainda tem o blob: e vários domínios. Preciso desses caras porque imagens são adicionadas dinamicamente via Analytics, Disqus, Github e afins. Esse cara certamente precisará ser atualizado algumas vezes, cada vez que você adicionar uma nova integração.

Deixei o `script-src` e `style-src` por último porque eles possuem dois caras que são os mais chatos. O `'unsafe-inline'` e o `'unsafe-eval'` são necessários na maioria dos casos. O `'unsafe-eval'` eu só usei por causa do Netlify CMS, ele usa no admin deles. Em alguns casos você precisará deixar esse cara, pois alguns scripts, bibliotecas antigas, usam o eval.

O `'unsafe-inline'` eu tive que adicionar nos dois porque eu uso o Analytics/GTM, e eles usam código inline. Em si tem forma de você deixar esses códigos num arquivo externo, usando da forma como eles nunca mostram. Mas como o Gatsby usa códigos CSS inline, então eu não vi motivo para remover esses caras.

#### Mas por que não usar esses caras, Dulcetti?

A partir do momento que você os utiliza, sua nota cai bastante no Observatory. No Security Headers também fica um warning, mas a nota não fica tão ferrada assim não.

Caso no seu trabalho você precise estar com nota A no Observatory e você usar o GTM ou Analytics, então estará fudido, pois será impossível. Isso porque ao usar em UMA ÚNICA diretiva, sua nota já cai.

Bom, mas como eu preciso usar, que se foda, caguei pra nota máxima. E como o Gatsby usa CSS inline, não adianta colocar o Analytics num arquivo externo, pois o `'unsafe-inline'` do `style-src`, por causa do Gatsby, deixará minha nota baixa do mesmo jeito, então caguei.

Em si você precisa explicar todos esses fodasses para sua empresa, clientes e afins, já elvis?

### `prefetch-src` e o `connect-src`

```shell
prefetch-src 'self' *.netlify.app https://disqus.com *.disqus.com *.disquscdn.com;
connect-src 'self' 'unsafe-inline' data: gap: ws:* ssl.gstatic.com *.cloudfront.net *.disqus.com *.disquscdn.com *.google-analytics.com api.github.com *.algolia.net *.algolianet.com;
```

Deixei esses dois por último porque são chatinhos de explicar e entender algumas vezes. O `prefetch-src` é mais ou menos parecido como o `script-src` e o `style-src`, serve para os arquivos que você quer pré-carregar. Geralmente usamos os do mesmo domínio, com isso, somente o `'self'` já estaria bom, porém, com os builds de Gatsby e afins, você precisará colocar outros caras, como Disqus, etc. Esse cara tem um ponto chato também que falarei depois.

Em si o `prefetch-src` tem [alguns bugs de funcionalidade no Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=801561), então nem me preocupo tanto assim com ele.

O `connect-src` é importante, pois será para suas conexões com API's, dentre outros. Você tem que tomar bastante cuidado, pois certamente utilizará API's de serviços externos, tendo que colocar as URL's nesse cara. Veja que coloquei cloudfront, disqus, serviços do google e também o Algolia, que uso como busca.

Veja também que tem a parte de WebSockets, serve muitas vezes para quando você está testando localmente com Gatsby ou outro framework. Fora o ap, data, etc.

## Policies que não são permitidas via meta-tag

Sim, existem algumas diretivas com essa limitação, portanto, você precisa setar via Header mesmo. Segue abaixo a lista desses caras:

- sandbox
- report-uri
- frame-ancestors

## Mas como usar o Content Security Policy então? Via Header ou via Meta-tag?

Geralmente é recomendado fazer tudo via Header. Mas você pode usar o CSP via meta-tags e os outros como Headers mesmo. Felizmente o Netlify facilita bastante isso. O Lambda em si nem é tão fácil pra fazer isso, mas facilita um pouco de configurar.

## Bom, e como ficaram os seus Headers CSP, Dulça?

Vou mostrar aqui abaixo, tanto no Netlify, quanto no Lambda. E mostrarei também com as [meta-tags](https://www.brunodulcetti.com/quais-e-como-utilizar-as-meta-tags-na-sua-pagina/). Partiu?

### Adicionando headers de Content Security Policy no Netlify

```shell
/*
  Strict-Transport-Security: max-age=63072000; includeSubdomains; preload
  Content-Security-Policy: default-src 'self' *.disqus.com https://disqus.com *.disquscdn.com *.cloudfront.net; connect-src 'self' 'unsafe-inline' data: gap: ws:* ssl.gstatic.com *.cloudfront.net *.disqus.com *.disquscdn.com *.google-analytics.com api.github.com *.algolia.net *.algolianet.com; font-src 'self' data: *.cloudfront.net; frame-src 'self' https://disqus.com *.youtube.com *.vimeo.com *.codepen.io *.facebook.com; img-src 'self' data: blob: *.google-analytics.com *.viglink.com *.disqus.com *.disquscdn.com ce.lijit.com *.cloudfront.net *.githubusercontent.com; object-src 'none'; prefetch-src 'self' *.netlify.app https://disqus.com *.disqus.com *.disquscdn.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: *.google-analytics.com *.disqus.com *.disquscdn.com *.cloudfront.net; style-src 'self' 'unsafe-inline' blob: *.disquscdn.com;
  Feature-Policy: accelerometer 'none'; ambient-light-sensor 'none'; autoplay 'none'; camera 'none'; encrypted-media 'none'; fullscreen 'self'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; midi 'none'; payment 'none';  picture-in-picture 'none'; speaker 'none'; sync-xhr 'none'; usb 'none'; vr 'none';
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: same-origin
  Set-Cookie: HttpOnly; Secure; SameSite=Strict

```

### Agora vamos ver os Headers no Lambda:

```javascript
'use strict';
exports.handler = (event, context, callback) => {
  // Pega o conteudo do response
  const response = event.Records[0].cf.response;
  const headers = response.headers;

  // Seta os novos headers
  headers['strict-transport-security'] = [{
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubdomains; preload'
  }];

  headers['content-security-policy'] = [{
    key: 'Content-Security-Policy',
    value: "default-src 'self' *.disqus.com https://disqus.com *.disquscdn.com *.cloudfront.net; connect-src 'self' 'unsafe-inline' data: gap: ws:* ssl.gstatic.com *.cloudfront.net *.disqus.com *.disquscdn.com *.google-analytics.com api.github.com *.algolia.net *.algolianet.com; font-src 'self' data: *.cloudfront.net; frame-src 'self' https://disqus.com *.youtube.com *.vimeo.com *.codepen.io *.facebook.com; img-src 'self' data: blob: *.google-analytics.com *.viglink.com *.disqus.com *.disquscdn.com ce.lijit.com *.cloudfront.net *.githubusercontent.com; object-src 'none'; prefetch-src 'self' *.netlify.app https://disqus.com *.disqus.com *.disquscdn.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: *.google-analytics.com *.disqus.com *.disquscdn.com *.cloudfront.net; style-src 'self' 'unsafe-inline' blob: *.disquscdn.com;"
  }];

  headers['feature-policy'] = [{
    key: 'Feature-Policy',
    value: "accelerometer 'none'; ambient-light-sensor 'none'; autoplay 'none'; camera 'none'; encrypted-media 'none'; fullscreen 'self'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; midi 'none'; payment 'none';  picture-in-picture 'none'; speaker 'none'; sync-xhr 'none'; usb 'none'; vr 'none'";
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

  // Retorna o response modificado
  callback(null, response);
};
```

Não esqueçam que além de criar o Lambda, vocês precisam adicionar esse cara no Beahaviors do domínio lá no CloudFront. Adicionem o valor `index.html` como valor no Path Pattern e está tudo certo. Se tiver alguma dúvida é só perguntar nos comentários.

Perceba também que eu adicionei um cara `Feature-Policy`, ele bloqueia qualquer feature HTML5. Em si ele nem afeta no Observatory, mas afeta no Security Headers. Como eu não uso nada da API do HTML5, coloquei esse cara. Verifique o que você necessita e faça ajustes no seu projeto se precisar.

## Agora mostra o seu Content Security Policy com meta-tags, Dulcetti

Agora mesmo, bora ver aqui abaixo com HTML normal:

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self' *.disqus.com https://disqus.com *.disquscdn.com *.cloudfront.net;
    connect-src 'self' 'unsafe-inline' data: gap: ws:* ssl.gstatic.com *.cloudfront.net *.disqus.com *.disquscdn.com *.google-analytics.com api.github.com *.algolia.net *.algolianet.com;
    font-src 'self' data: *.cloudfront.net;
    frame-src 'self' https://disqus.com *.youtube.com *.vimeo.com *.codepen.io *.facebook.com;
    img-src 'self' data: blob: *.google-analytics.com *.viglink.com *.disqus.com *.disquscdn.com ce.lijit.com *.cloudfront.net *.githubusercontent.com;
    object-src 'none';
    prefetch-src 'self' *.netlify.app https://disqus.com *.disqus.com *.disquscdn.com;
    script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: *.google-analytics.com *.disqus.com *.disquscdn.com *.cloudfront.net;
    style-src 'self' 'unsafe-inline' blob: *.disquscdn.com;"
/>
```

E agora com JSX

```jsx
<meta
  httpEquiv="Content-Security-Policy"
  content={`default-src 'self' *.disqus.com https://disqus.com *.disquscdn.com *.cloudfront.net;
    connect-src 'self' 'unsafe-inline' data: gap: ws:* ssl.gstatic.com *.cloudfront.net *.disqus.com *.disquscdn.com *.google-analytics.com api.github.com *.algolia.net *.algolianet.com;
    font-src 'self' data: *.cloudfront.net;
    frame-src 'self' https://disqus.com *.youtube.com *.vimeo.com *.codepen.io *.facebook.com;
    img-src 'self' data: blob: *.google-analytics.com *.viglink.com *.disqus.com *.disquscdn.com ce.lijit.com *.cloudfront.net *.githubusercontent.com;
    object-src 'none';
    prefetch-src 'self' *.netlify.app https://disqus.com *.disqus.com *.disquscdn.com;
    script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: *.google-analytics.com *.disqus.com *.disquscdn.com *.cloudfront.net;
    style-src 'self' 'unsafe-inline' blob: *.disquscdn.com;
  `}
/>
```

## Agora a cerveja no bolo: Subresource Integrity

Esse cara você já deve ter visto em alguns casos, por exemplo na parte de downloads do [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/download/). Veja que na tag ele tem dois atributos:

- integrity
- crossorigin

Mal e porcamente falando, seria uma integridade do código junto à URL, pra só funcionar mesmo se estiver realmente vindo da origem correta. E o crossorigin é pra liberar que sites terceiros usem o caboclo, pra não dar merda de CORS.

Para resolver esse cara no Gatsby é [só instalar esse plugin aqui de SRI](https://github.com/ovhemert/gatsby-plugin-sri). É bem simples de configurar, basta adicionar o código abaixo no arquivo `gatsby-config.js`

```javascript
{
  resolve: 'gatsby-plugin-sri',
  options: {
    hash: 'sha512',
    crossorigin: true,
  },
},
```

Só fique ligado caso esteja usando o Netlify com o recurso **Assets optimization** ligado, pois ele chamará os arquivos vindo da CDN do CloudFront, portanto, outro domínio. Aí acaba quebrando, não funcionando.

Esse cara ajuda a te dar mais cinco pontos na nota do Observatory e conseguir um B+ na nota.

## Finalizando

![Nota B+ no Observatory](/uploads/nota-melhor-observatory.jpg)

Bom, tentei resumir aqui pra vocês, mas percebi que não consegui porque o artigo ficou grande pra meireles. Antes eu estava com uma nota D, agora ficou B+.

![Nota A no Security Headers](/uploads/nota-a-security-headers.jpg)

Mas no Security Headers eu consegui o A, então de boa, já estou deveras satisfeito.

Vimos que é praticamente impossível chegar no A+ quando você utiliza um Gatsby junto com o um Analytics ou GTM. E eu recomendo mesmo olhar sempre os dois caras:

- <https://securityheaders.com/>
- <https://observatory.mozilla.org/>

E claro, dando prioridade pro primeiro. Monte sempre um plano de atuação pra esse cara, principalmente se você possuir muitos produtos. Vá em cada Squad e monte um plano para cada URL que precise atuar.

Sente sempre com os PO's para explicar tudo. Se quiser pode chamar os caras de DevOps, DevSecOps ou Infraestrutura para participar e poder tirar qualquer dúvida.

Não fique neurótico com o A+. Você precisará colocar o `default-src 'none'`, por exemplo, o que pode te ferrar no `prefetch`, mas aí é só escolher certinho e ir atuando aos poucos.

### JÁ CHEGA, DULÇA

Beleza, foi mal. Bom, espero que tenha ficado bem explicado. Tá um pouco cansativo, mas acho que foi importante escrever bastante sobre, tentar o máximo explicado possível.

Só para vocês terem ideia, eu fiz mais de 10 Pull Requests, deploys só pra esse cara chegar no cenário atual. E olha que ainda não é o ideal, 100%, por isso que eu falei da neurose.

O Netlify até me avisou que eu tinah chegado nos 75% de consumo de tempo de build. Terei que ficar ligado nos meus PR's :P

Bom, é isso. O que acharam? Aceito sugestões, críticas e afins ;)

Beijo na alcatra.

### Links úteis:

- <https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Content-Security-Policy>
- <https://w3c.github.io/webappsec-csp/>
- <https://infosec.mozilla.org/guidelines/web_security>
- <https://content-security-policy.com/>
- <https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CSP>
