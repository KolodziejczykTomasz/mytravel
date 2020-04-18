import React, { Component } from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  display: grid;
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
        </WrapperStyled>
      </>
    );
  }
}

export default ShortCard;
