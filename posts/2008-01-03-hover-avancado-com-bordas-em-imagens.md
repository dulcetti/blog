---
author: bruno-dulcetti
category: CSS
date: 2008-01-03T17:29:07.000Z
description: ''
image: null
slug: hover-avancado-com-bordas-em-imagens
templateKey: blog-post
title: 'Hover avançado com bordas em imagens'
---

Falae pessoal. Parece até mentira, mas estou aqui novamente, retornando aos meus tutoriais mirabolantes, fascinantes, geniais e extremamente úteis para todos.

O assunto dessa vez é o mesmo que o tutorial anterior, que falei sobre borda interna em imagens com link. Mostrarei um efeito em links, com bordas, em imagens :D

E como não poderia deixar de ser, é um efeito que a equipe aqui da Globo.com pediu pro Vinicius, só que ele veio perguntar pra mim se era possível. E como nada é impossível para Mr. Dulcetti. Lá fui eu implementar o efeito. E como não poderia deixar de ser, funcionou. E o melhor, CROOOOOOOOOOSSBROWSER!!!!! Sensacional, sensacional. :D

## Mas de novo bordas em imagens Bruno?

Sim. De novo. Mas relaxem, é um efeito diferente do que eu fiz para <a href="/resposta-do-desafio-como-cropar-uma-foto-com-css.html">o efeito de borda interna dos sites da Globo.com</a>, e que eu creio que muitos já quiseram fazer e não conseguiram, etc.

É um efeito normal, que poderia ser feito normalmente, como eu mostro na figura abaixo:

<img src="https://www.brunodulcetti.com/artigos/hover-imagens/print-errado.gif" alt="Print do efeito errado" />

Um efeito de hover na imagem, onde existe a troca de cor da borda do link. Sim, cor da borda do link e não da imagem. O IE infelizmente não aceita todos efeitos em elemento dentro do link no hover do próprio. Mas lógico que isso você sabia (assim espero).

## Ta blz Dulcetti. Mas o tutorial é sobre esse efeito ae?

Quase. É o mesmo efeito, mudança de cor na borda do link e talz. Maaaaaas, a diferença é que não existe esta borda duplicada entre as fotos. Percebam que a largura é de 5px para todos os links, mas como ficam um do lado do outro, entre eles ficam o dobro, ou seja, 10px de borda.

<img src="https://www.brunodulcetti.com/artigos/hover-imagens/tamanhos-errados.gif" alt="Print dos tamanhos errados" />

Poréeeeem, o problema é que no hover eu só consigo pintar a borda de um link, fazendo com que continue preta, a borda do próximo link. <a href="http://www.brunodulcetti.com/artigos/hover-imagens/link-errado.html">Veja o exemplo errado</a>.

O problema disso tudo, é que eu não consigo mudar a cor da borda de um link, seja ele próximo ou anterior. Infelizmente não temos essa liberdade. Com isso, tínhamos esse problema e o pessoal não queria isso.

Resumindo, eles queriam o efeito abaixo:

<img src="https://www.brunodulcetti.com/artigos/hover-imagens/print-certo.gif" alt="Print do efeito correto" />

Perceberam que não existe duplicação de borda entre os links? Fazer isso é mole, se não fosse a troca de cor das bordas. Bastava setar borda superior e esquerda na e inferior e direita na - .

Mas como nem tudo são flores né meu povo, lá foi o Dulcetti aqui resolver essa pemba.

Vale ressaltar também, que a borda é colorida no hover, mas a borda preta em cima some, "invadindo" a - de cima.

## Beleza Bruno. Começa logo então...

Ok, ok. Vamos dar início ao efeito. Vamos primeiro ao HTML:

```html
<ul>
  <li>
    <a href="#" title=""><img src="escudo-flamengo.gif" alt="" /></a>
  </li>
  <li>
    <a href="#" title=""><img src="escudo-flamengo.gif" alt="" /></a>
  </li>
  <li>
    <a href="#" title=""><img src="escudo-flamengo.gif" alt="" /></a>
  </li>
  <li>
    <a href="#" title=""><img src="escudo-flamengo.gif" alt="" /></a>
  </li>
  <li>
    <a href="#" title=""><img src="escudo-flamengo.gif" alt="" /></a>
  </li>
  <li>
    <a href="#" title=""><img src="escudo-flamengo.gif" alt="" /></a>
  </li>
  <li>
    <a href="#" title=""><img src="escudo-flamengo.gif" alt="" /></a>
  </li>
  <li>
    <a href="#" title=""><img src="escudo-flamengo.gif" alt="" /></a>
  </li>
</ul>
```

