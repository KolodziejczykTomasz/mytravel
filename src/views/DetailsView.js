import React, { Component } from "react";
import { routes } from "routes";
import { connect } from "react-redux";
import Navigation from "components/molecules/Navigation";
import Card from "components/molecules/Card";
import Footer from "components/organisms/Footer/Footer";

class DetailsView extends Component {
  state = {
    pageType: "castles",
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
    
  
   


    return (
      <>
        <Navigation />
        {pageType === "forgotens" && (
          <Card
            key={this.props.forgotens[id].name}
            pageType={pageType}
            name={this.props.forgotens[id].name}
            cordinatesN={this.props.forgotens[id].cordinatesN}
            cordinatesE={this.props.forgotens[id].cordinatesE}
            woj={this.props.forgotens[id].woj}
            powiat={this.props.forgotens[id].powiat}
            gmina={this.props.forgotens[id].gmina}
            miejscowosc={this.props.forgotens[id].miejscowosc}
            description={this.props.forgotens[id].description}
            url={this.props.forgotens[id].url}
            photo1={this.props.forgotens[id].url1}
            photo2={this.props.forgotens[id].url2}
            photo3={this.props.forgotens[id].url3}
          />
        )}
        {pageType === "castles" && (
          <Card
            key={this.props.castles[id].name}
            pageType={pageType}
            name={this.props.castles[id].name}
            cordinatesN={this.props.castles[id].cordinatesN}
            cordinatesE={this.props.castles[id].cordinatesE}
            woj={this.props.castles[id].woj}
            powiat={this.props.castles[id].powiat}
            gmina={this.props.castles[id].gmina}
            miejscowosc={this.props.castles[id].miejscowosc}
            description={this.props.castles[id].description}
            url={this.props.castles[id].url}
            photo1={this.props.castles[id].url1}
            photo2={this.props.castles[id].url2}
            photo3={this.props.castles[id].url3}
          />
        )}

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
