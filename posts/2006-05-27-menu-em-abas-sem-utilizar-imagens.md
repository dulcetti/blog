---
category: 'CSS'
date: '2006-05-27'
description: ''
featuredImage: '/assets/images/bgs/css.jpg'
title: 'Menu em Abas sem utilizar imagens'
---

Falae, galera. Estou aqui de novo, mas agora pra mostrar um outro Tutorial/Artigo, de como fazer um menu com abas. Eu <a href="/artigo-menu-em-abas">já tinha postado um tutorial</a>, mas era utilizando imagens e ficava um pouco limitado, pois se aumentasse a fonte, a imagem não iria ficar legal.

Agora estou mostrando um novo modo de se fazer, sem utilizar imagem alguma, somente com código <abbr title="Cascading Style Sheet">css</abbr>. Fica com um resultado bem leve e agradável. A única coisa é que fica quadrado, o que eu não vejo problema nenhum, mas para quem é fã de arredondados, esse tutorial não se encaixa.

Ok, vamos começar:

## Primeiro Passo

Primeiramente eu escolhi um <a href="http://en.wikipedia.org/wiki/Doctype"><abbr title="Document Type Declaration">DOCTYPE</abbr></a>. Escolha o que vocês quiserem, mas eu utilizei o <a href="http://pt.wikipedia.org/wiki/EXtensible_Hypertext_Markup_Language"><abbr title="eXtensible HyperText Markup Language">XHTML</abbr></a> 1.1, mas fiquem livres pelo que gostarem mais.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
```

## Segundo Passo

Eu mostrarei separadamente a criação do html e do css, pois fica mais fácil de explicar cada parte. Primeiramente, mostrarei o html, coisa que eu não preciso explicar muito, pois todos aqui já o conhecem (assim espero :D). Eu só explicarei o que estiver entre as tags `<body>` e `</body>`. Não explicarei também, as tags de fechamento, pois é desnecessário.

<a href="/menu_abas_sem/index_sem.html">Veremos primeiro a página, sem estilos nenhum</a>.

Vamos entender cada parte do codigo:

```html
<div id="geral"></div>
```

Nessa linha, teremos o div pai, que englobará todo o layout, pois fiz com um tamanho de largura fixa para seu conteúdo. Desta maneira, fica mais fácil para fazermos modificações, principalmente em posicionamento do layout.

```html
<div id="menu"></div>
```

Div que conterá o menu, que faremos com uma lista não ordenada, .

```html
<ul>
  <li class="primeira"><a href="#" class="selecionado">Principal</a></li>
  <li><a href="#">Empresa</a></li>
  <li><a href="#">Serviços</a></li>
  <li><a href="#">Portfólio</a></li>
  <li><a href="#">Contato</a></li>
</ul>
```

Nessa parte, está englobada toda a codificação do menu feito em lista e seus respectivos links. Na primeira linha, temos uma classe para o link, a <em>selecionado</em>, que serve para indicar em qual página estamos. Perceba também a classe <em>primeira</em>, dentro do primeiro - , que no <abbr title="Cascading Style Sheet">css</abbr> eu explicarei para que serve.

```html
<div id="conteudo">
  <h1>Título H1</h1>
  <p>Lorem ipsum dolor sit amet, consectetuer ...</p>
  <h2>Título H2</h2>
  <p>Etiam laoreet pulvinar sem. Sed massa enim ...</p>
  <h3>Título H3</h3>
  <p>Quisque convallis fringilla tortor. Duis tortor diam ...</p>
</div>
<div id="rodape">
  Copyright &copy; 2006 - <a href="https://www.brunodulcetti.com/">BrunoDulcetti.com</a>
