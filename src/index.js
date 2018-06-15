/**
 * Packages
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Styles
 */
import './styles/reset.css';
import './styles/index.styl';

/**
 * Components
 */
import App from './components/App/App';

document.addEventListener('DOMContentLoaded', () => {
  const targetRootNode = document.getElementById('root');
  const rootComponent = <App />;

  ReactDOM.render(rootComponent, targetRootNode);
});
