import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './containers/Main';
import Login from './containers/Login';
import Auth from './containers/Auth';
import Register from './containers/Register';
import Meal from './containers/Meal';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Main} exact />
      <Route path='/login' component={Login} />
      <Route path='/auth' component={Auth} />
      <Route path='/register' component={Register} />
      <Route path='/meal' component={Meal} />
    </BrowserRouter>
  );
}

export default App;
