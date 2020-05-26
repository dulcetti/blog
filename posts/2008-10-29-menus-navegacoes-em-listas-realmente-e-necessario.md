---
category: 'CSS'
date: '2008-10-29'
description: ''
featuredImage: '/uploads/css.jpg'
title: 'Menus, navegações em listas realmente é necessário?'
---

Estava eu um dia desses, pensando nisso. Esta vendo meu código e parei pra pensar e me perguntei isso. Pensei sobre, pesquisei, vi que sempre falam as mesmas baboseiras, que menus são listas de links, etc, etc, etc.

Tá beleza, menus se tratam de uma listagem de links, pensando por esse lado, tudo bem. Mas será que devemos pensar assim sempre? Eu acho que não e gostaria de saber sua opinião sobre minhas abordagens a seguir.

## Se menus são listas de links, então um layout é uma lista de colunas

Meio bizarro pensar não é? Parece meio idiota, eu sei, mas eu sou meio toupeira, imbecil, entendam isso por favor. Mas pensem comigo: imaginem um post de um blog, como este modafoca aqui mesmo. Nele você possui uma porrada de parágrafos, certo? Escrevo um post, onde detalho algumas coisas e escrevo bastantes ou poucos parágrafos, não importa.

### Mas onde você que chegar Bruno?

E imaginem um layout, onde você possua três colunas, como o [Papo de Bêbado](http://www.papodebebado.com), por exemplo. Se são três colunas, então é uma listagem de três colunas, certo? Igualmente bizarro, mas fluindo nos pensamentos que vejo por ae, essa seria a teoria.

### Tá bom o modafoca, mas onde você quer chegar realmente?

Ok, vamos lá. É meio ridículo ter uma listagem de parágrafos e de colunas, já que parágrafos possuem sua tag prioritária, o <p> e as colunas, apesar de não possuir uma tag específica, colocamos dentro de uma div. Até aí tá tudo certinho.

Mas pensem comigo, os links também já não possuem a sua maldita tag específica? Sim, possui e você sabe disso e ela é a tag <a>.

Com isso, eu lhe pergunto:

> Por que colocar menus numa lista?

### Para ficar mais organizado?

Coloquem dentro de uma <div> que estarão organizados da mesma forma. E você ainda terá menos coisas com que se preocupar, principalmente pensando no modo IE. Temos problemas quando nossos links ficam como blocos dentro de uma lista. Facilmente contornado, sim, eu sei, mas podendo evitar isso, melhor, concorda?

E vira e mexe eu não quero que meus menus fiquei na vertical e com um maldito bullet ao lado, quando eu não possuir CSS habilitado. E principalmente porque não quero eles em blocos quando forem números de um elemento de paginação.

### Mas ae é só você colocar fora de listas quando for paginação

Sim, já pensei nisso, mas e o padrão? Onde fica? É padrão ou é podrão?

Tudo bem que nos menus laterais, os links ficam como bloco e seria interessante eles ficarem numa lista, mas não sei se valeria a pena isso.

## Entendi Dulça. E você já aboliu o uso de menus em listas

Ainda não. Estou estudando esta possibilidade e gostaria de saber a opinião de vocês, se estou viajando e tudo mais. Mas provavelmente eu deixarei de usar sim. A única vantagem que eu vejo, pelo menos quando estava escrevendo esse post modafoca, foi que tendo uma <li> englobando o link, temos mais um elemento para trabalharmos, colocarmos um background, entre outras características. Fora isso, ainda não vejo muita vantagem não.

## Finalizando

Bom, é isso. Espero que, pelo menos, eu tenha encucado um pouco vocês e tenha feito vocês pensarem um pouco nisso. Posso tomar vaias, um esporro, ser xingado. Tem problema não, to aqui pra isso :D Mas queria levantar esse ponto com vocês.

Aquele abraço.
