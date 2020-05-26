import styled from 'styled-components';
import media from 'styled-media-query';

export const ChartColumn = styled.div`
  ${media.lessThan('medium')`
    margin-bottom: 20px;
  `}

  ${media.greaterThan('medium')`
    display:none;
  `}
`;

export const ChartFullColumn = styled.div`
  ${media.lessThan('767px')`
    display:none;
  `}
`;

export const SkillCharts = styled.div`
  margin-bottom: 30px;
`;
