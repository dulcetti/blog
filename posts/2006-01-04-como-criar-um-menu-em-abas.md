---
author: bruno-dulcetti
category: CSS
date: 2006-01-04T15:50:40.000Z
description: ''
image: null
slug: como-criar-um-menu-em-abas
templateKey: blog-post
title: 'Como criar um Menu em abas'
---

Falae pessoal. Aqui estou eu, mostrando mais um artigo, mas agora não no iMasters, por aqui mesmo no Blog. Um tema que muita gente veio me pedindo, tanto por email, quanto no fórum, etc. Vou mostrar aqui como criar um menu, simples de abas. Não há mistério nenhum na criação, estarei comentando cada parte do código, tentando esclarecer bem o css e a estrutura html. Espero que agrade.

Vamos ver uma prévia, uma imagem do resultado final deste artigo, para vocês terem uma idéia e entenderem as explicações, dificuldades e métodos utilizados. Veja o <a href="/menu_abas/menu_pronto.gif">resultado final</a>.

## Dificuldades

A única dificuldade, na minha visão, é a parte da borda superior do conteúdo. Porderia somente colocar uma borda em volta do conteúdo, que estaria resolvido, mas ae acaba ficando estranho, pois o menu ativo, da página atual, ficaria meio que separado do conteúdo. <a href="/menu_abas/dificuldade01.gif">Veja o exemplo</a>. E não é isso que queremos, o objetivo é que não haja divisão entre o menu da seção e o conteúdo, conforme mostrado no <a href="/menu_abas/menu_pronto.gif">resultado final</a>.

## Resolução - Parte 01

Uma resolução que encontrei, foi utilizar uma lista não ordenada e um div #conteudo abaixo dessa lista. Até aí, simples, coisa rápida. Vejamos o código abaixo:

```html
<div id="geral">
<ul class="menu">
<li class="on"><a href="#">Menu 01</a></li>
<li><a href="#">Menu 02</a></li>
<li><a href="#">Menu 03</a></li>

<div id="conteudo">Conteúdo do seu site</div>
</div>
```

Até aqui, tudo bem, temos um código simples e bem compreensivo. <a href="/menu_abas/primeiraParte.html">Vejamos o código online</a>.

Perceberam que utilizei um div geral, englobando todo o cónteúdo. Sempre faço isso, pois para posicionamento do site é melhor, já expliquei isso <a href="http://www.imasters.com.br/artigo.php?cn=3638&cc=280">em outros artigos que escrevi</a> e não perderei tempo explicando novamente. Outra motivo, é porque só dependo desta div para o tamanho do meu objeto. Já expliquei também em outros arqtigos, que quando você não adiciona um valor no width de um elemento, automaticamente ele atribui um tamanho líquido, ou seja, fica do tamanho do seu "pai", que pode ser um div acima, o body, etc... No nosso caso, a lista e o div #conteudo são filhos do #geral, que é filho do body.

Agora vamos cair pro css? Abaixo segue parte do código e abaixo explicarei:

```css
* {
  margin: 0;
  padding: 0;
}
body {
  text-align: center;
  margin-top: 10px;
  padding-top: 10px;
  font: bold 0.65em 'Trebuchet MS', Verdana, Arial, \_sans, times;
}
a {
  font-weight: bold;
  color: #454545;
}
a:hover {
  text-decoration: none;
  color: #666666;
}
#geral {
  margin: auto;
  width: 450px;
}
#conteudo {
  border: 1px solid #9c5e40;
  border-top: 0;
  height: 170px;
  background: #deed92;
  padding: 10px;
  text-align: left;
}
```

Vou explicar cada linha agora:

### `* { margin: 0; padding: 0; }`

-Estou zerando todas as margens e paddings de todos os elementos.

### `body { }`

-No body eu centralizei o posicionamento do texto, para o conteúdo ficar centralizado, divs, etc.
-Coloquei uma margem superior de 10px (O padding é para o opera).
-Configurei uma fonte em negrito, com 0.65 de tamanho na tipografia Trebuchet MS.

### `a { font-weight: bold; color: #454545; }`

-Deixando os links em negrito e com um cinza escuro como cor.

### `a:hover { text-decoration: none; color: #666666; }`

-Tirando o sublinhado e deixado a cor do link com um cinza um pouco mais claro ao passar o mouse em cima do link.

### `#geral { }`

-Deixei o margin auto para que ele herdasse do "pai", que é o body o alinhamento, que está centralizado pelo text-align no body
-Defini um tamanho de 450px de largura para ele

### `#conteudo { }`

- Definido uma borda de 1px sólida em volta do div, para fazer o contorno desejado
- Zerando a borda superior do div
- Definindo uma altura de 170px
- Definindo um verde claro para a cor de fundo do div
- Definindo um padding de 10px
- Deixando o texto alinhado à esquerda

