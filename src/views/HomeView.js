import React, { Component } from "react";
import Navigation from "components/molecules/Navigation/Navigation";
import ShortCard from "components/molecules/ShortCard";
import Footer from "components/molecules/Footer/Footer";
import initialState from "data";

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
        Zamki
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
            />
          )
        )}
        Zapomniane
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
            />
          )
        )}
        <Footer />
      </>
    );
  }
}

export default HomeView;
