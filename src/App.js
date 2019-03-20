import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import MainPage from "./containers/MainPage/MainPage";
import SearchPage from "./containers/SearchPage/SearchPage";
import ShowPage from "./containers/ShopPage/ShopPage";
import testData from "./data/shops.json";
import "./App.css";

class App extends Component {
  state = {
    testData,
    searchValue: ""
  };
  changeSearchValue = event => {
    event.preventDefault();
    this.setState({ searchValue: event.target.value });
  };

  clearSearchValue = () => {
    this.setState({ searchValue: "" });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            render={routeProps => (
              <MainPage
                {...routeProps}
                searchValue={this.state.searchValue}
                clearSearchValue={this.clearSearchValue}
                changeSearchValue={this.changeSearchValue}
              />
            )}
          />
          <Route
            path="/search"
            render={routeProps => (
              <SearchPage
                {...routeProps}
                changeSearchValue={this.changeSearchValue}
                testData={this.state.testData}
                searchValue={this.state.searchValue}
              />
            )}
          />
          <Route
            path="/shop/:id"
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