</div>
```

Aqui, podemos ver que é o conteúdo do site, que contém três títulos, h1, h2 e h3, com seu conteúdo dentro de um parágrafo para cada título. Nenhum mistério.

Acho que agora não preciso explicar mais nada do código, pois é bem básico e de fácil compreensão. O que eu não expliquei, foi como disse acima, são tags de fechamento, metas, etc...

## Beleza Brunão, agora vamos estilizar isso, pq tá feio pra caramba né?

Logicamente. Esse primeiro passo, foi somente para mostrar o código <a href="http://pt.wikipedia.org/wiki/HTML"><abbr title="HyperText Markup Language">HTML</abbr></a> e só irmos jogando o <abbr title="Cascading Style Sheet">css</abbr> aos poucos, para vermos o resultado final.

O <abbr title="Cascading Style Sheet">css</abbr> completo, você pode verificar aqui. Bem pequeno não é verdade?

Agora vamos vendo cada propriedade:

## Estrutura geral do body:

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
```

Neste primeiro bloco, temos a primeira linha, que zera todos os margins e paddings de TODAS as tags dentro da página que contenha esse <abbr title="Cascading Style Sheet">css</abbr> incluído. O asterisco antes de uma propriedade, siginifica todas as tags.

Na segunda chamada, temos a tag body sendo setada. Nela nós temos 4 propriedades declaradas:

- `text-align: center;:` Esta linha declara que o texto ficará centralizado dentro do body.
- `font: 70% "Trebuchet MS", Verdana, Arial, Tahoma;:` Definimos a fonte utilizada e seu tamanho, que nesse caso foi a Trebuchet com um tamanho 70% do tamanho padrão do navegador.
- `background-color: #F1F1F1;:` Definição da cor de fundo do body, que nesse caso, coloquei um cinza bem claro.
- `color: #666666;:` Agora a definição da cor do texto foi definida. Coloquei um cinza escuro como cor padrão do site.

Percebemos que não tivemos problemas nenhum (assim espero), na declaração desse bloc. É bem básico e fácil de implementar e entender.

## Estrutura das tags:

```css
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
}
h3 {
  color: #709afe;
}
```

Aqui temos a estruturação e propriedades de todas as tags usadas no <a href="http://pt.wikipedia.org/wiki/HTML"><abbr title="HyperText Markup Language">HTML</abbr></a> e que eu quis modificar. Nos meus arquivos <abbr title="Cascading Style Sheet">css</abbr> eu estruturo desta forma, pois fica de uma maneira mais organizada, correta, etc.

Veremos abaixo, cada linha desse bloco, com suas respectivas propriedades explicadas:

- `ul { list-style: none; }:` Nesta linha, declaramos que **TODAS** as listas não ordenadas, vulgo :D, não possuirão estilo, que seriam aquelas bolinhas, círculos e quadrados.
- `p { margin-bottom: 10px; }:` Aqui, declaramos que **TODOS** os parágrafos terão 10 pixels de margem na base.
- `h1 { margin-bottom: 5px; color: #69A90A; font-size: 170%; }`: aqui temos a declaração do título H1, que é o título de mais importância do <a href="http://pt.wikipedia.org/wiki/HTML"><abbr title="HyperText Markup Language">HTML</abbr></a>. Nele, declaramos uma margem de 5 pixels na base, uma cor verde para o texto do título e um tamanho de fonte 170% maior do que a declarada no body, que foi de 70%.
- `h2 { margin-bottom: 2px; color: #81C281; font-size: 150%; }`: aqui declaramos as propriedades pro título H2, que é o título de segunda maior importância. Definimos que ele terá uma margem de 2 pixels na base e uma cor verde, um pouco mais clara que a do H1, para o texto do título e o tamanho do texto.
- `h3 { color: #709AFE; font-size: 130%; }:` Declaração das propriedades da tag H3, que também é um título. Esta é a mais simples, configurei somente a cor do texto, para um cor azul e o tamanho do texto.

Neste segundo bloco, configuramos as tags, não importando sua hierarquia. Sempre que declaramos no <abbr title="Cascading Style Sheet">css</abbr> uma propriedade para um seletor, que esteja somente o nome da tag, que dizer que **TODAS** as tags, independentes se estão dentro de um identificador, classe, etc, **TODAS** elas, receberão aquela configuração, a não ser que mais abaixo você declare uma propriedade diferente, que fará com que o <abbr title="Cascading Style Sheet">css</abbr> descarte a anterior e mantenha a mais recente.

## Identificador #geral:

