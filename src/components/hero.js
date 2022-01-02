// styled-components
import styled from 'styled-components';

// import components

// component
export default function Hero() {
  // ui
  return (
    <HeroContainer>
      <div className="heroContainer__info">
        <div className="heroContainer__info-text">
          <h1>Model VRDÉ </h1>
          <h4>
            To create, One must first <span>question everything</span>.
          </h4>
        </div>
        <div className="heroContainer__actions">
          <button className="btnPrimary">Custome order</button>
          <button className="btnSecondary ">Existing inventory</button>
        </div>
      </div>
    </HeroContainer>
  );
}

// css styles
const HeroContainer = styled.div`
  background: url('https://tesla.com/ns_videos/model-3-social.jpg') no-repeat
    center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  place-items: center;

  .heroContainer__info {
    display: flex;
    flex-direction: column;
    height: 66rem;
  }
  .heroContainer__info-text {
    flex: 1;
    text-align: center;
  }

  .heroContainer__info-text h1 {
    letter-spacing: -0.6px;
    color: rgb(24, 27, 33);
    font-size: 4rem;
    font-weight: 600;
    padding-bottom: 1rem;
  }

  .heroContainer__info-text h4 {
    color: rgb(24, 27, 33);
    font-size: 1.7rem;
    font-weight: 400;
  }

  .heroContainer__info-text h4 span {
    padding-bottom: 4px;
    padding-top: 15px;
    border-bottom: 1px solid black;
    color: #393c41;
    cursor: pointer;
  }

  .heroContainer__info-text > h4 > span:hover {
    border-bottom-width: 2px;
    color: black;
  }

  .heroContainer__actions {
    margin-top: 33rem;
    display: flex;
    gap: 2rem;

    & button {
      cursor: pointer;
      border: none;
      width: 26rem;
      padding-top: 1.2rem;
      padding-bottom: 1.2rem;
      border-radius: 5rem;
      text-transform: uppercase;
      line-height: 14.4px;
      font-weight: 600;
      font-size: 1.2rem;
      letter-spacing: 1px;
      outline: none;
      white-space: nowrap;
    }

    .btnPrimary {
      background-color: #393c41;
      color: white;
      opacity: 0.9;
    }

    .btnSecondary {
      background-color: white;
      color: black;
      opacity: 0.8;
    }
  }
`;
