import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Tabletop from 'tabletop';

import MainPage from "./containers/MainPage/MainPage";
import SearchPage from "./containers/SearchPage/SearchPage";
import ShowPage from "./containers/ShopPage/ShopPage";
import testData from "./data/shops.json";
import "./App.css";

//
// NOTE!
// Google Sheets is being read with the help of this article:
// https://medium.com/@ryan.mcnierney/using-react-google-sheets-as-your-cms-294c02561d59
//
const spreadSheetKey = '1rg0Wkb4E1MccFnNJcasmn4uUwxNXDOs_ObeOC9MyYiM';

class App extends Component {
  state = {
    searchValue: "",
    data: testData,
  };

  componentDidMount() {
    Tabletop.init({
      key: spreadSheetKey,
      callback: googleData => {
        // console.log('google sheet data --->', googleData);
        this.setState({data: googleData});
      },
      simpleSheet: true
    })
  }

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
                data={this.state.data}
                searchValue={this.state.searchValue}
              />
            )}
          />
          <Route
            path="/shop/:id"
            render={routeProps => (
              <ShowPage {...routeProps} data={this.state.data} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
