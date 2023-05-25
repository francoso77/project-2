import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//router
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Abc } from './tamplates/Abc';
import { App } from './tamplates/App';
import { Menu } from './components/Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/abc" component={Abc} exact />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
);
