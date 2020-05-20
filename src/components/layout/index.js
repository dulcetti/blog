import React from 'react';
import PropTypes from 'prop-types';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

import { GlobalStyle } from '../../styles/reset';
import { Fonts } from '../../styles/fonts';
import { Sidebar, Svgs } from '../index';
import * as S from './styles';

export default function Layout({ children }) {
  return (
    <S.LayoutWrapper>
      <Svgs />
      <GlobalStyle />
      <Fonts />
      <S.LayoutMain>{children}</S.LayoutMain>
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
    </S.LayoutWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
