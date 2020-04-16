import React from "react";
import Navigation from "components/molecules/Navigation/Navigation";
import ShortCard from "components/molecules/ShortCard";
import Footer from "components/molecules/Footer/Footer";
import { connect } from "react-redux";
import styled from "styled-components";

const ListShortCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 98vw;
  margin: 15px auto;
`;

const CastleView = ({ castles }) => (
  <>
    <Navigation />
    <ListShortCard pageType="castles">
      {castles.map(
        ({
          id,
          name,
          url,
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
            cardType="castles"
          />
        )
      )}
    </ListShortCard>

    <Footer />
  </>
);

const mapStateToProps = (state) => {
  const { castles } = state;
  return { castles };
};

export default connect(mapStateToProps)(CastleView);
