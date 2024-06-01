import React from 'react';
import useUser from '../hooks/useUser';
import { LoginMessaging } from '../components/LoginMessaging';

export default function AboutPage() {
  const { user } = useUser();

  const aboutPage = (
    <div className="container app-container">
      <h1>
        This is the About Page
      </h1>
    </div>
  );

  return (
    <div>
      { user ? aboutPage : <LoginMessaging /> }
    </div>
  );
}
