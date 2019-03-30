import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Tabletop from "tabletop";

import MainPage from "./containers/MainPage/MainPage";
import SearchPage from "./containers/SearchPage/SearchPage";
import ShowPage from "./containers/ShopPage/ShopPage";
// import testData from "./data/shops.json";
import "./App.css";

//
// NOTE!
// Google Sheets is being read with the help of this article:
// https://medium.com/@ryan.mcnierney/using-react-google-sheets-as-your-cms-294c02561d59
//
const spreadSheetKey = "1rg0Wkb4E1MccFnNJcasmn4uUwxNXDOs_ObeOC9MyYiM";

class App extends Component {
  state = {
    searchValue: "",
    data: [],
    isLoading: true
  };

  componentDidMount() {
    Tabletop.init({
      key: spreadSheetKey,
      callback: googleData => {
        // console.log('google sheet data --->', googleData);
        this.setState({ data: googleData, isLoading: false });
      },
      simpleSheet: true
    });
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
                isLoadingData={this.state.isLoading}
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
                isLoadingData={this.state.isLoading}
                changeSearchValue={this.changeSearchValue}
                data={this.state.data}
                searchValue={this.state.searchValue}
              />
            )}
          />
          <Route
            path="/shop/:id"
            render={routeProps => (
              <ShowPage
                {...routeProps}
                data={this.state.data}
                isLoadingData={this.state.isLoading}
              />
            )}
          />
        </Switch>
        <footer>
          {/* Yandex.Metrika informer */}
          <a href="https://metrika.yandex.ru/stat/?id=53046907&amp;from=informer"
            target="_blank"
            rel="nofollow">
            <img 
              src="https://informer.yandex.ru/informer/53046907/3_1_FFFFFFFF_FFFFFFFF_0_pageviews"
              style={{
                width: '88px',
                height: '31px',
                border: 0
              }}
              alt="Яндекс.Метрика"
              title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)"
              class="ym-advanced-informer"
              data-cid="53046907"
              data-lang="ru" 
            />
          </a>
          {/* /Yandex.Metrika informer */}
        </footer>
      </div>
    );
  }
}

export default App;
