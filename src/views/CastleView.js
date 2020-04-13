import React, { Component } from "react";
import Navigation from "components/molecules/Navigation/Navigation";
import Card from "components/molecules/Card";
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
        {castles.map((item) => (
          <Card key={item.name} {...item} />
        ))}

        <Footer />
      </>
    );
  }
}

export default CastleView;
