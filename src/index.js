import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// public/index.html contains an empty element with id="root". createRoot gives
// React ownership of that element so it can render and update our component
// tree without us manually creating or replacing DOM nodes.
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // StrictMode performs extra development-only checks that help reveal unsafe
  // side effects. It does not add an HTML element or change production output.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
