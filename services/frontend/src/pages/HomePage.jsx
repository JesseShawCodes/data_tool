import React from 'react';
import PropTypes from 'prop-types';

export default function HomePage({ homeHeading = 'This is the home page', mainMessaging = 'Welcome to the App' }) {
  return (
    <div className="container app-container">
      <h1>{homeHeading}</h1>
      <p>{mainMessaging}</p>
    </div>
  );
}

HomePage.propTypes = {
  homeHeading: PropTypes.string,
  mainMessaging: PropTypes.string,
};

HomePage.defaultProps = {
  homeHeading: 'This is the home page',
  mainMessaging: 'Welcome to the App',
};
