import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as S from './styles';
import { themes } from '../../styles/themes';
import { getCategoryBg } from '../../utils/categories';

export default function PostItem({ post, slug, time }) {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "440x285.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <S.Post>
        <S.LinkPost
          cover
          direction="left"
          bg={themes.palette.general.bgTransition}
          duration={0.6}
          to={slug}>
          {image && <Img fluid={image.childImageSharp.fluid} />}
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
