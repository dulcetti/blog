---
category: 'Webstandards'
date: '2006-08-04'
description: ''
featuredImage: ''
title: 'Conditional Comments ou Comentários Condicionais'
---

Falae galera, tranquilidade? Aqui tudo blz como sempre, bastante trabalho, cansado, mas faz parte não é verdade?

Bom, antes de eu comentar sobre o assunto, adianto para vocês que semana que vem entra a nova versão do meu Blog/Portfólio. Modifiquei um bocado de coisa, agora ele é líquido, estou utilizando alguns recursos em ajax, atualizei algumas informações como onde estou morando, que no atual ainda mostra Niterói :D.

Ela já esta pronta, só falta eu modificar algumas coisas no Banco de Dados e adicionar o tema aqui no [Word Press](http://www.wordpress.org).

Falando em [Word Press](http://www.wordpress.org), atualizei ontem para o Word Press 2.0. E digo, ele é bem melhor que o 1.5, vários recursos interessantes, o [Akismet](/tchau-tchau-spammers-by-akismet.html) já vem instalado bastanto somente ativá-lo, entre outras vantagens.

### Chega de conversa Bruno e vamos ao assunto?

Ok, ok, não precisa ficar bravo :D

Hoje falarei sobre os Conditional Comments ou Comentários Condicionais.

Creio que muitos que frequentam esse Blog sabem que a Microsoft está lançando i.e.7 e tem versões betas por ae. A equipe que está participando da produção da nova versão do browser comentou em seu Blog para que os desenvolvedores não utilizassem hacks do tipo:

- html > body
- \* html
- head:first-child + body
- head + body
- body > element

Caso seja feita a utilização de um deles, o site poderá ser mal renderizado no browser, com isso, complicando a vida pro desenvolvedor. Pra variar o ie faz isso, normal... :D

E no Blog, o pessoal da Microsoft aconselhou a utilização dos Conditional Comments ou Comentários Condicionais, que são comentários no código HTML que somente o i.e. reconhece e os outros browsers consideram como um comentário.

### Ah sim... Legal... Não entendi!?

Tranquilo. Com os tipos e exemplos, você entenderá perfeitamente sobre essa técnica. Primeiro vou mostrar abaixo os diferentes tipos de Conditional Comments:

#### » Este serve como como um "Se for IE faça":

```html
<!--[if IE]> <![endif]-->
```

#### » Este serve como como um "Se for superior ao IE 5 faça":

```html
<!--[if gt IE 5]> <![endif]-->
```

#### » Este serve como como um "Se for IE 5 ou superior faça":

```html
<!--[if gte IE 5]> <![endif]-->
```

#### » Este serve como como um "Se for anterior ao IE 5.5 faça":

```html
<!--[if lt IE 5.5]> <![endif]-->
```

#### » Este serve como como um "Se for IE 6 ou anterior faça":

```html
<!--[if lte IE 6]> <![endif]-->
```

A mudança de um para o outro, além das versões dos browsers, são as letras:

- gt: greater than ou **maior que o browser setado**
- gte: greater than or equal to ou **maior ou igual ao browser setado**
- lt: less than ou **menor que o browser setado**
- lte: less than or equal to ou **menor ou igual ao browser setado**

Cole um destes exemplos no Dreamweaver por exemplo. Você verá que ele deixará cinza, como se fosse um comentário, isto por causa do início do código: `<!-- ; e o final do código: -->`

Para os que não conhecem (o que eu acho muito difícil), esse é o modo de se fazer comentário dentro do HTML. Mas a Microsoft implementou essa funcionalidade em seu browser, o i.e.

### Legal Bruno, mas continuo sem entender direito =/

Relaxa, vamos ver agora isso no HTML para que você entenda melhor a utilização. Veja abaixo o código HTML ou então verifique o exemplo online:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <title>Comentários Condicionais</title>
    <style type="text/css">
      body {
        margin: 10px;
        padding: 3px;
        color: #666;
        background-color: #fff;
        font: 75% Verdana;
      }
    </style>
    <!--[if lte IE 6]>
      <style type="text/css">
        body {
          background-color: #000;
          color: #fff;
        }
      </style>
    <![endif]-->
  </head>
  <body>
    Texto de exemplo
  </body>
</html>
```

Não utilizei muitas propriedades no CSS porque estou com preguiça de ficar explicando cada linha ok? :D

Vou comentar cada parte q utilizei, que convenhamos, não tem nada de complicado ;). A única coisa diferente é o comentários condicional mesmo.

Vocês podem perceber que no Internet Explorer 6 ou anterior, o fundo ficou preto e a fonte branca e nos restantes dos browsers o fundo ficou branco e a fonte cinza.

No CSS eu setei para a tag `<body>` que ela tenha 10px d margem em todas as direções, padding de 3px em todas as direções, cor de fundo branco, cor da fonte cinza #666 e fonte verdana com 75% do tamanho padrão do Browser.

#### Blz Bruno, isso eu vi, essa parte eu entendi. Mas e o resto?

Agora comentarei sobre o comentário condicional utilizado: `<!--\[if lte IE 6\]>` que como vimos acima, quer dizer "igual ou anterior ao ie 6".

Com isso, o ie 7 não será afetado com as propriedades setadas dentro dessa condição. Dentro dessa condições eu coloquei a cor de fundo preta e a cor da fonte como branca. Lembrando que, como eu não modifiquei a margin, padding e font, elas continuarão como na primeira setagem, pois na anterior, todos os browsers entendem. É como na utilização dos hacks. ;) Ele só modificará o que você deixar dentro do "setagem" no CSS.

Podemos utilizar qualquer uma das versões que eu citei anteriormente, com a versão do browser que você necessita. **Lembrando que não funciona em versões abaixo do ie 5**.

### Variações na utilização

Vocês devem estar perguntando agora pra mim "Mas Bruno, você está utilizando o CSS incorporado no html!".

Sim, sim, mas pode ficar calmo. Foi só um exemplo para melhor compreensão. Vocês podem colocar a tag `<link>` ou a `<style>` dentro da condição, que funcionará da mesma forma. Veja abaixo o exemplo ou confira online:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <title>Comentários Condicionais</title>
    <link rel="stylesheet" type="text/css" href="normal.css" />
    <!--[if lte IE 6]> <link rel="stylesheet" type="text/css" href="ie.css" /> <![endif]-->
  </head>
  <body>
    Texto de exemplo
  </body>
</html>
```

Neste exemplo, utilizei a tag `<link>` dentro do `<head>` e dentro da condição. Dentro do `<head>` eu chamei o arquivo normal.css, que serve para todos os browsers e temos tb o arquivo ie.css que serve somente para o i.e. e está dentro da condição.

Neste exemplo, ele faz a mesma coisa que o exemplo anterior, mas ao invés do CSS estar incorporado, estou chamando via `<link>`.

### Cuidados

Tenha cuidado na sequência que você coloca os comentários condicionais. Eles **SEMPRE** deverão vir **DEPOIS** da chamada para todos os browsers. Isso faz com que os comentários condicionais sobrescrevam o CSS anterior. Caso eles sejam colocados ANTES, não adiantará nada, pois a tag `<link>` fora do comentário condicional irá sobrescrever.

### E finalizando...

Pra finalizar, queria dizer q os exemplos mostrados aqui são só de exemplo. Naum creio que vocês irão utilizar um site com fundo diferente para internet explorer, etc.

Também não pensem que vocês só podem mudar cores, bordas, etc... Podem mudar o que quiser dentro do CSS, fica por conta de vocês.

Geralmente, os comentários condicionais são utilizados para resolver bugs no i.e. como box models, problemas de margin e padding, entre outros exemplos.

### Um beijo do magro

Bom galera, espero ter ajudado e tirado algumas dúvidas de quem de repente tenha. Espero que tenham gostado.

Esperem por semana que vem... Tchanaaaaaaaaam... uahuahuhahauhau

Aquele abraço.
