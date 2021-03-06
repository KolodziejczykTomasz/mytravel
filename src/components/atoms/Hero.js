import React from 'react';
import hero from 'assets/images/hero.jpg';
import styled from 'styled-components';

const StyledImages = styled.img`
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: 80px;
  @media (max-width: 1280px) {
    margin-top: 120px;
    margin: 120px auto 5px auto;
    padding: 0 10px;
  }
  @media (max-width: 769px) {
    margin-top: 120px;
    margin: 120px auto 5px auto;
    padding: 0 5px;
    padding: 0 10px;
  }
`;

const StyledTextHero = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-transform: uppercase;
  font-size: 4rem;
  letter-spacing: 20px;
  border: 1px solid gray;
  padding: 20px 80px;
  background-color: rgba(0, 0, 0, 0.3);
  @media (max-width: 1279px) {
    visibility: hidden;
  }
`;

const Hero = () => (
  <>
    <StyledImages src={hero} />
    <StyledTextHero>My Travel</StyledTextHero>
  </>
);

export default Hero;
