const _colors = {
  blue: '#3C91E6',
  blueDark: '#003049',
  bronze: '#AA735F',
  brownLight: '#F7F6F1',
  gray: '#505050',
  grayDark: '#333',
  grayLight: '#f8f9f9',
  grayMedium: '#bbb',
  green: '#046A2E',
  metallic: '#028090',
  orange: '#F77F00',
  orangeRgb: '230, 146, 74',
  pink: '#852E50',
  purpleDark: '#31263E',
  red: '#D62828',
  white: '#fff',
  xanadu: '#7E846B',
  yellow: '#FCBF49',
};

export const themes = {
  fonts: {
    titles: `'Khand-Regular', sans-serif`,
    others: `'AdventPro-Regular', sans-serif`,
  },
  grid: {
    maxWidth: '1380px',
  },
  palette: {
    categories: {
      'Back-End': _colors.xanadu,
      'CSS': _colors.blueDark,
      'DevOps': _colors.green,
      'Eventos': _colors.blue,
      'JavaScript': _colors.yellow,
      'Portfólio': _colors.bronze,
      'Publicações': _colors.pink,
      'Shots': _colors.orange,
      'Tecnologia': _colors.purpleDark,
      'UX, UI e AI': _colors.metallic,
      'Webstandards': _colors.red,
    },
    general: {
      boxShadows: _colors.grayMedium,
      links: _colors.orange,
      textShadows: _colors.grayDark,
    },
    sidebar: {
      bg: _colors.brownLight,
      bgFooter: _colors.brownLight,
      links: _colors.green,
    },
    postList: {
      categories: {
        bg: _colors.orange,
        text: _colors.white,
      },
      content: {
        bg: _colors.grayLight,
        readMore: _colors.green,
        title: _colors.white,
      },
    },
  },
};
