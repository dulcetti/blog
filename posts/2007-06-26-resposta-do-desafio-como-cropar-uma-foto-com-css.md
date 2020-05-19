---
category: 'CSS'
date: '2007-06-26'
description: ''
featuredImage: ''
title: 'Resposta do Desafio: Como "cropar" uma foto com CSS'
---

Como prometido, estou aqui pra postar a "resposta" do "desafio" que [postei ontem aqui](/desafio-como-cropar-uma-foto-com-css.html) no Blog.

Algumas sugestões, soluções, bem próximas da que eu arrumei e achei melhor. Vou tentar explicar detalhadamente porque não utilizei tal solução, porque fiz dessa forma, o que não rola, suporte, etc.

### Sugestões

O juliano postou uma solução com background, mas como eu disse depois, não é possível, pois o conteúdo é dinâmico, portanto, não rola colocar como background.

A do Michael ficou um pouco extensa, com um span como se fosse uma "máscara", mostrando somente a área necessária. Mas como sabemos, o IE não nos ajuda quase nunca :P e não funciona a pseudo-classe :hover, somente em link, mas somente alguns atributos são suportados.

Sobral e Mico citaram o clip, mas como citei acima, o IE não suporta a pseudo-classe e somente alguns atributos são suportados, o que não é o caso do clip, infelizmente. Fora que o clip só funciona em elementos com position absolute ou fixed.

A do Alisson ficou +ou- parecido com a que eu implementei, mas faltaram alguns detalhes, algumas mudanças, para que funcionasse perfeitamente.

### Primeira Solução

