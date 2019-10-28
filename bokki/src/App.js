import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Main,Login,Auth,Register,Meal,seeTimetable,manageTimetable } from './containers';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Main} exact />
      <Route path='/main' component={Main} />
      <Route path='/login' component={Login} />
      <Route path='/auth' component={Auth} />
      <Route path='/register' component={Register} />
      <Route path='/meal' component={Meal} />
      <Route path='/timetable' component={seeTimetable} />
      <Route path='/manage-timetable' component={manageTimetable} />
    </BrowserRouter>
  );
}

export default App;
