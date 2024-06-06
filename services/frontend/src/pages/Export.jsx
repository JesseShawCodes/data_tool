import React from 'react';
import axios from 'axios';
import useUser from '../hooks/useUser';
import LoginMessaging from '../components/LoginMessaging';
import LoadingMessaging from '../components/LoadingMessaging';

export default function ExportPage() {
  const { user } = useUser();

  if (useUser().isLoading) {
    return <LoadingMessaging />;
  }

  const downloadCsv = () => {
    axios({
      url: `${process.env.REACT_APP_DB_URL}download_csv`,
      method: 'GET',
      responseType: 'blob',
    })
      .then((res) => {
        // create file link in browser's memory
        const href = URL.createObjectURL(res.data);

        // create "a" HTML element with href to file & click
        const link = document.createElement('a');
        link.href = href;
        const date = new Date();
        link.setAttribute('download', `${date.toISOString().replace(/\D/g, '')}_users.csv`); // or any other extension
        document.body.appendChild(link);
        link.click();

        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
      });
  };

  const aboutPage = (
    <div className="container app-container">
      <h1>This is the Export Page</h1>
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
      <button className="btn btn-primary" type="button" onClick={() => { downloadCsv(); }}>Download CSV</button>
    </div>
  );

  return (
    <div>
      {
            user ? aboutPage : <LoginMessaging />
      }
    </div>
  );
}
