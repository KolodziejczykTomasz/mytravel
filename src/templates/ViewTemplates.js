import React, { Component } from 'react';
import styled from 'styled-components';
import withContext from 'hoc/withContext';
import NewItemBar from '../components/molecules/NewItemBar';
import MainTemplates from './MainTemplates';

const Wrapper = styled.div`
  position: relative;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin: 30px 15px 30px 15px;
`;

class ViewTemplate extends Component {
  state = {
    isNewItemBarVisible: false,
  };


  toggleNewItemBar = (e) => {
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
            <button className="button is-info is-rounded" onClick={this.toggleNewItemBar}>
              DODAJ
            </button>
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
