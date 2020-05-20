---
category: "CSS"
date: "2008-11-13"
description: ""
featuredImage: ""
title: "Compactar meu CSS? Eu faço, mas se você não faz, tanto faz. Ou não."
---

Confuso o título não é verdade? Foi mais pra botar algumas minhocas na sua cabeça, mas prepare-se para o restante do post, pois esse é bem interessante e surgiu com um [post publicado pelo Diego Eis](http://www.tableless.com.br/nao-otimize-seu-codigo) no [Tableless](http://www.tableless.com.br/), onde [eu fiz um comentário](http://www.tableless.com.br/nao-otimize-seu-codigo#comment-133007), na minha opinião, pertinente, mas que alguns leitores de lá não concordaram e possuem opiniões diferentes.

## Do que se trata?

Podemos dizer compactação, otimização, whatever, qualquer coisa, mas é uma opinião do Diego sobre criação de arquivos CSS e tudo mais. Ele comenta que não é necessário compactar seu CSS da seguinte forma:

```css
.minha-classe {
	color:#900;
	display:block;
	font-style:bold;
}
```

Para esta forma:

```css
.minha-classe {color:#900;font-style:bold;display:block;}
```


### Feio isso hein

Sim, sim. Concordo, mas eu [comentei aqui no blog um tempo atrás](/como-voce-escreve-seus-arquivos-css) sobre essa forma de implementação de CSS, seus motivos, entre outros, mas repito novamente.

## Motivos

Imaginem você um site que possui MILHÕES de visitas. Não milhares, mas sim MILHÕES. Agora imagine esses milhões de visitas multiplicados pelos kbytes que eu consigo economizar escrevendo meu CSS daquela forma.

Citei que em projeto em que eu participei, Globo.com e Videolog, projetos grandes, bem grandes, a economia ultrapassava os 20kb. Vieram falar que 20kb não é nada e carrega em 4 segundos numa conexão discada.

### E não é?

Hmm... Sim, possivelmente sim. Mas vou citar um ponto importantíssimo que muitos dos desenvolvedores client-side que utilizam os padrões W3C, que é a economia de banda. Tráfego custa dinheiro e não é pouco. Se seu site tem 5mil visitas, 10mil, 20mil, você não precisa se preocupar muito, pois são "poucas" e sua hospedagem certamente cobre tal tráfego tranquilamente.

E temos também o cache de CSS, que já fica armazenado na primeira visita. E isso ajuda bastante e diminui o tráfego.

## Pois sim, agora vamos aos fatos.

Milhões de acessos é igual a milhões de kbytes carregados. Milhões de kbytes carregados é igual a bastante tráfego, que quando você economiza milhões de acessos x 20kb, pode ter certeza, você tem um ganho absurdo. Fato!

E o [Elcio](http://blog.elcio.com.br/) [concordou comigo plenamente](http://twitter.com/elcio/statuses/1000703699) e também o [Diego comentou](http://www.tableless.com.br/nao-otimize-seu-codigo#comment-133013) logo após um que eu fiz, concordou também, falando pra galera que o artigo é ais focado para projetos menores.

### Ahhhh sim. É verdade então Dulcetti

Na minha opinião sim. Mas concordo que a leitura de um CSS todo numa linha é bizarro, mas te digo uma coisa, é costume. Meu primeiro contato foi negativo, mas depois, com o tempo, vi os resultados e foram satisfatórios e dei valor à isso e implemento assim desde hoje e estou acostumadíssimo. Tudo é questão de adaptação.

E hoje eu escrevo meus CSSs desta forma, tanto em projetos grandes quanto pequenos, já que acostumei. Com isso, economizo para os projetos que escrevo, por mais que seja pouco, mas pra mim 1kb que seja economizado já é um ponto a se contar.

## Resumindo

Bom, eu recomendo a escrita numa linha para economia, mas vai de cada um ;) Mas concordo com um ponto no post do Diego, fazer isso com o HTML é meio que forçar a barra demais e acho que não vale tanto a pena. E eu também sou a favor da utilização de gzip, compactadores, etc, tendo duas versões, uma de desenvolvimento e outra pra produção, sendo essa segunda a compactada.

Mas tem que tomar cuidado pra não dar merda, porque uma pequena confusão já basta para ferrar o projeto. Ainda mais se estiver trabalhando com mais de um cara. E fora que usar isso dentro de empresas grandes é difícil, pois existem pontos burocráticos e barreiras a se travessar.

## Finalizando

Bom, é isso. Não quero forçar a barra de ninguém, muito menos criticar ao Diego, tanto que citei no primeiro comentário que eu fiz que aquela forma de desenvolver serve plenamente para projetos com menos tráfego, menores e tudo mais e sei que ele entendeu isso. Mas só é um ponto de vista meu, que já trabalhei com projetos bem grandes e tive que recorrer a tais recursos, por mais que contra minha vontade no início.

Como eu disse, tudo é questão de adaptação. Portanto, antes de me criticarem, me mandarem a merda ou afins, perguntem, tentem saber porque isso, porque aquilo. Aí sim, depois vocês podem me xingar :D

Aquele abraço.

ps: novamente, antes de acharem algo "burro" ou "errado", procurem saber o porquê da utilização de tal forma, coisas burocráticas, etc. ;)
