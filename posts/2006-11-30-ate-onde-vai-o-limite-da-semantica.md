---
category: 'Webstandards'
date: '2006-11-30'
description: ''
featuredImage: ''
title: 'Até onde vai o limite da Semântica?'
---

E ae pessoal. Tempo que não posto sobre web standards, css e afins, que são os temas principais desse Blog. Muitos trabalhos, pouco tempo, meio "sem saco" para escrever (blogueiros são humanos também sabiam?) :P

### Tá blz Bruno, mas isso todos dizem. Vá direto ao ponto...

Ok, ok... Não estou aqui para falar de trabalho, dar desculpas sobre minha falta de tempo e "saco" sobre postagens no blog, etc. Estou aqui para falar de um assunto que tenho certeza que já passou na cabeça de praticamente todos os desenvolvedores web, que trabalham com webstandards.

### Semântica... A velha e temida semântica...

Não falarei sobre semântica web, citarei alguns exemplos para vocês entenderem e depois os casos reais para que vocês entendam porque estou escrevendo este post ok?

#### Beleza então Bruno cite os exemplos.

Todos sabemos que as tags `<hn>` são as tags de título (onde **n** é o número que varia de 1 a 6), sabemos também que a tag `<a>` é para links, `<p>` serve para parágrafos, etc, etc, etc.

Sabemos que temos tags que são display block e display inline correto? Não sabemos? Okay, explicarei um bocado sobre:

#### Display Block

Traduzindo, são blocos. Os elementos blocks adicionam uma quebra de linha antes e depois dele próprio. Seria como se tivesse um `<br />` antes e depois da tag. Podem conter tanto elementos inlines quanto blocks dentro dele.

##### Alguns Exemplos:

- `<p>`
- `<h1>`
- `<div>`

#### Display Inline

Ao contrário do block, os elementos inlines não quebram linha. Podem conter outros elementos inlines dentro dele próprio, mas não é permitida a inserção de elementos do tipo block dentro deles.

##### Alguns Exemplos:

- `<a>`
- `<strong>`
- `<em>`

### Resumindo...

Veremos alguns exemplos da forma correta e da forma não-correta de se utilizar elementos inlines e blocks:

#### Modo correto

```html
<p>
  Aqui vem o <a href="#">meu link com <em>Itálico</em></a>
</p>
```

##### Resultado

