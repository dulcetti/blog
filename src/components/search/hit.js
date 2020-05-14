import React from 'react';
import PostItem from '../post-item/index';
import propTypes from 'prop-types';

export default function Hit({ hit }) {
  return <PostItem post={hit} />;
}

Hit.propTypes = {
  hit: propTypes.object.isRequired,
};
