import { themes } from '../styles/themes';

export const getCategoryBg = (post) => {
  return themes.palette.categories[post.category];
};
