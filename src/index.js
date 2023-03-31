// import React from 'react';
// import ReactDOM from 'react-dom/client';

import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-ttoye3gz2sks34fe.us.auth0.com"
    clientId="QbsYttuSHzh53Qk0IY1Cu9PMTnkwjWo5"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  // document.getElementById("root")
);