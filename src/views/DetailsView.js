import React, { Component } from "react";
import { routes } from "routes";
import { connect } from "react-redux";
import Navigation from "components/molecules/Navigation/Navigation";
import Card from "components/molecules/Card";
import Footer from "components/organisms/Footer/Footer";
import withContext from "hoc/withContext";



class DetailsView extends Component {
  state = {
    pageType: "",
    activeItem: {
      id: "",
      url1: "",
      url2: "",
      url3: "",
      name: "",
      cordinatesN: "",
      cordinatesE: "",
      woj: "",
      powiat: "",
      gmina: "",
      miejscowosc: "",
      description: '',
    },
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
   
    const { pageType, activeItem } = this.state;

    return (
      <>
        <Navigation />
        <Card
          id={activeItem.id}
          key={activeItem.name}
          pageType={pageType}
          name={activeItem.name}
          cordinatesN={activeItem.cordinatesN}
          cordinatesE={activeItem.cordinatesE}
          woj={activeItem.woj}
          powiat={activeItem.powiat}
          gmina={activeItem.gmina}
          miejscowosc={activeItem.miejscowosc}
          description={activeItem.description}
          photo1={activeItem.url1}
          photo2={activeItem.url2}
          photo3={activeItem.url3}
        />
        <Footer />
      </>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContext]) {
    return {
      activeItem: state[ownProps.pageContext].filter(
        (item) => item._id === ownProps.match.params.id
      ),
    };
  }
  return {};
};

export default withContext(connect(mapStateToProps)(DetailsView));
