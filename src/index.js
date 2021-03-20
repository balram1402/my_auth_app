import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain='dev-q2h6llod.us.auth0.com';
const clientid='CMd1PGJqIjiwO9IBCzZ4a39c7fKMEvsW';

ReactDOM.render(
  <Auth0Provider
  domain = {domain}
  clientId = {clientid}
  redirectUri = {window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

