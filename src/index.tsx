import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/reset.css';
import './styles/fonts.css';
import './styles/global-styles.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode><App /></React.StrictMode>);