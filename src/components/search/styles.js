import styled from 'styled-components';
import media from 'styled-media-query';
import { themes } from '../../styles/themes';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${themes.grid.maxWidth};
  transition: opacity 0.4s;
  width: 100%;

  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }

  .ais-SearchBox {
    margin-bottom: 10px;
  }

  .ais-Stats {
    ${media.lessThan('large')`
      margin-bottom: 30px;
      text-align: center;
    `}

    ${media.greaterThan('large')`
      margin-bottom: 50px;
      text-align: right;
    `}
  }

  .ais-Hits-list > li:first-child > a {
    border-top: 1px solid ${themes.palette.general.borders};
  }

  .ais-Stats {
    color: ${themes.palette.search.statsColor};
  }

  .ais-SearchBox-input {
    background-color: ${themes.palette.search.bgInput};
    border: 0;
    box-shadow: 0 0 5px 1px ${themes.palette.general.boxShadows};
    color: #222;
    height: 50px;
    opacity: 1;
    outline: none;
    transition: box-shadow 0.3s;
    width: 100%;

    ${media.lessThan('767px')`
      border-radius: 15px;
      font-size: 1.25rem;
      padding-left: 1.25rem;
    `}

    ${media.greaterThan('medium')`
      border-radius: 25px;
      font-size: 1.5rem;
      padding-left: 1.5rem;
    `}

    &::placeholder {
      color: #8899a6;
    }

    &:focus {
      box-shadow: 0 0 6px 3px ${themes.palette.general.boxShadows};
      transition: box-shadow 0.3s;
    }
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`;

// List Search
export const LinkPostSearch = styled(AniLink)`
  align-items: center;
  border-bottom: 1px solid ${themes.palette.general.borders};
  display: flex;
  transition: padding 0.3s;

  ${media.lessThan('medium')`
    padding: 15px 0;
  `}

  ${media.greaterThan('769px')`
    padding: 20px 15px;
  `}

  &:hover {
    padding: 30px 15px 30px 25px;
    transition: padding 0.3s;

    div h2 {
      text-decoration: underline;
    }
  }
`;

export const CategoryPostSearch = styled.div`
  align-items: center;
  background-color: ${(props) => props.bg};
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-family: ${themes.fonts.titles};
  justify-content: center;

  ${media.lessThan('medium')`
    font-size: 1.1rem;
    height: 110px;
    margin-right: 15px;
    width: 110px;
  `}

  ${media.greaterThan('769px')`
    font-size: 1.3rem;
    height: 130px;
    margin-right: 20px;
    width: 130px;
  `}
`;

export const InfosPost = styled.div`
  width: calc(100% - 150px);
`;

export const TitlePostSearch = styled.h2`
  color: ${(props) => props.color};
  display: inline-block;

  ${media.lessThan('medium')`
    line-height: 1.5rem;
    margin-bottom: 5px;
  `}
`;

export const DescriptionPostSearch = styled.p`
  color: ${themes.palette.general.color};
  width: 100%;

  ${media.lessThan('medium')`
    margin-bottom: 5px;
  `}

  ${media.greaterThan('769px')`
    font-size: 1.2rem;
    margin-bottom: 8px;
  `}
`;

export const DatePostSearch = styled.p`
  color: ${themes.palette.general.color};
  font-family: ${themes.fonts.others};
  font-weight: bold;
`;
