import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import {
  AuthContextProvider,
  // CartContextProvider,
  // ProductsContextProvider,
  // WishlistContextProvider,
} from "./Contexts";

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
  
);