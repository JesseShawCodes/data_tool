import React from 'react';

import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import AboutPage from './pages/AboutPage';
import ExportPage from './pages/Export';

import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* End Test Pages */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/export" element={<ExportPage />} />
          <Route path="/create_account" element={<CreateAccountPage />} />
          <Route path="*" element={<NotFoundPage />} />

          {/* Nested Route Example */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