Um código extremamente complicado, difícil de ser entendido, complexo, mas creio que você seja safo para entender sem que o Dulcetti aqui explique ok?

Um bando de - com link dentro, com imagem dentro, dentro de uma . É basicamente isso.

Agora vamos a parte maaaaais complicada, pra variar...

### Implementando o CSS do efeito...

Sim. O CSS é a parte mais chatinha de fazer e ser entendida. Eu sempre acho que é a parte mais tenebrosa para um desenvolvedor web.

Vamos ao código?

```css
img {
  border: 0;
}
ul {
  background-color: #000;
  margin: 0;
  padding: 5px 0 0 5px;
  width: 180px;
}
ul:after {
  clear: both;
  content: '.';
  display: block;
  height: 0;
  visibility: hidden;
}
ul li {
  border-bottom: 5px solid #000;
  border-right: 5px solid #000;
  float: left;
  height: 40px;
  width: 40px;
}
```

Nada de muito complicado:

- Retiramos a borda das imagens, isso porque quando ela recebe link, fica aquela borda azul linda em volta da imagem;
- Depois colocamos o background da lista, zerando sua margem, colocamos um padding de 5px em volta da ul e finalizando com uma largura de 180px;
- Essa técnica do after serve para os browsers, isso exclui o IE. Ela serve para quebrar o float de um elemento dentro do bloco, nesse caso as liâ€™s
- Adicionei borda na base e na lateral direita da li fechando o quadrante, float para ir pra esquerda, altura e largura de 40px;

## Legal Bruno, mas cadê o hover?

Calmae, muita calma nessa hora. Já deu pra ver o início do resultado, do nosso objetivo. Temos já a estrutura toda montada, liâ€™s arrumadas e sem bug.

Agora falta o principal... O hover.

### O tão falado e temido hover...

Como já sabemos, o nosso grande amigo e preferido browser, vulgo IE, não aceita a pseudo-classe :hover.

Okay, ele aceita, mas somente em links. Mas admita fã da Microsoft, esse é um dos maiores pecados do IE. Francamente...

O mais correto era colocar a borda na imagem, como eu tinha dito, mas como citei, o hover no link não deixaria colocar borda na imagem. Portanto, tive que trabalhar em cima do link mesmo.

Mas isso não é problema para Mr. Dulcetti.

#### Dulcetti... Ta bom, anda logo com isso...

Ok. Empolguei-me. Desculpe. Então vamos ao restante do CSS. Pasmem, são apenas mais duas linhas de código:

```css
ul li a,
ul li a img {
  display: block;
}
ul li a:hover {
  border: 5px solid #d2251c;
  margin: -5px 0 0 -5px;
  position: absolute;
}
```

Vamos a explicação:

- A primeira linha é completamente difícil e complicada. Quase ninguém utilizou esta propriedade no CSS. Ela transforma o(s) elemento(s) em bloco(s). No nosso caso, link e imagem dentro do link. Precisamos disso para que a imagem não coloque akela margem automática quando não é bloco e para que o link funcione corretamente no nosso caso;
- Agora a grande sacada. Nessa segunda linha, colocamos uma borda com cor vermelha e 5px de espessura. Damos uma margem negativa superior e a esquerda de 5px e colocamos o link com position absolute

## Legal Bruno. Mas explica melhor...

Seguinte: o link ficando com a borda vermelha de 5px, o que iria acontecer? O link, como bloco e com borda, iria acabar ficando dentro da "borda", que na verdade é o padding preto da , formando uma borda dupla. Sendo que uma preta e a de dentro vermelha.

Não queremos esse efeito. E para conseguirmos isso, colocamos a margem negativa do mesmo valor da borda, ou seja, 5px, fazendo com que o link ficasse colado na .

Mas logicamente que a margem, somente, não era bastante para finalizarmos. No IE fica um samba do crioulo doido, enquanto no Firefox não pintava a borda da esquerda, por causa da borda da - , que é preta.

Para resolvermos isso, colocamos o que? O temido position:absolute. Mas como as nossas - 's já possuem largura e altura, então não temos problema com isso, pq o tamanho ficará fixo, sem ser mexido.

## Resumindo...

É isso. Um efeito simples, porém atrativo e que já recebi algumas dúvidas sobre como fazer e não vi nenhuma resposta, nenhum exemplo de como fazer isso.

E como o código é bem curto, o efeito é simples e rápido, não precisou ficar escrevendo testamentos, etc. Tudo bem que eu poderia fazer outros exemplos, com bugs, etc, mas eu tenho certeza que eu iria terminar só ano que vem e ficaria gigantesco. Então tá bom assim mesmo e está aí. :D

Espero que gostem e que tenha sido útil. Aquele abraço e beijo na alcatra.
