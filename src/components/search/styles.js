import styled from 'styled-components';
import media from 'styled-media-query';
import { themes } from '../../styles/themes';

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

  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;
  }

  .ais-SearchBox {
    padding-top: 6rem;
  }

  .ais-Stats {
    color: #8899a6;
  }

  .ais-SearchBox-input {
    background: none;
    border-bottom: 1px solid #38444d;
    border: none;
    color: #8899a6;
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 100%;

    &::placeholder {
      color: #8899a6;
    }
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }

  .ais-Hits-list {
    display: grid;
    grid-area: posts;
    grid-gap: 20px;

    ${media.lessThan('large')`
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    `}

    ${media.greaterThan('large')`
      grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
    `}
  }
`;
