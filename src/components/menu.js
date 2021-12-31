// router
import { Link } from 'react-router-dom';

// styled-components
import styled from 'styled-components';

// import components
import MenuItem from './menuItem';

// component
export default function menu() {
  // ui
  return (
    <MenuContainer>
      <MenuItem title="existing inventory" />
      <MenuItem title="used inventory" />
      <MenuItem title="trade-in" />
      <MenuItem title="cybertruck" />
      <MenuItem title="roadster" />
      <MenuItem title="semi" />
      <MenuItem title="charging" />
      <MenuItem title="powerwall" />
      <MenuItem title="commercial solar" />
      <MenuItem title="test drive" />
      <MenuItem title="find us" />
      <MenuItem title="support" />
      <MenuItem title="Investor Relations" />
      <MenuItem title="united states" />
    </MenuContainer>
  );
}

// css styles
const MenuContainer = styled.div`
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding-left: 3rem;
  padding-top: 7rem;
  padding-bottom: 2rem;
  padding-right: 3rem;
  background-color: white;
  z-index: 1;
  min-width: 31.1rem;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
