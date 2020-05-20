import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { themes } from '../../styles/themes';

export const Post = styled.div`
  min-height: 200px;
  text-align: center;
`;

export const LinkPost = styled(AniLink)`
  color: #fff;
  display: block;
  overflow: hidden;
  position: relative;

  picture > img {
    filter: brightness(0.5) contrast(1.4);
    transition: opacity 0.5s ease 0s, filter 0.3s, width 0.3s !important;
  }

  &:hover {
    picture > img {
      filter: brightness(0.7) contrast(1);
      transition: opacity 0.5s ease 0s, filter 0.3s, width 0.3s !important;
      width: 115% !important;
    }

    ${media.greaterThan('large')`
      .infos-post {
        bottom: 12px;
        transition: bottom 0.3s;

        > strong {
          margin-bottom: 25px;
          transition: margin-bottom 0.3s;
        }
      }
    `}
  }
`;

export const Content = styled.div`
  bottom: -32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  left: 0;
  position: absolute;
  text-align: center;
  transition: bottom 0.3s;
  width: 100%;
`;

export const Category = styled.strong`
  background-color: ${(props) =>
    props.bg ? props.bg : `${themes.palette.postList.categories.bg}`};
  border-radius: 4px;
  color: ${themes.palette.postList.categories.text};
  font: bold 2rem ${themes.fonts.others};
  order: 1;
  padding: 3px 8px;
  text-shadow: 3px 3px 2px ${themes.palette.general.textShadows};
  text-transform: uppercase;
  transition: margin-bottom 0.3s;

  ${media.lessThan('large')`
    margin-bottom: 30px;
  `}

  ${media.greaterThan('large')`
    margin-bottom: 40px;
  `}
`;

export const TitlePost = styled.h2`
  color: ${themes.palette.postList.content.title};
  font-weight: 400;
  margin-bottom: 10px;
  padding: 0 20px;
  order: 2;
  text-shadow: 2px 2px 2px ${themes.palette.general.textShadows};
  width: 100%;

  ${media.lessThan('large')`
    font-size: 1.6rem;
    line-height: 1.8rem;
  `}

  ${media.greaterThan('large')`
    font-size: 2rem;
    line-height: 2.2rem;
  `}
`;

export const DateTime = styled.p`
  font-family: ${themes.fonts.others};
  font-size: 18px;
  margin-bottom: 12px;
  order: 3;
  width: 100%;
`;

export const ReadMore = styled.p`
  background-color: ${themes.palette.postList.content.readMore};
  border-radius: 3px;
  font-family: ${themes.fonts.others};
  order: 4;
  padding: 5px 12px;
`;
