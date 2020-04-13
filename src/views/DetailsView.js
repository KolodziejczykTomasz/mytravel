import React, { Component } from "react";
import Navigation from "components/molecules/Navigation/Navigation";
import Footer from "components/molecules/Footer/Footer";


class DetailsView extends Component {
  state = {
  };

  render() {

    return (
      <>
        <Navigation />
        detailsView
        {/* {castles.map((item) => (
          <Card key={item.name} {...item} />
        ))} */}

        <Footer />
      </>
    );
  }
}

export default DetailsView;
