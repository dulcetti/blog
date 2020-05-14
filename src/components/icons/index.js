import React from 'react';
import PropTypes from 'prop-types';

export default function Icons({ name }) {
  return (
    <svg>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
}

Icons.propTypes = {
  name: PropTypes.string.isRequired,
};
