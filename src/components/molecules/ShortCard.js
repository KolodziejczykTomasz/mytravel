import React, { Component } from "react";
import { Redirect } from "react-router-dom";

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
    } = this.props;
 const { redirect } = this.state;

 if (redirect) {
   return <Redirect to={`${cardType}/${id}`} />;
 }

    return (
      <>
        <div>
          <ul>
            <li>{name}</li>
            <li>
              <img src={url} alt={name} />
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
        </div>
      </>
    );
  }
}

export default ShortCard;
