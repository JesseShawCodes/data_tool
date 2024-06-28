import { React } from 'react';

import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import AboutPage from './pages/AboutPage';
import ExportPage from './pages/Export';

import NotFound from './pages/NotFoundPage';

import content from './data/data.json';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage homeHeading={content.homePage.homeContent} mainMessaging={content.homePage.homeContent} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage aboutHeading={content.aboutPage.aboutPageHeading} aboutPageContent={content.aboutPage.aboutPageContent} />} />
          <Route path="/export" element={<ExportPage />} />
          <Route path="/create_account" element={<CreateAccountPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
