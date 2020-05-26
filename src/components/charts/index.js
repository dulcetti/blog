import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

import { mySkills, optionsBar } from './skills';

export default function MySkillCharts() {
  return <HorizontalBar data={mySkills} options={optionsBar} />;
}