Chega de conversa e vamos para a primeira solução. Nessa eu utilizei o clip, como o mico e o sobral citaram, mas como falei, preciso da pseudo-classe :hover funcionando perfeitamente no IE, com isso, tive que utilizar [um arquivo .htc](http://www.xs4all.nl/~peterned/csshover.html), que faz com que o IE aceite o hover em qualquer tag.

#### Código HTML

```html
<div id="fotos">
  <a href="#" title="" class="cropFoto"><img src="thumb.jpg" alt="Foto" /></a>
</div>
```

#### Código CSS

```css
* {
  margin: 0;
  padding: 0;
}
body {
  padding: 20px;
}
ul {
  list-style: none;
}
img {
  border: 0;
}
#fotos {
  width: 186px;
}
#fotos * {
  display: block;
}
#fotos .cropFoto {
  background-color: #e70202;
  height: 116px;
  position: relative;
}
#fotos .cropFoto img {
  position: absolute;
}
#fotos .cropFoto:hover img {
  clip: rect(3px 183px 113px 3px);
}
```

Um código simples e curto. Não vou ficar detalhando coisas desnecessárias, somente o que eu acho relevante para o entendimento para um desenvolvedor intermediário, etc.

O link recebe a classe cropFoto, com a cor de background que eu quero que fique a "borda" em volta da imagem. Recebe o valor de altura igual a altura da imagem e recebe um position relative.

A imagem dentro do link recebe um position absolute, lembram que o clip só funciona em elementos com position absolute e fixed? Por isso que também tive que colocar o position relative dentro do link, para a imagem não se basear de acordo com o body, etc.

[Veja o exemplo funcionando](http://brunodulcetti.com/artigos/cropar_foto/exemplo_clip.html).

Para mais infos sobre position, [visite o artigo que escrevi no imasters](http://www.imasters.com.br/artigo/3606/webstandards/posicionamento_e_layouts/) sobre o assunto.

#### Tá Bruno, mas não funcionou no IE

Exatamente. Graças a ele, precisamos utilizar a gambiarra que falei anteriormente, pra funcionar a pseudo-classe :hover. Percebam que só funciona em link, e estou utilizando em um link, mas mesmo assim não funcionou o clip. Ele só aceita alguns atributos no :hover

É só anexarmos o csshover.htc no html, que funciona no IE. [Baixe o arquivo .htc aqui](http://www.xs4all.nl/~peterned/htc/csshover.htc) e cole o código abaixo entre as tags <head> e </head>:

#### Código HTML

```html
<!--[if IE]>
  <style type="text/css">
    body {
      behavior: url(csshover.htc);
    }
  </style>
<![endif]-->
```

[Veja o exemplo correto
funcionando](http://brunodulcetti.com/artigos/cropar_foto/exemplo_clip_certo.html). ### Legal Bruno,
funcionou direitinho... Exatamente, mas sempre existe um porém. Temos vantagens em utilizar esse
htc, pois teremos hover em todas as tags, mas, como nem tudo é perfeito, temos alguns problemas: -
Esse é um projeto grande, com muito volume de informação, conteúdo, etc. Teremos uma quantidade
considerável de imagens com esse efeito no hover; - Necessita que o servidor tenha o mime type
configurado para ele: **text/x-component** - Ele faz uma busca por :hover em **TODO** o stylesheet
da página. Onde ele achar o :hover, vai adicionar um evento javascript onmouseover para que o
elemento se comporte da forma correta. - O problema é que esse processamento é no cliente e o tempo
que ele leva para fazer isso vai depender do tamanho do CSS, do HTML, além do poder do computador do
cara, ou seja, quanto maior o CSS e HTML, mais tempo para execução o efeito vai levar, e como o
projeto é grande, queremos sempre a melhor forma, otimizar, etc. Por essas e outras, tive que buscar
uma outra opção, modo, de implementar esse efeito, somente por CSS, sem colocar htc, js, nem nada.

### Segunda Solução Eis que surge uma idéia no início, meio bizarra pra utilizar como solução. E não

é que deu certo? :D O código HTML utilizado foi o mesmo do exemplo anterior. Abaixo segue o CSS:

#### Código CSS

```css
\* {
  margin: 0;
  padding: 0;
}
body {
  padding: 20px;
}
ul {
  list-style: none;
}
img {
  border: 0;
}

#fotos {
  width: 186px;
}
#fotos \* {
  display: block;
}
#fotos .cropFoto {
  overflow: hidden;
  height: 116px;
  width: 186px;
}
#fotos .cropFoto:hover {
  border: 3px solid #e70202;
  height: 110px;
  width: 180px;
}
```

[Veja este exemplo funcionando](http://brunodulcetti.com/artigos/cropar_foto/exemplo_quase_certo.html).

#### Legal Bruno... Funcionou só com CSS né?

Então, +ou-. Ainda não está 100%, porque dá um efeito que a imagem se move por causa da borda colocada no link.

É um código bem simples, de fácil entendimento. A imagem o link estão como block, o link está com a largura e altura setada de acordo com o tamanho da imagem. Esse tamanho pode variar, dependendo da imagem, é só modificar no CSS pro tamanho da imagem.

No hover do link, ele diminui 6px de altura e largura e ganha 3px de borda em volta dele, totalizando a mesma largura e altura.

O overflow hidden do link serve pra que mesmo que a imagem seja maior que o link, o que é o caso no estado :hover, ela fique oculta, não quebrando o layout, etc.

#### Entendi Bruno. E como resolvo pra ficar 100%, sem parecer que a imagem se move?

Simples, apenas uma linha de CSS, colocando uma margem pra imagem, no hover do link:

```css
#fotos .cropFoto:hover img {
  margin: -3px 0 0 -3px;
}
```

[Veja o exemplo final funcionando](http://brunodulcetti.com/artigos/cropar_foto/exemplo_certo.html).

Agora sim hein :D Graças a Deus, o IE aceita o atributo margin na pseudo-classe hover do link no CSS. ;)

### Conclusões

Bom, é uma solução simples, tranqüila, mas que nem sempre vem a cabeça facilmente, rápido. Testei no IE 6, IE 7, Firefox, Opera, Firefox Mac, Safari e todos funcionaram perfeitamente, sem nenhuma diferença.

Algumas coisas precisam de alguns detalhes pra funcionar, por exemplo, o display: block no link, na imagem também pra ficar correto, se fosse usar o clip, lembrar do position: absolute, lembrar do overflow: hidden, etc, etc, etc.

Sempre tem essas pequenas coisas que são essenciais saber no CSS, que você pega com a prática.

### Finalizando

Bom, é isso. Qualquer dúvida, correção ou solução melhor, é só comentar que eu posto aqui ;)

Aquele abraço.
