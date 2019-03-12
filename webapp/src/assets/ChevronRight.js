import React from 'react';
import propTypes from 'prop-types';

const Loading = ({ color }) => (
  <svg
    viewBox="0 0 32 32"
    className="icon icon-chevron-right"
    aria-hidden="true"
  >
    <path
      d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"
      stroke={color}
      fill={color}
    />
  </svg>
);

Loading.propTypes = {
  color: propTypes.string.isRequired
};

export default Loading;
