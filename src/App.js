import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import MainPage from "./containers/MainPage/MainPage";
import SearchPage from "./containers/SearchPage/SearchPage";
import ShowPage from "./containers/ShopPage/ShopPage";
import testData from "./data/shops.json";
import "./App.css";

class App extends Component {
  state = {
    testData
  };
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route
            path="/найти"
            render={routeProps => (
              <SearchPage {...routeProps} testData={this.state.testData} />
            )}
          />
          <Route
            path="/повильон/:id"
            render={routeProps => (
              <ShowPage {...routeProps} testData={this.state.testData} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
