---
title: Como colocar um feed no seu Blog com o Gatsby
description: O Gatsby é uma ótima ferramenta que gera sites estáticos, como
  blogs. Veja como colocar um feed no seu Blog com o Gatsby
date: 2020-06-08T04:47:19.000Z
featuredImage: /uploads/dicaprio-gatsby-feed.jpg
category: JavaScript
---
Olar, vem sempre aqui? Eu nem tanto, mas vou começar a vir mais. E agora falarei de algo importante para qualquer caboclo que quer criar um Blog, que é como colocar um feed no seu blog com o Gatsby.

## Feed? Você ainda usa isso?

Confesso que vira e mexe eu me pergunto isso e pergunto para outros desenvolvedores, pessoas, etc. Eu gosto muito de Feeds, acho útil, porém, ele foi perdendo muita força com o passar do tempo.

### Mas que porra é essa de Feed?

![Feeds components](/uploads/steps-feeds-gatsby.png)

Não vou me alongar muito nisso não, beleza? Mas basicamente você pode ver como um canal web para consumo de um conteúdo que o disponibiliza. Imagina um blog que possua uma postagem diária. Esse feed contém todo os artigos postagos nesse blog.

Mal e porcamente falando, seria um XML com uma listagem de todos os seus posts.

Hoje nós temos Push Notifications para nos avisar quando recebemos uma mensagem no Whatsapp, por exemplo, mas antigamente não tínhamos isso. Então como você poderia saber que um determinado blog teve uma postagem?

Sim, entrando todo dia naquele blog. Um porre, certo? Tempos atrás nós usávamos os leitores de Feed, o grande favorito da galera era o Google Reader. Basicamente todo mundo da Blogosfera há uns 10, 13 anos atrás o utilizava.

Fiquei até bolado quando descobri que o Google ia descontinuar.

### Beleza, história legal, mas aonde você quer chegar?

![Homem meditando, imagem do Feedly](/uploads/feedly.jpg)

Em lugar nenhum. Hoje nem temos tantos leitores de Feed, mas eu ainda utilizo o [Feedly](https://feedly.com/). Pra mim é o melhor app para isso. Tem a versão gratuita que me atende muito bem.

Mas resumindo, vai que um monte dos seus leitores usam feed, você não gostaria de facilitar a vida pra ele e fornecer um? No WordPress isso é automático, mas no Gatsby, não.

Caso você queira saber mais a [história sobre o Feed, veja lá na Wikipedia](https://pt.wikipedia.org/wiki/Feed), minha explicação ficou bem bosta.

## Beleza, Dulça, mas como colocar um feed no seu blog com o Gatsby então?

Quase tudo no Gatsby é baseado em Plugins. Como o [Will](https://willianjusten.com.br/) disse uma vez, o Gatsby é o novo jQuery, tem plugin pra tudo. Daqui a pouco você vai perguntar como fazer algo em JavaScript e vão te indicar um plugin do Gatsby.

### Conheça o gatsby-plugin-feed

Instalando o [gatsby-plugin-feed](https://www.gatsbyjs.org/packages/gatsby-plugin-feed/) e fazendo poucas configurações, seu blog já terá um feed. E como a cada post você gera um build, seu feed será automaticamente alimentado ;)

Rode o comando abaixo no seu projeto:

```shell
yarn add gatsby-plugin-feed
```

Eu uso Yarn, mas caso você use o npm, troque o comando.

Agora você precisa editar o seu arquivo `gatsby-config.js` na raiz do seu projeto. Ele tem a seguinte estrutura:

```javascript
module.exports = {
  // ...suas configurações anteriores
  plugins: [
    // seus outros plugins
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      fields {
                        slug
                      }
                      frontmatter {
                        date
                        description
                        title
                      }
                      excerpt
                      html
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "O nome do seu Blog vem aqui",
            // Configurações opcionais
            // Esse cara serve para você colocar onde você quer que o feed se alimente. Por exemplo, você tem um site pessoal e tem um blog dentro dele com a url www.meusiteboladao.com/blog/
            // Aí você vai colocar o ^/blog/ nessa chave
            match: "^/url-que-voce-quiser/",
            // Mais um opcional que eu acho útil caso você use o Feedburner, como eu.
            // É algo do tempo do ronca, eu sei, mas vai que tem gente que ainda o utiliza, então vale deixar já configurado
            link: "https://feeds.feedburner.com/SUA-URL-DE-PREFIXO-NO-FEEDBURNER",
          },
        ],
      },
    },
  ],
}
```

### Não entendi muita coisa desse fodasse aí não

De boa, nem precisa entender. #Brinks, vou tentar explicar alguns pontos ali.

1. Basicamente ele fez uma query no graphql pra pegar os metadados do seu site e alimentar a carcaça do seu Feed com o título, descrição e url
2. No nó de feeds ele fez uma query com o `allMarkdownRemark`, que captura todos os seus artigos, deixa em ordem descrescente e passa a data formatada
3. Nessa query ele retorna o HTML do artigo, um resumo, o slug do artigo, o título e a data
4. E claro, ele faz um serialize com as informações do seu site e seus artigos, fazendo um map deles e alimentado toda a estrutura do seu Feed
5. Tem o nó onde você pode colocar o output. O padrão é rss.xml
6. Tem o nó do título do seu Feed. Coloque o que quiser.
7. O match eu expliquei ali nos comentários, dá uma lida, vai =P
8. O link é para colocar a sua URL do FeedBurner, caso você utilize

#### Mas nem tudo são flores pra quem usa o Feedburner...

Claro, sempre tem um porém (ou vários). O grande problema de usar o código anterior é que o Feed fica grande por causa do HTML dos artigos. E o problema é que o FeedBurner tem limite para Feeds de 1MB. Sim, eu achei bem rídiculo, tamanho completamente pequeno.

Para resolver esse problema é só alterar a query que está dentro do nó **feeds**:

```javascript
query: `
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            description
            title
          }
          excerpt
        }
      }
    }
  }
`,
```

Eu removi o nó `html`, que estava abaixo do `excerpt`. A parte ruim disso é que o leitor não vai conseguir ver o artigo completo no Feed, algo que eu não curto muito. Mas infelizmente é uma limitação do FeedBurner. Em si eu vejo até se eu cago pra ele e deixo tudo completo, mas também nem sei, preciso ver quem usa Feed ainda, né?

#### Atualizando informações no FeedBurner

![Tela do Feedburner](/uploads/feedburner.jpg)

Feito isso, você precisa verificar se no seu FeedBurner está com as informações corretas. Como meu blog antes ficava no sufixo /blog/, a URL do feed era http://www.brunodulcetti.com/blog/feed, uma URL padrão dos feeds do WordPress. Aí eu precisei atualizar para a URL que o plugin gerou.

## Finalizando

Bom, é simples assim. Agora você pode ter um feed do seu blog disponível para seus usuários. Caso queira ver mais detalhes, é [só visitar a URL do plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-feed/).

Você pode ver também um site que o Gatsby criou para tirar suas [dúvidas para quando quiser criar um Feed](https://www.gatsbyjs.org/docs/adding-an-rss-feed/).