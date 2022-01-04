import ButtonPrimary from '../components/buttonPrimary';
import ButtonSecondary from '../components/buttonSecondary';

// styled-components
import styled from 'styled-components';

export default function Car({ imgSrc, model, testDrive }) {
  return (
    <CarContainer className="car">
      <div className="car__image">
        <img src={imgSrc} alt="" />
      </div>
      <h2 className="car__model">{model}</h2>
      <div className="car__actions">
        <ButtonPrimary name="order" />
        {testDrive && <ButtonSecondary name="test drive" />}
      </div>
      <p className="car__info">
        <span>Request a Call</span> to speak with a product specialist, value
        your trade-in or apply for leasing
      </p>
    </CarContainer>
  );
}

// css styles
const CarContainer = styled.div`
  display: grid;
  place-items: center;
  border-top: 1px solid #d0d1d2;

  .car__image > img {
    object-fit: contain;
    width: 100rem;
  }

  .car__model {
    font-weight: 500;
    font-size: xx-large;
    margin-top: -18rem;
    text-transform: capitalize;
  }

  .car__actions {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: -4rem;
  }

  .car__actions > button {
    width: 23rem;
    margin-bottom: 3rem;
  }

  .car__info {
    max-width: 35rem;
    text-align: center;
    font-size: 0.8rem;
    line-height: 1.5;
    font-weight: 500;
    color: #393c41;
  }

  .car__info > span {
    color: #3e6be2;
    cursor: pointer;
  }
`;
