import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Navigation from "components/molecules/Navigation/Navigation";
import FrontCard from "components/molecules/FrontCard";
import Footer from "components/organisms/Footer/Footer";
import Hero from 'components/atoms/Hero';
import styled from "styled-components";

const StyledWrapper = styled.div`
  border-bottom: 1px solid grey;
`;

const ListShortCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 98vw;
  margin: 15px auto;
`;

const HeaderListFrontCard = styled.div`
  font-weight: 400;
  width: 98vw;
  margin: 30px auto;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.8rem;
`;

const FooterListFrontCard = styled.div`
  font-weight: 400;
  width: 98vw;
  margin: 30px auto;
  text-align: center;  
  font-size: 1.2rem;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin: 15px 15px;
`;


const HomeView = ({ castles, forgotens }) => (
  <>
    <Navigation />
    <Hero />
    <StyledWrapper>
      <HeaderListFrontCard>Zamki</HeaderListFrontCard>
      <ListShortCard pageType="castles">
        {castles.map(({ url, name }) => (
          <FrontCard url={url} name={name} />
        ))}
      </ListShortCard>

      <FooterListFrontCard>
        <StyledButtonWrapper>
          <a className="button is-link is-rounded" as={Link} href="/castles">
            Więcej
          </a>
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
          <a
            className="button is-link is-rounded"
            as={Link}
            href="/forgotens"
          >
            Więcej
          </a>
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
