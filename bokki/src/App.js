import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Main,Login,Register,Meal,Timetable, ManageTimetable } from './containers';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Main} exact />
      <Route path='/main' component={Main} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/meal' component={Meal} />
      <Route path='/timetable' component={Timetable} />
      <Route path='/manage-timetable' component={ManageTimetable} />
    </BrowserRouter>
  );
}

export default App;