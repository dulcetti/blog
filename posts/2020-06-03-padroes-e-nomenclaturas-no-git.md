---
title: Padroes e nomenclaturas no Git
description: Como você cria suas branches? E seus commits? Possui padrões? Veja
  como eu faço...
date: 2020-06-02 10:13:07
featuredImage: /uploads/git-log.jpg
category: Git
---
E ae, meus nobres "codeiros" adoradores de uma cerveja e/ou café, como estamos? Falarei aqui sobre algumas práticas de padrões e nomenclaturas no Git. Sim, será meu primeiro artigo sobre Git, ferramenta que gosto pra meireles.

## Padrão pra quê? Faz de qualquer jeito e que se foda...

Beleza, vai na fé, portanto, espero nunca ter que trabalhar contigo ou contribuir em algum repositório seu. Brincadeiras à parte, vou mostrar aqui algumas coisas que uso na Wooza, empresa onde eu trabalho e nos meus projetos pessoais.

## Padrões nos nomes de branches

Em termos de **padrões e nomenclaturas no Git**, acho esse ponto importante, mas confesso que não tão primordial assim. Mas acredito que é sempre sagaz ter um padrão de nomenclaturas e um nome explicativo nas branches.

### Os prefixos

![Desenho ilustrando branches no Git](/uploads/branching.png "Desenho ilustrando branches no Git")

Sim, eu uso prefixos pré-definidos para criar uma branch. Segue abaixo a lista:

* bugfix/
* feature/
* hotfix/
* improvement/

Em si já dá pra saber um pouco sobre cada prefixo, mas vamos com uma breve explicação sobre eles...

#### bugfix/

Como o próprio nome já diz, é um BUG e precisa ser corrigido de forma imediata, o quanto antes. Num outro artigo eu explico melhor a utilização desse cara e *branches principais*.

#### feature/

O nome já diz também o que é, uma nova feature que será adicionada ao projeto, componente e afins.

#### hotfix/

Às vezes esse termo pode ser usado de outras formas, até mesmo para usar no lugar do bugfix. Porém, eu prefiro separar, deixar com semânticas diferentes.

Ele é bem similar ao bugfix/, porém, ele não é um BUG, mas sim uma correção, seja ela de cor, textos, alterações não tão urgentes, que não signifiquem BUG's.

#### improvement/

O nome já mostra para o que serve. Em si é uma melhoria para um fodasse já existente, seja de performance, de escrita, de layout, etc.

## Sagaz, Dulcetti. Só faltou falar dos commits

Sim, sim. Em termos de padrões e nomenclaturas no Git, acho essa parte essencial. Eu gosto de analisar um PR olhando as mensagens de commit. Se elas forem bem explicativas, já consigo saber o porquê daquele PR.

Bom, claro, em si o PR seria pra isso, com sua descrição, etc. Mas isso pode ficar para mais um artigo futuro ;)