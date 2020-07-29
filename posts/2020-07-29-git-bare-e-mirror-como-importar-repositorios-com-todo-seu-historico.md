---
title: Git bare e mirror, como importar repositórios com todo seu histórico
description: O git é uma ferramenta poderosa. Veja como importar repositórios
  com todo o seu histórico de commits e afins.
date: 2020-07-29T05:59:32.000Z
featuredImage: /uploads/bg-git.jpg
category: Git
---
E ae seus programador bunda rachada, tranquilidade? Nessa semana eu precisei fazer um fodasse rapidinho com o Git e pensei comigo "*Mas por que não colocar isso no Blog?*". E aqui estou eu. Mais um artigo sobre Git que pode ser útil pra você que precisa importar repositórios com todo seu histórico de outro local.

## Mas por que fazer isso?

Por vários motivos isso pode ocorrer. Seja porque sua empresa terceirizou um projeto e você precisa trazer de outro repositório, ou você quer mover um do Github/Bitbucket/Azure DevOps/Gitlab para outro cara dentro dessa lista.

![Ilustração com três bonecos, um laptop e um monitor com a marca do git](/uploads/ilustracao-git.webp)

Claro, não é algo que você vá precisar fazer sempre, mas é bom saber o que e como fazer quando for necessário.

## Beleza, DulSeven, mas como importar repositórios com todo seu histórico?

Simples, com apenas dois comandos que você já usou diversas vezes: `git clone` e `git push`.

### Mas como assim?

Calma! Os comandos são esses, porém, você precisa de um complemento em cada um deles. A primeira parte é importar o repositório que você quer espelhar:

```shell
git clone --bare URL_REPOSITORIO
```

![Terminal mostrando comando git clone --bare como exemplo](/uploads/tela-exemplo.png)

Na imagem acima eu mostro um exemplo do comando e depois listo os arquivos. Perceba que ele não fez um clone normal, você não consegue mexer no projeto como num outro qualquer.

No comando de clone eu acabei nomeando a pasta como `fodasse`, mas caso eu não tivesse feito isso o nome seria o `nome_do_repositorio.git`, no caso da minha imagem seria `blog.git`.

Esse complemento bare fica somente com o que tem na pasta `.git` dos repositórios, ele fica nu, como o termo diz, você não consegue trabalhar em cima dele.

### Chegou a vez do segundo comando: git push --mirror

Lembra que o segundo comando era outro simples que usamos sempre, o push? Só que com o complemento `--mirror`. A primeira coisa é entrar na pasta onde está o repositório nu (ui ui ui delícia) e depois criar um repositório onde quiser, Github/Bitbucket/Azure DevOps/Gitlab da vida. Ele precisa estar limpo, sem nenhum arquivo dentro.

Depois é só lançar o comando abaixo:

```shell
git push --mirror URL_NOVO_REPOSITORIO
```

Depois disso é só analisar seu novo repositório. Agora ele não estará mais limpo, terá todos os arquivos com seu histórico, suas branches e afins.

## Finalizando

Bom, a parte ruim que eu acho do **git clone bare** + **git push mirror** é que o histórico de Pull Requests se perde. Infelizmente você não terá isso na ferramenta onde você começar o novo repositório. Mas claro, todos os merges estarão no histórico, portanto, não é uma perda tão grande assim.

E ae, o que achou? Conhecia? Faz de outra forma? Conte nos comentários ;)

Aquele abraço.