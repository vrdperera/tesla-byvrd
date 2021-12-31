import React, { useState } from 'react';

// router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// import componnets
import Header from './components/header';
import Menu from './components/menu';

function App() {
  // states
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="app">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && <Menu />}
      </div>
    </BrowserRouter>
  );
}

export default App;
