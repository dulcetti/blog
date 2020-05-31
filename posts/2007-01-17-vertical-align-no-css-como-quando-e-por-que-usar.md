---
category: 'CSS'
date: '2007-01-17'
description: ''
featuredImage: '/uploads/css.jpg'
title: 'Vertical-align no CSS. Como, quando e por que usar'
---

E ae galera. Estou aqui de volta, novamente, depois de uma sumida (pra variar não é verdade? :P). Mas eu juro que tentarei voltar com mais frequência, postar mais colírios, vídeos do Videolog, etc.

## Que bom Bruno. Mas algo em especial ou só veio pra falar que está sumido?

Não, não. Estou aqui para postar um artigo sobre uma propriedade CSS, o vertical-align, que vejo por ae que muita gente têm duvida na sua utilização, aplicação.

Muitos desenvolvedores confundem e comparam com o atributo valign que é colocado dentro da tag <td> no HTML. Realmente é semelhante, o nome mesmo indica isso, mas as funcionalidades e aplicações são diferentes, quando não aplicada em células de tabelas.

## Legal, Bruno. Então mostra ae. Quais as diferenças?

Primeiramente, a propriedade vertical-align não é para ser aplicada em blocos e sim em elementos inline. A não ser que apliquemos em células de uma tabela, como estávamos acostumados.

Vamos ver um exemplo de como os iniciantes utilizam a propriedade:

### Código HTML:

```html
<div id="box">Meu texto bem aqui.</div>
```

### Código CSS:

```css
#box {
  background-color: #f5f4f4;
  border: 2px solid #ccc;
  height: 200px;
  padding: 5px;
  **vertical-align: middle;
  **width: 400px;
}
```

Podemos ver o resultado desse exemplo aqui.

Não vou explicar detalhadamente o que foi utilizado, pois é bem básico. A única coisa diferente usada foi o vertical-align mesmo.

Como podemos ver, o resultado não foi satisfatório. O texto continuou no topo da div. Com isso, já podemos ver que confirma como eu disse acima, que a propriedade não funciona em blocos. ;)

## Certo Bruno. Mas como resolver isso então? (Parte 1 – line-height)

Temos algumas variedades de resolver tal problema. A primeira seria a utilização da propriedade line-height com o mesmo valor da propriedade height. Veremos abaixo:

```css
#box {
  background-color: #f5f4f4;
  border: 2px solid #ccc;
  **height: 200px;
  line-height: 200px;
  **padding: 5px;
  width: 400px;
}
```

Podemos ver o resultado desse exemplo aqui.

### Restrições e problemas.

Como sempre, temos restrições nesse exemplo. Na verdade temos em tudo não é verdade?

- Altura variável dentro do bloco;
- Mais de uma linha dentro do bloco;

Vamos às explicações:

#### Altura variável dentro do bloco.

Se tivermos um site dinâmico, onde a altura do elemento pode variar, teremos problemas, pois se o line-height for diferente do height, o texto não ficará centralizado.

#### Mais de uma linha dentro do bloco.

Bem grave esse problema, pois se tivermos mais de uma linha, a distância entre essas linhas ficará absurda, pois será sempre o valor do line-height, portanto, se tivermos três linhas de texto, por exemplo, teremos, no exemplo acima citado, uma altura de três vezes o line-height, pois temos três linhas e 200px de line-height, com isso, 3x200px.

Veja o exemplo aqui.

## Certo Bruno. Mas como resolver isso então? (Parte 2 – display: table-cell)

Lembram de eu ter dito que dentro de uma <td> e com o atributo valign fica tranquilo?

Então tudo funcionaria se eu colocasse um display: table-cell certo? Quase. Graças ao nosso querido e amado internet explorer, não. E ainda por cima, nem no internet explorer 7 funciona. Pelo menos aqui não funcionou.

Vamos ao exemplo:

```css
#box {
  background-color: #f5f4f4;
  border: 2px solid #ccc;
  height: 200px;
  **display: table-cell;
  **padding: 5px;
  **vertical-align: middle;
  **width: 400px;
}
```

Podemos ver o resultado desse exemplo aqui.

Para quem utiliza browser, funciona perfeitamente. Mas para quem não usa, o texto continua no topo. Salve ie. :D

## Mas então quando devo usar o vertical-align Bruno?

Esse é o ponto que quero chegar. Como eu disse, o vertical-align são para elementos inline e não em blocos (fora os tds e ths da vida ok? ;) ). Portanto, temos as restrições e problemas citados.

Mostrarei alguns exemplos de como e quando usar o vertical-align.

### Alinhando imagem e texto centralizado verticalmente com o vertical-align.

Veremos no código abaixo, como fazer para alinhar uma imagem e um texto centralizado verticalmente:

#### Código HTML:

```html
<div id="box"><img src="macaco.jpg" alt="imagem" /> Meu texto bem aqui.</div>
```

#### Código CSS:

```css
#box {
  background-color: #f7f6f1;
  border: 2px solid#CCC;
  height: 200px;
  padding: 5px;
  width: 400px;
}
#box img {
  vertical-align: middle;
}
```

Podemos ver o resultado desse exemplo aqui.

Como podemos ver, a imagem e o texto ficaram centralizados verticalmente. Mas isso entre eles mesmo e não em relação ao bloco que os engloba.

