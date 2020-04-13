import React, { Component } from "react";
import Navigation from "components/molecules/Navigation/Navigation";
import MiniCard from "components/molecules/MiniCard";
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
        {castles.map((item) => (
          <MiniCard key={item.name} {...item} />
        ))}
        Zapomniane
        {forgoten.map((item) => (
          <MiniCard key={item.name} {...item} />
        ))}
        <Footer />
      </>
    );
  }
}

export default HomeView;
