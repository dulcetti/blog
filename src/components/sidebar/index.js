import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as S from './styles';
import { themes } from '../../styles/themes';
import Navigation from '../navigation';
import Icons from '../icons';

export default function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  const location = typeof window !== 'undefined' && window.location.pathname;
  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "logos/logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 59, maxWidth: 190) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  );

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <S.Sidebar>
      <S.LogoLink
        swipe
        direction="left"
        bg={themes.palette.general.bgTransition}
        duration={0.6}
        to="/">
        <Img fluid={logo.childImageSharp.fluid} />
        {location === '/' || location === '/sobre/' ? (
          <S.Title>Bruno Dulcetti</S.Title>
        ) : (
          <S.InternalTitle>Bruno Dulcetti</S.InternalTitle>
        )}
      </S.LogoLink>

      <Navigation isOpen={isOpen} />

      <S.Text>© {new Date().getFullYear()}, Todos os fodasses reservados.</S.Text>
      <S.SidebarIcons>
        <S.SearchLink to="/busca/">
          <S.SearchLinkWrap>
            <Icons name="search" />
          </S.SearchLinkWrap>
        </S.SearchLink>
        <S.ToggleOpenClose onClick={toggleMenu} className={isOpen && 'active'}></S.ToggleOpenClose>
      </S.SidebarIcons>
    </S.Sidebar>
  );
}
