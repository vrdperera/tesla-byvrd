// styled-components
import styled from 'styled-components';

// component
export default function ButtonSecondary({ name, type }) {
  // ui
  return <BtnSecondary type={type}>{name}</BtnSecondary>;
}

// css styles
const BtnSecondary = styled.button`
  background-color: transparent;
  border: 3px solid #171a20;
  /* width: 100%; */
  padding: 1rem 4rem;
  border-radius: 5rem;
  text-transform: uppercase;
  color: #171a20;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;

  &:hover {
    background-color: #171a20;
    color: white;
  }
`;
