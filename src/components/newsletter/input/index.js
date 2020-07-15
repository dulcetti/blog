import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function Input({ name }) {
  return (
    <S.Label for={name}>
      <S.InputComponent name={name} id={name} />
      <S.Message>Olar</S.Message>
    </S.Label>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
};
