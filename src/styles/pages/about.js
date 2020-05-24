import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

import { themes } from '../themes';

export const AboutSection = styled.section`
  display: flex;
  margin-bottom: 20px;
  min-height: calc(100vh - 4rem);
  background-color: #ccc;
`;

export const ColumnImage = styled.aside`
  order: 1;

  ${media.greaterThan('medium')`
    width: 600px;
  `}
`;

export const AboutImage = styled(Img)``;

export const ColumnContent = styled.div`
  order: 2;
`;
