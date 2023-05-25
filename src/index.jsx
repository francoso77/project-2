import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//router
import { Abc } from './tamplates/Abc';
import { App } from './tamplates/App';
import { Menu } from './components/Menu';
import { Page404 } from './tamplates/Page404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/abc/:slug/:id" element={<Abc />} />
        <Route path="/abc/:slug" element={<Abc />} />
        <Route path="/abc/" element={<Abc />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
