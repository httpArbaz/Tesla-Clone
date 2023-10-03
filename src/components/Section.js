import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = ({ title, description, leftBut, RightBut, backgroundImg }) => {
  return (
    <Wrap id="modelS" bgImg={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBut}</LeftButton>
            {RightBut && <RightButton>{RightBut}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) => `url(${props.bgImg})`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  p {
    padding-top: 10px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 786px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  margin: 12px;
  width: 256px;
  height: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  background-color: rgba(23, 26, 32, 0.8);
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  opacity: 0.65;
  color: black;
  background: white;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
