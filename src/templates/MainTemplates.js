import React, { Component } from "react";
import { withRouter } from "react-router";
import PageContext from "context";


class MainTemplate extends Component {
  state = {
    pageType: "forgotens",
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  setCurrentPage = (prevState = "") => {
    const pageTypes = ["castles", "forgotens"];
    const {
      location: { pathname },
    } = this.props;

    const [currentPage] = pageTypes.filter((page) => pathname.includes(page));

    if (prevState.pageType !== currentPage) {
      this.setState({ pageType: currentPage });
    }
  };

  render() {
    const { children } = this.props;
    const { pageType } = this.state;

    return (
      <div>
        <PageContext.Provider value={pageType}>{children}</PageContext.Provider>
      </div>
    );
  }
}



export default withRouter(MainTemplate);
