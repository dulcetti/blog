import React from 'react';

import * as S from './styles';
import { colors, mySkills } from './skills';

export default function MySkillBars() {
  return (
    <S.ContainerSkillBar>
      <S.SkillBarsTech colors={colors} height={15} skills={mySkills} />
    </S.ContainerSkillBar>
  );
}
