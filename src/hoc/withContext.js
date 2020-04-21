import React from "react";
import PageContext from "context";
import MainTemplates from "../templates/MainTemplates";

const withContext = (Component) => {
  return function contextComponent(props) {
    return (
      <MainTemplates>
          <PageContext.Consumer>
        {(context) => <Component {...props} pageContext={context} />}
      </PageContext.Consumer>
      </MainTemplates>
    
    );
  };
};

export default withContext;

