import { themes } from '../styles/themes';

export const getCategoryBg = (category) => {
  return themes.palette.categories[category];
};
