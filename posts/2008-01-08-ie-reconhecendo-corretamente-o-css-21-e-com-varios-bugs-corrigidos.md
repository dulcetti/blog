---
category: "CSS"
date: "2008-01-08"
description: ""
featuredImage: ""
title: "IE reconhecendo corretamente o CSS 2.1 e com vários bugs corrigidos"
---

[Meu camarada Mico publicou no Blog dele](http://www.elmicox.com/2008/contornar-varios-bugs-do-ie-numa-tacada-so/) e eu não tive como não publicar aqui. Talvez alguns não o sigam, etc.

Foi publicada uma Biblioteca JavaScript que resolve vários problemas, bugs, que o deixavam totalmente louco e descabelado porque o IE não aceitava.

### Como assim Bruno?

Quem nunca passou algum problema com o IE, nenhum bug ou defeito no CSS taque a primeira pedra. Creio eu que todos já passaram por isso. Tanto por seletores, problemas com background com PNG, etc. (Esse então, aff.)

### Meu Deus Dulcetti. É uma benção isso tudo!

Bom, eu espero que sim, mas não fique tão empolgado, não se esqueça que é o IE e tudo pode acontecer. Mas pelas [explicações dadas](http://dean.edwards.name/IE7/) pelos sujeitos que desenvolveram essa Biblioteca, o IE 5, 6 e 7 ficariam como o IE 8, com todas as funcionalidades resolvidas:

- supports the following CSS selectors:
    1. parent > child
    2. adjacent + sibling
    3. adjacent ~ sibling
    4. \[attr\], \[attr="value"\], \[attr~="value"\] etc
    5. .multiple.classes (fixes bug)
    6. :hover, :active, :focus (for all elements)
    7. :first-child, :last-child, only-child, nth-child, nth-last-child
    8. :check, :disabled, :enabled
    9. :empty, :contains(), :not()
    10. :before/:after/content:
    11. :lang()
- supports imported style sheets
- preserves the cascade of the style sheet
- does not alter the document structure
- does not repeatedly query the DOM tree using JavaScript
- uses pure CSS to enforce style sheet rules
- supports the W3C box model in both standards and quirks mode
- supports fixed positioning (flicker free)
- supports overflow:visible
- supports min/max-width/height
- fixes broken (X)HTML elements (abbr, object)
- standardised forms behavior
- supports PNG alpha transparency

É bem pequena, tem apenas 11kb e funciona a partir do IE 5+ pra Windows. Fora que basta somente uma linha de código, um src de um javascript, que todos os seus problemas acabam. (Se Deus quiser).

<!--\[if lt IE 8\]>
<script src="http://ie7-js.googlecode.com/svn/version/xx.x/IE8.js" type="text/javascript"></script>
<!\[endif\]-->

### Sucesso Total Dulcetti!

Hey rapaz, isso quem fala sou eu! Mas tudo bem, eu deixo vc falar tb :P

Bom, creio que você não vai querer matar todos os desenvolvedores do IE agora. Pelo menos por enquanto né.

### Finalizando...

É isso. Caso você ache algum problema, por favor, não venha perguntar a mim, me mandar email. Vá reclamar com quem fez ok? Muito obrigado, volte sempre.

\[BBL\]acessibilidade, bugs, css, dicas, explorer, ie, tecnologia, web-standards, webstandards\[/BBL\]
