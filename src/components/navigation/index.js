import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import SocialMedias from '../social-medias';

import * as S from './styles';
import { themes } from '../../styles/themes';
import { links } from './links';

export default function Navigation({ isOpen }) {
  const { avatar } = useStaticQuery(
    graphql`
      query {
        avatar: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 401, maxWidth: 401) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  );

  return (
    <S.Navigation className={isOpen && 'active'}>
      <S.Menu>
        <AniLink swipe direction="left" bg={themes.bgTransition} duration={0.6} to="/">
          <S.Thumb fluid={avatar.childImageSharp.fluid} />
        </AniLink>

        <S.Name>
          <AniLink swipe direction="left" bg={themes.bgTransition} duration={0.6} to="/">
            Bruno Dulcetti
          </AniLink>
        </S.Name>
        <S.List>
          {links.map((link, index) => (
            <S.Item key={index}>
              <S.LinkMenu
                activeClassName="active"
                bg={themes.bgTransition}
                direction="left"
                duration={0.6}
                swipe
                to={link.slug}>
                <S.LinkLabel>{link.label}</S.LinkLabel>
              </S.LinkMenu>
            </S.Item>
          ))}
        </S.List>
      </S.Menu>

      <SocialMedias />
    </S.Navigation>
  );
}
