import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import * as S from './styles';
import { themes } from '../../styles/themes';
import { getCategoryBg } from '../../utils/categories';

export default function PostItem({ post, slug, time }) {
  return (
    <>
      <S.Post>
        <S.LinkPost
          cover
          direction="left"
          bg={themes.palette.general.bgTransition}
          duration={0.6}
          to={slug}>
          <Img fluid={post.featuredImage.childImageSharp.fluid} />
          <S.Content className="infos-post">
            <S.TitlePost>{post.title}</S.TitlePost>
            <S.Category bg={getCategoryBg(post)}>{post.category}</S.Category>
            <S.DateTime>
              {post.date} | {time} min de leitura
            </S.DateTime>
            <S.ReadMore>Leia mais...</S.ReadMore>
          </S.Content>
        </S.LinkPost>
      </S.Post>
    </>
  );
}

PostItem.propTypes = {
  post: PropTypes.object,
  time: PropTypes.number,
};
