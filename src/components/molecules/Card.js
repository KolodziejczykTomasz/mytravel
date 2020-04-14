import React from "react";



const Card = ({
  url,
  photo1,
  photo2,
  photo3,
  name,
  cordinatesN,
  cordinatesE,
  description,
  woj,
  powiat,
  gmina,
  miejscowosc,
  cardType,
}) => {
  return (
    <>
      <div cardType={cardType}>
        <button class="delete is-large" href={`/${cardType}`}></button>
        <ul>
          <li>
            <img src={url} alt={name} />
          </li>
          {photo1}
          {photo2}
          {photo3}
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
      </div>
    </>
  );
};

export default Card;
