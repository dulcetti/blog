---
category: 'CSS'
date: '2006-09-18'
description: ''
featuredImage: '/uploads/css.jpg'
title: 'Deixando seu menu com uma opção realçada de acordo com a Seção'
---

E ae, galera... Agora estou aqui não para mostrar sites ou vídeos, mas finalmente para o primeiro artigo dentro da nova versão do Blog :D

Estava conversando pelo Gtalk com o [Lucas Ferreira](http://www.lucasferreira.com/) sobre webstandards, javascript, etc, quando ele me perguntou: " - Ae Dulcetti, por que você não cria um tutorial sobre como deixar o menu selecionado? Não é difícil não usa js nem nada."

Ok Lucas, não foi exatamente isso, mas foi por ae ok? :D

## A Idéia

Se vocês [verificarem no meu portfólio](/), viajando pelo menu, verão que cada seção que é aberta, o seu respectivo botão fica selecionado.

Podem ir lá ver, eu espero... :D

Então, para utilizar algo parecido é fácil, você precisaria somente colocar uma classe no link da página referente e está tudo pronto.

Mas se caso você tiver um site grande, que você precisa colocar includes, para caso haja uma modificação, você não precise ficar modificando em cada página? A coisa complica não é verdade?

Por isso estou mostrando esta técnica, para resolver esse probleminha.

## As técnicas utilizadas

Você não precisa de praticamente nada. Nada de javascript, nada de linguagens dinâmicas nem nada disso. Claro que estarei utilizando includes PHP

### Mas então o que eu preciso Bruno?

CSS, somente isso... E HTML logicamente ;)

### Mas como isso Bruno?

Mole mole... E explicarei isso agora ;)

## Mão na massa

Primeiramente eu mostrarei o código, pra em seguida explicar como que foi feito. Lembrando que não explicarei coisas básicas, como tenho feito anteriormente. Caso não saiba algum comando, temos o [W3Schools](http://www.w3schools.com/) que é uma ótima referência.

### Primeira Parte - HTML

Vou mostrar abaixo, o código HTML criado para este exemplo:

```html
<html>
  <?php include 'head.php'; ?>
  <body id="bodyPrimeira">
    <?php include 'menu.php'; ?>
    <div id="geral">
      <div id="conteudo">
        <h1>Título H1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed id ligula. Nunc dapibus,
          purus quis commodo suscipit, felis risus ultricies pede, ut aliquet lacus mi at nibh. Sed
          condimentum. Aliquam in sem. Curabitur ornare, mi eu auctor laoreet.
        </p>
        <h2>Título H2</h2>
        <p>
          Etiam laoreet pulvinar sem. Sed massa enim, vulputate eget, feugiat blandit, sollicitudin
          in, mauris. Fusce vestibulum. Nullam elementum. Etiam erat est, interdum vel, ornare
          ultricies.
        </p>
        <h3>Título H3</h3>
        <p>
          Quisque convallis fringilla tortor. Duis tortor diam, placerat semper, fermentum sed,
          commodo id, magna. Nulla auctor hendrerit ante.
        </p>
      </div>
      <div id="rodape">Copyright & &copy; 2006 - <a href="/">BrunoDulcetti.com</a></div>
    </div>
  </body>
</html>
```

Não reparem mas utilizei um código parecido com o artigo [Menu em Abas sem utilizar imagens](/menu-em-abas-sem-utilizar-imagens). Utilizarei o mesmo código, tanto do CSS quanto do HTML.

#### Vamos entender as partes que interessam?

Vamos sim:

```php
<?php include 'head.php'; ?>
```

Isto é um [include](http://en.wikipedia.org/wiki/Server-side_include). Quem trabalha com web já conhece este termo e já deve saber como utilizá-lo (pelo menos eu espero).

Neste include eu chamo a página head.php, que irá conter o cabeçalho da página, etc.

```php
<?php include 'menu.php'; ?>
```

A mesma coisa que o anterior, só que agora chamará a página menu.php, que
contém o código do menu que veremos mais a frente.

```html
<body id="bodyPrimeira"></body>
```

Aqui está a novidade, o id dentro da tag `<body>`. Muita gente desconhece esta técnica e que é possível, é validado, etc. Ela será primordial para a montagem da técnica e a referência para o menu.

## Segunda Parte - Os Includes

No total temos dois includes, o head.php e o menu.php. Mostrarei os dois, mas falarei somente do segundo, pois o primeiro é apenas um head normal.

### head.php

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <title>Deixando seu menu com uma opção realçada de acordo com a Seção</title>
    <link rel="stylesheet" type="text/css" href="estilo.css" />
  </head>
</html>
```

Não perderei tempo explicando essa parte do código, pois quem já mexe com html sabe muito bem o que
quer dizer cada linha ok?

### menu.php

```html
<div id="menu">
  <ul>
    <li class="primeira"><a href="#" class="menuPrincipal">Principal</a></li>
    <li><a href="#" class="menuEmpresa">Empresa</a></li>
    <li><a href="#" class="menuServicos">Serviços</a></li>
    <li><a href="#" class="menuPortfolio">Portfólio</a></li>
    <li><a href="#" class="menuContato">Contato</a></li>
  </ul>
</div>
```

Uma lista não ordenada, com suas respectivas li's. O que importará nessa parte do código são as classes dos links dentro dos li's: menuPrincipal, menuEmpresa, menuServicos, menuPortfolio e menuContato. No css vocês entenderão melhor o seu funcionamento.

### Terceira Parte - CSS

É no css que vamos fazer o funcionamento do efeito, ele que definirá quando o evento será executado.

```css
* {
  margin: 0;
  padding: 0;
}
body {
  text-align: center;
  font: 70% 'Trebuchet MS', Verdana, Arial, Tahoma;
  background-color: #f1f1f1;
  color: #666666;
}
ul {
  list-style: none;
}
p {
  margin-bottom: 10px;
}
h1 {
  margin-bottom: 5px;
  color: #69a90a;
  font-size: 170%;
}
h2 {
  margin-bottom: 2px;
  color: #81c281;
  font-size: 150%;
}
h3 {
  color: #709afe;
  font-size: 130%;
}

/* ESTRUTURA */
#geral {
  margin: 10px auto;
  width: 750px;
  text-align: left;
}
#conteudo {
  background-color: #fff;
  color: #666;
  padding: 10px;
}
#rodape {
  text-align: center;
  padding: 10px;
}
#rodape a {
  color: #54a4fc;
}
#rodape a:hover {
  text-decoration: none;
}

