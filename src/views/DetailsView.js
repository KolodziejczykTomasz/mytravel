import React, { Component } from "react";
import { routes } from "routes";
import { connect } from "react-redux";
import Navigation from "components/molecules/Navigation/Navigation";
import Card from "components/molecules/Card";
import Footer from "components/organisms/Footer/Footer";




class DetailsView extends Component {
  state = {
    pageType: "",    
  };

  componentDidMount() {
    const { match } = this.props;
    switch (match.path) {
      case routes.castle:
        this.setState({ pageType: "castles" });
        break;
      case routes.forgoten:
        this.setState({ pageType: "forgotens" });
        break;
      default:
        console.log("Something went wrong");
    }
  }

  render() {
    const {
      id,
      url1,
      url2,
      url3,    
      name,
      cordinatesN,
      cordinatesE,
      woj,
      powiat,
      gmina,
      miejscowosc,
      description,
    } = this.props;

    const {pageType} = this.state;

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


const mapStateToProps = (state) => {
  const { castles, forgotens } = state;
  return { castles, forgotens };
};

export default connect(mapStateToProps)(DetailsView);