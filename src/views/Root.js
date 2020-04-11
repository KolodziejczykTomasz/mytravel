import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeView from 'views/HomeView';
import CastleView from "views/CastleView";
import ForgotenView from "views/ForgotenView";


function Root() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route path="/castles">
            <CastleView />
          </Route>
          <Route path="/forgoten">
            <ForgotenView />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Root;
