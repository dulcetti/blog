const _colors = {
  blue: '#3C91E6',
  bronze: '#AA735F',
  darkBlue: '#003049',
  darkGray: '#333',
  darkPurple: '#31263E',
  gray: '#505050',
  green: '#046A2E',
  lightBrown: '#F7F6F1',
  lightGray: '#f8f9f9',
  metallic: '#028090',
  orange: '#F77F00',
  orangeRgb: '230, 146, 74',
  pink: '#852E50',
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
      'CSS': _colors.darkBlue,
      'DevOps': _colors.green,
      'Eventos': _colors.blue,
      'JavaScript': _colors.yellow,
      'Portfólio': _colors.bronze,
      'Publicações': _colors.pink,
      'Shots': _colors.orange,
      'Tecnologia': _colors.darkPurple,
      'UX, UI e AI': _colors.metallic,
      'Webstandards': _colors.red,
    },
    footer: {
      bg: _colors.lightBrown,
    },
    general: {
      links: _colors.orange,
      shadows: _colors.darkGray,
    },
    sidebar: {
      bg: _colors.lightBrown,
      links: _colors.green,
    },
    postList: {
      categories: {
        bg: _colors.orange,
        text: _colors.white,
      },
      content: {
        bg: _colors.lightGray,
        readMore: _colors.green,
        title: _colors.white,
      },
    },
  },
};
