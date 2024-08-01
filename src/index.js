import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom' in older versions
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
