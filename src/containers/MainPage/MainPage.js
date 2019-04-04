import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";

import Spinner from "../../components/Spinner/Spinner";
import "./MainPage.css";
import headerPicture from '../../assets/images/dve_pyaterki.jpg';


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
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          src={headerPicture}
          alt="Header picture"
          className="headerPicture"
        />
        <div className="content">
          <h2 className="welcome">Добро пожаловать <br /> в ТЦ «Две пятерки» <br /> </h2>
          <h4 className="address"> ул. Горького, 55📍</h4>
          <p className="message">
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
      </div>
    );
  }
}
