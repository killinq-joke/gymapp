import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Workout from "./components/Workout";
import Nutrition from "./components/Nutrition";
import Premium from "./components/Premium";
import Account from "./components/Account";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/workout">
          <Workout />
        </Route>
        <Route path="/nutrition">
          <Nutrition />
        </Route>
        <Route path="/premium">
          <Premium />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
