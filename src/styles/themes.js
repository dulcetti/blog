const _colors = {
  black: '#000',
  blue: '#1660AA',
  blueDark: '#003049',
  blueLight: '#2BA8DF',
  bronze: '#AA735F',
  brown: '#a68e69',
  brownDark: '#5a5038',
  brownLight: '#F7F6F1',
  brownLightOver: '#eae8db',
  brownVeryLight: '#ece7e1',
  gray: '#666',
  grayBrown: '#eadabe',
  grayBrownDark: '#cec2ac',
  grayBrownLight: '#f3f0ed',
  grayDark: '#333',
  grayLight: '#f5f6f6',
  grayMedium: '#bbb',
  green: '#046A2E',
  greenSea: '#79B791',
  orange: '#f26a00',
  orangeRgb: '230, 146, 74',
  pink: '#852E50',
  purpleDark: '#31263E',
  red: '#D62828',
  white: '#fff',
  xanadu: '#7E846B',
  yellow: '#FCBF49',
  yellowDark: '#e6a528',
  yellowRgb: '255, 204, 0',
};

export const themes = {
  fonts: {
    titles: `'Khand-Regular', sans-serif`,
    others: `'Khand-Regular', sans-serif`,
  },
  grid: {
    maxWidth: '68em',
  },
  palette: {
    breadcrumb: {
      color: _colors.gray,
      homeColor: _colors.orange,
    },
    categories: {
      'Back-End': _colors.xanadu,
      'CSS': _colors.blueLight,
      'DevOps': _colors.green,
      'Eventos': _colors.blue,
      'Git': _colors.black,
      'JavaScript': _colors.yellow,
      'Portfólio': _colors.bronze,
      'Publicações': _colors.pink,
      'Shots': _colors.orange,
      'Tecnologia': _colors.purpleDark,
      'UX, UI e AI': _colors.greenSea,
      'Webstandards': _colors.red,
    },
    general: {
      bg: _colors.grayLight,
      bgTransition: _colors.grayLight,
      borders: _colors.grayMedium,
      boxShadows: _colors.grayMedium,
      color: _colors.grayDark,
      links: _colors.orange,
      negativeColor: _colors.white,
      textShadows: _colors.grayDark,
    },
    pagination: {
      active: _colors.orange,
      bgWrap: _colors.brownVeryLight,
      bgHoverLinks: _colors.grayBrown,
      borderLightLinks: _colors.grayBrownLight,
      borderDarkLinks: _colors.grayBrownDark,
      bordersWrap: _colors.brown,
      text: _colors.brownDark,
    },
    posts: {
      bgCredits: _colors.white,
      blockquoteBg: _colors.white,
      blockquoteBorder: _colors.green,
      borderInfos: _colors.grayLight,
      description: _colors.gray,
      links: _colors.orange,
      linksBorder: _colors.green,
      shadowCredits: _colors.grayMedium,
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
    search: {
      bgInput: _colors.white,
      statsColor: _colors.gray,
    },
    about: {
      firstBorder: _colors.orangeRgb,
      secondBorder: _colors.yellowRgb,
      titleBorder: _colors.yellow,
      titleBorderBefore: _colors.yellowDark,
    },
    sidebar: {
      bg: _colors.brownLight,
      bgFooter: _colors.brownLight,
      bgMobile: _colors.brownLightOver,
      bgLinkHover: _colors.white,
      links: _colors.green,
      linksHover: _colors.orange,
      name: _colors.grayDark,
    },
  },
};