Tudo bem que neste exemplo eles acabaram ficando, mas porque eu retirei a propriedade height de dentro do CSS no bloco #box. Caso eu coloque um altura, não ficará mais.

### Alinhando inputs e texto centralizado verticalmente com o vertical-align.

Veremos no código abaixo, como fazer para alinhar um input de texto e um texto centralizado verticalmente:

#### Código HTML:

```html
<div id="box">Nome: <input type="text" name="txtNome" id="txtNome" /></div>
```

#### Código CSS:

```css
#box {
  background-color: #f7f6f1;
  border: 2px solid #ccc;
  font: 80% 'Trebuchet MS';
  padding: 5px;
  width: 400px;
}

#box input {
  border: 1px solid #ccc;
  font: 100% 'Trebuchet MS';
  _vertical-align: middle;
}
```

Podemos ver o resultado desse exemplo aqui.

Sim, eu sei. Eu utilizei um hack para o internet explorer 6 ou anterior. Mas fiquem tranquilos, é só pra exemplo. Mostrarei abaixo uma solução correta para isso ;).

O Firefox já posiciona verticalmente, sem precisar do vertical-align, mas o ie não. E colocando esta propriedade com o valor middle, o ie alinha no centro, mas o Firefox deixa o texto um pouco mais para cima.

Qual dos dois está correto, não sei ao certo, mas como o Firefox está mais avançado em relação as CSS’s, então deduzo que ele está correto, principalmente pela próxima solução.

### Alinhando inputs e texto centralizado verticalmente com o vertical-align – Parte 2.

Somente uma segunda solução que funciona em todos.

#### Código HTML:

```html
<div id="box"><span>Nome:</span><input type="text" name="txtNome" id="txtNome" /></div>
```

#### Código CSS:

```css
#box {
  background-color: #f7f6f1;
  border: 2px solid #ccc;
  font: 80% 'TrebuchetMS';
  padding: 5px;
  width: 400px;
}
#box input {
  border: 1px solid #ccc;
  font: 100% 'TrebuchetMS';
  vertical-align: middle;
}
#box span {
  vertical-align: middle;
}
```

Podemos ver o resultado desse exemplo aqui.

Agora sim. Sem hacks e funcionando corretamente em todos. A diferença foi colocar um span e setar o vertical-align nele também.

Com esse exemplo, deduzo que o Firefox está correto na renderização do exemplo anterior. Ele adiciona o vertical-align no input, deixando o texto sem. E no ie, parece que ao colocar no input, o texto já leva como padrão o vertical-align.

### Alinhando inputs e texto centralizado verticalmente com o vertical-align – Parte 3.

A versão mais correta e semântica para este exemplo:

#### Código HTML:

```html
<div id="box">
  <label for="txtNome">Nome:</label><input type="text" name="txtNome" id="txtNome" />
</div>
```

#### Código CSS:

```css
#box {
  background-color: #f7f6f1;
  border: 2px solid #ccc;
  font: 80% 'Trebuchet MS';
  padding: 5px;
  width: 400px;
}
#box input {
  border: 1px solid #ccc;
  font: 100% 'Trebuchet MS';
  vertical-align: middle;
}
#box label {
  cursor: pointer;
  vertical-align: middle;
}
```

Podemos ver o resultado desse exemplo aqui.

Neste exemplo, utilizei o label que é o mais correto, setando o vertical-align nele e mais um cursor para diferenciar ;).

## Legal, Bruno. Muito bom mesmo. Mas o vertical-align só tem o middle como valor no CSS cara?

Acabei esquecendo de citar mais detalhes sobre essa propriedade não é verdade? Fiquem calmos, estarei falando mais sobre ela abaixo :P:

- **baseline:** Valor padrão no CSS. Posiciona o elemento da linha base de acordo com seu “pai”;
- **sub:** Deixa o elemento como sub-escrito;
- **super:** Deixa o elemento como sobre-escrito;
- **top:** Deixa o elemento alinhado ao topo do elemento que estiver mais ao topo da linha;
- **text-top:** Alinha o elemento de acordo com o texto que estiver mais alto e seja seu “pai”;
- **middle:** Exemplo utilizado nesse post. Deixa os elementos que estiverem com este valor alinhados ao meio com relação à eles mesmos ou à seus “pais”;
- **bottom:** Alinha na base do elemento que estiver mais baixo.;
- **text-bottom:** Alinha o elemento de acordo com o texto que estiver mais baixo e seja seu “pai”;
- **valor:** Valor fixo em pixels, em ou %. Posiciona de acordo com o valor setado a partir da linha base do seu “pai”.

## Resumindo...

Bom. Tentei passar aqui um pouco dessa propriedade do CSS. Ficou um pouco grande, admito, mas tentei detalhar ao máximo, sem tentar deixar massivo.

Espero que tenham gostado e tenha sido útil. Caso tenha esquecido de algo ou falado alguma besteira, por favor, comentem que eu modifico ok? ;)

## Finalizando...

To ficando por aqui, deixando uma homenagem ao Marrelton :D camarada que trabalha aqui na parte de desenvolvimento da Globo.com que se amarra nos títulos do meu Blog e talz... Aquele abraço ae Elton ;)

Aquele abraço pra geral ae.
