import React, { useState, useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Tabletop from "tabletop";

import MainPage from "./containers/MainPage/MainPage";
import SearchPage from "./containers/SearchPage/SearchPage";
import ShopPage from "./containers/ShopPage/ShopPage";
import testData from "./data/shops.json";
import "./App.css";

//
// NOTE!
// Google Sheets is being read with the help of this article:
// https://medium.com/@ryan.mcnierney/using-react-google-sheets-as-your-cms-294c02561d59
//
const spreadSheetKey = "1rg0Wkb4E1MccFnNJcasmn4uUwxNXDOs_ObeOC9MyYiM";

const app = props => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setData(testData);
    setLoading(false);
  }, []);

  useEffect(() => {
    Tabletop.init({
      key: spreadSheetKey,
      callback: googleData => {
        (googleData.length !== 0 && (setData(googleData) && setLoading(false)));
      },
      simpleSheet: true,
    });
  }, [])


  const changeSearchGroup = searchValue => {
    setSearchValue(searchValue)
    props.history.push(`/search`);
  };

  const changeSearchValue = event => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const clearSearchValue = () => {
    setSearchValue('');
  };

  return (
    <div className="App">
      <main>
        <Switch>
          <Route
            path="/"
            exact
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
        {/* Yandex.Metrika informer */}
        <a
          href="https://metrika.yandex.ru/stat/?id=53046907&amp;from=informer"
          target="_blank"
          rel="nofollow"
        >
          <img
            src="https://informer.yandex.ru/informer/53046907/3_1_FFFFFFFF_FFFFFFFF_0_pageviews"
            style={{
              width: "88px",
              height: "31px",
              border: 0
            }}
            alt="Яндекс.Метрика"
            title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)"
            className="ym-advanced-informer"
            data-cid="53046907"
            data-lang="ru"
          />
        </a>
        {/* /Yandex.Metrika informer */}
      </footer>
    </div>
  );

}

export default withRouter(app);
