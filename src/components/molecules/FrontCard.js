import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

  @media (max-width: 1280px) {
    display: flex;
    min-height: 200px;
    flex-shrink: 1;
    padding: 5px 20px;
  }

  @media (max-width: 768px) {
    margin-top: 5px;
  }
`;

const StyledText = styled.div`
  display: inline-block;
  text-align: center;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 2px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 15px;

  @media (max-width: 1280px) {
    font-size: 0.8rem;
    top: 75%;
    width: auto;
  }

  @media (max-width: 1279px) {
    visibility: hidden;
  }
`;

class FrontCard extends Component {
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

FrontCard.propTypes = {  
  url: PropTypes.string.isRequired,  
  name: PropTypes.string.isRequired,  
};

export default FrontCard;
