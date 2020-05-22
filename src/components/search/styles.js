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
    margin-bottom: 50px;
    text-align: right;
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
    border-radius: 25px;
    box-shadow: 0 0 5px 1px ${themes.palette.general.boxShadows};
    color: #222;
    font-size: 1.5rem;
    height: 50px;
    opacity: 1;
    outline: none;
    padding-left: 1.5rem;
    transition: box-shadow 0.3s;
    width: 100%;

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
  padding: 20px 15px;
  transition: padding 0.3s;

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
  font-size: 1.3rem;
  height: 130px;
  justify-content: center;
  margin-right: 20px;
  width: 130px;
`;

export const InfosPost = styled.div`
  width: calc(100% - 150px);
`;

export const TitlePostSearch = styled.h2`
  color: ${(props) => props.color};
  display: inline-block;
`;

export const DescriptionPostSearch = styled.p`
  color: ${themes.palette.general.color};
  font-size: 1.2rem;
  margin-bottom: 8px;
  width: 100%;
`;

export const DatePostSearch = styled.p`
  color: ${themes.palette.general.color};
  font-family: ${themes.fonts.others};
  font-weight: bold;
`;
