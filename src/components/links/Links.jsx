import React from 'react';
import PropTypes from 'prop-types';

const Links = ({ links }) => {
  const linkElements = links.map(linkUrl => (
    <li key={linkUrl}>
      <a href={linkUrl}>{linkUrl}</a>
    </li>
  ));

  return (
    <ul>
      {linkElements}
    </ul>
  );
};

Links.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Links;
