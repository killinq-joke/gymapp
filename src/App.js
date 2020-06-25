import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";

import Workout from "./components/Workout";
import Nutrition from "./components/Nutrition";
import Premium from "./components/Premium";
import Account from "./components/Account";

function App() {
  return (
    <div className="App">
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
      <footer className="Bottom">
        <Link to="/workout">workout</Link>
        <Link to="/nutrition">nutrition</Link>
        <Link to="/premium">premium</Link>
        <Link to="/account">account</Link>
      </footer>
    </div>
  );
}

export default App;
