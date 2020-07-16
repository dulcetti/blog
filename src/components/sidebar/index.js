import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as S from './styles';
import { themes } from '../../styles/themes';
import Navigation from '../navigation';
import Icons from '../icons';

export default function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  const [theme, setTheme] = useState(null);
  const location = typeof window !== 'undefined' && window.location.pathname;
  const isDarkMode = theme === 'dark';
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(window.__theme);
      window.__onThemeChange = () => setTheme(window.__theme);
    }
  }, []);

  const renderLamps = () => {
    return (
      <S.ToggleTheme onClick={toggleTheme} title={`Ligar o modo ${getInverseTheme()}`}>
        {isDarkMode ? <Icons name="light" /> : <Icons name="dark" />}
      </S.ToggleTheme>
    );
  };

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const toggleTheme = () => {
    window.__setPreferredTheme(getInverseTheme());

    if (window.DISQUS !== undefined) {
      window.setTimeout(() => {
        window.DISQUS.reset({
          reload: true,
        });
      }, 250);
    }
  };

  const getInverseTheme = () => (isDarkMode ? 'light' : 'dark');

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

      {renderLamps()}

      <Navigation isOpen={isOpen} />

      <S.Text>© {new Date().getFullYear()}, Todos os fodasses reservados.</S.Text>
      <S.SidebarIcons>
        <S.SearchLink to="/busca/">
          <S.SearchLinkWrap>
            <Icons name="search" />
          </S.SearchLinkWrap>
        </S.SearchLink>

        {renderLamps()}
        <S.ToggleOpenClose onClick={toggleMenu} className={isOpen && 'active'} />
      </S.SidebarIcons>
    </S.Sidebar>
  );
}
