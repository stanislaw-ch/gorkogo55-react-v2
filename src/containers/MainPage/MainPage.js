import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";

import Spinner from "../../components/Spinner/Spinner";
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
          <div style={{ height: "15vh" }}>
            <Button variant="primary" size="lg" onClick={this.onSearchForm}>
              Приступить к поиску
            </Button>
          </div>
        )}
      </div>
    );
  }
}
