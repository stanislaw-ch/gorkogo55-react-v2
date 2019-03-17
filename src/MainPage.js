import React, { Component, Fragment } from "react";

export default class MainPage extends Component {
  render() {
    return (
      <Fragment>
        <h1>Добро пожаловать в ТЦ Горьгоко 55!</h1>
        <p>
          Мы собрали на нашем сайте всю информацию о магазинах торгового центра.
          Введите в поисковое поле номер телефона, название магазина, или товар
          который вы хотите приобрести
        </p>
      </Fragment>
    );
  }
}
