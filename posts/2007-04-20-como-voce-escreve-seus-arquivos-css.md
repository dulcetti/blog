---
category: 'CSS'
date: '2007-04-20'
description: ''
featuredImage: '/uploads/beer.jpg'
title: 'Como você escreve seus arquivos CSS?'
---

Fala pessoal. Ressurgindo das cinzas como uma Fênix, aqui estou eu novamente, para encher vossos sacos :D e saber de vocês e mostrar como eu escrevo meus arquivos [CSS](http://pt.wikipedia.org/wiki/Cascading_Style_Sheets)'s.

## Mas por que isso, Bruno?

Simples. Antigamente eu pensava que não tinha diferença na escrita dos CSS's que eu criava, etc. E na verdade, no início é sempre assim, pouco damos valor a essas pequenas coisas, esses pequenos detalhes.

Detalhes que fazem a diferença na sua grande parte. Lembrando que não estou falando da utilização das regras, como, quando e porquê usar tal propriedade CSS. Estou falando da escrita mesmo, como você cria, etc.

## Ainda não entendi direito, Bruno. Explica melhor essa parte da escrita do CSS

Vou mostrar um exemplo de uma forma de escrever, criar um arquivo CSS:

```css
.minhaClasse {
  background-color: #ccc;
  border: 1px solid #fc3;
  color: #fff;
  height: 300px;
  width: 200px;
}

.minhaClasse2 {
  background-color: #ccc;
  border: 1px solid #fc3;
  color: #fff;
  height: 300px;
  width: 200px;
}

.minhaClasse3 {
  background-color: #ccc;
  border: 1px solid #fc3;
  color: #fff;
  height: 300px;
  width: 200px;
}
```

Peço que não levem em conta que todas as classes estão com as mesmas propriedades. Coloquei mais para não ter que ficar criando, etc. Estou com preguiça e no trabalho, não esqueçam disso :D

### Legal, Bruno. E?

Perceberam que esta é uma declaração simples de um CSS correto? Imaginem um CSS com 300 linhas de código, parecido com esses que passei agora. Bastante coisa, certo? O arquivo terá muitos ID's, Classes, declarações para tags, etc.

Sabemos também que é interessante termos um CSS compacto e leve correto? Com uns 8kb, 10kb no máximo não é verdade?

Mas muitos não dão tanto valor por meros espaços em branco, coisas que, no início, parecem irrelevante, que geralmente não vão fazer diferença.

Muitas vezes também por organização no código, entre outros motivos. Creio que quase todos começam assim, criando os códigos bonitinhos, quebrando linha, com indentação, bem organizado.

Eu mesmo achava horríveis os códigos CSS's que ficavam tudo em uma linha só, sem espaços, completamente difíceis de serem enxergados, etc. Tinha meio que um preconceito, uma certa dificuldade de aceitar tal forma de criar.

### Verdade, Bruno. Mas como você faz seus CSS's agora?

Antes de responder essa pergunta, vou explicar porquê mudei minha forma de implementar meus CSS's.

#### › Razão 01 - Tamanho do Site

Geralmente não pegamos sites gigantes pra fazer, implementar, etc. Pegamos sites pessoais, institucionais, com poucas visitações por mês, etc. Isso ajuda no vício de criar CSS's mais bonitinhos, arrumados e organizados.

Mas quando pegamos um projeto grande, algo em torno de milhões de visitas, percebemos a necessidade de melhorias no acesso, leveza do site, entre outras coisas essenciais num Portal.

#### › Razão 02 - Visitação ao Site

Parece que não, mas um CSS com 1kb a menos pode fazer a diferença. Imaginem um Portal como a Globo.com, com milhões de acessos diários. Agora multipliquem esse 1kb a menos com os milhões de acesso ao site. Chegamos num número absurdo de economia de banda, etc.

#### › Razão 03 - Quantidade de linhas dos CSS's

Diminui absurdamente a quantidade de linhas no CSS. Muitas linhas num CSS não são coisas muito agradáveis, fica difícil de buscar elementos, futuras modificações, etc.

#### › Razão 04 - Tamanho total dos CSS's?

Sim. Pode ser. Por que não?

No [Videolog](http://videolog.uol.com.br/), por exemplo, fiz um teste, retirei espaços, tabs, deixando na mesma linha e teve uma redução considerável, pensando em larga escala logicamente. No Videolog temos uns 36kb e pouco de CSS. :O Sim, verdade, projetos grandes necessitam de mais detalhes, principalmente quando temos formulários, grandes variações deles.

No final, depois das mudanças e economias que fiz, os CSS's ficaram, no total, com 30kb. Um ganho de mais de 6kb. Parece pouco, depende do ponto de vista, porque o Videolog recebe milhões de visitantes, page views e tudo mais. Imagine o ganho disso, multiplicando por milhões ;)

Sem esquecer que ainda farei umas otimizações, para não haver chamadas desnecessárias aos CSS's, por exemplo, páginas que não possuem formulários, não precisam chamar o css "formularios.css". Algumas mudanças deste tipo ajudam na rapidez e peso da página.

### Interessante. Mas como os seus arquivos CSS estão escritos?

Mostrarei o exemplo anterior utilizando a forma como estou escrevendo os meus CSS's:

```css
.minhaClasse {
  background-color: #ccc;
  border: 1px solid #fc3;
  color: #fff;
  height: 300px;
  width: 200px;
}
.minhaClasse2 {
  background-color: #ccc;
  border: 1px solid #fc3;
  color: #fff;
  height: 300px;
  width: 200px;
}
.minhaClasse3 {
  background-color: #ccc;
  border: 1px solid #fc3;
  color: #fff;
  height: 300px;
  width: 200px;
}
```

Bem menos linhas concordam? Menos espaços em branco, tabs, etc.

#### › Desvantagens

Como nada é perfeito, temos desvantagens também, mas isso geralmente ocorre no início. É uma questão de adaptação. Meus primeiros três, cinco dias aqui na Globo.com foi chato, difícil e contra minha vontade acostumar com isso. Mas depois, pensando em um dos motivos que citei anteriormente, da parte de milhões de acessos, isso diminui absurdamente a quantidade de banda transferida, etc.

Vou citar alguns pontos chatos nessa utilização:

1. Desorganização no primeiro contato;
2. Um pouco difícil de se encontrar/organizar no início;
3. Falta de hierarquia, tabulação;
4. Linhas extensas.

Por enquanto eu vejo esses pontos fracos, mas caso vocês vejam outros, eu vou analisar e posto aqui também, sem problemas. Vou comentar um pouco mais sobre cada um:

#### › Desorganização no primeiro contato

Com certeza, quem ainda não escreve seus CSS's desta forma, se assusta. No primeiro contato fica meio bagunça, difícil de enxergar, se localizar, concordo. Mas eu juro, com a prática e costume, fica tudo normal :D É como comer comida japonesa com hashi. No início é um desastre, mas depois se acostuma, pega a prática. (eu odeio comida japonesa, foi só mesmo para exemplificar :D)

#### › Um pouco difícil de se encontrar/organizar no início

Quando temos várias linhas, com as propriedades, ficamos meio perdidos no início, enrolados, pois são muitos caracteres, códigos, o que acaba confundindo, isso é fato.

Em contrapartida, quando temos um css como o mostrado no primeiro exemplo, temos uma organização por blocos com várias linhas e não por linhas com várias propriedades, com isso, não achamos os blocos tão facilmente:

```css
#conteudo .box {
  background-color: #ccc;
  border: 2px solid #000;
  color: #333;
  width: 200px;
}

#conteudo .boxTal {
  background-color: #000;
  border: 1px solid #666;
  color: #fff;
  width: 200px;
}
```

Percebemos que as duas classes estão contidas, somente, no ID conteúdo. Correto? O prefixo **#conteudo** afirma isso (isso é básico e espero que todos saibam disso).

Mas percebam que de cara não é tão fácil perceber isso. Pensamos um pouco, nem que sejam alguns milésimos de segundos a mais (ok, ok... dei uma de Steve Krug agora :D). Mas é a pura verdade. Do segundo modo, temos uma melhora visual da hierarquia das linhas, elementos e propriedades:

```css
#conteudo .box {
  background-color: #ccc;
  border: 2px solid #000;
  color: #333;
  width: 200px;
}
#conteudo .boxTal {
  background-color: #000;
  border: 1px solid #666;
  color: #fff;
  width: 200px;
}

#lateral .box {
  background-color: #ccc;
  border: 2px solid #000;
  color: #333;
  width: 200px;
}
#lateral .boxTal {
  background-color: #000;
  border: 1px solid #666;
  color: #fff;
  width: 200px;
}
```

Percebam que nas duas linhas o **#conteudo** está um logo abaixo do outro, o que já afirma serem "filhas" do mesmo bloco quando batemos o olho. O mesmo vale para o prefixo **#lateral**.

#### › Falta de hierarquia, tabulação

Como já vimos, a tabulação é perdida, com isso, sua hierarquia de propriedades de um elemento. Não estou falando da hierarquia de múltiplos elementos e sim hierarquia de elementos › propriedades, quais propriedades são de quais elementos, etc.

Os elementos são escritos colados na esquerda, enquanto as propriedades são escritas com uma TAB a mais no código, referenciando que essa propriedade é filha do elemento logo acima.

#### › Linhas extensas

Os elementos quando possuem muitas propriedades, muitas declarações, acaba estendendo a linha demais, ficando meio difícil de acompanhar e invadindo o final da tela, não ficando totalmente visível em alguns casos, sendo obrigado a rolar a barra horizontal para verificar tudo.

Isso é bem normal, nada tão grave ao meu ver. Mas...

## Legal, Bruno. Mas podem existir variações nessa forma de escrita?

Com certeza. Vou mostrar algumas variações nessa forma de Implementar seus CSS's. Principalmente na parte de propriedades para multi-elementos.

Vou listar abaixo algumas variedades, mas fiquem à vontade de sugerirem algumas:

- Com espaços;
- Com espaços depois das propriedades;
- Sem espaços;
- Multi-elementos na mesma linha;
- Multi-elementos em mais de uma linha.

### Com espaços nas propriedades do CSS

Vejamos abaixo:

```css
.minhaClasse {
  background-color: #ccc;
  border: 1px solid #fc3;
  color: #fff;
  height: 300px;
  width: 200px;
}
```

Algumas pessoas fazem desta forma, principalmente para facilitar na identificação das propriedades, separação. Mas tem um ponto importante também, que é abrir o arquivo no Notepad, e como ele é péssimo nos [atalhos dos desenvolvedores](/atalhos-e-dicas-pro-desenvolvimento), não considerando caracteres especiais, desta forma ajuda e muito.

### Com espaços somente depois das propriedades no CSS

Vejamos abaixo:

.minhaClasse {background-color:#CCC; border:1px solid #FC3; color:#FFF; height:300px; width:200px;}

O mesmo que o anterior, mas sem espaços após a { de início e } de final das declarações das propriedades.

### Sem espaços

Vejamos abaixo:

```css
.minhaClasse {
  background-color: #ccc;
  border: 1px solid #fc3;
  color: #fff;
  height: 300px;
  width: 200px;
}
```

A forma que eu utilizo. É um pouco mais complicada de entender, mas é a mais econômica de todas. E como não abro, geralmente, pelo Notepad os CSS's, não tenho problemas com ele.

### Multi-elementos na mesma linha

Vejamos abaixo:

```css
.minhaClasse,
.minhaClasse2,
.minhaClasse3 {
  background-color: #ccc;
  border: 1px solid #fc3;
  color: #fff;
  height: 300px;
  width: 200px;
}
```

Caindo agora pra parte de declarações para múltiplos elementos, temos este, que é o utilizado geralmente. Já utilizei bastante, principalmente quando temos poucas propriedades na declaração, mas quando é ao contrário, temos o problema da linha ficar muito comprida, o que eu não acho legal.

Fora que, às vezes, pode parecer que os múltiplos elementos é um só.

### Multi-elementos em mais de uma linha

Vejamos abaixo:

```css
.minhaClasse,
.minhaClasse2,
.minhaClasse3 {
  background-color: #ccc;
  border: 1px solid #fc3;
  color: #fff;
  height: 300px;
  width: 200px;
}
```

A forma que utilizo hoje em dia. Acho mais organizada e mais fácil de se localizar.

## Conclusões...

Fica claro que cada Projeto é um Projeto, cada Profissional é um Profissional. Apenas mostrei aqui alguns exemplos, minha opinião sobre e recomendações, fiquem à vontade para decidirem e discordarem. Estamos ae pra isso :D

Acho que em projetos pessoais, como portfólio, sites institucionais, de pouco tráfego, não seja necessário. Assim como um profissional que não esteja numa grande empresa, participando de um Mega Projeto Web, talvez não seja prioridade fazer das formas que citei aqui. Mas acho que pelo menos já deixa o desenvolvedor preparado para Projetos grandes, com muito tráfego, ou até mesmo nos sites e sub-sites da empresa onde trabalhará mais pra frente.

## Finalizando (Ufa :D)

Fico por aqui, desculpem o tamanho do artigo. Eu até iria dividir em partes, mas não achei legal fazer desta forma. Da próxima vez eu planejo tudo direitinho, para deixar separado, organizado blz?

Aquele abraço a todos e eu tentarei ser mais ativo no Blog.
