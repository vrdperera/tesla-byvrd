// router
import { Link } from 'react-router-dom';

// styled-components
import styled from 'styled-components';

// component
export default function MenuItem({ title }) {
  // ui
  return (
    <MenuItemCOntainer>
      <h4>{title}</h4>
    </MenuItemCOntainer>
  );
}

// css styles

const MenuItemCOntainer = styled.div`
  text-align: left;
  cursor: pointer;

  & > h4 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2.1rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    color: rgb(40, 43, 48);
    min-height: 3.5rem;
    padding-left: 1rem;

    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:hover {
      background-color: #f4f4f4;
      transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
`;