/* MENU */
#menu ul {
  height: 1%;
  display: table;
}
#menu ul li {
  float: left;
  margin: 0 4px;
}
#menu ul li.primeira {
  margin-left: 0;
}
#menu ul li a {
  display: block;
  float: left;
  padding: 5px 12px;
  background-color: #ccc;
  color: #fff;
  font-weight: bold;
}
#menu ul li a:hover {
  background-color: #fff;
  color: #999;
  text-decoration: none;
}

/* ID BODY */
#bodyPrincipal #menu ul li a.mnuPrincipal,
#bodyEmpresa #menu ul li a.mnuEmpresa,
#bodyServicos #menu ul li a.mnuServicos,
#bodyPortfolio #menu ul li a.mnuPortfolio,
#bodyContato #menu ul li a.mnuContato {
  background-color: #fff;
  color: #999;
  text-decoration: none;
}
```

#### Explique agora Bruno

Bom, explicarei aqui, somente o que não expliquei no artigo do menu sem abas. Se quiser mais explicação de cada parte desse código css, veja o post [Menu em Abas sem utilizar imagens](/menu-em-abas-sem-utilizar-imagens). Lembrando que estou utilizando a mesma estrutura do css e praticamente a mesma no html ;).

A parte que mais nos interessa é o código abaixo:

```css
#bodyPrincipal #menu ul li a.mnuPrincipal,
#bodyEmpresa #menu ul li a.mnuEmpresa,
#bodyServicos #menu ul li a.mnuServicos,
#bodyPortfolio #menu ul li a.mnuPortfolio,
#bodyContato #menu ul li a.mnuContato {
  background-color: #fff;
  color: #999;
  text-decoration: none;
}
```

Neste bloco de código, temos cinco elementos recebendo as três propriedades: background-color: #FFF; color: #999; text-decoration: none;

Se vocês perceberem, as propriedades são as mesmas do hover do link. Preferi colocar separadamente para melhor compreensão de todos. Caso queiram mudar, fiquem à vontade ok? ;)

Vou pegar agora uma delas pra explicar melhor, porque as outras são exatamente a mesma coisa, só modificando os nomes.

##### #bodyPrincipal #menu ul li a.mnuPrincipal

Vamos listar por partes:

- **#bodyPrincipal**: Este é o id que setamos no body da página.
- **#menu ul li**: Aqui estamos referenciando o menu e sua lista não-ordenada e seus respeticos li's.
- **a.mnuPrincipal**: Aqui referenciamos os links dentro do li, que tenham a classe mnuPrincipal.

E isso é expandido quando setamos várias outras citações, como foi o caso. É só colocarmos o id correto no body de cada página, como está sendo feito em todas as páginas deste efeito.

Na parte das classes dos li's é que fará a diferença, como citei anteriormente. Caso não fosse setado nenhjuma classe, ele simplesmente pegaria todos os links de todas as li's e deixariam marcado... É uma união do id do body com a classe do menu... ;)

### Quarta Parte - Resultado Final

[Aqui nós podemos ver o resultado final desta técnica](/menu_realcado). Viaje pelos links no menu, veja que o menu realçado modifica de acordo com a seção selecionada. Perceba também, que o código é o mesmo, a não ser pela mudança do id do body ;).

## Finalizando

Vimos que é bem fácil fazer isso. Aposto que você pensou que fosse mais complicado não é verdade?

Usamos declarações básicas dentro do css e do html, nada de muito avançado. Mas qualquer dúvida, é só postar.

Aquele abraço
