import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import { connect } from "react-redux";
import { removeItem as removeItemAction } from "actions";
import withContext from "hoc/withContext";

const WrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 1 fr;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 5px 5px;
  margin: 5px 5px;
`;

const NameStyled = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;
  border-bottom: 1px solid grey;
  margin: 15px 0 15px 0;
  padding-bottom: 5px;
`;

const ImageStyled = styled.img`
  display: flex;
  height: auto;
  width: auto;
  height: 50vh;
  margin: 15px auto;

  @media (max-width: 1100px) {
    max-height: 200px;
  }
`;

class ShortCard extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const {
      id,
      url,
      name,
      woj,
      powiat,
      gmina,
      miejscowosc,
      cardType,
      removeItem,
    } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${cardType}/${id}`} />;
    }

    return (
      <WrapperStyled>
        <button
          class="delete is-medium"
          onClick={() => removeItem(cardType, id)}
        ></button>
        <ul>
          <NameStyled>{name}</NameStyled>
          <li>
            <ImageStyled src={url} alt={name} />
          </li>
          Położenie:
          <li>Województwo: {woj}</li>
          <li>Powiat: {powiat}</li>
          <li>Gmina: {gmina}</li>
          <li>Miejscowość: {miejscowosc}</li>
        </ul>
        <button class="button" onClick={this.handleCardClick}>
          Więcej
        </button>
      </WrapperStyled>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(withContext(ShortCard));


