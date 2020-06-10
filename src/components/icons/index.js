import React from 'react';
import PropTypes from 'prop-types';

export default function Icons({ className, name }) {
  return (
    <svg className={className}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
}

Icons.propTypes = {
  className: PropTypes.object,
  name: PropTypes.string.isRequired,
};
