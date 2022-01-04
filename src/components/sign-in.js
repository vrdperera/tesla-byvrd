// router
import { Link } from 'react-router-dom';
// hooks
import { useState } from 'react';
// styled-components
import styled from 'styled-components';
// import components
import ButtonPrimary from './buttonPrimary';
import ButtonSecondary from './buttonSecondary';
// material-ui
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { useHistory } from 'react-router-dom';

// component
export default function Login() {
  // states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const signIn = async (event) => {
    event.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      dispatch(
        login({
          email: user.user.email,
          uid: user.user.uid,
          displayName: user.user.displayName,
        })
      );
      history.push('/tesla-account');
    } catch ({ message }) {
      console.log(message);
    }
  };

  // ui
  return (
    <SignInContainer>
      <div className="SignIn__header">
        <div className="SignIn__logo">
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt="Tesla logo"
            />
          </Link>
        </div>
        <div className="SignIn__language">
          <LanguageOutlinedIcon /> <span>en-US</span>
        </div>
      </div>

      <div className="SignIn__info">
        <h1>Sign In</h1>
        <form className="SignIn__form">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder=""
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder=""
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />

          <ButtonPrimary name="Sign In" type="submit" onClicked={signIn} />
        </form>
        <div className="SignIn__divider">
          <hr />
          <span>OR</span>
          <hr />
        </div>
        <Link to="/signup">
          <ButtonSecondary name="Create Account" />
        </Link>
      </div>
    </SignInContainer>
  );
}

// css styles
const SignInContainer = styled.div`
  padding: 2.5rem;
  padding-top: 15px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  .SignIn__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
  }

  .SignIn__logo img {
    object-fit: contain;
    flex: 1;
    height: 1.2rem;
    width: 12rem;
    margin-right: 10rem;
  }

  .SignIn__language .MuiSvgIcon-root {
    width: 24px;
    height: 24px;
  }
  .SignIn__language {
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
    padding: 1rem 1rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .SignIn__language:hover {
    background-color: hsla(0, 0%, 50.2%, 0.125);
  }

  .SignIn__language > span {
    font-weight: 500;
  }

  .SignIn__info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-width: 33rem;
    margin-inline: auto;
  }

  .SignIn__info > h1 {
    font-weight: 600;
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  .SignIn__form {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  .SignIn__form > label {
    color: #5c5e62;
    font-weight: 600;
    font-size: 1.5rem;
    padding-left: 2rem;
  }

  .SignIn__form > input {
    margin-bottom: 30px;
    background-color: #f4f4f4;
    border: 1px solid #f4f4f4;
    outline: none;
    border-radius: 5rem;
    padding: 1.2rem 2rem;
    color: #393c41;
    font-weight: 600;
  }

  .SignIn__form > input:focus {
    border: 1px solid #d6d6d7;
    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .SignIn__form > button {
    background-color: #3e6ae1;
    border: none;
    padding: 1.2rem 4rem;
    border-radius: 5rem;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    margin-bottom: 3rem;
    transition: all 0.4s;
  }

  .SignIn__form > button:hover {
    background-color: #3457b1;
  }

  .SignIn__divider {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    align-items: center;
  }

  .SignIn__divider > hr {
    width: 40%;
    height: 0;
    opacity: 0.3;
  }

  .SignIn__divider > span {
    font-weight: 500;
    color: #5c5e62;
    font-size: 1.6rem;
  }

  .SignIn__info > a > button {
    background-color: transparent;
    border: 3px solid #171a20;
    width: 100%;
    padding: 10px 40px;
    border-radius: 50px;
    text-transform: uppercase;
    color: #171a20;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    outline: none;
  }

  .SignIn__info > a > button:hover {
    background-color: #171a20;
    color: white;
  }
`;