Aqui vem o [meu link com _Itálico_](#)

Como no meu css está configurado para os links ficarem em negrito, acabou ficando tudo em negrito onde tem o link ok?

Neste exemplo podemos ver que temos o parágrafo, que é block, e dentro dele temos um link, que é inline, que dentro dele temos um em q dá ênfase ao termo entre esta tag.

Resumindo, temos inline dentro de inline, que estão dentro de um bloco, tudo certinho.

#### Modo incorreto

```html
<a href="#">
  <h1>Aqui vem o título</h1>
  <p>Aqui vem o parágrafo</p>
</a>
```

##### Resultado

Como o resultado irá invalidar o código, podendo deixar uma bagunça, [criei uma página só pra esse exemplo](/artigos/limite_semantica/exemplo_errado.html).

### Agora iremos ao ponto chave desse post.

Vimos que esse segundo exemplo está errado, pois o link, que é um elemento inline, contém elementos blocks (h1 e p). Percebam que MESMO declarando no css o display: block pra link, ele, por padrão na W3C, é inline, portanto é descartado o CSS, ou seja, não é validado pela W3C.

#### Beleza Bruno, mas o que podemos fazer?

Temos uma opção, que seria englobar o h1 e o p dentro de uma div e coloca um link dentro do h1 e outro, com o mesmo href, dentro do p. [Veremos neste exemplo](/artigos/limite_semantica/exemplo_certo_separado.html).

Agora sim, ele ficou validado pela W3C, porém, podemos ver dois pontos, o primeiro é que o link não ficou englobado totalmente na div, somente quando passa em cima do texto e a o segundo ponto é que temos que colocar o link duas vezes, com o mesmo endereço e isso pode aumentar de acordo com os elementos dentro dessa div.

#### Verdade Bruno... Mas não tem nenhuma opção de conseguirmos validando na W3C?

Até temos uma opção, [que criei aqui agora](/artigos/limite_semantica/exemplo_certo_gambiarra.html), mas seria bem do tipo [POG](http://desciclo.pedia.ws/wiki/POG).

Vamos ver o código HTML:

```html
<div>
  <a href="#"> </a>
  <h1>Aqui vem o título</h1>
  <p>Aqui vem o parágrafo</p>
</div>
```

Aqui, nada demais. Uma div com um link, um título e um texto de parágrafo. A única diferença é no link, que está vazio e por cima de todos. Vamos entender, vendo o código CSS:

```css
div {
  width: 140px;
  border: 1px solid #900;
  background-color: #e4e5e5;
  position: relative;
  overflow: hidden;
}
a {
  display: block;
  width: 1000px;
  height: 1000px;
  position: absolute;
  background-color: #e4e5e5;
  filter: alpha(opacity=0);
  opacity: 0;
}
h1,
p {
  font: 12px Verdana;
}
```

Não entrarei em detalhes na lista de propriedades para a div, pois é bem básica. A única coisa diferente é que coloquei um position relative, porque irei usar dentro dela um bloco com position absolute. Coloquei também um overflow hidden, isso quer dizer que se algum conteúdo ultrapassar o tamanho da div, ele ficará oculto, sem atrapalhar em nada o layout da págin e da div.

No título h1 e no parágrafo, só coloquei o tipo e tamanho de fonte, nada demais nisso ok?

Agora que "o bicho pega" :D. No link que a brincadeira começa a ganhar forma e tudo começa a ficar mais fácil de ser entendido.

O link recebe um display block, com isso, vira um bloco. Mas lembram que ele esta acima do link e do parágrafo, pois ele é inline e não pode englobar blocos?

**OBS:** Não importa que você tenha setado no CSS que o link virou bloco, a W3C continuará não validando seu código, pois ela confere com o padrão dos links, e como o `<a>` é um elemento inline como padrão, não validará. ;)

Não se assustem com os 1000px para a largura e a altura do link, pois como a div está com overflow hidden, o link só aparecerá dentro do tamanho disposto na div ;). Na verdade um 100% na altura e largura já funciona, mas no ie 6 não funcionou, aconteceu algum bug, ficando só pela metade, vai entender né... ;)

##### Legal Bruno, mas o título e o parágrafo desceriam...

Sim, mas como temos o position absolute, isso não acontece mais. Ele fica grudado na div e o conteúdo que vem depois dele, fica aparecendo também, o link fica por cima deles.

##### Só isso? Mas tem mais código lá ué!

Sim, eu sei. Na verdade, nosso problema teria sido resolvido, mas não podemos esquecer, temos que nos preocupar com o ie. Somente com aquele código, no ie 6 fica ruim, não funcionando totalmente, com o link somente em algumas partes da div.

Mas isso é resolvido colocando uma cor de background no link, porém, teremos um link por cima de tudo, com uma cor sólida por cima. Ganhamos um problema. Temos um link na div toda, mas como tem uma cor de background, não vemos o conteúdo por trás.

Mas temos soluções (gambiarras?) para tudo. :D Temos uma propriedade no css, a filter, ~~que só funciona no ie~~. Os valores variam dentro dessa propriedade, podemos colocar opacidade, blur, glow, entre outras coisas que não ficarei aqui citando.

No nosso caso, precisamos da opacidade, por isso, coloquei o seguinte valor:

```css
filter: alpha(opacity=0);
```

Nesse caso, alpha modifica a opacidade do elemento, que nesse caso é o nosso link. Setei um valor 0 (zero), que significa que quero totalmente transparente. O valor varia de 0 (transparente) até 100 (totalmente visível).

Mas só resolvemos o problema do ie, conseguimos deixar o link transparente no ie, falta no Firefox também. Mas precisamos só de mais uma propriedade, a opacity, que recebendo 0 (zero), fica totalmente transparente.

##### Ufa. Que saco hein Bruno

