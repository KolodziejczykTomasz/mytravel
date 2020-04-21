import React from "react";
import Navigation from "components/molecules/Navigation/Navigation";
import ShortCard from "components/molecules/ShortCard";
import Footer from "components/organisms/Footer/Footer";
import { connect } from "react-redux";
import styled from "styled-components";
import ViewTemplates from "../templates/ViewTemplates";

const ListShortCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 98vw;
  margin: 60px auto 0 auto;
`;

const CastleView = ({ castles }) => (
  <>
    <Navigation />
    <ViewTemplates>
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
              pageType="castles"
            />
          )
        )}
      </ListShortCard>
    </ViewTemplates>
    <Footer />
  </>
);

const mapStateToProps = (state) => {
  const { castles } = state;
  return { castles };
};

export default connect(mapStateToProps)(CastleView);
