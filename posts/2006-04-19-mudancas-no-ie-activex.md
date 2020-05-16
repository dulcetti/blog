---
author: bruno-dulcetti
category: Tecnologia
date: 2006-04-19T20:41:28.000Z
description: ''
image: null
slug: mudancas-no-ie-activex
templateKey: blog-post
title: 'Mudanças no IE - ActiveX'
---

E ae pessoal, tudo certo? Estou aqui novamente para falar de um problema que creio que alguns aqui já presenciaram.

Não falarei de webstandards agora e sim do Flash e do problema com o i.e. Como muitos devem saber, a Microsoft perdeu uma ação judicial, ficando por isso, sem os direito de "acoplar" o Flash Player dentro do seu browser, nosso famoso internet explorer.

A solução para a Microsoft era desenvolver um componente ActiveX com que fizesse que o player funcionasse corretamente. Mas creio que todos os usuários teria que instalar alguns componentes, etc... Não sei muito ao certo.

A Adobe publicou um modo para fazer com que o desenvolvedor exporte o swf e funcione dentro do i.e. sem problemas. Um dos problemas é uma <a href="/assets/images/posts/erro.gif">borda irritante ao passar o mouse em cima do swf</a>, no browser.

## Como resolver?

Simples, vá até o <a href="http://www.macromedia.com/support/flash/downloads.html#flash8">Flash Support Center Downloads page</a> e faça o download da extensão. <a href="/assets/images/posts/tela01.gif">Veja esta imagem para saber qual baixar</a>.

Feito isso, descompacte o arquivo em qualquer lugar do seu disco e depois abra o Macromedia Extension Manager e escolha o Flash como aplicativo e clique em <a href="/assets/images/posts/tela02.gif">Install New Extension</a>. Aceite o termo e depois, <a href="/assets/images/posts/tela03.gif">aparecerá a nova extensão instalada no Macromedia Extension Manager</a>

## Mão na massa

Agora vamos meter a mão na massa e abrir o fla no Flash 8 que você quer disponibilizar. Feito isso, Vá em File/Publish Settings.

Na aba Formats, selecione os formatos Flash (.swf) e HTML (.html). Depois <a href="/assets/images/posts/tela04.gif">vá até a aba HTML</a>.

Lá terá a opção Template, que terá a opção "Flash only" marcada como padrão. Modifique esta opção para <a href="/assets/images/posts/tela05.gif">Active Content Update - HTTP ou Active Content Update - HTTPS</a> (para ambientes seguros). Depois disso, clique em Publish.

## Terminou? Ainda não...

Depois de exportar, você terá que selecionar o swf para que o Flash exporte um arquivo .js que fará com que o i.e. mostre corretamente o swf no browser.

Para fazer isso, clique em <a href="/assets/images/posts/tela06.gif">Commands/Apply Active Content Update</a>. Depois, selecione o arquivo .html correspondente ao swf exportado e depois clique em Abrir.

## Finalmente... :D

Pronto. Agora é só você enviar via FTP o arquivo html, swf e js para a mesma pasta que estará funcionando sem problemas. ;)

Qualquer dúvida ou correção, é só publicar, me falar que corrijo aqui...
Aquele abraço.
