---
author: bruno-dulcetti
category: Webstandards
date: 2006-10-18T15:26:43.000Z
description: ''
image: null
slug: quais-e-como-utilizar-as-meta-tags-na-sua-pagina
templateKey: blog-post
title: 'Meta Tags. Quais e como utilizar na sua página.'
---

E ae, cambada. Hoje falarei sobre a utilização das meta-tags em sites, blogs, etc. É uma utilização simples, mas que muitas pessoas têm duvidas sobre como proceder, quando utilizar tais metas, entre outras dúvidas.

Tentarei falar sobre algumas das principais metas, pelo menos em minha opinião. Mas claro que vocês podem comentar sobre outras metas tags, outros tipos de funcionamento ou algum erro descrito por aqui.

## O que são essas metas tags?

São parâmetros dentro do html, que foram criados para facilitar a vida dos buscadores web (Google, Yahoo, MSN, etc), incluindo-os nos seus respectivos bancos de dados. Com elas você também pode assinar o site que você criou, fazer redirecionamentos, entre outras coisas.

### Sucesso! Mas como devo utilizá-las?

Mole, mole. Coloque-as entre as tags `<head>` e `</head>` da sua página HTML.

### E quando devo utilizá-las?

Sempre, pelo menos é a minha opinião :D Em todas as páginas devemos colocar as metas tags, tanto páginas principais quanto páginas internas. Sua inclusão auxilia e ajuda na aparição nos buscadores web.

## Hmmm... Legal Bruno, mas poderia explicar melhor?

Claro, claro. Tentarei explicar um pouco melhor sobre as metas tags, cada uma delas, pelo menos as principais que irei explica aqui.

### Explicações Gerais:

A tag meta tem um atributo obrigatório, o content. Este atributo recebe o conteúdo em texto, etc. O seu conteúdo refere-se a outro atributo, que pode ser o name ou o http-equiv, por isso que é a único obrigatório.

Pra entender melhor, dois atributos seriam obrigatórios, o content mais o atributo name ou o atributo http-equiv.

#### Atributos Opcionais

São três os atributos opcionais:

- **http-equiv:** Seus valores podem ser content-type, expires, refresh e set-cookie. Seus valores, geralmente influenciam no conteúdo do site, redirecionamento, etc.
- **name:** author, description, keywords e generator. Seus valores influenciam nos buscadores, informações sobre a construção do site, etc.
- **scheme:** atributo pouco utilizado e pouco comentado. Com ele você definir o tipo de conteúdo inserido no atributo content. Por exemplo, você define:

```html
<meta name="DC.identifier" content="https://www.brunodulcetti.com/" scheme="URL" />
```

Este exemplo eu estou dizendo que o atributo name que recebe **DC.identifier**, recebe o conteúdo como uma URL, definido no atributo scheme e pega o valor do atributo content, que no caso é meu site.

## Agora lá vem as metas tags que utilizam o atributo http-equiv.

As meta-tags que contenham o atributo **http-equiv** são usadas para controles corresponde ntes as chamadas HTTP. Alguns buscadores não diferenciam os valores nos atributos "name" ou "http-equiv".

### `<meta http-equiv="expires" content="Tue, 17 Oct 2006 06:16:00 GMT" />`

Utilizado para informar ao navegador quando a página expirará. Seu uso também pode referir-se ao cache do usuário, por exemplo, se a página expirou, o navegador fará uma nova requisição no servidor, com isso, fazendo um novo "download" da página.

Você pode colocar um valor 0 (zero), que fará com que o navegador **SEMPRE** faça uma nova requisição, ignorando o cache.

Também serve para os buscadores validarem a página, que faz com que os buscadores atualizem o conteúdo do site dentro dos registros do BD dos próprios.

### `<meta http-equiv="content-type" content="text/html; charset=UTF-8" />`

Essa é velha conhecida da galera (pelo menos deveria ;) ). Ela diz qual o conjunto de caracteres será utilizado dentro da página.

A parte do content, temos o tipo de conteúdo da página. No caso acima, citei o html, temos também o **application/xhtml+xml** e o **application/xml**, que significam respectivamente a utilização do xHTML com XML e apenas o XML na página.

