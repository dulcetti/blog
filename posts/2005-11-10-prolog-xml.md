---
author: bruno-dulcetti
category: Webstandards
date: 2005-11-10T18:05:47.000Z
description: ''
image: ''
slug: prolog-xml
templateKey: blog-post
title: 'Prolog XML'
---

Falae pessoal. Tempo que não posto aqui. Meu artigo ainda não foi postado no iMasters, estou só esperando o pessoal lá postar pra comunicar à vocês aqui.

Mas enquanto não sai o artigo, vou postar aqui algo que talvez algumas pessoas desconhecem. Você já ouviu falar do Prolog <acronym title="Extensible Markup Language">XML</acronym>? De repente por nome não né? Mas com certeza você já deve ter visto em códigos de páginas, a linha abaixo:

```xml
<?xml version="1.0" encoding="iso-8859-1">
```

Foi uma alternativa da Microsoft de validar códigos <acronym title="eXtensible HyperText Markup Language">XHTML</acronym> de acordo com a [W3C](http://www.w3.org 'Visitar site da W3C ') e ao mesmo tempo trabalhar em Quirks Mode. Logicamente, para a versão 6 do navegador, já que versões anteriores só trabalham em Quirks Modes, não se preocupando com isso.

"Mas peraí Bruno, Quirks Modes? To entendendo nada..." Calma, eu explico. Existem dois modos de interpretação do código pelos browsers, o Quirks e o Strict.

O modo Strict só funciona com um Doctype correto no código, senão já cai direto pro modo Quirks. Somente o Mozilla interpreta os Boxs Models corretamente sem o Doctype.

"Como? Box Models? Xiiii" Não sabe o que é Box Model também? Bom, box model é uma "técnica", digamos assim, para boxes em css com divs, etc. Um Div é um box por exemplo. E a construção de um box depende bastante do modo de interpretação. Citarei abaixo os 2 exemplos:

## Quirks Mode:

```css
#boxUm {
  width: 300px;
  height: 200px;
  padding: 10px;
  border: 2px solid #000000;
}
```

No modo quirks, o tamanho do box não é influenciado, ou seja, o box ficará com 300px, mas o conteúdo útil do box será diminuído em volta dele (10px no topo, base, esquerda e direita de acordo com o padding e 2px no topo, base, esquerda e direita por causa da borda). Com isso, o box fica com 276px de área útil na largura e com 176px na altura.

Mas isso somente quando não tem o Doctype (exceto o Mozilla), ou o internet explorer v.5 ou o 6 com a adição do prolog <acronym title="Extensible Markup Language">XML</acronym>. Agora veremos no modo Strict.

## Strict Mode:

```css
#boxUm {
  width: 300px;
  height: 200px;
  padding: 10px;
  border: 2px solid #000000;
}
```

Utilizei o mesmo exemplo, mas agora a diferença é que a área útil não é afetada, ela será sempre igual ao valor do width. No nosso caso, como utilizamos 10px de padding e 2px de borda, o tamanho total é igual a soma da área útil(width), + os valores de padding e bordas (300 + 10 + 10 + 2 + 2 = 324). Agora nosso box tem 324px de largura no total. Na altura temos (200 + 10 + 10 + 2 + 2 = 224). Agora nosso box tem 224px de altura no total.

Cabe agora a cada desenvolvedor escolher a melhor opção. Eu utilizava o prolog <acronym title="Extensible Markup Language">XML</acronym> e criava hacks para o i.e. quando necessário. Mas depois de posts do [IE Blog](http://blogs.msdn.com/ie/archive/2005/10/12/480242.aspx 'Visitar Blog I.E. ') convocar os desenvolvedores para limpar os hacks pro ie, para não quebrarem o site no ie7, eu resolvi não utilizar mais, porque com o prolog, trabalho com quirks no ie, então teria que utilizar hacks para o ie ou os outros browsers.

Daí pensei comigo: "Por que que eu vou utilizar um prolog deixando o ie em quirks se eu posso retirá-lo, deixando-o em strict?" Retirei o prolog e agora trabalho sem ele, pensando na frente para não ter problemas com o ie7. O [Alexandre](http://www.google.com/search?hl=en&q=%22Alexandre+Gomes+Gaigalas%22) me refrescou essa idéia, pois eu não sabia a diferença entre eles, depois quando soube que não tem nada demais em utilizá-lo ou não, o retirei logo =D

Têm também os "Conditional Comments", que servem somente para o ie. Você cria uma css para todos os browsers e cria um separadamente para o ie com os atributos que precisariam de hacks no ie e chama pelo Conditional Comments. Exemplo:

```html
<link rel="stylesheet" type="text/css" href="estiloGeral.css" />
<!--[if lt IE 7]>
<link rel="stylesheet" type="text/css" href="estiloIE.css" />
< ![endif]-->
```

Nesse exemplo poderia ser usado tanto o 7, 6 ou 5, por ae vai, até mesmo todos os ie. Nessa condicional, se o navegador for o ie ele reconhece essa linha, enquanto os outros reconhecem essas três linhas como comentário.

Bom, é isso. Apenas mostrando a maneira que eu acho melhor de se fazer os sites. Qualquer dúvidas, é só entrar em contato.

Aquele abraço.