Vejamos agora este <a href="/menu_abas/segundaParte.html">exemplo online</a>.

Já estamos começando a ver o menu, só está faltando as abas, o menu. A utilização desta forma, vocês entenderão completamente mais a frente, quando terminar o código do menu, porque eu arranquei a borda superior, etc. O resto é de fácil compreensão, coisa bem básica, padding, text-align, entre outros atributos que vocês com certeza conhecem ;)

Agora vamos para o css do menu:

```css
ul.menu {
  list-style: none;
  height: 21px;
  background: url(fundoLinha.gif) repeat-x left bottom;
}
ul.menu li {
  float: left;
  width: 104px;
  height: 21px;
  line-height: 21px;
  text-align: center;
  background: url(aba_inativa.gif) no-repeat;
}
ul.menu li.on {
  background: url(aba_ativa.gif) no-repeat;
}
```

Vou explicar cada linha agora:

### `ul.menu { }`

- Limpando o estilo de marcaçao da lista.
- Definindo uma altura de 21px.
- Definindo um background repetindo somente na horizontal, posicionado na esquerda e na base.

### `ul.menu li { }`

- Definindo que ele fique sempre à esquerda.
- Definindo uma largura de 104px.
- Definindo uma altura de 21px.
- Deixando a latura da linha o mesmo tamanho da altura total do li, para que o texto fique centralizado verticalmente.
- Centralizando o texto.
- Definindo a figura da aba como background.

### `ul.menu li.on { }`

- Definindo a figura da aba do menu em on, ativo, como background.

Com isso, temos finalmente o <a href="/menu_abas/menu_abas.html">resultado final</a>.

Vamos agora entender a técnica. Primeiro, temos a imagem das abas, que isso podemos fazer com qualquer programa editor de imagens. Faça o download da <a href="/menu_abas/aba_ativa.gif">aba ativa</a> e da <a href="/menu_abas/aba_inativa.gif">aba inativa</a>.

A aba ativa, é aquela que tem a mesma cor do background do conteúdo, referente ao link da seção atual. Ex: Seção Clientes, aba clientes vai receber a imagem ativa. No nosso exemplo, foi o link Menu01.

O float left para os - 's todo mundo já sabe, é para que um fique do lado do outro, o que quebra o display: block padrão do - .

A grande sacada, o grande lance, está no `<ul class="menu">`, para que fique com a linha pelo conteúdo inteiro. Eu poderia usar um border-bottom com a mesma cor da borda do conteúdo e diminuindo 1px da altura da do tamanho da - . Funciona, <a href="/menu_abas/erro_ie.html">mas não no i.e</a>. O certo é que com o float da - , o não fique preenchido, mas o i.e. aceita como conteúdo block e aumenta a altura do .

Eu poderia utilizar posicionamentos absolutos, colocando um z-index no e no #conteudo, deixando o conteudo com um valor menor que o para que a borda superior do #conteudo não fique por cima do menu. Mas eu sou um grande defensor da não utilização de posicionamentos absolutos, busquei uma solução fácil e simples para isso.

Perceberam que no tem um height certo? Ele existe exatamente para que o #conteudo não fique atrás do menu e ao lado do menu, no caso do i.e. Porque com o float dos - o que vem após acaba invadindo se não possuir uma altura que empurre-o para depois do elemento com o float. Esse valor de altura pode variar, neste exemplo é 21px, pois é o tamanho da imagem de fundo.

Dentro da temos <a href="/menu_abas/fundoLinha.gif">um background</a>, que é somente um ponto 1px por 1px que só se repeta na horizontal. O posicionamento dele fica na base e à esquerda. O posicionamento horizontal do background nesse caso não importa, mas o vertical é importantíssimo, pois se não colocarmos bottom, <a href="/menu_abas/fundoCentralizado.html">ele ficará centralizado</a>, que não é nosso desejo.

Esse background se repete na horizontal, de toda a extensão da e como nem ela e nem o #conteudo receberam valor de largura, ele se repetira até a largura do pai, o #geral, que foi setado 450px, que é o valor que automcatimente é atribuído para eles. E como é um background, todo o conteúdo que estiver no ficará por cima da linha.

Os valores podem variar, este exemplo aqui é apenas o método, vocês podem utilizar qualquer imagem, de qualquer tamanho, mas nunca podem esquecer de atribuir o valor ao elementos correpondentes. Ex: a imagem da aba tem 50px de altura, você tem que atribuir 50px na altura do - e do , e também atribuir ao line-height do - .

Lembrando também que deve atribuir a classe .on para a - da página correspondente para que o link fique ativo.

Vamos rever o <a href="/menu_abas/menu_abas.html">resultado final</a>.

Espero ser de grande utilidade para todos. Qualquer erro, modificações, melhoras, reclamações, sugestões, ceríticas, serão bem vindas ;) Aquele abraço e até a próxima.
