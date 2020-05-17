import styled from 'styled-components';
import media from 'styled-media-query';
import { themes } from '../../styles/themes';

export const PostWrap = styled.main`
  margin: auto;
  max-width: 70rem;

  ${media.lessThan('medium')`
    padding: 20px;
  `}
`;

export const PostHeader = styled.header`
  color: ${themes.palette.general.color};
  margin: auto;
  max-width: 70rem;
  padding: 5rem 5rem 0;
`;

export const PostTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  line-height: 4.5rem;
  margin-bottom: 1rem;
`;

export const PostDescription = styled.h2`
  font-size: 2rem;
  font-weight: 200;
  padding: 0 1.4rem;
`;

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  padding: 0 1.4rem;
`;

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
    font-family: ${themes.fonts.others};
    font-size: 1.75rem;
    font-style: italic;
    margin-bottom: 1.5rem;
    padding: 20px;
    position: relative;

    &::before {
      color: ${themes.palette.posts.blockquoteBorder};
      content: '\201C';
      font-family: ${themes.fonts.titles};
      font-size: 4em;
      left: 10px;
      opacity: 0.5;
      position: absolute;
      top: -10px;
    }
  }

  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
  }

  h1 {
    font-size: 2.8rem;
  }
  h2 {
    font-size: 2.1rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
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
