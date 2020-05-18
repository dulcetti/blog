---
author: bruno-dulcetti
category: CSS
date: 2006-07-13T15:23:52.000Z
description: ''
image: null
slug: mudancas-nos-estados-do-campos-de-texto
templateKey: blog-post
title: 'Mudanças nos estados do campos de texto'
---

Falae pessoal.

Estou aqui mais uma vez, agora pra mostrar uma técnica simples e muito interessante de ser utilizada em sites. Não chega a ser uma grande utilizadade, mas em relação a estilo, layout, dá um diferencial, um detalhe a mais pro seu site/blog.

Mostrarei aqui como mudar a aparência dos campos de textos ao estar digitando algum texto e ao sair do modo de edição. Existem vários sites, blogs que utilizam isso. A nova versão do meu blog também está com esse recurso.

Explicarei em três partes: <abbr title="HyperText Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr> e <abbr title="JavaScript">JS</abbr>. O código é bem curto, no exemplo online, está tudo incorporado no html, mas logicamente, que o melhor jeito é separando o css e o js do html, para ficarmos com tudo organizado e separado.

## Código <abbr title="HyperText Markup Language">HTML</abbr>

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Inputs</title>
</head>
<body>
<form action=" method="post">
<fieldset>
<legend>Teste</legend>
<label for="nome">Nome:</label>
<input type="text" name="nome" id="nome" class="textbox" onfocus="textOn(this.id)" onblur="textNormal(this.id)" />
<label for="email">Email:</label>
<input type="text" name="email" id="email" class="textbox" onfocus="textOn(this.id)" onblur="textNormal(this.id)" />
</fieldset>
</form>
</body>
</html>
```

Nesta parte, falarei somente de algumas linhas, pois outras são extremamente básicas e não convém ficar ensinando <abbr title="HyperText Markup Language">HTML</abbr> básico neste post.

Utilizei um form, pois é um formulário, dentro dele, coloquei um fieldset, que no doctype do xhtml 1.1 é obrigatório a sua utilização. Dentro do fieldset, coloquei um legend, que serve como legenda para o formulário específicado. Temos os labes e os inputs. Não coloquei nenhum botão pois não é importante neste caso, estou apenas querendo mostrar o truque com os campos de texto.

<a href="/input/inputs_html.html">Primeiro vamos ver este exemplo online</a>.

Nos labels, eu utilizei um atributo chamado for, que define, dentro de um formulário, o elemento que ele se refere. No caso atual, o label que contém o texto **Nome**, tem um for="nome" e o que contém o texto **Email**, tem um for="email". O atributo for, se refere ao elemento que conter o atributo id igual ao valor do seu valor.

Ex:

```html
<label for="nome">Nome:</label> <input type="text" name="nome" id="nome" />
```

No caso citado, o valor do FORéigual a "nome" e dentro do input, o valor do IDéigual a "nome", portanto o label se refere a este campo de texto.

### Mas pra que que isso serve Bruno?

É bom pra arquitetura do site, identificação mais clara dos elementos. Um curiosidade também, que alguns não conhecem,éque ao clicar no label, o elemento com o mesmo valor de id que o valor do for, ficará selecionado, ou seja, comoéum campo de texto, esse campo ganhará foco. É só testar.

### E o input? Tem uns códigos ali que nunca vi.

Ok, ok, vamos lá. Segue abaixo a listagem dos atributos que utilizei no input, para melhor compreensão:

- #### type="text"

<p>Tipo do input. Nem preciso explicar não é? Textéigual a campo de texto.</p>

- #### name="nome"

<p>Nada de novidade. O name serve como nome do campo e  funciona para o método utilizado no formulário e as linguagens server-side, para o envio dos dados.</p>

- #### id="nome"

<p>O id serve para "linkar" o campo ao label referente à ele</p>

- #### class="textbox"

<p>Classe textbox que iremos declarar no css, para estilizar o campo.</p>

- #### onfocus="textOn(this.id)"

<p>O onfocus serve para vc definir uma ação, evento quando o foco estiver no elemento em que foi setado. No nosso caso, esse atributo chama a função textOn, que está declarada no js que irei comentar mais abaixo e passa como parâmetro, o próprio id.</p>

- #### onblur="textNormal(this.id)"
<p>Mesma função do onfocus, mas só que ao invés de ser para quando estiver com o foco, serve para quando perder o foco, ou seja, o usuário não estiver digitando texto dentro do campo. E neste atributo, passamos a função textNormal e passamos o próprio id como parâmetro.</p>

### <abbr title="HyperText Markup Language">HTML</abbr> Finalizado

Nada de surreal no <abbr title="HyperText Markup Language">HTML</abbr> certo? Coisas básicas e simples que utilizei, tirando os atributos onblur e onfocus, que na verdade, também não tem nada demais.

## Código <abbr title="Cascading Style Sheets">CSS</abbr>

Agora iremos pro código <abbr title="Cascading Style Sheets">CSS</abbr>, que também não tem nada de avançado, nada demais sendo usado, somente propriedades básicas e simples.

```css
body {
  background-color: #f5f6f6;
  color: #666666;
  font: 75% 'Trebuchet MS';
}

fieldset {
  border: 1px solid #999999;
  padding: 5px;
  width: 350px;
}

legend {
  padding: 2px 4px;
  border: 1px solid #999999;
}
label {
  display: block;
  margin: 7px 0 0 7px;
  cursor: pointer;
  font-weight: bold;
}

