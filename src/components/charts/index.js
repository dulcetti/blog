import React from 'react';
import { HorizontalBar, Bar } from 'react-chartjs-2';

import * as S from './styles';
import { myAllSkills, myFirstSkills, mySecondSkills, optionsBar } from './skills';

export default function MySkillCharts() {
  return (
    <S.SkillCharts>
      <S.ChartFullColumn>
        <HorizontalBar data={myAllSkills} options={optionsBar} />
      </S.ChartFullColumn>
      <S.ChartColumn>
        <Bar data={myFirstSkills} options={optionsBar} />
      </S.ChartColumn>
      <S.ChartColumn>
        <Bar data={mySecondSkills} options={optionsBar} />
      </S.ChartColumn>
    </S.SkillCharts>
  );
}
