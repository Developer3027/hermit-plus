import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Modal from 'react-modal';

import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import Detail from './components/Detail';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/detail/:id'>
          <Detail />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
