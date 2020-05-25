import styled from 'styled-components';
import SkillBar from 'react-skillbars';
import { themes } from '../../styles/themes';

export const ContainerSkillBar = styled.div`
  padding-top: 30px;

  .skillbar {
    margin-bottom: 40px;

    > .skillbar-title {
      background: #e67e22;
      border-radius: 3px 0 0 3px;

      > span {
        background: none;
        font-family: ${themes.fonts.others};
        font-size: 1.2rem;
        letter-spacing: 1px;
        padding: 0;
        position: absolute;
        top: -20px;
      }
    }

    > .skillbar-percent {
      color: ${themes.palette.general.color};
    }

    > .skillbar-bar {
      border-radius: 0 3px 3px 0;
    }

    &:nth-child(1) {
      > .skillbar-title {
        background: ${themes.palette.categories['JavaScript']};
      }
    }

    &:nth-child(3) {
      > .skillbar-title {
        background: ${themes.palette.categories['CSS']};
      }
    }

    &:nth-child(5) {
      > .skillbar-title {
        background: #61dafb;
      }
    }

    &:nth-child(7) {
      > .skillbar-title {
        background: ${themes.palette.categories['Git']};
      }
    }

    &:nth-child(8) {
      > .skillbar-title {
        background: #c5422e;
      }
    }

    &:nth-child(10) {
      > .skillbar-title {
        background: ${themes.palette.categories['DevOps']};
      }
    }
  }
`;

export const SkillBarsTech = styled(SkillBar)``;
