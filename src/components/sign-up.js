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

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { useHistory } from 'react-router-dom';

// component
export default function SignUp() {
  // states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const signup = async (event) => {
    event.preventDefault();

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      updateProfile(auth.currentUser, {
        displayName: firstName,
      }).then(() => {
        dispatch(
          login({
            email: user.user.email,
            uid: user.user.uid,
            displayName: firstName,
          })
        );
      });

      history.push('/tesla-account');
    } catch ({ message }) {
      console.log(message);
    }
  };

  // ui
  return (
    <SignUpContainer>
      <div className="signUp__header">
        <div className="signUp__logo">
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt="Tesla logo"
            />
          </Link>
        </div>
        <div className="signUp__language">
          <LanguageOutlinedIcon /> <span>en-US</span>
        </div>
      </div>

      <div className="signUp__info">
        <h1>Create Account</h1>
        <form className="signUp__form">
          <label htmlFor="firstName">First Name</label>
          <input
            type="name"
            id="firstName"
            name="name"
            placeholder=""
            value={firstName}
            onChange={({ target }) => setFirstName(target.value)}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="name"
            id="lastName"
            name="name"
            placeholder=""
            value={lastName}
            onChange={({ target }) => setLastName(target.value)}
          />
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

          <ButtonPrimary
            name="Create Account"
            type="submit"
            onClicked={signup}
          />
        </form>

        <div className="signUp__divider">
          <hr />
          <span>OR</span>
          <hr />
        </div>

        <Link to="/signin">
          <ButtonSecondary name="Sign In" />
        </Link>
      </div>
    </SignUpContainer>
  );
}

// css styles
const SignUpContainer = styled.div`
  padding: 2.5rem;
  padding-top: 15px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  .signUp__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
  }

  .signUp__logo img {
    object-fit: contain;
    flex: 1;
    height: 1.2rem;
    width: 12rem;
    margin-right: 10rem;
  }

  .signUp__language .MuiSvgIcon-root {
    width: 24px;
    height: 24px;
  }
  .signUp__language {
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
    padding: 1rem 1rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .signUp__language:hover {
    background-color: hsla(0, 0%, 50.2%, 0.125);
  }

  .signUp__language > span {
    font-weight: 500;
  }

  .signUp__info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-width: 33rem;
    margin-inline: auto;
  }

  .signUp__info > h1 {
    font-weight: 600;
    font-size: 4rem;
    margin-bottom: 2rem;
    margin-left: -60px;
  }

  .signUp__form {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  .signUp__form > label {
    color: #5c5e62;
    font-weight: 600;
    font-size: 1.5rem;
    padding-left: 2rem;
  }

  .signUp__form > input {
    margin-bottom: 30px;
    background-color: #f4f4f4;
    border: 1px solid #f4f4f4;
    outline: none;
    border-radius: 5rem;
    padding: 1.2rem 2rem;
    color: #393c41;
    font-weight: 600;
  }

  .signUp__form > input:focus {
    border: 1px solid #d6d6d7;
    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .signUp__form > button {
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

  .signUp__form > button:hover {
    background-color: #3457b1;
  }

  .signUp__divider {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    align-items: center;
  }

  .signUp__divider > hr {
    width: 40%;
    height: 0;
    opacity: 0.3;
  }

  .signUp__divider > span {
    font-weight: 500;
    color: #5c5e62;
    font-size: 1.6rem;
  }

  .signUp__info > a > button {
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

  .signUp__info > a > button:hover {
    background-color: #171a20;
    color: white;
  }
`;
