import React, { useState } from 'react';

// router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// componnets
import Header from './components/header';

function App() {
  // states
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="app">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </BrowserRouter>
  );
}

export default App;
