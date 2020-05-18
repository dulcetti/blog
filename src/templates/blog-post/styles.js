import styled from 'styled-components';
import media from 'styled-media-query';
import { themes } from '../../styles/themes';

export const PostWrap = styled.main`
  margin: auto;
  max-width: 70rem;

  ${media.lessThan('medium')`
    padding: 5px 20px;
  `}
`;

export const PostHeader = styled.header`
  color: ${themes.palette.general.color};
  margin: auto;
  max-width: 70rem;
  padding: 5rem 5rem 0;
`;

export const PostTitle = styled.h1`
  font-size: min(60px, 10vw);
  line-height: min(66px, 13vw);
  margin-bottom: 1rem;
`;

export const PostDescription = styled.h2`
  font-size: 2rem;
`;

export const PostInfos = styled.p`
  font-family: ${themes.fonts.others};
  font-size: 1.25rem;
  margin-bottom: 20px;
`;

export const CategoryPost = styled.span`
  color: ${(prop) => `${themes.palette.categories[prop.color]}`};
  font-weight: bold;
`;
export const DatePost = styled.span``;

export const PostContent = styled.section`
  color: ${themes.palette.general.color};
  font-size: 1.25rem;

  p,
  ul,
  ol {
    line-height: 1.5;
    margin-bottom: 1.5rem;
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
    max-width: 100%;
    margin: 1.5rem auto;
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
    line-height: min(36px, 13vw);
  }

  h5 {
    font-size: min(20px, 6vw);
    line-height: min(26px, 13vw);
  }

  h6 {
    font-size: min(20px, 5vw);
    line-height: min(66px, 13vw);
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
