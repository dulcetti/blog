import React from 'react';
import * as S from './styles';

import Icons from '../icons';

export default function SearchField() {
  return (
    <S.Box>
      <S.Icon>
        <Icons name="search" />
      </S.Icon>
      <S.InputSearch
        type="search"
        placeholder="Procure algum fodasse aqui"
        aria-label="Search through site content"
      />
    </S.Box>
  );
}
