// router
import { Link } from 'react-router-dom';

// styled-components
import styled from 'styled-components';

// material-ui
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';

import Car from '../components/car';
import { auth } from '../lib/firebase';
import { useHistory } from 'react-router-dom';

// main component
export default function TeslaAccount({ isMenuOpen, setIsMenuOpen }) {
  const userSelect = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutOfApp = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        history.push('/');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <TeslaAccountContainer>
      <div className="teslaAccount__header">
        <div className="teslaAccount__logo">
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="teslaAccount__links">
          <Link to="/tesla-account">Model S</Link>
          <Link to="/tesla-account">Model 3</Link>
          <Link to="/tesla-account">Model X</Link>
          <Link to="/tesla-account">Model Y</Link>
          <Link to="/tesla-account">Solar Roof</Link>
          <Link to="/tesla-account">Solar Panels</Link>
          <Link to="/tesla-account">Shop</Link>
          <Link to="/tesla-account">Tesla Account</Link>
          <Link onClick={logoutOfApp}>Log out</Link>
          <div
            className="teslaAccount__menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <CloseIcon className="teslaAccount__closeMenu" />
            ) : (
              <MenuIcon />
            )}
          </div>
        </div>
      </div>
      <div className="teslaAccount__info">
        <div className="teslaAccount__person">
          <h4>{userSelect?.displayName + "'s"} Tesla</h4>
        </div>
        <div className="teslaAccount__infoRight">
          <Link>Home</Link>
          <Link>Account</Link>
          <Link>History</Link>
          <Link onClick={logoutOfApp}>Sign out</Link>
        </div>
      </div>
      <div className="teslaAccount__car">
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
          model="model s"
          testDrive
        />
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
          model="model x"
        />
      </div>
    </TeslaAccountContainer>
  );
}

// css styles

const TeslaAccountContainer = styled.div`
  .teslaAccount__header {
    padding: 1.5rem 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #222222;
    color: white;
  }

  .teslaAccount__links {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .teslaAccount__links > a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 1.5rem;
    z-index: 0;
  }

  .teslaAccount__logo > a > img {
    object-fit: contain;
    height: 1.2rem;
    width: 12rem;
    margin-right: 10rem;
    filter: brightness(0) invert(1);
  }

  .teslaAccount__menu {
    z-index: 2;
  }

  .teslaAccount__menu > .MuiSvgIcon-root {
    cursor: pointer;
  }

  .teslaAccount__closeMenu {
    color: black;
  }

  .teslaAccount__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6rem 14rem;
    padding-bottom: 3rem;
  }

  .teslaAccount__person > h4 {
    font-weight: 500;
    text-transform: capitalize;
    font-size: x-large;
  }

  .teslaAccount__infoRight {
    font-size: 1.6rem;
    display: flex;
    gap: 2rem;
  }

  .teslaAccount__infoRight > a {
    text-decoration: none;
    color: #393c41;
    font-size: smaller;
    transition: all 0.2s;
    text-transform: capitalize;
  }

  .teslaAccount__infoRight > a:hover {
    color: black;
    font-weight: 500;
  }

  .teslaAccount__car {
    display: grid;
    place-items: center;
    gap: 3rem;
    padding-bottom: 4rem;
  }
`;
