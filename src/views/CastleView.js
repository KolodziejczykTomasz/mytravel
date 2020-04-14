import React, { Component } from "react";
import Navigation from "components/molecules/Navigation/Navigation";
import ShortCard from "components/molecules/ShortCard";
import Footer from "components/molecules/Footer/Footer";
import initialState from "data";

class CastleView extends Component {
  state = {
    castles: initialState.castles,
  };

  render() {
    const { castles } = this.state;
    return (
      <>
        <Navigation />
        <div>
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
        </div>

        <Footer />
      </>
    );
  }
}

export default CastleView;
