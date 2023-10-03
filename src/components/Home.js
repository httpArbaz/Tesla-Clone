import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Conatainer>
      <Section
        title="Model S"
        description="After Federal Tax Credit & Est. Gas Savings"
        backgroundImg="/images/model-s.jpg"
        leftBut="Custom Order"
        RightBut="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="After Federal Tax Credit & Est. Gas Savings"
        backgroundImg="/images/model-y.jpg"
        leftBut="Order Now"
        RightBut="Demo Drive"
      />
      <Section
        title="Model X"
        description="After Federal Tax Credit & Est. Gas Savings"
        backgroundImg="/images/model-x.jpg"
        leftBut="Order Now"
        RightBut="Demo Drive"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="/images/solar-roof.jpg"
        leftBut="Order Now"
        RightBut="Learn More"
      />
      <Section
        title="Solar Panels"
        description="Schedule a Virtual Consultation"
        backgroundImg="/images/solar-panel.jpg"
        leftBut="Order Now"
        RightBut="Learn More"
      />
      <Section
        title="Accessories"
        backgroundImg="/images/accessories.jpg"
        leftBut="Shop Now"
      />
    </Conatainer>
  );
};

export default Home;

const Conatainer = styled.div`
  height: 100vh;
`;
