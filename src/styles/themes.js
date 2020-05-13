const _colors = {
  gray: '#505050',
  green: '#4D906F',
  lightBrown: '#F7F6F1',
  lightGray: '#f8f9f9',
  orange: '#E6924A',
  orangeRgb: '230, 146, 74',
  white: '#fff',
};

export const themes = {
  fonts: {
    normal: 'TitilliumWeb-Regular',
  },
  grid: {
    maxWidth: '1380px',
  },
  palette: {
    footer: {
      bg: _colors.lightBrown,
    },
    general: {
      links: _colors.orange,
    },
    header: {
      bg: _colors.lightBrown,
      links: _colors.green,
    },
    postList: {
      categories: {
        bg: _colors.orangeRgb,
        text: _colors.white,
      },
      content: {
        bg: _colors.lightGray,
      },
      title: _colors.white,
    },
  },
};