Nem me fale isso. É um saco isso tudo, mas conseguimos chegar no [resultado final](/artigos/limite_semantica/exemplo_certo_gambiarra.html).

Lembrando que, esse macete não funciona no Opera. Não tenho Opera aqui instalado, por isso não posso confirmar, mas tenho quase certeza que não funciona, ou seja, não é muito legal utilizá-lo :D.

### Voltaaaaaaaaaando ao foco do Post...

Acabei escrevendo até um pequeno tutorial, mas tudo bem né :D. Acabei saindo do foco do assunto do post.

Mas voltando ao assunto dele, chegamos no ponto crucial. Vimos aqui que temos soluções para esse probleminha mostrado por mim aqui, mas vimos que é meio chato fazer e não muito funcional, pois como eu disse, não é certo de funcionar no Opera.

#### Vale a pena focar a semântica SEMPRE? Ou melhor, vale a pena focar a Validação na W3C?

Esse é o ponto principal do Post. Em relação a semântica, temos dois lados:

- Link englobando o título e o parágrafo como um bloco, ficando invalidado na W3C, pois o título seria um h1 e o parágrafo um p;
- Link englobando um strong e um span, sendo eles o título e o texto do parágrafo do texto, ficando assim, validado, pois é tudo inline.

Na primeira opção, temos um link englobando tudo e o título sendo título e a descrição sendo um parágrafo, tudo correto, mas como o link é inline, não é validado.

Na segunda, temos o link englobando tudo e um strong sendo o título e um span sendo a descrição. Passa no validador, mas no olhar semântico, nem tanto.

É aí que entra a discussão, será que vale MESMO fazer tudo para validar na W3C? Mesmo que para isso você perca a semântica, as vantagens de se utilizar um h1, h2, h3, entre outros? Vale mesmo deixar tudo inline para validar? Será?

Já vi posts sobre isso, como o do [Henrique do Revolução etc](http://www.revolucao.etc.br/archives/validacao-e-semantica/), tem outro do [Tableless](http://www.tableless.com.br/) chamado [Validar é importante?!](http://www.tableless.com.br/validar-e-importante), etc.

#### Eu acho importante validar na W3C Bruno. Por que você não acha?

Não ponha palavras na minha boca (ou seria letras nas minhas teclas?), eu só estou dizendo que existem casos e casos. Você pode muito bem ter um site que ao invés de usar h2, utiliza um `<p class="titulo">`, existe o caso de você esquecer de fechar uma tag, etc, etc, etc.

O caso que citei, foi um caso que está tudo certo, a única coisa "errada" é a utilização do link envolta do título e do parágrafo. Nosso código está semântico, está correto, a não ser pela W3C não permitir links, por serem inline, englobarem blocos.

Como aqui na Globo o pessoal preza a validação na W3C (pelo menos tentar ao máximo), eles utilizam spans e mais spans dentro de links para não ficar errado na W3C.

Eu acho que, neste caso, possa dar uma "esquecida" na W3C e colocarmos o link, não vejo mal algum nisso, está tudo funcionando, tudo certo, só a "bendita" W3C falando que meu código está incorreto. Eu não acho e aí? Como que fica isso? :D

Mas, isso varia de pessoas e pessoas e eu estou aqui para saber a opinião de cada um que lê este blog, para ver se eu estou viajando, se só eu que penso assim, ou tem desenvolvedores que pensam assim, mas nem sempre agem assim por causa dos seus trabalhos ;).

### Resumindo

Na verdade, o que eu acho é que a W3C deveria criar uma nova tag, chamada `<ablock>`, que seria um link também, mas como um bloco, com isso, não precisaríamos nos preocupar com isso não é verdade? Ou melhor, fazer com que consultasse o CSS e visse "se o `<a>` é um bloco, então valido, senão não valido", o que seria melhor ainda, pois não seria necessário a espera de novas versões dos browsers, que por parte do FF, Opera seria tranquilo, mas o ie... aff...

### Finalizando...

E você? O que acha disso? Acha certo "pular a cerca" da validação da W3C nesse caso? Ou você faz parte do grupo "Validação acima de tudo"?

Deixe sua opinião ;)

Aquele abraço.
