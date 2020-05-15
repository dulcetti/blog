import React from 'react';

import * as S from './styles';

export default function Navigation() {
  return (
    <S.Navigation>
      <S.List>
        <S.Item>
          <S.LinkNavigation to="/">Home</S.LinkNavigation>
        </S.Item>
        <S.Item>
          <S.LinkNavigation to="/sobre">Quem é?</S.LinkNavigation>
        </S.Item>
        <S.Item>
          <S.LinkNavigation to="/curriculo">Currículo</S.LinkNavigation>
        </S.Item>
        <S.Item>
          <S.LinkNavigation to="/contato">Contato</S.LinkNavigation>
        </S.Item>
      </S.List>
    </S.Navigation>
  );
}
