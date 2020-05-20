import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as S from './styles';
import { themes } from '../../styles/themes';
import SocialMedias from '../social-medias';

export default function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  const location = typeof window !== 'undefined' && window.location.pathname;
  const { logo, avatar } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "logos/logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 59, maxWidth: 190) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        avatar: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 401, maxWidth: 401) {
              ...GatsbyImageSharpFluid_tracedSVG
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
        {location === '/' ? (
          <S.Title>Bruno Dulcetti</S.Title>
        ) : (
          <S.InternalTitle>Bruno Dulcetti</S.InternalTitle>
        )}
      </S.LogoLink>

      <S.Navigation className={isOpen && 'active'}>
        <S.Menu>
          <S.Thumb fluid={avatar.childImageSharp.fluid} />
          <S.Name>Bruno Dulcetti</S.Name>
          <S.List>
            <S.Item>
              <S.LinkMenu
                swipe
                direction="left"
                bg={themes.palette.general.bgTransition}
                duration={0.6}
                to="/">
                Home
              </S.LinkMenu>
            </S.Item>
            <S.Item>
              <S.LinkMenu
                swipe
                direction="left"
                bg={themes.palette.general.bgTransition}
                duration={0.6}
                to="/sobre">
                Quem é?
              </S.LinkMenu>
            </S.Item>
            <S.Item>
              <S.LinkMenu
                swipe
                direction="left"
                bg={themes.palette.general.bgTransition}
                duration={0.6}
                to="/contato">
                Contato
              </S.LinkMenu>
            </S.Item>
          </S.List>
        </S.Menu>

        <SocialMedias />
      </S.Navigation>

      <S.Text>© {new Date().getFullYear()}, Todos os fodasses reservados.</S.Text>
      <S.ToggleOpenClose onClick={toggleMenu} className={isOpen && 'active'}></S.ToggleOpenClose>
    </S.Sidebar>
  );
}
