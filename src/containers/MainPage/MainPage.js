import React, { Component } from "react";

import SearchForm from "../../components/SearchForm/SearchForm";
import "./MainPage.css";

export default class MainPage extends Component {
  onSearchForm = () => {
    this.props.history.push("/search");
  };

  render() {
    return (
      <div className="MainPage">
        <h1>Добро пожаловать в ТЦ Горьгоко 55!</h1>
        <p>
          Мы собрали на нашем сайте всю информацию о магазинах торгового центра.
          Введите в поисковое поле номер телефона, название магазина, или товар
          который вы хотите приобрести
        </p>
        <SearchForm onSearchForm={this.onSearchForm} />
      </div>
    );
  }
}
