import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";
import HomeView from "views/HomeView";
import CastleView from "views/CastleView";
import ForgotenView from "views/ForgotenView";
import DetailsView from "views/DetailsView";

function Root() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/castles" component={CastleView} />
            <Route path="/castles/:id" component={DetailsView} />
            <Route exact path="/forgotens" component={ForgotenView} />
            <Route path="/forgotens/:id" component={DetailsView} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default Root;
