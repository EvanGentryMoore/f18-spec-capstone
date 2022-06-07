import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cart from './components/Cart'
import Menu from './components/Menu'
import Login from './components/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='login' element={<Login />} />
          <Route path='menu' element={<Menu />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<h1>How'd you even get here?</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);