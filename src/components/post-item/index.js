import React from 'react';
import propTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as S from './styles';
import { getCategoryBg } from '../../utils/categories';

export default function PostItem({ post, time }) {
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
        <S.LinkPost to={post.slug}>
          {image && <Img fluid={image.childImageSharp.fluid} />}
          <S.Content className="infos-post">
            <S.Title>{post.title}</S.Title>
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
  post: propTypes.object,
  time: propTypes.number,
};
