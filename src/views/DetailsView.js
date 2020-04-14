import React, { Component } from "react";
import { routes } from "routes";
import Navigation from "components/molecules/Navigation/Navigation";
import Card from "components/molecules/Card";
import Footer from "components/molecules/Footer/Footer";
import initialState from "data";



class DetailsView extends Component {
  state = {
    pageType: "",
    castles: initialState.castles,
  };

  componentDidMount() {
    const { match } = this.props;
    switch (match.path) {
      case routes.twitter:
        this.setState({ pageType: "castles" });
        break;
      case routes.note:
        this.setState({ pageType: "forgotens" });
        break;
      default:
        console.log("Something went wrong with matching paths");
    }
  }

  render() {
    const {
      id,
      url1,
      url2,
      url3,
      pageType,
      name,
      cordinatesN,
      cordinatesE,
      woj,
      powiat,
      gmina,
      miejscowosc,
      description,
    } = this.props;

    return (
      <>
        <Navigation />
        <Card
          id={id}
          key={name}
          pageType={pageType}
          name={name}
          cordinatesN={cordinatesN}
          cordinatesE={cordinatesE}
          woj={woj}
          powiat={powiat}
          gmina={gmina}
          miejscowosc={miejscowosc}
          description={description}
          photo1={url1}
          photo2={url2}
          photo3={url3}
        />
        <Footer />
      </>
    );
  }
}

export default DetailsView;
