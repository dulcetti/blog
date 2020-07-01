---
title: Como criar testes em listeners no React Testing Library
description: Criar testes é essencial e importante, certo? Às vezes pode ser
  meio chato testar listeners. Veja como criar testes em listeners no React
  Testing Library.
date: 2020-06-29T08:02:18.000Z
featuredImage: /uploads/react-testing-library.jpg
category: JavaScript
---
E ae, meus nobres, como estamos? Tentarei escrever um artigo rápido para algo que precisei num componente React que estou criando pra publicar no NPM. Como ele usar listener, eu tive que descobrir como criar testes em listeners no React Testing Library. E é simples.

## O que é o React Testing Library?

Bom, isso aí [você pode ver na documentação deles](https://testing-library.com/docs/react-testing-library/intro), não vou perder tempo explicando esse fodasse, beleza? Mas basicamente o [Testing Library](https://testing-library.com/) é uma ferramenta sagaz para você criar testes.

Ele tem vários para vários frameworks, bibliotecas, como Angular, Vue, Svelte, etc. E claro, vamos falar especificamente do React, pois o componente é pra React. Mas provavelmente a técnica será bem parecida para os outros.

## Beleza, Dulcetti, como criar testes em listeners no React Testing Library então?

Pra explicar, meu componente tem um `addEventListener` para verificar uma ação do usuário, que nesse exemplo é ele dar scroll na tela. Caso ele dê scroll a mais de 100px um fodasse aparece. Caso o contrário ele some.

```typescript
import React, { useState } from 'react';

export default function ComponentFodasse() {
  const [fodasse, setFodasse] = useState<Boolean>(false);
  const myFunction = () => {
    window.scrollY > 100 ? setFodasse(true) : setFodasse(false);
  };

  window.addEventListener('scroll', myFunction, false);

  return <div>{fodasse && <p>Olar</p>}</div>;
}
```

Já quis mostrar como eu fiz, mas você pode usar qualquer listener, click, etc. Basicamente eu tenho meu state chamado `fodasse` que vai mostrar ou esconder o template do componente quando o `scrollY` for maior ou menor que 100.

Depois adicionei o listener e tá tudo certo para o componente. Agora vamos partir para os testes.

## Testando o listener do fodasse

![Ferramentas de teste Javascript](/uploads/testes.jpg)

Primeiro temos que importar os caras necessários:

```javascript
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ComponentFodasse from './component-fodasse';
```

Os pontos importantes são as importações do `fireEvent` e `render`, do React Testing Library. Depois disso podemos colocar o `describe` e `test` para criar o teste:

```javascript
describe('Componente do Fodasse', () => {
  test('O fodasse deve aparecer quando o scroll for maior que 100', () => {
    let scrolled = false;
    render(<ComponentFodasse />);
  });
});
```

Nesse primeiro código temos uma variável `scrolled` que começa com `false`. Criei só pra não deixar a função do listener vazia, reforçando nossos testes. Na linha de baixo tem a execução do `render`.

Em alguns casos você verá uma declaração `const` chamado um `container`, mas em si já não é mais uma boa prática, como o [Kent Dodds](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library) já comentou. Caso você esteja usando eu mostro uma forma de corrigir um possível bug ;)

O render possui uma [documentação](https://testing-library.com/docs/react-testing-library/api#render) sagaz. Tem até [um cheatsheet sagaz](https://github.com/testing-library/react-testing-library/raw/master/other/cheat-sheet.pdf) para você dar uma olhada.

### Mas é só isso, Dulcelino?

Claro que não, essas linhas de teste não servem pra porra nenhuma. Agora faltam outros pontos, vamos ao código:

```javascript
describe('Componente do Fodasse', () => {
  test('O fodasse deve aparecer quando o scroll for maior que 100', () => {
    let scrolled = false;
    render(<ComponentFodasse />);

    expect(screen.getByText('Olar'));
    expect(scrolled).toBeTruthy();
  });
});
```

Colocamos os dois expects, o primeiro que verifica se o texto `Olar` está disponível através do `screen`. No segundo ele espera que o `scrolled` esteja verdadeiro.

Mas claro que os testes não vão passar, precisamos colocar mais linhas, mas é sempre bom ver os erros primeiro. Vamos ao complemento:

```typescript
describe('Componente do Fodasse', () => {
  test('O fodasse deve aparecer quando o scroll for maior que 100', () => {
    let scrolled = false;
    render(<ComponentFodasse />);

    window.addEventListener('scroll', () => (scrolled = !scrolled), false);

    fireEvent.scroll(window, { target: { scrollY: 110 } });
    expect(screen.getByText('Olar'));
    expect(scrolled).toBeTruthy();

    fireEvent.scroll(window, { target: { scrollY: 0 } });
    expect(scrolled).toBeFalsy();
  });
});
```

Apesar do componente já ter um listener, nos testes você precisa colocar outro. Na função ela faz um `toggle` no `scrolled`. Depois lançamos um scroll do `fireEvent` passando `window` como parâmetro, e depois atribuindo 110 no `scrollY`.

Aí os expects funcionam de boa. Ou talvez não...

### Mas o que que falta agora, DulSeven?

![Tubos de ensaio e marca do React](/uploads/js-testing.jpg)

Em si os testes passaram, mas caso você queira ou esteja usando o `container` no `render`, ele deve jogar um erro parecido com esse:

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

  return <div>{fodasse && <p>Olar</p>}</div>;
}
```

Mas o bom é que já deixa o código até melhor.

## E nos cliques?

Claro, você pode fazer com cliques no botão, mas para esse pequeno detalhe é necessário adicionar, mudar umas coisinhas:

```javascript
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ComponentFodasse from './social-share';

describe('Componente do Fodasse', () => {
  test('O fodasse deve aparecer quando clicar no botão', () => {
    render(<ComponentFodasse />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText('Olar'));
  });
});
```

Deu pra ver que eu troquei o `scroll` por `click` no `fireEvent`. Ou então você pode usar o `userEvent`:

```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ComponentFodasse from './social-share';

describe('Componente do Fodasse', () => {
  test('O fodasse deve aparecer quando clicar no botão', () => {
    render(<ComponentFodasse />);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(screen.getByText('Olar'));
  });
});
```

Usar o `userEvent` é uma boa prática, mas cuidado, não são todos os eventos que são supotados, como o scroll, por exemplo.

Mas voltando ao código, nosso componente ficaria assim, mais simplificado:

```jsx
import React, { useState } from 'react';

export default function ComponentFodasse() {
  const [fodasse, setFodasse] = useState<Boolean>(false);

  const myFunction = () => setFodasse(!fodasse);

  return (
    <div>
      {fodasse && <p>Olar</p>}
      <button onClick={myFunction}>Clica logo aqui</button>
    </div>
  );
}
```

Mas claro, é um exemplo rápido e incompleto só pra mostrar como seria com o clique do mouse. Qualquer dúvida mandem um comentário aí que complemento pra você.

## Finalizando

Bom, é isso, o que acharam? Já precisaram usar alguma vez esse cara? Usam o React Testing Library? Usam algum outro? Comentem ae e vamos debater sobre testes. E caso estejam com dúvidas, sugestões ou correções pra essa bosta toda que eu fiz é só comentar ;)

Beijo na alcatra.