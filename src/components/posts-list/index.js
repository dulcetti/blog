import React from 'react';
import PropTypes from 'prop-types';

import PostItem from '../post-item';
import * as S from './styles';

export default function PostsList({ posts }) {
  return (
    <S.PostsListContainer>
      {posts.map(({ node }, index) => (
        <PostItem key={index} post={node.frontmatter} time={node.timeToRead} />
      ))}
    </S.PostsListContainer>
  );
}

PostsList.propTypes = {
  posts: PropTypes.object.isRequired,
};
