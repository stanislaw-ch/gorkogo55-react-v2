import React, { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";
import uniqueId from "lodash/uniqueId";

import Header from "../../components/Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import Shop from "../../components/Shop/Shop";
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
    let requiredShops = this.props.data.filter(this.filterData).map(item => {
      return (
        <Shop
          onSelectShop={this.selectShop}
          key={uniqueId()}
          number={item.number}
          title={item.title}
          description={item.description}
          keywords={item.keywords}
        />
      );
    });
    if (requiredShops.length === 0 && this.props.searchValue !== "") {
      requiredShops = <p>Ничего не найдено...</p>;
    }
    if (this.props.isLoadingData) {
      return (
        <Container style={{ padding: "3vh", paddingTop: "7vh" }}>
          <p>Загрузка данных ...</p>
          <Spinner />
        </Container>
      );
    }
    return (
      <>
        <Header title={"Горького55"} onPressBack={this.goMainPage} />
        <Container style={{ padding: "3vh", paddingTop: "7vh" }}>
          <SearchForm
            {...this.props}
            searchValue={this.props.searchValue}
            changeSearchValue={this.props.changeSearchValue}
          />
          <ListGroup style={{ padding: "2vh", paddingTop: "5vh" }}>
            {requiredShops}
          </ListGroup>
        </Container>
      </>
    );
  }
}

export default SearchPage;
