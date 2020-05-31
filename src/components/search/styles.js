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
    font-size: 0.9rem;
    margin-bottom: 30px;

    ${media.lessThan('large')`
      text-align: center;
    `}

    ${media.greaterThan('large')`
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

    ${media.lessThan('large')`
      border-radius: 10px;
      font-size: 1.15rem;
      padding-left: 1rem;
    `}

    ${media.greaterThan('large')`
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
  border-bottom: 1px solid ${themes.palette.general.borders};
  display: flex;
  transition: padding 0.3s;

  ${media.lessThan('large')`
    padding: 15px 0;
  `}

  ${media.greaterThan('large')`
    align-items: center;

    &:hover {
      padding: 30px 15px 30px 25px;
      transition: padding 0.3s;
    }
  `}

  ${media.greaterThan('large')`
    padding: 20px 15px;
  `}

  &:hover {
    div h2 {
      text-decoration: underline;
    }
  }
`;

export const CategoryPostSearch = styled.div`
  background-color: ${(props) => props.bg};
  color: #fff;
  font-family: ${themes.fonts.titles};

  ${media.lessThan('small')`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-right: 10px;
    width: 35px;

    > p {
      font-size: 1.1rem;
      transform: rotate(270deg);
    }
  `}

  ${media.greaterThan('451px')`
    align-items: center;
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `}

  ${media.between('small', 'large')`
    font-size: 1.1rem;
    height: 110px;
    margin-right: 15px;
    width: 110px;
  `}

  ${media.greaterThan('large')`
    font-size: 1.3rem;
    height: 130px;
    margin-right: 20px;
    width: 130px;
  `}
`;

export const InfosPost = styled.div`
  ${media.lessThan('small')`
    width: calc(100% - 50px);
  `}

  ${media.between('451px', 'large')`
    width: calc(100% - 130px);
  `}

  ${media.greaterThan('large')`
    width: calc(100% - 150px);
  `}
`;

export const TitlePostSearch = styled.h2`
  color: ${(props) => props.color};
  display: inline-block;

  ${media.lessThan('large')`
    line-height: 1.5rem;
    margin-bottom: 5px;
  `}
`;

export const DescriptionPostSearch = styled.p`
  color: ${themes.palette.general.color};
  width: 100%;

  ${media.lessThan('large')`
    margin-bottom: 5px;
  `}

  ${media.greaterThan('large')`
    font-size: 1.2rem;
    margin-bottom: 8px;
  `}
`;

export const DatePostSearch = styled.p`
  color: ${themes.palette.general.color};
  font-family: ${themes.fonts.others};
  font-weight: bold;
`;
