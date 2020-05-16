---
author: bruno-dulcetti
category: CSS
date: 2006-05-24T19:04:54.000Z
description: ''
image: null
slug: cellspacing-e-cellpadding-com-webstandards
templateKey: blog-post
title: 'Cellspacing e Cellpadding com Webstandards'
---

Falae galera, tranquilidade?

Depois de ver algumas dúvidas, pessoas querendo saber sobre esse assunto, comecei a pesquisar, a mexer aqui no css e acabei descobrindo a forma de simular com webstandards, o cellpadding e cellspacing, atributos presentes na tag `<table>` que serve para a criação de tabelas.

Veremos um exemplo disso com tabelas:

```html
<table cellpadding="0" cellspacing="0">
  <tr>
    <td>conteúdo</td>
    <td>conteúdo</td>
    <td>conteúdo</td>
  </tr>
  <tr>
    <td>conteúdo</td>
    <td>conteúdo</td>
    <td>conteúdo</td>
  </tr>
</table>
```

Este foi exemplo usando cellpadding e cellspacing iguais a 0 (zero). Na versão webstandards,ébem fácil, com somente dois comandos no css, você consegue o mesmo resultado:

```html
<table style="border-collapse: collapse; padding: 0;">
  <tr>
    <td>conteúdo</td>
    <td>conteúdo</td>
    <td>conteúdo</td>
  </tr>
  <tr>
    <td>conteúdo</td>
    <td>conteúdo</td>
    <td>conteúdo</td>
  </tr>
</table>
```

Os comandos css utilizados foram:

```css
table {
  border-collapse: collapse;
  padding: 0;
}
```

A primeira linha diz que quero o modelo de borda fique zerado, não tenha distância. A segunda linha nem preciso falar né? Ela zera o padding qéo espaço do conteúdo pro seu limite.

Dentro desse atributo border-collapse, temos outro valor, que é o default. Esse valor é o separate e ele será um dos usados no próximo exemplo:

```html
<table cellpadding="10" cellspacing="10">
  <tr>
    <td>conteúdo</td>
    <td>conteúdo</td>
    <td>conteúdo</td>
  </tr>
  <tr>
    <td>conteúdo</td>
    <td>conteúdo</td>
    <td>conteúdo</td>
  </tr>
</table>
```

Este foi exemplo usando cellpadding e cellspacing iguais a 10 (dez). Agora veremos na versão webstandards, que tambémébem fácil, com somente três comandos no css, você consegue o mesmo resultado para a tabela:

```html
<table style="border-collapse: separate; border-spacing: 10px; padding: 10px;">
  <tr>
    <td>conteúdo</td>
    <td>conteúdo</td>
    <td>conteúdo</td>
  </tr>
  <tr>
    <td>conteúdo</td>
    <td>conteúdo</td>
    <td>conteúdo</td>
  </tr>
</table>
```

Os comandos css utilizados foram:

```css
table {
  border-collapse: separate;
  border-spacing: 10px;
  padding: 10px;
}
```

Primeira linha foi explicado anteriormento, é o valor padrão, mantém um espaçamento entre as células e a tabela. A segunda, foi setado o espaçamento entre as células contidas na tabela que eu queria, nese caso, 10 pixels. A terceira eu setei um padding de 10 pixels.

A propriedade border-spacing não é muito utilizada, talvez pela pouca utilização das tabelas hoje em dia, por isso, muitos não sabem sua funcionalidade.

### Mas Bruno, está diferente do feito com os atributos na tag `<table>`.

Eu sei, calma. Precisamos lembrar, que estamos setando estes valores, para a tag `<table>` somente. Para ter o resultado semelhante, você precisaria colocar um padding também no `<td>`:

```html
<table style="border-collapse: separate; border-spacing: 10px; padding: 10px;">
  <tr>
    <td style="padding: 10px;">conteúdo</td>
    <td style="padding: 10px;">conteúdo</td>
    <td style="padding: 10px;">conteúdo</td>
  </tr>
  <tr>
    <td style="padding: 10px;">conteúdo</td>
    <td style="padding: 10px;">conteúdo</td>
    <td style="padding: 10px;">conteúdo</td>
  </tr>
</table>
```

Às vezes o resultado não fica totalmente igual, principalmente em diferentes browsers, mas isso você pode ir resolvendo com valores diferenciados para cada item.

Essa é uma grande vantagem do <abbr title="Cascading Style Sheets">css</abbr>. Você pode cuidar de cada tag, separadamente, dando à ela, os valores especificados por você.

Vamos ver mais um exemplo com tabelas com bordas:

```html
<table
  style="border-collapse: separate; border-spacing: 10px; padding: 10px; border: 1px solid #000000;"
>
  <tr>
    <td style="padding: 10px; border: 1px solid #000000;">conteúdo</td>
    <td style="padding: 10px; border: 1px solid #000000;">conteúdo</td>
    <td style="padding: 10px; border: 1px solid #000000;">conteúdo</td>
  </tr>
  <tr>
    <td style="padding: 10px; border: 1px solid #000000;">conteúdo</td>
    <td style="padding: 10px; border: 1px solid #000000;">conteúdo</td>
    <td style="padding: 10px; border: 1px solid #000000;">conteúdo</td>
  </tr>
</table>
```

### Mas Bruno, por que que entre os tds estão menores que entre a tabela e o td?

Simples. Como setamos 10px de padding para tabela, todo seu conteúdo ficará 10 pixels mais pra dentro da tabela e somando os 10px setados no border-spacing, que é o espaçamento entre as células da tabela, como explicado lá em cima.

Com isso, as células que ficam na primeira e última linha, ou coluna, ficam com 20px de espaçamentos pra tabela no topo, base e laterais, respectivamente. Isso por causa da soma dos dois valores 10px (border-spacing + padding).

Legal não é verdade? Espero que tenham entendido e qualquer dúvida, erro, é só me mandar um email ou mandar um comentário.

Aquele abraço.

### [UPDATE]

Maldito i.e. Lembrando que ele não aceita esses parâmetros. Alguém tem dúvida sobre o porquê desse browser ser ruim?

### [UPDATE 02]

Colocando o complemento do Samy para os iniciantes. Eu coloquei cada atributo em sua respectiva tag, é só ver no código fonte o style em cada tag, portanto, devemos seguir as seguinte regras:

```css
table {
  border-collapse: separate;
  border-spacing: 10px;
}
table tr td {
  padding: 10px;
}
```

Aquele abraço e obrigado ae, Samy.
