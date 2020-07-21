---
title: Como resolver erros no typescript com atributos nos componentes em React
description: Trabalhar com typescript faz com que você precise tomar cuidados
  com tipagem e outras coisas. Veja como resolver problemas ao adicionar
  atributos/props em componentes.
date: 2020-07-20T08:27:31.000Z
featuredImage: /uploads/typescript-in-react.jpg
category: JavaScript
---
Como estamos, meus nobres codeiros, cafeteiros e cervejeiros. Duas semanas sem escrever e já fico até preocupado com a contribuição, mas aqui está o artigo. Esse será um artigo rápido, prometo, que falarei sobre typescript, react e erros.

## React com Typescript é lindo

Sim, é possível. Confesso que tive meu certo preconceito com [Typescript](https://www.typescriptlang.org/), demorei muito pra aceitar, mas agora que comecei a mexer eu não quero outra coisa. Ok, acho que estou exagerando um pouco, nós ficamos muito viciados em não tipar com JavaScript, o que faz que fiquemos putos em tipar algo.

![Ilustração mostrando uma pitada de typescript numa carne com o logo do Javascript](/uploads/typescript-react-illustration.jpg)

Mas confesso que isso tem feito com que eu não cometa alguns erros, fora que padroniza o código, dentre outras coisas. Bom, mas que se foda, vamos falar do que eu quero contar nesse artigo...

## React + Typescript + erros com atributos

Estou migrando três projeto em [Gatsby](https://www.gatsbyjs.org/) / React para o [NX](https://nx.dev/react). Em breve falarei mais sobre ele aqui no blog, é uma ferramenta fodástica. Ele por padrão usa Typescript, mas se você quiser pode usar JS, sem problemas.

### Qual erro que você tomou, Dulcelino? Conta logo...

![Erro no código feito em React / Javascript](/uploads/print-erro-codigo.png)

Calma, caralha. Veja na imagem acima. Antes de você perguntar por que eu usei um atributo `background`, que não existe, no React com [`styled-components`](https://styled-components.com/) nós podemos usar atributos e aplicar no CSS-in-JS como props. Nesse caso nós pegamos o caminho de uma imagem externa e usamos no estilo.

Veja o erro completo como texto:

```shell
(JSX attribute) background: string
No overload matches this call.
  Overload 1 of 2, '(props: Pick<Pick<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "slot" | "style" | ... 252 more ... | "is"> & { ...; }, "slot" | ... 254 more ... | "is"> & Partial<...>, "slot" | ... 254 more ... | "is"> & { ...; } & { ...; }): ReactElement<...>', gave the following error.
    Type '{ children: Element[]; background: string; }' is not assignable to type 'IntrinsicAttributes & Pick<Pick<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "slot" | ... 253 more ... | "is"> & { ...; }, "slot" | ... 254 more ... | "is"> & Partial<...>, "slot" | ... 254 more ... | "is"> & { ...; } & { ...; }'.
    Property 'background' does not exist on type 'IntrinsicAttributes & Pick<Pick<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "slot" | ... 253 more ... | "is"> & { ...; }, "slot" | ... 254 more ... | "is"> & Partial<...>, "slot" | ... 254 more ... | "is"> & { ...; } & { ...; }'.
    Overload 2 of 2, '(props: StyledComponentPropsWithAs<"div", any, {}, never>): ReactElement<StyledComponentPropsWithAs<"div", any, {}, never>, string | ... 1 more ... | (new (props: any) => Component<...>)>', gave the following error.
    Type '{ children: Element[]; background: string; }' is not assignable to type 'IntrinsicAttributes & Pick<Pick<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "slot" | ... 253 more ... | "is"> & { ...; }, "slot" | ... 254 more ... | "is"> & Partial<...>, "slot" | ... 254 more ... | "is"> & { ...; } & { ...; }'.
    Property 'background' does not exist on type 'IntrinsicAttributes & Pick<Pick<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "slot" | ... 253 more ... | "is"> & { ...; }, "slot" | ... 254 more ... | "is"> & Partial<...>, "slot" | ... 254 more ... | "is"> & { ...; } & { ...; }'.ts(2769)
```

No código CSS nós temos essa parte aqui pra aplicar:

```css
export const Banner = styled.div`
  background: #000 url(${(props) => props.theme.background}) no-repeat;
`;
```

Como deu pra ver, pegamos via props o background que estiver no theme, que é [adicionado via ThemeProvider](https://styled-components.com/docs/advanced). Se quiser saber mais é só clicar no link anterior aí, acho uma boa usar ;)

Voltando ao problema, viram que dá erro, pois como o elemento é uma div e essa tag não possuí um atributo chamado `background`, aí ele fica reclamando disso.

## Beleza, Dulça, entendi. Mas como eu resolvo isso?

Simples, serão dois passos. O primeiro é adicionar um type para sua tag dizendo que ela terá um atributo background que será uma string, depois é só entrar no seu código de estilos do `styled-componenets` e trocar o seguinte código:

```css
export const Banner = styled.div`
```

por esse:

```css
type PropTypeBg = {
  background: string;
};

export const Banner = styled.div.attrs((props: PropTypeBg) => ({
  background: props.background,
}))<PropTypeBg>`
```

Perceba o seguinte:

* O tipo foi adicionado. Eu batizei de `PropTypeBg`, fique à vontade de chamar com o fodasse que quiser;
* Dentro desse tipo foi adicionado o parâmetro background. Caso você precise de mais, sem problemas, só adicionar outros;
* Na exportação do Banner nós vemos que o styled chama a tag e depois um nó `attrs`, simples assim. Nele você passa uma arrow function passando o props com o tipo que você acabou de criar, no meu caso foi o `PropTypeBg;`
* Feito isso, você diz que o atributo background que será utilzado no estilo recebe o valor via props;
* Depois é só festa, sem erros, sem nada.

O código completo fica assim:

```css
type PropTypeBg = {
  background: string;
};

export const Banner = styled.div.attrs((props: PropTypeBg) => ({
  background: props.background,
}))<PropTypeBg>`
  background: #000 url(${(props) => props.theme.background}) no-repeat;
`;
```

## Finalizando

Já tinha passado por esse erro? Ajudou em algo? Resolveu de alguma outra forma melhor? Manda aí, sempre bom refatorar o código ;)

Ah, se quiser aprender mais sobre Typescript, e de graça, é só assistir o [mini curso do Will sobre Typescript](https://www.youtube.com/watch?v=mRixno_uE2o&list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_).

Beijo na alcatra...