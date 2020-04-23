import React, { Component } from "react";
import styled from "styled-components";
import withContext from "hoc/withContext";
import NewItemBar from "../components/molecules/NewItemBar";
import MainTemplates from "./MainTemplates";

const Wrapper = styled.div`
  position: relative;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 70px;
  height: 70px;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  border-radius: 100px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

class ViewTemplate extends Component {
  state = {
    isNewItemBarVisible: false,
  };

  toggleNewItemBar = () => {
    this.setState((prevState) => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
    }));
  };

  render() {
    const { children, pageContext } = this.props;
    const { isNewItemBarVisible } = this.state;

    return (
      <MainTemplates>
        <Wrapper>
          <div>{pageContext}</div>
          <div>{children}</div>
          <StyledButtonWrapper>
            <StyledButton onClick={this.toggleNewItemBar}>PLUS</StyledButton>
          </StyledButtonWrapper>

          <NewItemBar
            handleClose={this.toggleNewItemBar}
            isVisible={isNewItemBarVisible}
            pageContext="castles"
          />
        </Wrapper>
      </MainTemplates>
    );
  }
}

export default withContext(ViewTemplate);
