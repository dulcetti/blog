import { themeIsDark } from '../../utils';

const defaultConfigs = {
  backgroundColor: 'rgba(230,146,74,0.2)',
  borderColor: 'rgba(230,146,74,1)',
  borderWidth: 1,
  hoverBackgroundColor: 'rgba(230,146,74,0.4)',
  hoverBorderColor: 'rgba(230,146,74,1)',
};

const allLabels = [
  'UX/UI',
  'Agile',
  'Dev',
  'DevOps',
  'Beber',
  'CSS',
  'JS',
  'ES6',
  'HTML5',
  'Testes',
  'Back-End',
  'Fodasses',
];

const allData = [70, 90, 90, 75, 100, 90, 85, 80, 90, 65, 70, 100];

export const myAllSkills = {
  labels: allLabels,
  datasets: [
    {
      ...defaultConfigs,
      data: allData,
      label: 'Minhas Skills',
      color: 'white',
      fontColor: 'white',
    },
  ],
};

export const myFirstSkills = {
  labels: allLabels.slice(0, 6),
  datasets: [
    {
      ...defaultConfigs,
      data: allData.slice(0, 6),
      label: 'Minhas Skills - Parte 1',
    },
  ],
};

export const mySecondSkills = {
  labels: allLabels.slice(6),
  datasets: [
    {
      ...defaultConfigs,
      data: allData.slice(6),
      label: 'Minhas Skills - Parte 2',
    },
  ],
};

export const optionsBar = {
  defaultFontColor: 'white',
  scales: {
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
    labels: {
      fontColor: themeIsDark() ? 'white' : 'black',
    },
  },
};
