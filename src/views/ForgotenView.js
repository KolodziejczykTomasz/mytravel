import React from "react";
import Navigation from "components/molecules/Navigation/Navigation";
import ShortCard from "components/molecules/ShortCard";
import Footer from "components/organisms/Footer/Footer";
import styled from "styled-components";
import { connect } from "react-redux";

const ListShortCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 98vw;
  margin: 15px auto;
`;



const ForgotenView = ({forgotens})=> (
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

const mapStateToProps = (state) => {
  const { forgotens } = state;
  return { forgotens };
};

export default connect(mapStateToProps)(ForgotenView);



