import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

import uniqueId from "lodash/uniqueId";

import SearchForm from "../../components/SearchForm/SearchForm";
import Shop from "../../components/Shop/Shop";
import Spinner from "../../components/Spinner/Spinner";
import "./SearchPage.css";

class SearchPage extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    setTimeout(this.finishLoading, 500);
  }

  finishLoading = () => {
    this.setState({ isLoading: false });
  };

  selectShop = id => {
    this.props.history.push(`/shop/${id}`);
  };

  filterData = (item) => {
    return item.title.toLowerCase().includes(this.props.searchValue.toLowerCase());
  };

  render() {
    const { isLoading } = this.state;

    let requiredShops = this.props.data
      .filter(this.filterData)
      .map(item => {
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

    return (
      <Container style={{ padding: "3vh", paddingTop: "7vh" }}>
        <SearchForm
          {...this.props}
          searchValue={this.props.searchValue}
          changeSearchValue={this.props.changeSearchValue}
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <ListGroup style={{ padding: "2vh", paddingTop: "5vh" }}>
            {requiredShops}
          </ListGroup>
        )}
      </Container>
    );
  }
}

export default SearchPage;
