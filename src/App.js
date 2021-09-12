import React, { useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { runInAction } from "mobx";
import { observer } from "mobx-react-lite"

import MainPage from "./containers/MainPage/MainPage";
import SearchPage from "./containers/SearchPage/SearchPage";
import ShopPage from "./containers/ShopPage/ShopPage";
import YM from "./components/YandexMetrica/ym";
import PapaParse from "papaparse";

import spareData from "./data/shops.json";

import classes from "./App.module.css";

const SPREAD_SHEET_LINK = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRjmR3TtfkpjeoCNxRvhe7cR1ZjHhXyy2BBkrK1dSkz57E4brSnUdQIG6LqXkm_5-IxQCSTNrsgLc9E/pub?output=csv";

import { shopsStore } from './stores';
const store = shopsStore();


const App = props => {
  useEffect(() => {
    runInAction(() => {
      store.setIsLoading(true);
    })
    PapaParse.parse(SPREAD_SHEET_LINK, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: setDataFromGS,
    });
  }, []);

  const setDataFromGS = result => {
    const data = result.data
    const errors = result.errors
    if (!errors.length) {
      store.setIsLoading(false);
      store.setData(data);
    } else {
      store.setIsLoading(false);
      store.setData(spareData);
      alert('Ошибка загрузки данных. Информация о магазинах может быть не актуальна!');
    }
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
