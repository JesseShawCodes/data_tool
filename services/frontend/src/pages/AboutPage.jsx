import React from 'react';
import PropTypes from 'prop-types';
import useUser from '../hooks/useUser';
import LoginMessaging from '../components/LoginMessaging';
import LoadingMessaging from '../components/LoadingMessaging';

export default function AboutPage({ aboutHeading = 'This is the About page', aboutPageContent = 'This is the content section of the about page' }) {
  const { user } = useUser();

  const aboutPage = (
    <div className="container app-container">
      <h1>
        {aboutHeading}
      </h1>
      <p>
        {aboutPageContent}
      </p>
    </div>
  );

  if (useUser().isLoading) {
    return <LoadingMessaging />;
  }

  return (
    <div>
      { user ? aboutPage : <LoginMessaging /> }
    </div>
  );
}

AboutPage.propTypes = {
  aboutHeading: PropTypes.string.isRequired,
  aboutPageContent: PropTypes.string.isRequired,
};
