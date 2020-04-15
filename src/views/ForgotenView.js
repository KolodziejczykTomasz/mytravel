import React, { Component } from "react";
import Navigation from "components/molecules/Navigation/Navigation";
import ShortCard from "components/molecules/ShortCard";
import Footer from "components/molecules/Footer/Footer";
import initialState from "data";
import styled from "styled-components";

const ListShortCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 98vw;
  margin: 15px auto;
`;



class ForgotenView extends Component {
  state = {
    forgotens: initialState.forgoten,
  };

  render() {
    const { forgotens } = this.state;
   
    return (
      <>
        <Navigation />
        <ListShortCard pageType="forgotens">
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
        </ListShortCard>

        <Footer />
      </>
    );
  }
}

export default ForgotenView;

