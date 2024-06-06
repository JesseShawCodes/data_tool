import React from 'react';
import useUser from '../hooks/useUser';
import LoginMessaging from '../components/LoginMessaging';
import LoadingMessaging from '../components/LoadingMessaging';

export default function AboutPage() {
  const { user } = useUser();

  const aboutPage = (
    <div className="container app-container">
      <h1>
        This is the About Page
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Pellentesque massa placerat duis ultricies lacus sed turpis.
        Vitae et leo duis ut diam quam nulla porttitor massa.
        Pharetra convallis posuere morbi leo. Gravida arcu ac
        tortor dignissim convallis aenean et.
        Est placerat in egestas erat imperdiet sed.
        Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
        Turpis egestas pretium aenean pharetra magna ac placerat.
        A iaculis at erat pellentesque adipiscing commodo elit.
        Venenatis tellus in metus vulputate eu scelerisque felis.
        Mi proin sed libero enim sed faucibus turpis in eu.
        Lacinia quis vel eros donec ac odio tempor.
        Duis at consectetur lorem donec massa.
        Accumsan tortor posuere ac ut.
        Eu consequat ac felis donec et odio.
        Vel turpis nunc eget lorem dolor sed viverra ipsum.
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
