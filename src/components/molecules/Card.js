import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import withContext from "hoc/withContext";
import MainTemplates from "templates/MainTemplates";

const StyledWrapper = styled.div`
  display: block;
  margin-top: 150px;
  padding-bottom: 50px;
  width: 70vw;
  margin: 80px auto;
  border: 1px solid gray;
  border-radius: 10px;
  @media (max-width: 1024px) {
    margin-top: 80px;
  }
  @media (max-width: 1023px) {
    margin-top: 150px;
  }
`;

const StyledHeader = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  font-size: 2.5rem;
  font-weight: 500;
  text-transform: uppercase;
  padding: 40px auto;
  height: 100px;
  border-bottom: 1px solid grey;
  letter-spacing: 3px;
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1023px) {
    font-size: 1.5rem;
  }
`;

const StyledWrapperGallery = styled.div`
  width: 100%;
`;

const StyledGalleryHero = styled.div``;

const StyledGalleryHeroImage = styled.img`
  display: flex;
  width: 800px;
  height: auto;
  margin: 15px auto;
  border-radius: 10px;
  @media (max-width: 1024px) {
    width: 95%;
  }
  @media (max-width: 1023px) {
    width: 95%;
  }
`;

const StyledGalleryItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const StyledGalleryItem = styled.img`
  display: flex;
  padding: 15px 15px;  
`;

const StyledWrapperDescription = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  margin-top: 50px;
  @media (max-width: 1280px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 15px;
    margin-top: 10px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 15px;
    margin-top: 10px;
  }
`;

const StyledDescriptionColumnLeft = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.1rem;
`;

const StyledDescriptionColumnRight = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.1rem;
`;

const StyledDescriptionTitle = styled.div`
  display: inline-block;
  height: 30px;
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  margin: 35px 0 15px 0;
`;

const StyledDescriptionItem = styled.div`
  padding-left: 10px;
  margin: 5px 0 5px 0;
`;

const StyledDescription = styled.div`
  padding-left: 10px;
  margin: 5px 0 15px 0;
`;

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

    const { pageType } = this.props;

    return (
      <MainTemplates>
        <StyledWrapper pageType={pageType}>
          <StyledHeader>{name}</StyledHeader>
          <StyledWrapperGallery>
            <StyledGalleryHero>
              <StyledGalleryHeroImage src={url} alt={name} />
            </StyledGalleryHero>
            <StyledGalleryItems>
              <StyledGalleryItem src={photo1} alt={name} />
              <StyledGalleryItem src={photo2} alt={name} />
              <StyledGalleryItem src={photo3} alt={name} />
            </StyledGalleryItems>
          </StyledWrapperGallery>
          <StyledWrapperDescription>
            <StyledDescriptionColumnLeft>
              <StyledDescriptionTitle>Położenie:</StyledDescriptionTitle>
              <StyledDescriptionItem>N: {cordinatesN}</StyledDescriptionItem>
              <StyledDescriptionItem>E: {cordinatesE}</StyledDescriptionItem>
              <StyledDescriptionItem>Województwo: {woj}</StyledDescriptionItem>
              <StyledDescriptionItem>Powiat: {powiat}</StyledDescriptionItem>
              <StyledDescriptionItem>Gmina: {gmina}</StyledDescriptionItem>
              <StyledDescriptionItem>
                Miejscowość: {miejscowosc}
              </StyledDescriptionItem>
            </StyledDescriptionColumnLeft>
            <StyledDescriptionColumnRight>
              <StyledDescriptionTitle> Opis:</StyledDescriptionTitle>
              <StyledDescription>{description}</StyledDescription>
            </StyledDescriptionColumnRight>
          </StyledWrapperDescription>
          <Button as={Link} to={`/${pageType}`}>
            Close
          </Button>
        </StyledWrapper>
      </MainTemplates>
    );
  }
}

export default withContext(Card);
