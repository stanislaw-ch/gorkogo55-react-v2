import React, { useEffect } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import uniqueId from "lodash/uniqueId";

import Header from "../../components/Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import ShopInList from "../../components/Shop/ShopInList";
import ShopFull from "../../components/Shop/ShopFull";
import Spinner from "../../components/Spinner/Spinner";

// import "./SearchPage.css";
import classes from "./SearchPage.module.css";

const SearchPage = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goMainPage = () => {
    props.history.push(`/`);
  };

  const selectShop = id => {
    props.history.push(`/shop/${id}`);
  };

  /**
   * This method implements data filtering.
   */
  const filterData = item => {
    let result;

    // TODO: Update search algorithm here and delete this message!
    result =
      item.title.toLowerCase().includes(props.searchValue.toLowerCase()) ||
      item.keywords.toLowerCase().includes(props.searchValue.toLowerCase()) ||
      item.description
        .toLowerCase()
        .includes(props.searchValue.toLowerCase()) ||
      item.category.toLowerCase().includes(props.searchValue.toLowerCase());

    return result;
  };

  let ba = props.data.filter(filterData);
  let requiredShops = [];
  requiredShops = ba.map(item => {
    return (
      <ShopInList
        onSelectShop={selectShop}
        key={uniqueId()}
        number={item.number}
        title={item.title}
        description={item.description}
        keywords={item.keywords}
        logo={item.logo}
      />
    );
  });
  if (requiredShops.length === 1) {
    requiredShops = ba.map(shop => {
      return (
        <ShopFull
          hashTageSearch={props.hashTageSearch}
          key={uniqueId()}
          number={shop.number}
          title={shop.title}
          description={shop.description}
          keywords={shop.keywords}
          phone={shop.phone}
          vk={shop.vk}
          instagram={shop.instagram}
          website={shop.website}
          route={shop.route}
        />
      );
    });
  }
  if (requiredShops.length === 0 && props.searchValue !== "") {
    requiredShops = <p>Ничего не найдено...</p>;
  }
  if (props.isLoadingData) {
    return (
      <Container style={{ padding: "3vh", paddingTop: "7vh" }}>
        <Spinner />
      </Container>
    );
  }
  return (
    <>
      <Header goBack={goMainPage} title="Поиск" history={props.history} />
      <Container className={classes.SearchPage}>
        <SearchForm
          {...props}
          searchValue={props.searchValue}
          changeSearchValue={props.changeSearchValue}
        />
        <ListGroup style={{ padding: "2vh", paddingTop: "5vh" }}>
          {requiredShops}
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
};

export default SearchPage;
