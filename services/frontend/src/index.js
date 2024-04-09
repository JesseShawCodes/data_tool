import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';

import { store } from './store'
import { Provider } from 'react-redux';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDd52ZgAuhuJ-gr_r9Y4IG8S_xI-wqI9qc",
  authDomain: "data-project---jacobs.firebaseapp.com",
  projectId: "data-project---jacobs",
  storageBucket: "data-project---jacobs.appspot.com",
  messagingSenderId: "10357076793",
  appId: "1:10357076793:web:a0312ff4a604aa7e31aee8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
