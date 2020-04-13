import React, { Component } from "react";
import Navigation from "components/molecules/Navigation/Navigation";
import Card from "components/molecules/Card";
import Footer from "components/molecules/Footer/Footer";
import initialState from "data";

class ForgotenView extends Component {
  state = {
    forgoten: initialState.forgoten,
  };

  render() {
    const { forgoten } = this.state;
    return (
      <>
        <Navigation />
        {forgoten.map((item) => (
          <Card key={item.name} {...item} />
        ))}

        <Footer />
      </>
    );
  }
}

export default ForgotenView;