```css
#geral {
  margin: 10px auto;
  width: 750px;
  text-align: left;
}
```

Neste bloco, temos o Identificador #geral, que é o div que engloba todo o layout em si. Dentro dele, coloquei 3 propriedades:

- `margin: 10px auto;:` Definindo uma margem de 10 pixels em todas as direções do div (topo, direita, base e esquerda). E também, temos o auto, que faz com que o div fique no posicionamento relativo ao browser, que nesse caso o body que setou essa propriedade com o text-align igual a center, que quer dizer que o texto ficará centralizado. No i.e. não necessita disso, pois ele reconhece que com apenas o text-align o div fique centralizado, o que é errado, pois o div não é um texto e sim um bloco, por isso a utilização do auto.
- `width: 750px;:` Definindo uma largura para o div, de 750 pixels
- `text-align: left;:` Como o body foi setado um text-align centralizado, todos seus filhos heram essa propriedade, que é caso do #geral, mas como estamos setando aqui um text-align igual a left, é descartado o do body e levado em conta o que têm nessa propriedade desse identificador.

Neste terceiro bloco, nenhum problema, dificuldade não é? Três propriedades, de fácil entendimento. O único problema um pouco mais chato de ser entendido é o margin auto, pro pessoal que tem um conhecimento básico, pode ter dificuldade, mas tentei explicar ali, qualquer dúvida, é só falar.

## Estrutura do Menu:

```css
#menu ul {
  display: table;
  height: 1%;
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
  background-color: #cccccc;
  color: #ffffff;
  font-weight: bold;
}
#menu ul li a.selecionado,
#menu ul li a:hover {
  background-color: #ffffff;
  color: #999999;
  text-decoration: none;
}
```

A parte mais essencial do código e mais "chatinha" de se entender. Falo isso pro pessoal que tá começando, pois creio que quem possui um conhecimento intermediário/avançado, não terá problema algum nesse bloco. Vou dividir em três blocos, um para a parte de lista e li do menu, a segunda, para os links do menu e a terceira para o estado hover do menu. Vamos lá:

## Primeira Parte

- `#menu ul { display: table; height: 1%; }:` Esta propriedade, faz com que a fique com o preenchimento como uma tabela. Precisamos disso, porque os lis vão receber um float, que faz com que seu pai, que neste caso é a , não reconheça sua altura, conteúdo. Você pode substituir isso por uma propriedade height, colocando a altura do , mas eu creio que fique melhor com o display, pois você não precisa se preocupar com altura, caso tenha que modificar futuramente, ou o usuário aumente o tamanho da fonte pelo navegador, isso seria um problema, pois nos browsers decentes, o height seria mantido, independente do seu conteúdo e da forma como está, ele cresce de acordo com o tamanho. Mas como nada é perfeito, nosso amigo i.e. está ae para atraplhar. Ele não renderiza corretamente o display table, por isso, tive que colocar uma "gambiarra para o perfeito funcionamento do mesmo, colocando um height: 1%. Mais um bug do i.e., porque se você não setar nenhum valor de altura, ele não reconhecerá o display table.
- `#menu ul li { float: left; margin: 0 4px; }:` Como padrão, o - recebe um display block, que faz com que fique um embaixo do outro. Por isso, a utilização do float left, que faz com que o - fique grudado à esquerda. Foi setado também, uma margem para as laterais de 4 pixels, para que elas não fiquem uma grudada na outra.
- `#menu ul li.primeira { margin-left: 0; }:` Agora explicarei essa classe, que falei mais acima. Com a utilização da propriedade acima, da margem nas laterais, a primeira - fica mais a direita do canto do conteúdo, <a href="/menu_abas_sem/index_com_margem.html">o que não acho muito legal</a>. Neste classe, zerei a margem esquerda, para que a - que receber esta classe, fique sem margem, que no nosso caso, é a primeira.

Simples essa parte. Nada demais, só destacaria mais mesmo é a parte do display table e a classe sem margem para a primeira - . Partiremos pra próxima.

## Segunda Parte

Lembrando que aqui eu estarei listando as propriedade dentro do seletor <em>#menu ul li a { }</em>.

