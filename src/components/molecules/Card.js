import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import withContext from "hoc/withContext";
import MainTemplates from "templates/MainTemplates";


const Button = styled.a`
  display: grid;
  position: fixed;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-content: center;
  color: black;
  background-color: lightgray;
  border-radius: 50px;
  bottom: 220px;
  right: 40px;
  :hover {
    text-decoration-line: none;
    color: white;
  }
`;


class Card extends Component {


  render() {
    const {
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
     
    } = this.props;

    const {pageType}= this.props;

    return (
      <MainTemplates>
        <div pageType={pageType}>
          <ul>
            <li>
              <img src={url} alt={name} />
            </li>
            <img src={photo1} alt={name} />
            <img src={photo2} alt={name} />
            <img src={photo3} alt={name} />
           
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
          <Button as={Link} to={`/${pageType}`}>
            Close
          </Button>
        </div>
      </MainTemplates>
    );
  }
}




export default withContext(Card);