No charset, você define a codificação do conteúdo da página. O mais comum é o iso-8859-1, mas temos também o UTF-8 que é bastante utilizado e foi o que eu utilizei no exemplo.

### `<meta http-equiv="refresh" content="3;URL=https://www.brunodulcetti.com/" />`

Alguns desconhecem este recurso, muitas pessoas às vezes querem fazer um refresh na mesma página ou então fazer um redirecionamento para uma nova página. Vemos isso em sites de notícias que são atualizados num pouco espaço de tempo, sites que mudaram o endereço e redirecionam para a url correta, entre outros exemplos.

Isto pode ser feito com apenas uma linha. Primeiro vemos o valor Refresh, que nem preciso explicar o que é isso ;) , depois temos o atributo content, que contém um número, neste caso o número 3, que significa a quantidade de segundos que o site esperará até ser feito o refresh novamente. Depois vemos, dentro do atributo content, um sub-atributo URL, que dirá a página que será chamanda. Pode ser a mesma, caso seja o exemplo da página de notícias, ou uma nova, caso seja a mudança de url do site.

### `<meta http-equiv="content-language" content="pt-br" />`

Conhecida pela maioria dos desenvolvedores também. Esta serve para referenciar a linguagem do conteúdo da página.

Ajuda bastante nos buscadores que possuem diferentes idiomas (como o Google), que vão direcionar a página no idioma que ela se refere. Ajuda também caso o idioma citado tenha acentuação (Nosso Português, por exemplo), corretores ortográficos, etc.

Uma breve listagem de idiomas:

- **pt-br:** Português do Brasil;
- **en:** Inglês
- **es:** Espanhol

Entre muitas outras.

### Concluindo Parte I

Temos outros valores, mas apenas comentei sobre os principais, em minha opinião.

## Agora algumas das metas tags que utilizam o atributo name.

As meta-tags com o atributo **name** são utilizadas para outros tipos de controles que não correspondem às chamadas HTTP.

### `<meta name="description" content="Aqui vem a descrição do seu Site" />`

Essa é velha conhecida da galera também. Aqui você coloca uma breve descrição do seu site. Muitos tentam ser "malandros" e colocam enormes descrições, mas não sabem que os buscadores limitam-se a ler cerca de 200 caracteres, descartando e dificultando o posicionamento de sites com mto conteúdo nessa tag.

### `<meta name="keywords" content="css, artigos, xhtml, php, webstandards" />`

Outra velha conhecida, mas que têm suas limitações que muitos desconhecem. Já vi alguns sites que recomendavam a utilização de várias palavras, enchendo, lotando de "tags". Mas poucos desconhecem que é recomendado apenas a utilização de 3 a 5 palavras, variando de página a página.

Os buscadores reconhecem quando o site utiliza muitos e o considera um "burlador", digamos assim, fazendo com que perca posições.

É bom também colocar diferentes palavras dentro das páginas, mas **TODAS** que sejam referentes ao conteúdo do site, pois o buscador poderá "puni-lo" por tal ação.

### `<meta name="robots" content="index,follow" />`

Esta meta tag é muito importante, porém, alguns não saibam disso. Essa meta tag que irá dizer se seu site ficará visível nos sites de busca ou não.

#### Mas por que eu não iria querer não indexar meu site?

Seu site pode ser, às vezes, em frames :o, ou então é aberto em uma popup, entre outras opções. Não seria legal essa página dentro da popup ou frame, aparecer fora da página "mãe" correto?

Temos a seguinte listagem de valores para o atributo content:

<dl>
	<dt>&raquo; index,follow</dt>
	<dd>Esta opção faz com que a página que contenha esta meta tag e as urls referenciadas nelas, sejam indexadas pelos buscadores.</dd>
	<dt>&raquo; noindex,follow</dt>
	<dd>Com esta, você indexa, somente, as urls referenciadas na página, não indexando ela própria.</dd>
	<dt>&raquo; index,nofollow</dt>
	<dd>O contrário da anterior. Somente a página que contém esta meta tag será indexada, fazendo com que as urls referenciadas nela não sejam indexadas.</dd>
	<dt>&raquo; noindex,nofollow</dt>
	<dd>Não indexa nenhuma das páginas, nem as urls referenciadas e nem ela própria.</dd>
	<dt>&raquo; noarchive</dt>
	<dd>Esta opção faz com que os buscadores não armazenem uma cópia do seu site em cache. Sua utilização requer um pouco de cuidado, pois uma vantagem em não utilizá-la, é que caso seu site fique fora do ar por algum problema, ele ainda continuará sendo indexado, mas caso escolha utilizá-la, automaticamente é retirado. Vemos isso várias vezes no Google, por exemplo, que páginas continuam indexadas e quando clicamos, dá o famoso erro 404.</dd>
</dl>

#### `<strong id="asterisco_noindex_nofollow">`:

Você pode também escolher qual site irá indexar ou não o seu site basta saber o "nome" do bot. Segue um exemplo abaixo do Google.

```html
<meta name="googlebot" content="noindex,nofollow" />
```

Neste caso, somente o Google não indexará o seu site. Mas convenhamos, quem vai querer fazer isto? ;)

Pesquisei sobre a utilização dessa meta tag e ouvi falar que é bom, os buscadores "dão valor" para quem diferencie corretamente as páginas. Por exemplo, na sua página principal, vc quer indexá-la logicamente, mas uma página de contato, por exemplo, não é tão interessante, a página de obrigado desta página de contato, etc.

Os buscadores "enxergam" que você diferencia e sabe utilizar tais recursos e podem melhorar seu posicionamento, etc.

### `<meta name="author" content="Bruno Dulcetti" />`

Nesta referência, você coloca o autor da página criada, no caso você ;) É uma forma de mostrar que você fez o site, etc. Nem todos olham o código-fonte da página, mas nem por isso não devemos levar em conta que não seja válido colocar ;) É bom lembrar também que os buscadores levam em conta os termos que estejam na página, portanto, se seu nome aparece nos 50 sites que você criou, são 50 referências para o seu nome e isso conta para eles.

### `<meta name="generator" content="Notepad" />`

Opcional, geralmente colocado automaticamente pelos programas geradores de código (Dreamweaver, Home Site, Front Page, etc). Não faz nada demais, só mostra qual Software utilizado para a construção da página.

### `<meta name="revisit-after" content="01 days" />`

Não muito utilizada hoje em dia por causa dos spammers nos buscadores, mas era uma tag bem utilizada e considerada importante antigamente.

Você ajusta a quantidade de dias que os buscadores re-visitariam sua página para atualizar os dados contidos nela.

### `<meta name="reply-to" content="seu@email.com" />`

Completamente opcional também. Aqui você adiciona seu e-mail para contato. Mas como o author, só funciona quando vemos o código-fonte da página.

Não recomendo muito sua utilização, pois com esses programas que capturam e-mails para envio de spam, seu e-mail pode acabar ficando mais vulnerável a esses programas.

## Concluindo

Antigamente, a utilização das meta-tags era crucial, os buscadores levavam em conta, principalmente a utilização delas, não tinham muitos critérios, etc.

Hoje em dia, nós sabemos que um código semântico, sendo utilizado corretamente, com boas linkagens para ele, ser "popular" digamos assim, o conteúdo em si, vale muito mais hoje em dia que as meta tags.

A utilização ajuda, não deixem de utilizá-las, mas não pensem que apenas colocando um description e um keywords, você verá seu site em primeiro lugar no Google.

## Finalizando

Bem, é isso. Deixarei aqui, um código com as meta tags que acho importantes na criação de um site. Claro que isso pode variar de site pra site, página pra página, de desenvolvedor pra desenvolvedor e de opinião pra opinião. Estou apenas deixando a minha.

```html
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<meta http-equiv="content-language" content="pt-br" />
<meta name="description" content="Aqui vem a descrição do seu Site" />
<meta name="keywords" content="css, artigos, xhtml, php, webstandards" />
<meta name="robots" content="index,follow" />
<meta name="author" content="Bruno Dulcetti" />
```

Espero que tenha ajudado a alguém aqui com mais esse artigo :D

Aquele abraço ae.
