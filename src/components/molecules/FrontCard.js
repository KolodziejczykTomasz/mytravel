import React, { Component } from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1 fr;
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

const StyledText = styled.div`
  text-align: center;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 2px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 15px;
  @media (max-width: 1100px) {
    visibility: hidden;
  }
`;

class ShortCard extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { url, name } = this.props;

    return (
      <>
        <WrapperStyled>
          <ImageStyled src={url} alt={name} />
          <StyledText>{name}</StyledText>
        </WrapperStyled>
      </>
    );
  }
}

export default ShortCard;
