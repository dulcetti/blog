---
category: 'CSS'
date: '2007-04-23'
description: ''
featuredImage: '/assets/images/bgs/css.jpg'
title: 'Como você escreve seus arquivos CSS? Parte 2'
---

Dando continuidade ao [post anterior](/como-voce-escreve-seus-arquivos-css), venho aqui mostrar alguns detalhes que acabei não mostrando na primeira parte. É sempre assim, quando queremos falar sobre algo, quando temos a absoluta certeza que está concluído, vemos, mais tarde, que ainda faltava algo :D.

## Ferramentas compactadoras de CSS's

Alguns leitores postaram sugestões, opiniões e links interessantes, que postarei aqui alguns dos links citados.

Falaram sobre escrever como quiser o CSS e depois passar numa ferramenta, otimizador, online para ele fazer a compactação, redução do código, para depois subir e deixá-lo online.

É uma boa alternativa, porém ainda prefiro fazer na mão mesmo, pois podemos ficar meio que dependentes de tal ferramenta, e se por acaso ela não funcionar mais, não existir mais, estamos perdidos. Ok, sem exageros, mas causa dependência e eu não gosto muito disso.

Segue a lista de links:

- [Clean CSS](http://www.cleancss.com/)
- [CSS Optimiser](http://www.cssoptimiser.com/)
- [Online CSS Optimiser/Optimizer : flumpCakes](http://flumpcakes.co.uk/css/optimiser/)
- [Lottery Post: CSS Compressor](http://www.lotterypost.com/css-compress.asp)

Dei uma olhada muito rápida nos links e o q mais me agradou foi o Clean CSS, pelas opções, variações de compactação, etc. Mas não cheguei a testar nenhum. Mais pra frente, de repente :P, eu testo :D.

## Retornando a escrita CSS... :D

Bom, retornando ao assunto do Post, vou comentar sobre mais alguns pontos de escrita dos CSS's. Eu batizarei um de hierarquia de elementos e o outro de referência de tags.

### Hierarquia de Elementos

Quando falo de hierarquia de elementos no CSS, estou falando de elementos filhos sendo hierarquizados dentro dos arquivos CSS's. Eu, na grande maioria das vezes, não faço hierarquia, utilizando somente a div correspondente.

Explicarei melhor agora, porque está meio confuso. Veja o código abaixo:

```css
#geral #conteudo #minhaDiv {
  background-color: #ccc;
  border: 1px solid #fc3;
  color: #fff;
  height: 300px;
  width: 200px;
}
#geral #conteudo #minhaDiv2 {
  background-color: #ccc;
  border: 1px solid #fc3;
  color: #fff;
  height: 300px;
  width: 200px;
}
#geral #conteudo #minhaDiv3 {
  background-color: #ccc;
  border: 1px solid #fc3;
  color: #fff;
  height: 300px;
  width: 200px;
}
```

Olhando o código, se vc possui o mínimo de conhecimento em CSS, vc percebe que os ID's #minhaDiv, #minhaDiv2 e #minhaDiv3 são "filhas" do ID #conteudo que é filho do ID #geral certo?

Geralmente eu não faço desta forma, eu economizo mais. Usando o código deste exemplo, ficaria desta forma:

```css
#minhaDiv {
  background-color: #ccc;
  border: 1px solid #fc3;
  color: #fff;
  height: 300px;
  width: 200px;
}
#minhaDiv2 {
  background-color: #ccc;
  border: 1px solid #fc3;
  color: #fff;
  height: 300px;
  width: 200px;
}
#minhaDiv3 {
  background-color: #ccc;
  border: 1px solid #fc3;
  color: #fff;
  height: 300px;
  width: 200px;
}
```

Economizei bastante, pois retirei o "_#geral #conteudo_ " das linhas.

Existem pontos fortes e fracos na utilização dessa hierarquia. O Ponto positivo, na minha opinião é que você limita o ID a funcionar SOMENTE quando ele fizer parte dessa hierarquia. E, às vezes, isso não chega nem a ser uma vantagem, pois você possa precisar deste mesmo comportamento em outra hierarquia, mas não funcionará por causa do "_#geral #conteudo_ ".

Muitos desenvolvedores utilizam a forma hierárquica, pois fica fácil de saber onde aquele elemento está, é filho de quem, etc. Mas se você trabalhar com CSS corretamente, separando seus arquivos CSS's, com nomenclaturas corretas, você não precisará se preocupar com esses detalhes.

### Referência de Tags

Este é simples e muitos usam este método. Mostrarei abaixo um exemplo para depois explicar:

```css
div#minhaDiv {
  background-color: #ccc;
  border: 1px solid #fc3;
  color: #fff;
  height: 300px;
  width: 200px;
}
div#minhaDiv span.minhaClasse {
  color: #666;
}
div#minhaDiv a.verMais {
  text-decoration: none;
}
```

Agora uma breve explicação sobre cada linha:

#### `› div#minhaDiv`

A div que tiver o identificador **#minhaDiv**, receberá todas as propriedades setadas.

#### `› div#minhaDiv span.minhaClasse`

O span que receber a classe **minhaClasse** e for "filho" da div que tiver o identificador **#minhaDiv**, receberá todas as propriedades setadas.

#### `› div#minhaDiv a.verMais`

O link que receber a classe **verMais** e for "filho" da div que tiver o identificador **#minhaDiv**, receberá todas as propriedades setadas.

#### » Pontos Fortes e Fracos

A utilização desta forma limita as propriedades a somente estas tags e pronto. Caso no HTML seja modificada alguma estrutura, o funcionamento pode ser danificado, por exemplo, de span, vire div, estas propriedades não funcionarão mais.

Eu prefiro utilizar sem a referência de tags, a não ser que você tenha múltiplas tags utilizando a mesma classe.

## Finalizando...

Bom, essa segunda parte é bem menor que a primeira e é assim que eu tentarei fazer sempre, escrever menos, mais direto. Apesar que sou muito detalhista e mastigo bem os tutoriais, artigos, etc. Acho que é melhor assim, mas é preocupante também quando fica grande, cansativo, etc. Mas eu vou treinando para isso não acontecer :D.

Aquele abraço e valew a contribuição de todos.
