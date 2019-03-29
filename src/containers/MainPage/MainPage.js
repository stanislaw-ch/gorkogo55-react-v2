import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import Spinner from "../../components/Spinner/Spinner";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./MainPage.css";

export default class MainPage extends Component {
  onSearchForm = () => {
    this.props.history.push("/search");
  };

  componentDidMount() {
    this.props.clearSearchValue();
  }

  render() {
    return (
      <div className="MainPage">
        <h3>Добро пожаловать в ТЦ Горького 55!</h3>
        <p>
          Мы собрали на нашем сайте всю информацию о магазинах торгового центра.
          Введите в поисковое поле номер телефона, название магазина, или товар
          который вы хотите приобрести
        </p>
        {this.props.isLoadingData ? (
          <Container style={{ height: "15vh" }}>
            <p> Загрузка данных ...</p>
            <Spinner />
          </Container>
        ) : (
          <SearchForm
            {...this.props}
            onSearchForm={this.onSearchForm}
            searchValue={this.props.searchValue}
            changeSearchValue={this.props.changeSearchValue}
          />
        )}
      </div>
    );
  }
}
