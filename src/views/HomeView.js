import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Navigation from "components/molecules/Navigation";
import FrontCard from "components/molecules/FrontCard";
import Footer from "components/organisms/Footer/Footer";
import Hero from "components/atoms/Hero";
import styled from "styled-components";

const StyledWrapper = styled.div`
  @media (max-width: 768px) {    
    margin-top: 80px;
  }
`;

const ListShortCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 98vw;
  margin: 0 auto;
  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 30px;
  }
`;

const HeaderListFrontCard = styled.div`
  width: 98vw;
  margin: 30px auto 0 auto;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.8rem;
  letter-spacing: 5px;
  font-weight: 500;
  border-bottom: 1px solid grey;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const FooterListFrontCard = styled.div`
  font-weight: 400;
  width: 98vw;
  margin: 30px auto;
  text-align: center;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    margin-top: 45px;
    margin-bottom: 5px;
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin: 30px 15px 0 15px;
`;

const HomeView = ({ castles, forgotens }) => (
  <>
    <Navigation />
    <Hero />
    <StyledWrapper>
      <HeaderListFrontCard>Zamki</HeaderListFrontCard>
      <ListShortCard pageType="castles">
        {castles.map(({ url, name }) => (
          <>
            <FrontCard url={url} name={name}></FrontCard>
          </>
        ))}
      </ListShortCard>

      <FooterListFrontCard>
        <StyledButtonWrapper>
          <NavLink className="button is-link is-rounded" to="/castles">
            Więcej
          </NavLink>
        </StyledButtonWrapper>
      </FooterListFrontCard>
    </StyledWrapper>
    <StyledWrapper>
      <HeaderListFrontCard>Zapomniane</HeaderListFrontCard>
      <ListShortCard pageType="forgotens">
        {forgotens.map(({ url, name }) => (
          <FrontCard url={url} name={name} />
        ))}
      </ListShortCard>
      <FooterListFrontCard>
        <StyledButtonWrapper>
          <NavLink className="button is-link is-rounded" to="/forgotens">
            Więcej
          </NavLink>{" "}
        </StyledButtonWrapper>
      </FooterListFrontCard>
    </StyledWrapper>
    <Footer />
  </>
);

const mapStateToProps = (state) => {
  const { castles, forgotens } = state;
  return { castles, forgotens };
};

export default connect(mapStateToProps)(HomeView);
