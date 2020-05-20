import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as S from './styles';
import Icons from '../icons/index';

export default function Sidebar({ siteTitle }) {
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
      <S.LogoLink cover direction="left" bg="#F7F6F1" duration={0.6} to="/">
        <Img fluid={logo.childImageSharp.fluid} />
        {location === '/' ? (
          <S.Title>{siteTitle}</S.Title>
        ) : (
          <S.InternalTitle>{siteTitle}</S.InternalTitle>
        )}
      </S.LogoLink>

      <S.Navigation className={isOpen && 'active'}>
        <S.Menu>
          <S.Thumb fluid={avatar.childImageSharp.fluid} />
          <S.Name>Bruno Dulcetti</S.Name>
          <S.List>
            <S.Item>
              <S.LinkMenu cover direction="left" bg="#F7F6F1" duration={0.6} to="/">
                Home
              </S.LinkMenu>
            </S.Item>
            <S.Item>
              <S.LinkMenu cover direction="left" bg="#F7F6F1" duration={0.6} to="/sobre">
                Quem é?
              </S.LinkMenu>
            </S.Item>
            <S.Item>
              <S.LinkMenu cover direction="left" bg="#F7F6F1" duration={0.6} to="/contato">
                Contato
              </S.LinkMenu>
            </S.Item>
          </S.List>
        </S.Menu>

        <S.SocialMedias>
          <S.Media>
            <a href="https://github.com/dulcetti" target="_blank" rel="noopener noreferrer">
              <Icons name="github" />
            </a>
          </S.Media>
          <S.Media>
            <a
              href="https://www.linkedin.com/in/dulcetti/"
              target="_blank"
              rel="noopener noreferrer">
              <Icons name="linkedin" />
            </a>
          </S.Media>
          <S.Media>
            <a href="https://twitter.com/dulcetti" target="_blank" rel="noopener noreferrer">
              <Icons name="twitter" />
            </a>
          </S.Media>
          <S.Media>
            <a href="https://instagram.com/dulcetti" target="_blank" rel="noopener noreferrer">
              <Icons name="instagram" />
            </a>
          </S.Media>
          <S.Media>
            <a href="https://facebook.com/dulcetti" target="_blank" rel="noopener noreferrer">
              <Icons name="facebook" />
            </a>
          </S.Media>
        </S.SocialMedias>
      </S.Navigation>

      <S.Text>© {new Date().getFullYear()}, Todos os fodasses reservados.</S.Text>
      <S.ToggleOpenClose onClick={toggleMenu} className={isOpen && 'active'}></S.ToggleOpenClose>
    </S.Sidebar>
  );
}
