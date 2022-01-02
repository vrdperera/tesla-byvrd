// styled-components
import styled from 'styled-components';

// component
export default function ButtonPrimary({ name, type, onClicked }) {
  // ui
  return (
    <BtnPrimary type={type} onClick={onClicked}>
      {name}
    </BtnPrimary>
  );
}

// css styles
const BtnPrimary = styled.button`
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
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: #3457b1;
  }
`;
