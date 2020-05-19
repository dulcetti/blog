---
category: 'Eventos'
date: '2008-07-06'
description: ''
featuredImage: ''
title: 'Resumo do Google Developer Day'
---

![Marca do google Developer Day](http://code.google.com/events/developerday/2008/images/logo.gif)

Vou fazer um breve resumo de como foi o evento Google Developer Day, que rolou semana passada, dia 26 de junho em São Paulo. Fui representar a galera de Webmedia, minha equipe na Globo.com.

### Pensei que não fosse mais falar do evento Dulça.

Ah, mas você sabe, eu sempre demoro mesmo para falar sobre os eventos que eu vou. Isso quando eu falo, caso que não aconteceu com o Interminas, que acabei nem postando aqui. Nem mesmo o lançamento do livro "Internet: O encontro de 2 mundos", que eu nem comentei por aqui como foi o coquetel e tudo mais. Acontece.

### Para de se explicar e explica logo como foi o evento.

[![Dulcetti tentando carregar um caixa](http://farm4.static.flickr.com/3255/2644114850_9278ac6f27.jpg?v=0)](http://flickr.com/photos/dulcetti/2644114850/)

Ok, ok. Bom, foi um evento legal, num local muito bom, bonito, etc. Mas pelo tamanho da Google, esperava mais do evento. Por exemplo, o evento não tinha wi-fi. Isso não existe, pecaram demais, por mais que seja caro. Arrumem um outro local que possua wi-fi, pelo amor de Deus. Mandaram muito mal nesse esse aspecto.

E eu pensando que fosse twittar direto sobre o evento, fiquei na mão. Mas isso não fez diferença pra galera que tem plano de dados nos celulares. E esse ainda não é o meu caso. Mas relaxa que eu vou tomar vergonha na cara ;)

### Estrutura do evento

[![Palestrante falando sobre a Google](http://farm4.static.flickr.com/3017/2644117362_196568eb9c.jpg?v=0)](http://flickr.com/photos/dulcetti/2644117362/)

Pela manhã rolou uma palestra, falando sobre a Google, histórias, etc. Isso numa sala gigantesca, que à tarde se transformaria em quatro. Gostei desse esquema de divisão das salas.

O início foi aquela baboseira de sempre: fala da empresa, como começou, mostra isso, mostra aquilo, entre outras coisas. Pelo menos serviu pra saber de algumas curiosidades:

1. Os servidores do Google eram separados por legos, por isso vieram as cores da marca atual.
2. Se o Orkut fosse um estado brasileiro, seria maior que MG.
3. O Youtube tem audiência 3x maior que a série de maior audiência no Brasil, Heroes.
4. O Google ficava com seus servidores em uma garagem nos EUA. Hoje o dono dessa garagem esta empregado no Google e eles são eternamente gratos por esse espaço cedido em 1997.

#### Usuário é quem manda tá ligado?

Gostei quando um dos caboclos disseram que o usuário define o que vive e o que morre na web hoje em dia. O exemplo citado foi a existência do [Google Earth](http://earth.google.com/intl/pt/) e [Google Mars](http://www.google.com/mars/). O segundo não é utilizado praticamente e poucas pessoas se lembram ou sabem da existência dele hoje.

#### Nuvens carregadas... De dados. Cloud Computing

Destruição de máquinas e computadores. Armazenamento físico será extinto. Os HDs tendem a sumir, pois a proposta é colocar seus dados nesse projeto de Cloud Computing. Onde ficará tudo "voando" por ae.

Bem revolucionário, mas pode ser perigoso. Tive umas boas conversas, com outras pessoas olhando com uma outra visão e entendi bem e reflito às vezes sobre esse assunto.

### De manhã rolou então um monte de Cases e apresentações modafocas?

É. Por ae mesmo. Já tinha dito mais acima, pela manhã rolou apresentações sobre os produtos, cases e APIs do Google e tudo mais. Uma breve apresentação do que seria falado na parte da tarde, onde teria o conteúdo mais aprofundado. Abaixo uma breve passagem do que eu peguei e que foi citado. Falaram mais coisas, mas meu sono e a sonolência do palestrante também não me deixou muito animado :P

#### Google App Engine

[![Slide App Engine](http://farm4.static.flickr.com/3256/2644119542_fb2abe8423.jpg?v=0)](http://flickr.com/photos/dulcetti/2644119542/)

Pontos citados na palestra:

- Desafios de Administração
- Facilidade para início e crescimento de forma ordenada.
- Custos para trafego acima de 5Mi de pageviews

No que eles estão trabalhando:

- Suporte a Rich Media
- Novas APIs de desenvolvimento
- Serviços de Infra Estrutura Adicionais

#### Android

Aplicativo mobile e multiplataforma. Você não precisará mais se preocupar com várias plataformas mobile, pois o Android cuidará de tudo isso. Isso é sensacional

#### Open Social

Pontos citados na palestra:

- Aplicação inteligente, utilizando OpenID e OAuth.
- Open Social Containers. Outros sites poderão criar outras funcionalidades, que ficarão "acoplados" ao Open Social, enriquecendo a plataforma.
- Possibilidades de criação de outros sites, utilizando o Open Social, com isso, é possível usar as APIs criadas para o Open Social.
- 270Mi de usuários é o número de usuários no total que o Open Social tem ambição de alcançar.
- 20.000 de desenvolvedores utilizando o Open Social
- 50Mi de aplicações instaladas

##### Google Friends Connect

Trazer amigos de todas as plataformas do Open Social para os aplicativos criados a partir do próprio Open Social.

#### Geo

Mostraram a utilização do Google Maps com o Google Earth, utilizando Flash. A incrível sacada foi, que para a utilização disso você precisa apenas de uma linha a mais no código.

Bela citação, falando sobre o evento, que não é sobre o Google e sim sobre nós, desenvolvedores, que vamos criar produtos e aplicativos a partir das APIs apresentadas, etc.

### Beleza Bruno. Agora fala da parte da tarde, das palestras em si, tudo mais.

Naturalmente meu nobre. Vamos começar agora tudo isso. Será apenas uma breve passagem, nada de muito texto e talz.

#### Palestra sobre Gears

O Banco de Dados que é utilizado no Gears é o [SQLite](http://www.sqlite.org/), por ser leve e por poder ser carregado em dispositivos mobile sem problemas e com rapidez.

E utiliza conexão com JSon, ponto que eu achei sensacional, já que Json é de uma economia e facilidade tremenda. Exporta o conteúdo do SQLite e passa para um Json, podendo assim, ser acessado offline.

Um caso é o Google Reader, que ele baixa os posts de um feed para sua máquina, não precisando estar conectado para ler após o término do download de todos os feeds. Isso é muito bom na minha opinião.

#### Palestra sobre Open Social & Orkut

[![Slide do Open Social](http://farm4.static.flickr.com/3071/2644122034_8eb9cda08d.jpg?v=0)](http://flickr.com/photos/dulcetti/2644122034/)

Curiosidades sobre o Open Social

- 234 dias de idades
- 275 Milhões de usuários
- 66 Milhões de instalações
- 20.000 desenvolvedores
- 10Milhões de usuários diários nas aplicações

Uma das vantagens de se usar o Open Social, é não precisar se preocupar com infraestrutura, e sim somente ao código, pois a estrutura estará na base do Open Social.

Gostei da referência feita ao Open Social, o chamando de Gadget++. Gostei de saber também que ele utilizar Json como base.

O palestrante citou também 3 serviços que o Open Social possui: People & Friends (Acessam informações programadas dos amigos), Activities (Verifica o que seus amigos estão fazendo e compartilha o que você está fazendo.) e um tal de Persistences que não lembro direito o que é :P.

##### Orkut com Open Social

Como não poderia deixar de ser, falaram sobre o Orkut. Ele utiliza o software Open Source Shindig, utilizando os serviços de Dados e de gadgets.

Mostraram alguns exemplos interessantes de aplicativos criados para o Orkut e também os primeiros passos para criar apps para Orkut:

- Pegar uma conta "sandbox" no Orkut diretamente no [Code Google](http://code.google.com)
- Feito isso, entrar no [Sandbox](http://sandbox.orkut.com)
- A partir da página inicial do Orkut, você tem acesso as Apps criadas por você ou adicionada por você dentro de sua página.

Lembrando que esses apps ainda não funcionam para usuários brasileiros.

#### Google Maps API Avançado

Fui dar uma futucada nessa palestra sobre Maps, já que dizia ser avançada e tudo mais. Mas não achei nada muito chamativo e surpreendente. Logicamente que estou falando da palestra e não da ferramenta, que eu acho muito modafoca de irada. Mas foi mais uma palestra mostrando o que é possível fazer com recursos avançados. Nem tanto disso, foi mais apresentação de cases avançados, utilizando a ferramenta.

O palestrante mostra que a cada zoom, ele divide a imagem em blocos de 4. A fórmula apresentada foi 4\*\*n, onde n é o número do zoom. E dependendo deste zoom, a imagem é dividida em quatro, aumentando o número de imagens renderizadas.

Cada imagem é composta de informações textuais, que montam a imagem de acordo com seu local no mapa. Assim como latitude, longitude, pixN, etc. Achei bem interessante isso.

O palestrante citou o Kairo como programa de criação das imagens, o recomendando, mas somente para as estáticas, pois as dinâmicas não são muito recomendadas.

Mostrou um recente lançamento no Google Maps, onde mostra, em algumas áreas do mapa, que contém fotos panorâmicas. E mostrou outras partes, onde possui fotos da área selecionada e com informações em texto sobre o local clicado.

### Finalizando...

Evento foi legalzinho, num local espetacular. Mas repito, **EVENTO SEM INTERNET NÃO DÁ**. Mandaram muito mal nisso, por mais que o local seja caro pra ter, escolha outro, por favor.

Apresentação de Cases, exemplos de utilização, isso o pessoal está cansado de ver em eventos. Está faltando algum diferencial em eventos do ramo. Chega de repetição.

[![Dulcetti e Rafael no Tortula](http://farm4.static.flickr.com/3026/2644112348_bfd1fbf7f2.jpg?v=0)](http://flickr.com/photos/dulcetti/2644112348/)

Mas deu pra conhecer pessoas, aumentar o networking, aprender também, por que não. Apesar dessas minhas reclamações, deu pra conhecer mais afundo o Google, ver um pouco mais sobre seus produtos, etc.

Foi bom reencontrar galera do twitter, blogueira, tanto no evento, quanto nos bares e saídas por sampa. [Elcio](http://blog.elcio.com.br/), [Helder Santana](http://blog.heldersantana.com/), [Nando Kanarski](http://www.undergoogle.com/), [Canha](http://www.digitalpaperweb.com.br/), [Thiago Mobilon](http://tecnoblog.net/), [Jeff Paiva](http://www.jeffpaiva.com/wordsmith), [Ian Black](http://www.enloucrescendo.com), [Marina Black](http://chiqueirochique.com/) :D, [Rafa Barros](http://www.ci9.com.br/blog/) (que salvou minha vida em Sampa. Valew mesmo meu nobre, te devo uma ;) ), [Edney](http://www.interney.net), [Rafael Ziggy](http://www.simviral.com.br), dentre outros vários.

É isso ae. Aquele abraço.

Assista às palestras em: Saiba mais sobre as palestra em: [http://code.google.com/intl/pt-BR/events/developerday/2008/sessions.html](http://code.google.com/intl/pt-BR/events/developerday/2008/sessions.html) e veja algumas fotos em [http://picasaweb.google.com/developerday2008/DeveloperDayBrazil02](http://picasaweb.google.com/developerday2008/DeveloperDayBrazil02)
