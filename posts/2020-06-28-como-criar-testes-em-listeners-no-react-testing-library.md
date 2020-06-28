---
title: Como criar testes em listeners no React Testing Library
description: Criar testes é essencial e importante, certo? Às vezes pode ser
  meio chato testar listeners. Veja como criar testes em listeners no React
  Testing Library.
date: 2020-06-29 08:02:18
featuredImage: /uploads/react-testing-library.jpg
category: JavaScript
---
E ae, meus nobres, como estamos? Tentarei escrever um artigo rápido para algo que precisei num componente React que estou criando pra publicar no NPM. Como ele usar listener, eu tive que descobrir como criar testes em listeners no React Testing Library. E é simples.

## O que é o React Testing Library?

Bom, isso aí [você pode ver na documentação deles](https://testing-library.com/docs/react-testing-library/intro), não vou perder tempo explicando esse fodasse, beleza? Mas basicamente o [Testing Library](https://testing-library.com/) é uma ferramenta sagaz para você criar testes.

Ele tem vários para vários frameworks, bibliotecas, como Angular, Vue, Svelte, etc. E claro, vamos falar especificamente do React, pois o componente é pra React. Mas provavelmente a técnica será bem parecida para os outros.

## Beleza, Dulcetti, como criar testes em listeners no React Testing Library então?

Pra explicar, meu componente tem um `addEventListener` para verificar uma ação do usuário, que nesse exemplo é ele dar scroll na tela. Caso ele dê scroll a mais de 100px um fodasse aparece, caso o contrário ele some.

```typescript
import React, { useState } from 'react';

export default function ComponentFodasse() {
  const [fodasse, setFodasse] = useState<Boolean>(false);
  const myFunction = () => {
    window.scrollY > 100 ? setFodasse(true) : setFodasse(false);
  };

  window.addEventListener('scroll', myFunction, false);

  return <div className={`${showMenu ? '-visible' : ''} fodasse`}>Olar</div>;
}
```

Já quis mostrar como eu fiz, mas você pode usar qualquer listener, click, etc. Basicamente eu tenho meu estado chamado `fodasse` que vai ser atualizado quando meu `scrollY` for maior ou menor que 100.

Depois adicionei o listener e tá tudo certo para o componente. Agora vamos partir para os testes.

## Testando o listener do fodasse

![Ferramentas de teste Javascript](/uploads/testes.jpg)

Primeiro temos que importar os caras necessários:

```javascript
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ComponentFodasse from './component-fodasse';
```

Os pontos importantes são as importações do `fireEvent` e `render`, do React Testing Library. Depois disso podemos colocar o `describe` e `test` para criar o teste:

```javascript
describe('Componente do Fodasse', () => {
  test('O fodasse deve aparecer quando o scroll for maior que 100', () => {
    let scrolled = false;
    const { container } = render(<ComponentFodasse />);
  });
});
```

Nesse primeiro código temos uma variável `scrolled` que começa com `false`. Ela que vai dar o ok nos nossos expects. Na linha de baixo tem a execução do `render`.

Nesse `const` chamado `container` eu estou pegando a referência do DOM do elemento, com isso, eu posso capturar os elementos. O render possui várias queries pra você capturar, é só [visitar a documentação](https://testing-library.com/docs/react-testing-library/api#render). Tem até [um cheatsheet sagaz](https://github.com/testing-library/react-testing-library/raw/master/other/cheat-sheet.pdf) para você dar uma olhada.

### Mas é só isso, Dulcelino?

Claro que não, essas linhas de teste não servem pra porra nenhuma. Agora faltam outros pontos, vamos ao código:

```javascript
describe('Componente do Fodasse', () => {
  test('O fodasse deve aparecer quando o scroll for maior que 100', () => {
    let scrolled = false;
    const { container } = render(<ComponentFodasse />);

    expect(container.querySelector('.fodasse.-visible')).not.toBeNull();
    expect(scrolled).toBeTruthy();
  });
});
```

Colocamos os dois expects, o primeiro que verifica se o componente está visível, através do `querySelector` com a classe `-visible` e retorna se esse seletor não está nulo. No segundo ele espera que o `scrolled` esteja verdadeiro.

Mas claro que os testes não vão passar, precisamos colocar mais linhas, mas é sempre bom ver os erros primeiro. Vamos ao complemento:

```typescript
describe('Componente do Fodasse', () => {
  test('O fodasse deve aparecer quando o scroll for maior que 100', () => {
    let scrolled = false;
    const { container } = render(<ComponentFodasse />);

    window.addEventListener('scroll', () => (scrolled = true), false);

    fireEvent.scroll(window, { target: { scrollY: 110 } });
    expect(container.querySelector('.fodasse.-visible')).not.toBeNull();
    expect(scrolled).toBeTruthy();
  });
});
```

Apesar do componente já ter um listener, nos testes você precisa colocar outro. Na função ela transforma o `scrolled` em `true`. Depois lançamos um scroll do `fireEvent` passando `window` como parâmetro, e depois atribuindo 110 no `scrollY`.

Agora os expects já foram rodados sem erros, certo? Quase...

### Mas o que que falta agora, DulSeven?

![Tubos de ensaio e marca do React](/uploads/js-testing.jpg)

Em si os testes passaram, mas ele deve jogar um erro parecido com esse:

```shell
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
```

Pela mensagem já percebeu o que precisamos, certo? É só colocar um useEffect no component retornando o `removeEventListener`. Vamos ao código:

```typescript
import React, { useEffect, useState } from 'react';

export default function ComponentFodasse() {
  const [fodasse, setFodasse] = useState<Boolean>(false);

  useEffect(() => {
    const myFunction = () => {
      window.scrollY > 100 ? setFodasse(true) : setFodasse(false);
    };

    window.addEventListener('scroll', myFunction, false);

    return () => window.removeEventListener('scroll', myFunction, false);
  }, []);

  return <div className={`${showMenu ? '-visible' : ''} fodasse`}>Olar</div>;
}
```

## E nos cliques?

Claro, você pode fazer com cliques no botão, mas para esse pequeno detalhe é necessário adicionar uma coisinha a mais, além de trocar o `scroll` por `click` no `fireEvent`. Ou então usar o `userEvent`:

```javascript
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ComponentFodasse from './component-fodasse';

describe('Componente do Fodasse', () => {
  test('O fodasse deve aparecer quando clicar no botão', async () => {
    const { container, getByRole } = render(<ComponentFodasse />);

    await userEvent.click(getByRole('button'));
    expect(container.querySelector('.fodasse.-visible')).toBeNull();
  });
});
```

Mas claro, é um exemplo rápido e incompleto só pra mostrar como seria com o clique do mouse com o `userEvent`. Qualquer dúvida mandem um comentário aí que complemento pra você.

## Finalizando

Bom, é isso, o que acharam? Já precisaram usar alguma vez esse cara? Usam o React Testing Library? Usam algum outro? Comentem ae e vamos debater sobre testes. E caso estejam com dúvidas, sugestões ou correções pra essa bosta toda que eu fiz é só comentar ;)

Beijo na alcatra.