// router
import { Link } from 'react-router-dom';

// styled-components
import styled from 'styled-components';

// material-ui
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

// component
export default function Header({ isMenuOpen, setIsMenuOpen }) {
  // ui
  return (
    <HeaderContainer>
      <div className="header__logo">
        <Link to="/">
          <img
            className="header__logo-img"
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt="Tesla Logo"
          />
        </Link>
      </div>
      <div className="header__links">
        <Link to="/">Model S</Link>
        <Link to="/">Model 3 </Link>
        <Link to="/">Model X</Link>
        <Link to="/">Model Y </Link>
        <Link to="/">Solar Roof</Link>
        <Link to="/">Solar Panels</Link>
      </div>

      <div className="header__right">
        <Link to="/" className={isMenuOpen ? 'header__link-hidden' : ''}>
          Shop
        </Link>
        <Link to="/signin" className={isMenuOpen ? 'header__link-hidden' : ''}>
          Tesla Account
        </Link>
        <div
          className="header__menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </HeaderContainer>
  );
}

// css styles
const HeaderContainer = styled.div`
  display: flex;
  position: sticky;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  & .header__logo-img {
    object-fit: contain;
    flex: 1;
    height: 1.2rem;
    width: 12rem;
    margin-right: 10rem;
  }

  & .header__links,
  .header__right {
    display: flex;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2.1rem;
    gap: 3rem;
    align-items: center;
    position: relative;

    & a {
      text-decoration: none;
      color: black;
    }

    & .header__link-hidden {
      visibility: hidden;
    }

    & .header__menu > .MuiSvgIcon-root {
      position: relative;
      display: flex;
      justify-content: center;
      cursor: pointer;
      width: 24px;
      height: 24px;
      z-index: 2;
    }
  }
`;
