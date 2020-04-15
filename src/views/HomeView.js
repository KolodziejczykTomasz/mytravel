import React, { Component } from "react";
import Navigation from "components/molecules/Navigation/Navigation";
import ShortCard from "components/molecules/ShortCard";
import Footer from "components/molecules/Footer/Footer";
import initialState from "data";
import styled from "styled-components";

const ListShortCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 98vw;
  margin: 15px auto;
`;

const HeaderListShortCard = styled.div`
font-weight: 400;
  width: 98vw;
  margin: 30px auto;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.6rem;
  border-bottom: 1px solid grey;
`;

class HomeView extends Component {
  state = {
    castles: initialState.castles,
    forgoten: initialState.forgoten,
  };

  render() {
    const { castles, forgoten } = this.state;
    return (
      <>
        <Navigation />
        <HeaderListShortCard>Zamki</HeaderListShortCard>
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
        <HeaderListShortCard>Zapomniane</HeaderListShortCard>
        <ListShortCard pageType="forgotens">
          {forgoten.map(
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
              />
            )
          )}
        </ListShortCard>
        <Footer />
      </>
    );
  }
}

export default HomeView;
