import React from 'react';
import PostItem from '../post-item/index';
import PropTypes from 'prop-types';

export default function Hit({ hit }) {
  return <PostItem post={hit} />;
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};
