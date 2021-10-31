import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ProductProvider} from './context/product-context'
import { Auth0Provider } from "@auth0/auth0-react";
import {UserProvider} from './context/user-context'

ReactDOM.render(
  <Auth0Provider
     domain="comfystore.us.auth0.com"
     clientId="YtnXpiK15orzLfYRpGVhMAn90D5b4Sh0"
     redirectUri={window.location.origin}
     cacheLocation="localstorage"
   >
     <UserProvider>
  <ProductProvider>
    <App />
  </ProductProvider>
  </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
