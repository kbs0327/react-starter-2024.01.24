import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import 'todomvc-app-css/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
