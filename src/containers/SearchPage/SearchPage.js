import React, { useEffect } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";

import Header from "../../components/Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import ListShops from "../../components/Shop/ListShops";
import Spinner from "../../components/Spinner/spinner.tsx";

import classes from "./SearchPage.module.css";

const SearchPage = ({
  history,
  searchValue,
  data,
  isLoadingData,
  hashTageSearch,
  changeSearchValue
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goMainPage = () => {
    history.push(`/`);
  };

  const selectShop = id => {
    history.push(`/shop/${id}`);
  };

  if (isLoadingData) {
    return (
      <Container style={{ padding: "3vh", paddingTop: "7vh" }}>
        <Spinner />
      </Container>
    );
  } else {
    return (
      <>
        <Header goBack={goMainPage} title="Поиск" history={history} />
        <Container className={classes.SearchPage}>
          <SearchForm
            searchValue={searchValue}
            changeSearchValue={changeSearchValue}
          />
          <ListGroup style={{ padding: "2vh", paddingTop: "5vh" }}>
            <ListShops
              shopsData={data}
              searchValue={searchValue}
              hashTageSearch={hashTageSearch}
              selectShop={selectShop}
            />
          </ListGroup>
        </Container>
        <section className={[classes.Black, classes.BoxShadow].join(" ")}>
          <p>Нашли ошибку? Сообщите нам!</p>
          <Button
            variant="danger"
            size="lg"
            className={classes.Button}
            href="https://forms.gle/gRspoCUZuXFGzzXY8"
          >
            Сообщить об ошибке
          </Button>
        </section>
      </>
    );
  }
};

export default SearchPage;
