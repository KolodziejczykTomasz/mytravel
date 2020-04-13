import React, { Component } from "react";

class MiniCard extends Component {
  state = {};
  render() {
    const {
      url,
      name,      
      woj,
      powiat,
      gmina,
      miejscowosc,
    } = this.props;
    return (
      <>
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
      </>
    );
  }
}

export default MiniCard;
