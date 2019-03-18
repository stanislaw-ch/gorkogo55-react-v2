import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import MainPage from "./containers/MainPage/MainPage";
import SearchPage from "./containers/SearchPage/SearchPage";
import ShowPage from "./containers/ShopPage/ShopPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/найти" component={SearchPage} />
          <Route path="/Повильон/:id" component={ShowPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
