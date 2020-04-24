import React, { Component } from "react";
import { routes } from "routes";
import { connect } from "react-redux";
import Navigation from "components/molecules/Navigation";
import Card from "components/molecules/Card";
import Footer from "components/organisms/Footer/Footer";

class DetailsView extends Component {
  state = {
    pageType: "",
    id: 0,
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

    switch (match.params.id) {
      case "1":
        this.setState({ id: 0 });
        break;
      case "2":
        this.setState({ id: 1 });
        break;
      case "3":
        this.setState({ id: 2 });
        break;
      default:
        console.log("Something went wrong");
    }
  }

  render() {
    const { pageType, id } = this.state;
    

    const {
      url,
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
    } = this.props.castles[id];

 

    return (
      <>
        <Navigation />
        <Card
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
          url={url}
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
