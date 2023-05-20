import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from "./assets/css/global";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Welcome />
    <App />
  </React.StrictMode>
);
