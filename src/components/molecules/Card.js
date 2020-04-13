import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    const {      
      url,
      gallery,
      name,
      cordinatesN,
      cordinatesE,
      description,
      woj,
      powiat,
      gmina,
      miejscowosc,
    } = this.props;
    return (
      <>
        <ul>
          <li>
            <img src={url} alt={name} />
          </li>
          {gallery.map((item) => (
            <div>
              <img src={item.url1} alt={name}/>
              <img src={item.url2} alt={name}/>
              <img src={item.url3} alt={name}/>
            </div>
          ))}
          <li>{name}</li>
          Położenie:
          <li>N: {cordinatesN}</li>
          <li>E: {cordinatesE}</li>
          <li>Województwo: {woj}</li>
          <li>Powiat: {powiat}</li>
          <li>Gmina: {gmina}</li>
          <li>Miejscowość: {miejscowosc}</li>
          Opis:
          <li> {description}</li>
        </ul>
      </>
    );
  }
}

export default Card;