- `display: block;:` Como eu não quero que o menu fique somente no texto, tenho que colocar um display block, que transforma o link, num bloco.
- `float: left;:` Com a utilização do block como display, o link ficaria um em cima do outro, que não é nosso objetivo. Nós queremos um ao lado do outro e esse trabalho é feito pelo float.
- `padding: 5px 12px;`: Um padding, para o conteúdo dentro do link não ficar colado nos extremos. Aqui, setei 5 pixels para a base e o topo e 12 pixels para as laterais.
- `background-color: #CCCCCC;`: Uma cor cinza claro de fundo para o link.
- `color: #FFFFFF;`: Definindo uma cor branca para o texto do link.
- `font-weight: bold;`: Deixando o texto em negrito.

Nenhum mistério. Só deixamos o link como block e com float, para ele ir pra esquerda. Mas ae você me pergunta: "Mas por que isso Bruno? Não poderia fazer isso no - ?". Sim, claro, poderia fazer sim.

O único problema seria na hora do link, porque ele sem block, fica como inline, ficaria, um do lado do outro, tranquilim, mas signica que SOMENTE o texto, o conteúdo dentro do link, ficaria como link realmente.

E como a pseudo-classe hover só funciona em links, isso no i.e., lógico, não conseguiriamos o efeito correto. Veja um exemplo disso. Dá pra ver o resultado não é? Pelo menos não era o que eu queria nesse tutorial.

Agora vamos para a terceira e última parte.

## Terceira Parte

Lembrando que aqui eu estarei listando as propriedade dentro do seletor `#menu ul li a.selecionado, #menu ul li a:hover { }`.

- `background-color: #FFFFFF;`: Definindo uma cor de fundo branca.
- `color: #999999;`: Definindo um cinza médio para a cor do texto do link.
- `text-decoration: none;`: Retirando a decoração do link, que como padrão fica sublinhado.

A única coisa de diferente nesse exemplo, é a utilização de dois seletores dentro de um bloco de propriedades. Conseguimos isso, separando os seletores por vírgula. E mais por esses seletores, é que precisamos utilizar no link, o display block, float, etc, pois ao passar o mouse, temos mudanças no link, pois fica uma coisa mais organizada, usável, pois percebem que é um link, etc.

## Identificador #conteudo:

```css
#conteudo {
  background-color: #ffffff;
  color: #666666;
  padding: 10px;
}
```

Nesse bloco, temos a configuração da área de conteúdo do site. Coisas bem básicas:

- `background-color: #FFFFFF;:` Definindo cor branca para área, pois o body está com um cinza claro.
- `color: #666666;:` Deixando a cor do texto como cinxa escuro.
- `padding: 10px;:` Definido um padding de 10 pixels em todas as direções, para que o conteúdo não fique grudado nos extremos do div.

Nenhum mistério também, apenas estilizando o conteúdo, para ficar no estilo e organizado.

E finalmente, vamos para a última parte, a do rodapé.

## Estrutura do Rodapé:

```css
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
```

Poucas coisas setadas, código bem curto, pois no rodapé não coloquei nada, além de um pequeno texto. Veremos abaixo:

- `#rodape { text-align: center; padding: 10px; }:` Como o geral recebeu um text-align left, entaum o texto ficaria na esquerda, que não é o que eu queria, então centralizei. Determinei também, um padding de 10 pixels, para não deixar o conteúdo grudado nos extremos.
- `#rodape a { color: #54A4FC; }:` Definindo um azul para a cor dos link que estiverem dentro do rodapé.
- `#rodape a:hover { text-decoration: none; }:` Retirando o sublinhado do link, quando passar o mouse em cima. Isso, logicamente, para os links do rodapé.

## Finalizando...

É um menu bem simples de se fazer, implementar e modificar também. Como disse anteriomente, ele fica quadrado, mas mesmo assim, acho bonito, clean, interessante, sem problema algum.

Bom, galera, é isso, o resultado final pode ser conferido aqui. Qualquer dúvida, correção, melhora, crítica, elogio, é só comentar ae...

Aquele abraço.
