import React from "react";
import Navigation from "components/molecules/Navigation";
import ShortCard from "components/molecules/ShortCard";
import Footer from "components/organisms/Footer/Footer";
import { connect } from "react-redux";
import styled from "styled-components";
import ViewTemplates from "templates/ViewTemplates";
import MainTemplates from "templates/MainTemplates";

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

const CastleView = ({ castles }) => (
  <>
    <Navigation />
    <MainTemplates>
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
    </MainTemplates>
    <Footer />
  </>
);

const mapStateToProps = (state) => {
  const { castles } = state;
  return { castles };
};

export default connect(mapStateToProps)(CastleView);
