import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
