import React, { Component } from "react";
import Navigation from "components/molecules/Navigation/Navigation";
import ShortCard from "components/molecules/ShortCard";
import Footer from "components/molecules/Footer/Footer";
import initialState from "data";

class ForgotenView extends Component {
  state = {
    forgotens: initialState.forgoten,
  };

  render() {
    const { forgotens } = this.state;
   
    return (
      <>
        <Navigation />
        <div>
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
              />
            )
          )}
        </div>

        <Footer />
      </>
    );
  }
}

export default ForgotenView;

