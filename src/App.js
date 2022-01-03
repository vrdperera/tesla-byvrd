import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

// router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// import componnets
import Header from './components/header';
import Hero from './components/hero';
import Login from './components/login';
import Menu from './components/menu';

function App() {
  const user = useSelector(selectUser);
  console.log(user);

  // states
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          {isMenuOpen && <Menu />}
          <Hero />
        </Route>

        <Route exact path="/login">
          {user ? <Redirect to="/tesla-user" /> : <Login />}
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
