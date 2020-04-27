import React from "react";
import Navigation from "components/molecules/Navigation";
import ShortCard from "components/molecules/ShortCard";
import Footer from "components/organisms/Footer/Footer";
import styled from "styled-components";
import { connect } from "react-redux";
import ViewTemplates from "../templates/ViewTemplates";

const ListShortCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 98vw;
  margin: 60px auto 0 auto;
  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 120px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 120px;
  }
`;



const ForgotenView = ({ forgotens }) => (
  <>
    <Navigation />
    <ViewTemplates>
      <ListShortCard pageType="forgotens">
        {forgotens.map(
          ({
            id,
            url,
            name,
            cordinatesN,
            cordinatesE,
            woj,
            powiat,
            gmina,
            miejscowosc,
            description,
          }) => (
            <ShortCard
              id={id}
              url={url}
              key={name}
              name={name}
              cordinatesN={cordinatesN}
              cordinatesE={cordinatesE}
              woj={woj}
              powiat={powiat}
              gmina={gmina}
              miejscowosc={miejscowosc}
              description={description}
              cardType="forgotens"
              pageType="forgotens"
            />
          )
        )}
      </ListShortCard>
    </ViewTemplates>
    <Footer />
  </>
);

const mapStateToProps = (state) => {
  const { forgotens } = state;
  return { forgotens };
};

export default connect(mapStateToProps)(ForgotenView);
