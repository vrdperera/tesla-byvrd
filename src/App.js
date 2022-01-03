import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

// router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// import componnets
import Header from './components/header';
import Menu from './components/menu';
import Hero from './components/hero';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';

function App() {
  const user = useSelector(selectUser);

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

        <Route exact path="/signin">
          {user ? <Redirect to="/tesla-user" /> : <SignIn />}
          <SignIn />
        </Route>

        <Route exact path="/signup">
          {user ? <Redirect to="/tesla-user" /> : <SignIn />}
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
