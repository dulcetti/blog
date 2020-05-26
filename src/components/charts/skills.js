export const mySkills = {
  labels: [
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
  ],
  datasets: [
    {
      backgroundColor: 'rgba(230,146,74,0.2)',
      borderColor: 'rgba(230,146,74,1)',
      borderWidth: 1,
      data: [70, 90, 90, 80, 100, 90, 85, 80, 90, 65, 70],
      hoverBackgroundColor: 'rgba(230,146,74,0.4)',
      hoverBorderColor: 'rgba(230,146,74,1)',
      label: 'Meus fodasses',
      maxBarThickness: 15,
      offset: true,
    },
  ],
};

export const optionsBar = {
  scales: {
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
