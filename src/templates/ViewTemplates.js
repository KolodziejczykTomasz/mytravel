import React, { Component } from "react";
import styled from "styled-components";
import withContext from "hoc/withContext";
import NewItemBar from "../components/molecules/NewItemBar";

const Wrapper = styled.div`
  position: relative;
`;

class ViewTemplate extends Component {
  state = {
    isNewItemBarVisible: true,
  };

  toggleNewItemBar = () => {
    this.setState((prevState) => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
    }));
  };

  render() {
    const { children } = this.props;
    const { isNewItemBarVisible } = this.state;

    return (
      <Wrapper>
          <div>
           {children}   
          </div>
        
        <button onClick={this.toggleNewItemBar}>PLUS</button>

        <NewItemBar
          handleClose={this.toggleNewItemBar}
          isVisible={isNewItemBarVisible}
        >Close</NewItemBar> 
          
        
      </Wrapper>
    );
  }
}

export default withContext(ViewTemplate);
