import React, { useState, useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Tabletop from "tabletop";

import MainPage from "./containers/MainPage/MainPage";
import SearchPage from "./containers/SearchPage/SearchPage";
import ShopPage from "./containers/ShopPage/ShopPage";
import YM from "./components/YandexMetrica/ym";

import testData from "./data/shops.json";

import classes from "./App.module.css";

const SPREAD_SHEET_KEY = "1k5HiPW-sCSaZGukO9bBWU4Z6zTn3LFC3pYT-dZBYa2Y";

const App = props => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setLoading(true);
    Tabletop.init({
      key: SPREAD_SHEET_KEY,
      callback: setDataFromGS,
      simpleSheet: true
    });
  }, []);

  const setDataFromGS = sheets => {
    setLoading(false);
    setData(sheets.length === 0 ? testData : sheets);
  };

  const changeSearchGroup = searchValue => {
    setSearchValue(searchValue);
    props.history.push(`/search`);
  };

  const changeSearchValue = event => {
    setSearchValue(event.target.value);
  };

  const clearSearchValue = () => {
    setSearchValue("");
  };

  return (
    <div className={classes.App}>
      <main>
        <Switch>
          <Route
            path="/"
            exact={true}
            render={routeProps => (
              <MainPage
                {...routeProps}
                isLoadingData={isLoading}
                searchValue={searchValue}
                clearSearchValue={clearSearchValue}
                changeSearchCategory={changeSearchGroup}
              />
            )}
          />
          <Route
            path="/search"
            render={routeProps => (
              <SearchPage
                {...routeProps}
                hashTageSearch={changeSearchGroup}
                isLoadingData={isLoading}
                changeSearchValue={changeSearchValue}
                data={data}
                searchValue={searchValue}
              />
            )}
          />
          <Route
            path="/shop/:id"
            render={routeProps => (
              <ShopPage
                {...routeProps}
                hashTageSearch={changeSearchGroup}
                data={data}
                isLoadingData={isLoading}
              />
            )}
          />
        </Switch>
      </main>
      <footer>
        <YM />
      </footer>
    </div>
  );
};

export default withRouter(App);
