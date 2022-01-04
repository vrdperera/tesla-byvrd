import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

// router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// import componnets
import Header from './components/header';
import Menu from './components/menu';
import Hero from './components/hero';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import TeslaAccount from './components/teslaAccount';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

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
          {user ? <Redirect to="/tesla-account" /> : <SignIn />}
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/tesla-account">
          {!user ? (
            <Redirect to="/signin" />
          ) : (
            <>
              <TeslaAccount
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
              {isMenuOpen && <Menu />}
            </>
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
