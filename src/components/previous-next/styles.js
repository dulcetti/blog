import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';
import { themes } from '../../styles/themes';

export const WrapPreviousNext = styled.section`
  border-bottom: 1px solid ${themes.palette.general.borders};
  border-top: 1px solid ${themes.palette.general.borders};
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 10px 0;

  &.-singleNext {
    justify-content: flex-start;
  }

  &.-singlePrevious {
    justify-content: flex-end;
  }
`;

export const LinksNavigation = styled(Link)`
  align-items: center;
  display: inline-flex;

  ${media.greaterThan('large')`
    padding: 30px 20px;
    width: 50%;
  `}

  > svg {
    height: 50px;
    width: 50px;
  }

  &.-previous {
    padding-left: 20px;
    transition: padding-left 0.3s;

    > svg {
      margin-right: 10px;
      transform: rotate(180deg);
    }
  }

  &.-next {
    justify-content: flex-end;
    padding-right: 20px;
    transition: padding-right 0.3s;
    text-align: right;

    > svg {
      margin-left: 10px;
    }
  }

  &:hover {
    &.-previous {
      padding-left: 0;
      transition: padding-left 0.3s;
    }

    &.-next {
      padding-right: 0;
      transition: padding-right 0.3s;
    }

    strong {
      text-decoration: underline;
    }
  }
`;

export const LinkInfos = styled.span``;

export const LinksLabel = styled.span`
  color: ${themes.palette.general.color};
  display: block;
  font-size: 0.9rem;
  margin-bottom: 5px;
`;

export const LinksTitle = styled.strong`
  color: ${themes.palette.general.links};
  display: block;
  font-family: ${themes.fonts.titles};
  font-size: 1.5rem;
  line-height: 1.1;
  max-width: 450px;
`;
