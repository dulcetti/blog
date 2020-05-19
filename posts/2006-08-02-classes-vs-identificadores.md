---
category: "CSS"
date: "2006-08-02"
description: ""
featuredImage: ""
title: "Classes vs. Identificadores"
---

Falae pessoal...

Esse post vai ser um pouco mais curto dos que eu costumo escrever aqui sobre webstandards, css e afins... Tentarei ser curto e direto, pois o assunto também não engloba tanta complexidade.

Ontem o [Daniel de Paola](http://www.danieldepaola.com "Visitar o site do Daniel") me perguntou a diferença do . e da # no CSS. Ele tá iniciando em webstandards agora, o que acho ótimo, pois é mais um adepto dos padrões... ;) Boa Paola...

O assunto englobado é a utilização de classes e identificadores no CSS e HTML, quais as diferenças entre eles, quando usá-los, etc.

### Simbologia e Identificação

Vamos ver a simbologia das classes e identificadores, tanto no HTML quanto no CSS:

#### Classes

No HTML elas são referenciadas pelo atributo class e no CSS pelo . (ponto). Vamos ao exemplo:

##### CSS

`.centro { text-align: center; }`

##### HTML

`<p class="centro">Texto doparágrafo</p>`

Neste exemplo vimos o ponto(.) antes da palavra centro, ou seja, criei no CSS uma classe chamada centro que deixa o texto do parágrafo centralizado.

No HTML, chamamos a classe centro dentro da tag <p> pelo atributo "class".

Fácil de identificar não é verdade?

#### Identificadores

Os identificadores são os famosos IDs. No HTML, eles são chamados pelo atributo id e dentro do CSS, criamos um identificador com o símbolo # (tralha ou jogo da velha :D). Vamos ao exemplo:

##### CSS

`#menu { width: 700px; height: 100px; }`

##### HTML

`<div id="menu">Aqui virá o Menu do site</div>`

Neste exemplo vimos a tralha(#) antes da palavra menu, ou seja, foi criado no CSS um identificador chamada menu setando uma largura de 700px e altura de 100px.

No HTML, chamamos o identificador menu dentro da tag <div> pelo atributo "id".

Igualmente fácil de identificar não é verdade?

### Diferenças

A diferença entre classes e identificadores é basicamente uma. Identificadores são **ÚNICOS**, ou seja, só podem ser usados somente uma vez em uma página HTML. Já as classes podem ser utilizadas multiplas vezes no mesmo documento.

#### Exemplo:

`<div id="conteudo"> <h1 class="suaClasse">Título</h1> <p class="suaClasse">Texto do conteúdo</p> <p class="suaClasse">Texto do conteúdo</p> <p class="suaClasse">Texto do conteúdo</p> </div>`

Perceberam que dentro do <div> setei o identificador "conteudo" e foi feito somente uma vez no código. Agora a classe "suaClasse" foi setada em 3 parágrafos e um título <h1>. Isso já responde a mostra a grande diferença que vocês podem utilizar a mesma classe várias vezes e para **múltiplos elementos** e não somente o <p> ou o <h1> e assim por diante.

### Boa Brunaum... Mas como eh melhor utilizar cada um?

Isso vai de cada um. Eu utilizo identificadores para os divisores como menu, topo, conteúdo, rodapé e quando rola um javascript que precise pegar o elemento via getElementById.

E as classes eu utilizo, logicamente, em elementos que não necessitam ser únicos. Por exemplo, setar cores, alinhamento, floats, entre outros...

### Cuidados

Pra finalizar, soh pra reforçar o cuidado em utilizar identificadores em múltiplos elementos no HTML e setar no CSS o mesmo nome do identificador. Caso isso seja feito, ele descarta da abertura anterior e sobrescreve com o nova postagem, mantendo o que não foi modificado. Isso tanto para classes quanto para identificadores.

#### Exemplo:

`#menu { width: 700px; height: 100px; background-color: #CCC; } .suaClasse { color: #F00; } #menu { height: 200px; background-color: #999; }`

Nesse exemplo, temos duas setagens para o identificador #menu correto? No CSS, o que vem por último é priorizado, ou seja, a segunda setagem levará vantagem.

Na primeira eu setei largura de 700px de largura, altura de 100px e cor d fundo cinza. No segundo, setei altura de 200px e cor de fundo cinza mais escuro.

Como eu tinha dito, ele sobrescreve o primeiro. Seria como se ele criasse uma terceira setagem e descartasse as outras duas, utilizando o que foi usado na primeira e reutilizado na segunda, mantendo o que não foi mexido na primeira. Veja abaixo: `Aqui setamos a primeira setagem: #menu { width: 700px; height: 100px; background-color: #CCC; } Depois, criamos a segunda setagem, mas sem mexer na largura do identificador: #menu { height: 200px; background-color: #999; } Com isso, seria como se o css apagasse as outras duas e criasse um terceira: #menu { width: 700px; height: 200px; background-color: #999; }`

Deu pra entender? Na primeira setagem temos três propriedades: width, height e background-color. Na segunda temos somente duas: height e background-color. Como a width não foi setada na segunda, ele mantém essa propriedade e as outras duas são descartadas da primeira.

Seria como uma função abaixo: terceira = primeira (não utilizada) + segunda (reutilizada)

Ele pega as propriedades não utilizadas na segunda + as reutilizadas na segunda e "cria" uma terceira. Lembrando que ele não cria, só falei por referência e um melhor entendimento ;).

Lembrando também que no HTML, se você utilizar o mesmo ID mais de uma vez numa página, não é validado pela W3C.

### Finalizando

Bom... Eh isso... Espero que ajude ae a galera... Se ficou algo confuso, eh soh falar ae...

Akele abraço.
