---
category: 'Webstandards'
date: '2008-11-04'
description: ''
featuredImage: '/uploads/webstandards.jpg'
title: 'Tags depreciadas e W3C modafoca'
---

Relaxem. Antes que venham querer me xingar por causa do título e estar dando o título de "modafoca" à "toda poderosa" [W3C](http://www.w3.org/), deixem eu explicar o porquê do título. E fiquem tranquilos, não estou xingando não, é só mais um ponto que tive num relapso raro de pensamento e quis colocar por aqui para vocês me vangloriarem mandarem ir a merda.

## Ok Dulça. Deixa de palhaçada e começa logo.

Então, como vocês sabem, a W3C depreciou algumas tags a partir do XHTML, blá, blá, blá. Não vou detalhar muito não, se vira no [Google](http://www.useaporradogoogle.kit.net).

Ela depreciou, principalmente as tags que usávamos para estilo, como `<font>`, `<center>`, entre outras modafocas. Até ae tá tudo tranquilo, por hoje temos o ultramegapowermodafoca CSS para fazermos isso, graças a Deus W3C.

Porém, tem uma tag que eu vi que foi depreciada e não achei muito sei lá não.

## E qual é essa tag Bruno?

É a antiga tag `<u>`, que deixa o texto dentro dela com um sublinhado. O **u** vem de underline, naturalmente.

Bom, eu li que eles depreciaram essa tag, porque como ficava sublinhado, poderia fazer com que o usuário se confundisse, pensando que fosse um link.

### Ahhhhhh sim... Ok. Então eu nunca mais vou poder colocar sublinhado?

Qualquer um aqui sabe que por CSS eu vou lá e pápum, coloco um text-decoration:underline em qualquer tag e pronto, estamos lá com o maldito texto sublinhado.

## Mas Dulcetti, o `<u>` é tag para estilo

Sim, eu sei. É por isso que entendo a depreciação, mas não entendo essa pseudo-explicação sobre que fica parecido com link. Existem casos que é muito plausível a utilização de texto sublinhados, mas agora coloco um `<span>` com uma classe qualquer e coloco um sublinhado. Dá meio que no mesmo.

Mas ok, entendo que a tag é de estilo. E sei que é diferente em relação com a `<strong>` e a `<em>`, que aparentemente são tags de estilo, mas na verdade são tags pra dar força no conteúdo específico.

## Porra, então do que que você tá reclamando então ow?

Eu? Sei lá. :D

Eu só não gostei mesmo foi dessa parada de "ficar parecido com link", meio forçando a barra. É como o atributo target, que depreciaram, fazendo com que o usuário tenha a preferência de escolher como quer abrir o link da página. Ok, entendo, mas eu vou e faço uma gambiarra por javascript, só pra deixar meu HTML validado.

E ae? Foda-se o usuário? Tem coisas que eu não concordo tanto e essa do target é uma. Entendo essa do usuário escolher, ter liberdade de abrir o link onde quiser. Beleza pura, na paz, concordo tranquilamente, mas cara, depreciar a tag? Eu a deixaria, mas com um texto, falando todo o blá, blá, blá de que não é legal pro usuário e tudo mais.

Deixe-me usar se eu quiser. Tem casos onde é importante e imprescindível a utilização desse atributo, principalmente trabalhando num Portal grande como a Globo.com. Mas não, terei que ficar com meu código não validado por isso ou fazer em javascript, o que acho tosco.

## Finalizando

Ok, foda-se. Se no [post anterior vocês não me xingaram](/menus-navegacoes-em-listas-realmente-e-necessario), nesse vocês vão.

Mas só foi mais um artigo pra mexer um pouco, encucá-los e saber a opinião de vocês. Entendo a atitude da W3C, mas pra mim também tem que ter bom senso da galera de implementação e de design, para não criar algo não muito usável e de difícil entendimento.

Entendo também a postura de "tentar" forçar os desenvolvedores a fazer a coisa certa e que no Transitional o `target="_blank"` é liberado, mas quando vocês trabalharem num lugar meio grande e burocrático, vocês entederão. Só quero mesmo é arrumar polêmica :)

Beijo na alcatra.
