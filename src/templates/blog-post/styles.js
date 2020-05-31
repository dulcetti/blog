import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

import { themes } from '../../styles/themes';

export const PostWrap = styled.div`
  margin: auto;
  max-width: ${themes.grid.maxWidth};

  ${media.lessThan('large')`
    padding: 5px 20px;
  `}
`;

export const PostTitle = styled.h1`
  font-size: min(60px, 10vw);
  line-height: min(66px, 11vw);
  margin-bottom: 1rem;
`;

export const PostThumbWrap = styled.div`
  > .gatsby-image-wrapper {
    max-height: 350px;
  }
`;

export const PostThumb = styled(Img)``;

export const PostDescription = styled.h2`
  color: ${themes.palette.posts.description};
  font-style: italic;
  font-weight: normal;
  margin-bottom: 10px;

  ${media.lessThan('large')`
    font-size: 1.5rem;
  `}

  ${media.greaterThan('large')`
    font-size: 1.75rem;
  `}
`;

export const PostInfos = styled.p`
  background-color: ${(prop) => `${themes.palette.categories[prop.color]}`};
  color: ${themes.palette.general.negativeColor};
  display: flex;
  font-family: ${themes.fonts.others};
  font-size: 1.35rem;
  justify-content: space-between;

  ${media.lessThan('large')`
    flex-wrap: wrap;
    margin-bottom: 14px;
    text-align: center;
    padding: .65rem .75rem;
  `}

  ${media.greaterThan('large')`
    margin-bottom: 20px;
    padding: 1rem;
  `}
`;

export const CategoryPost = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`;

export const DatePost = styled.span`
  cursor: wait;
`;

export const TimeToRead = styled.span`
  cursor: wait;

  > strong {
    font-weight: bold;
  }

  ${media.lessThan('large')`
    border-top: 1px solid ${themes.palette.posts.borderInfos};
    margin-top: 8px;
    order: 3;
    padding-top: 8px;
    width: 100%;
  `}
`;

export const PostContent = styled.section`
  color: ${themes.palette.general.color};
  font-size: 1.25rem;

  p,
  ul,
  ol {
    ${media.lessThan('large')`
      line-height: 1.25;
      margin-bottom: 1.25rem;
    `}

    ${media.greaterThan('large')`
      line-height: 1.5;
      margin-bottom: 1.5rem;
    `}
  }

  ul {
    li {
      list-style: square inside;
    }
  }

  ol {
    li {
      list-style: decimal inside;
    }
  }

  li {
    margin-bottom: 0.5rem;
    padding-left: 25px;
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    margin: 1.5rem auto;
    max-width: 100%;
  }

  iframe {
    padding: 1.5rem;
    width: 100%;
  }

  blockquote {
    background-color: ${themes.palette.posts.blockquoteBg};
    border-left: 0.3rem solid ${themes.palette.posts.blockquoteBorder};
    color: ${themes.palette.general.color};
    display: block;
    font-family: ${themes.fonts.others};
    font-size: min(30px, 7vw);
    font-style: italic;
    line-height: min(36px, 8vw);
    margin-bottom: 1.5rem;
    padding: 20px;
    position: relative;

    > p {
      margin-bottom: 0;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 10px;
  }

  h2 {
    font-size: min(50px, 9vw);
    line-height: min(56px, 10vw);
  }

  h3 {
    font-size: min(40px, 7vw);
    line-height: min(40px, 8vw);
  }

  h4 {
    font-size: min(30px, 6vw);
    line-height: min(36px, 7vw);
  }

  h5 {
    font-size: min(20px, 6vw);
    line-height: min(26px, 6vw);
  }

  h6 {
    font-size: min(20px, 5vw);
    line-height: min(26px, 5vw);
  }

  strong {
    font-weight: bold;
  }

  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;

    &.lazyload {
      opacity: 0;
    }

    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }

  a {
    color: ${themes.palette.posts.links};
    position: relative;
    transition: color 0.3s;

    &:before {
      bottom: -2px;
      content: '';
      height: 2px;
      left: 0;
      position: absolute;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
      visibility: hidden;
      width: 100%;
    }

    &:hover {
      &:before {
        background-color: ${themes.palette.posts.linksBorder};
        transform: scaleX(1);
        visibility: visible;
      }
    }
  }
`;
