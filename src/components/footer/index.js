import React from 'react';

import * as S from './styles';

export default function Footer() {
  return (
    <S.Footer>
      <S.Wrap>
        <S.Text>© {new Date().getFullYear()}, Todos os fodasses reservados.</S.Text>
      </S.Wrap>
    </S.Footer>
  );
}
