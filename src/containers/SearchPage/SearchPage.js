import React, { Component } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import uniqueId from "lodash/uniqueId";
import { FaAngleLeft } from "react-icons/fa";

import Header from "../../components/Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import ShopInList from "../../components/Shop/ShopInList";
import ShopFull from "../../components/Shop/ShopFull";
import Spinner from "../../components/Spinner/Spinner";

import "./SearchPage.css";

class SearchPage extends Component {
  goMainPage = () => {
    this.props.history.push(`/`);
  };

  selectShop = id => {
    this.props.history.push(`/shop/${id}`);
  };

  /**
   * This method implements data filtering.
   */
  filterData = item => {
    let result;

    // TODO: Update search algorithm here and delete this message!
    result =
      item.title.toLowerCase().includes(this.props.searchValue.toLowerCase()) ||
      item.keywords
        .toLowerCase()
        .includes(this.props.searchValue.toLowerCase()) ||
      item.description
        .toLowerCase()
        .includes(this.props.searchValue.toLowerCase());

    return result;
  };

  render() {
    let ba = this.props.data.filter(this.filterData);
    let requiredShops = [];
    requiredShops = ba.map(item => {
      return (
        <ShopInList
          onSelectShop={this.selectShop}
          key={uniqueId()}
          number={item.number}
          title={item.title}
          description={item.description}
          keywords={item.keywords}
        />
      );
    });
    if (requiredShops.length === 1) {
      requiredShops = ba.map(shop => {
        return (
          <ShopFull
            hashTageSearch={this.props.hashTageSearch}
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
    if (requiredShops.length === 0 && this.props.searchValue !== "") {
      requiredShops = <p>Ничего не найдено...</p>;
    }
    if (this.props.isLoadingData) {
      return (
        <Container style={{ padding: "3vh", paddingTop: "7vh" }}>
          <Spinner />
        </Container>
      );
    }
    return (
      <>
        {/* <Header title={"Поиск"} onPressBack={this.goMainPage} /> */}
        <header className="Brown BoxShadow Header">
          <div onClick={this.goMainPage} className="Icon">
            <FaAngleLeft />
          </div>
          <div className="TitleHeader">
            <p>Поиск</p>
          </div>
          <div onClick={this.goMainPage} className="Icon Disabled">
            <FaAngleLeft />
          </div>
        </header>
        <Container
          // style={{ padding: "3vh", paddingTop: "7vh" }}
          className="SearchPage"
        >
          <SearchForm
            {...this.props}
            searchValue={this.props.searchValue}
            changeSearchValue={this.props.changeSearchValue}
          />
          <ListGroup style={{ padding: "2vh", paddingTop: "5vh" }}>
            {requiredShops}
          </ListGroup>
        </Container>
        <section className="Black  BoxShadow">
          <p>Нашли ошибку? Сообщите нам!</p>
          <Button
            variant="danger"
            size="lg"
            className="Button"
            href="https://forms.gle/gRspoCUZuXFGzzXY8"
          >
            Сообщить об ошибке
          </Button>
        </section>
      </>
    );
  }
}

export default SearchPage;
