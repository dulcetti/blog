---
category: "CSS"
date: "2007-05-30"
description: ""
featuredImage: ""
title: "Como você escreve seus arquivos CSS? Parte 3"
---

Falae pessoal.

Demorei um bocado para essa terceira parte, que eu acho que é a última, pelos meus cálculos e pelos detalhes e informações sobre os arquivos CSS que crio.

Como vimos nos artigos anteriores, na [Primeira]/como-voce-escreve-seus-arquivos-css.html) e na [Segunda Parte]/como-voce-escreve-seus-arquivos-css-parte-2.html), vimos alguns detalhes sobre os arquivos CSS, que na minha opinião, melhora bastante, otimiza seus CSS's.

Mostrei vantagens e desvantagens, indentações, múltiplas formas de implementar seus estilos e espero ter ajudado, ou pelo abrir um pouco mais a cabeça da galera, principalmente com quem trabalha com projetos grandes em sua vida profissional.

### Beleza Bruno. Pára de enrolar e fala logo.

Ok, ok. São apenas dois pontos que citarei nessa terceira parte do artigo:

1. Utilização de Multi-CSS's;
2. Ordem de escrita das propriedades.

Bom, vamos começar a falar sobre o primeiro.

### Utilização de Multi-CSS's

Muitas pessoas ainda possuem dúvidas sobre a utilização, se podem ou não, no que prejudica, no que ajuda, se é que ajuda, a utilização de vários arquivos CSS no seu site.

#### Posso utilizar vários CSS's?

Não só pode como deve utilizar. Acho essencial a utilização de múltiplos arquivos CSS's, dependendo da estruturação das páginas. Mas logicamente que existem limites para isso. Não é recomendável a utilização de 30 arquivos CSS's pequenos, por exemplo, onde se poderia utilizar somente um ou dois. O tempo de renderização aumenta por ter vários arquivos.

Você pode estar pensando "Caramba! Trinta arquivos? Esse Bruno tá maluco?". Coisa de maluco, concordo plenamente, mas quando participarem de projetos grandes, verão que os _"remendos"_ sempre acontecem, principalmente se já passou por várias mãos, vai pra aprovação, modifica layout, vai pra desenvolvimento, volta, vai pra qa, etc, etc, etc.

Acaba passando na mão de várias pessoas, a página possui vários elementos globais, que utilizam CSS's externos, entre outras coisas mais.

#### Entendi Bruno. Mas como faço então?

Eu fazia de um modo, que hoje eu acho errado, que era chamar um CSS somente e dentro dele eu chamava os outros:

##### No HTML:

`<style type="text/css"> @import "css/estilo.css"; </style>`

##### No CSS:

`@import url(estilo2.css); @import url(estilo3.css); @import url(estilo4.css);`

#### Ok Bruno. E o que há de errado com esse CSS?

Errado? Nada. Mas concorda comigo que cada vez que eu chamo o arquivo _estilo.css_, ele chama todos os outros arquivos CSS's?

E se em uma página específica eu não precisar desses CSS's? Só precisar de um apenas? Eu chamando o _estilo.css_, já estou chamando os outros e como eu quero economia, otimização, não quero que isso aconteça, correto?

A mesma coisa acontece se eu colocar todo o conteúdo dentro de um CSS somente. Sempre chamarei somente um, mas dependendo do site, ele pode ter centenas, ou até milhares (isso mesmo) de linhas, o que sobrecarrega bastante.

Tudo bem que temos cache, mas queremos evitar esses problemas de peso, otimizar, certo? Então vamos fazer um trabalho decente :D

#### Sucesso. Mostra ae o modo correto de implementar essa parte do CSS

Lembrando que não estou falando que tal modo é certo ou errado, somente o que eu faço e mostro aqui pra vocês opinarem, comentarem, discutirem, etc.

Eu, geralmente crio um arquivo chamado _geral.css_, que engloba todas as tags gerais, toda a estrutura do site inteiro, como conteudo, rodape, topo, títulos, etc. Depois eu crio mais um arquivo _internas.css_, caso seja possível ter somente um arquivo com todas as informações.

Com isso, temos dois arquivos, sendo que na home eu não chamarei o arquivo _internas.css_, por motivos óbvios certo? :D

Caso seja necessário, eu posso criar alguns outros CSS's, para títulos, formulários (recomendado), elementos globais (apesar de eu usar no _geral.css_, mas vai de cada um.), entre outros mais.

#### Boa Bruno. E agora é só chamar os arquivos CSS's necessários no HTML certo?

Exatamente. Não vou mais precisar escrever no CSS o import, para chamar os outros arquivos. Segue abaixo:

Possuo três páginas: Home, Quem e Contato; e possuo três arquivos CSS: _geral.css_, _internas.css_ e _formularios.css_.

##### Home

`<style type="text/css"> @import "css/geral.css"; </style>`

##### Quem

`<style type="text/css"> @import "css/geral.css"; @import "css/internas.css"; </style>`

##### Contato

`<style type="text/css"> @import "css/geral.css"; @import "css/internas.css"; @import "css/formularios.css"; </style>`

Na Home eu chamei somente um CSS, o _geral.css_, que é chamado por todas as páginas. Na página Quem, além do _geral.css_, chamo o _internas.css_ porque é uma página interna e na página de Contato, eu chamos os três CSS's porque além de precisar da estrutura contida no _geral.css_, ele é uma página interna e possui os formulários necessários.

Bom, resumindo é isso. Com isso, temos uma estruturação, um controle maior dos CSS, cortamos chamadas desnecessárias de classes e ID's.

### Ordem de escrita das propriedades.

Exatamente isso que você está pensando, se é que está pensando :D. Eu penso na ordenação das propriedades nos meus CSS's. Parece loucura, admito, o [Arthur](http://www.arthurhenrique.com/) mesmo falou comigo que era coisa de maluco, perguntando se existia alguém que realmente fazia isso, e ele tomou um susto quando eu respondi que fazia isso :D

#### Tá Bruno, mas como assim? Como você ordena seus CSS's?

Exatamente como você está imaginando agora, em ordem alfabética mesmo. Meio difícil de aceitar no início, concordo, eu fui um pouco assim, mas sem ser xiita.

Tudo depende da adaptação, em qualquer coisa, seja na vida pessoal, trabalho, convivência, etc. Tudo é questão de hábito e costume.

É bem chato no início, mas depois que pega o ritmo, costume, vai rápido.

#### Entendi Bruno. Mas qual a vantagem de deixar em ordem alfabética os CSS's?

Isso varia de cada um, claro. Na minha opinião, o que mais pesou para eu implementar desta forma foi a organização. Por mais que cada um tenha seu modo, sua ordenação, em ordem alfabética eu sempre saberei onde está, aproximadamente, o atributo que eu estou procurando para modificar. Resumindo, eu achei mais fácil pra localizar atributos.

### Finalizando...

Bom, finalizo aqui mais uma etapa, creio eu que seja a última delas :D de escrita de CSS. Provavelmente existem outros links falando sobre, acabou que nem pesquisei sobre isso direito. Qualquer coisa é só postar nos comentários.

Mandem comentários, dicas, críticas, dúvidas que eu vou abrindo a mente pra, quem sabe, ver outras maneiras, experimentar outros métodos de implementação.

É isso, aquele abraço.

\[BBL\]artigos, css, escrita-no-css\[/BBL\]
