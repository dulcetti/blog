import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

export const WrapPreviousNext = styled.section`
  border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders);
  display: flex;
  justify-content: space-between;
  margin: 30px 0;

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
  width: 50%;

  section.-singlePrevious &,
  section.-singleNext & {
    ${media.lessThan('small')`
      width: 100%;
    `}
  }

  ${media.lessThan('large')`
    padding: 20px 0;
  `}

  ${media.greaterThan('medium')`
    padding: 20px;
  `}

  > svg {
    ${media.lessThan('medium')`
      height: 24px;
      min-height: 20px;
      min-width: 20px;
      width: 24px;
    `}

    ${media.greaterThan('medium')`
      height: 42px;
      width: 42px;
    `}
  }

  &.-previous {
    border-right: 1px solid var(--borders);

    ${media.lessThan('medium')`
      padding-right: 10px;
    `}

    ${media.greaterThan('medium')`
      padding-left: 20px;
      transition: padding-left 0.3s;
    `}

    section.-singlePrevious &,
    section.-singleNext & {
      ${media.lessThan('medium')`
        border-right: 0;
      `}
    }

    > svg {
      margin-right: 10px;
      transform: rotate(180deg);
    }
  }

  &.-next {
    justify-content: flex-end;
    text-align: right;

    ${media.lessThan('medium')`
      padding-left: 10px;
    `}

    ${media.greaterThan('medium')`
      padding-right: 20px;
      transition: padding-right 0.3s;
    `}

    section.-singlePrevious & {
      ${media.greaterThan('small')`
        border-left: 1px solid var(--borders);
      `}
    }

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
  color: var(--textColor);
  display: block;
  font-size: 0.9rem;
  margin-bottom: 5px;
`;

export const LinksTitle = styled.strong`
  color: var(--links);
  display: block;
  font-family: var(--fontStyles);
  max-width: 450px;

  ${media.lessThan('medium')`
    font-size: 1.25rem;
    line-height: 1;
  `}

  ${media.greaterThan('medium')`
    font-size: 1.5rem;
    line-height: 1.1;
  `}
`;