.textbox,
.textboxOn {
  display: block;
  margin-left: 7px;
  border: 2px solid #999999;
  background-color: #efefef;
  color: #333333;
  padding: 2px 4px;
  font: 100% 'Trebuchet MS';
  width: 150px;
}

.textboxOn {
  border-color: #ff6600;
  background-color: #f5f6f6;
}
```

Explicarei cada classe e tag declarada no <abbr title="Cascading Style Sheets">CSS</abbr>. Não vou explicar cada linha, pois são coisas básicas. Darei uma passada somente no css, para vocês entenderem.

Mas antes, <a href="/input/inputs_css.html">vejam este exemplo online</a>.

Farei uma listagem aqui com as tags e classes:

- #### body

<p>No body, setei somente uma cor de fundo, cor do texto e tamanho e tipo da fonte</p>

- #### fieldset

<p>No fieldset do fomulário, coloquei uma borda cinza sólida com 1px de espessura, um padding de 5px para todos os lados e setei 350px de largura.</p>

- #### legend

<p>Para o legend, coloque um padding de 2px para o topo e a base e 4px para as laterais e coloquei uma borda cinza sólida com 1px de espessura</p>

- #### label

<p>No label, coloquei um display: block, pra ter quebra de linha logo depois dele e pro input ficar abaixo, margem de 7px para o topo e a lateral esquerda, cursor pointer, queéu cursos da mãozinha/link, porque como ao clicar no label ele da foco para o campo de texto que ele estiver setado no for, entaum mostro isso pro usuário com o cursor e deixei o texto em negrito.</p>

- #### .textbox

<p>Essa classe é a classe no estado normal do campo de texto, quando ele não está com foco. Coloquei um display: block também, para ele quebrar linha antes e depois dele, margem de 7px na lateral esquerda, borda cinza, sólida e com 2px de espessura, um cinza claro para a cor de fundo, um cinza escuro para a cor do texto, um padding de 2px para o topo e base e 4px para as laterais, tamanho e tipo da fonte e tamanho de 150px d largura pro campo de texto.</p>

- #### .textboxOn
<p>Vcs podem perceber que ele foi setado, juntamente, com a classe textbox, porque ela recebe praticamente todas as propriedades da classe textbox. E para não ficar repetindo tudo novamente, declaro somente o queénecessário, que nesse caso foi a cor da borda que ficou laranja e a cor de fundo que ficou um cinza mais claro.</p>

### <abbr title="Cascading Style Sheets">CSS</abbr> Finalizado

Podemos perceber que não utilizamos nada de muito especial correto? Declaramos mais tags do que classes. As únicas classes foram para os estados de "on" e "off" do campo de texto.

## Código <abbr title="JavaScript">JS</abbr>

Vamos pro javascript agora. Não estou usando nada demais também, nada avançado, nada com muita complexidade. Estou somente utilizando o getElementById.

```html
<script type="text/javascript">
  function textOn(txt) {
    document.getElementById(txt).className = 'textboxOn&quot';
  }

  function textNormal(txt) {
    document.getElementById(txt).className = 'textbox';
  }
</script>
```

Neste exemplo temos duas funções: textOn e textNormal. Vimos as chamadas dessas funções no html, dentro dos inputs correto? Agora iremos ver o que elas fazem:

#### textOn(txt) e textNormal(txt)

Como podem perceber, essas funções enviam como parâmetro, o txt. Para quem não sabe, uma função passa os parâmetros que estão dentro dos parênteses. Ele pode ficar vazio também, mas ae você teria que setar dentro do javascript o elemento que sofreria a mudança.

#### `document.getElementById(txt).className='textboxOn'`;

Nessa linha, eu pego do html o ID passado no parâmetro txt. Isso varia de acordo com a chamada da função. No nosso formulário, temos duas chamadas nessa função, dentro do onfocus nos inputs. Vamos vê-los novamente?

- ##### `id="nome" class="textbox" onfocus="textOn(this.id)"`

  Setamos o ID como "nome" e dentro da chamada, setamos o ID dele próprio. O this significa que ele chama a si mesmo o .id significa "meu ID".

- ##### `id="email" class="textbox" onfocus="textOn(this.id)"`
  Setamos o ID como "email" e dentro da chamada, setamos o ID dele próprio. O this significa que ele chama a si mesmo o .id significa "meu ID".

Vamos pegar o primeiro caso, o "nome". Irei mostrar abaixo o código javascript e o próprio "traduzido":

##### Normal

```js
function textOn(**txt**) {
  document.getElementById(txt).className='textboxOn';
}
```

##### "Tradução"

```js
function textOn(nome) {
  document.getElementById(nome).className = 'textboxOn';
}
```

Prestaram atenção na parte em negrito? É bem fácil essa passagem de parâmetro, nada complexo, tudo bastante fácil.

### Boa Bruno... E esse .className?

Essaéa parte mais fácil. O nome já diz tudo. Entre as aspas duplas, vc seta o nome da classe que vc quer que o elemento obtenha no evento.

## Tah pronto?

Sim está. <a href="/input/inputs.html">Veja como ficou</a>.

Legal né? Com isso, vc pode fazer outras várias coisas. É só explorar, estudar e meter a cara... ;)

Bom, espero que tenham gostado. Foi um efeito bem simples, mas que pode ser útil para alguns. Qualquer dúvida, sugestão, crítica, é só comentar...

Aquele abraço.
