import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ longUrl, shortUrl }) => (
  <p>{longUrl} - {shortUrl}</p>
);

Display.propTypes = {
  longUrl: PropTypes.string.isRequired,
  shortUrl: PropTypes.string.isRequired
};

export default Display;
