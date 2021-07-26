import React, { useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { runInAction } from "mobx";
import { observer } from "mobx-react-lite"
import Tabletop from "tabletop";

import MainPage from "./containers/MainPage/MainPage";
import SearchPage from "./containers/SearchPage/SearchPage";
import ShopPage from "./containers/ShopPage/ShopPage";
import YM from "./components/YandexMetrica/ym";

import testData from "./data/shops.json";

import classes from "./App.module.css";

const SPREAD_SHEET_KEY = "1rg0Wkb4E1MccFnNJcasmn4uUwxNXDOs_ObeOC9MyYiM";

import { shopsStore } from './stores';
const store = shopsStore();

const App = props => {
  useEffect(() => {
    runInAction(() => {
      store.setIsLoading(true);
    })
    Tabletop.init({
      key: SPREAD_SHEET_KEY,
      callback: setDataFromGS,
      simpleSheet: true
    });
  }, []);

  const setDataFromGS = sheets => {
    runInAction(() => {
      store.setIsLoading(false);
      store.setData(sheets.length === 0 ? testData : sheets);
    });
  };

  const changeSearchGroup = searchValue => {
    runInAction(() => {
      store.setSearchValue(searchValue);
    });
    props.history.push(`/search`);
  };

  const changeSearchValue = event => {
    store.setSearchValue(event.target.value);
  };

  const clearSearchValue = () => {
    runInAction(() => {
      store.setSearchValue("");
    });
  };

  const searchValue = store.searchValue;
  const isLoading = store.isLoading;
  const data = store.data;

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

export default withRouter(observer(App));
