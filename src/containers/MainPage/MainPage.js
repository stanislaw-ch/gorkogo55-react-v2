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
        <div className="header">
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img
            src={headerPicture}
            alt="Header picture"
            className="headerPicture"
          />
        </div>
        <div className="content">
          <h3 className="welcome">Уважаемые посетители!</h3>
          <p className="message">
            Добро пожаловать в торговый центр «Две пятерки». Мы собрали для Вас подробную информацию о магазинах,
            товарах и услугах, которые вы можете получить на нашем сайте.
          </p>
          {this.props.isLoadingData ? (
            <Container>
              <p> Загрузка данных ...</p>
              <Spinner />
            </Container>
          ) : (
            <div>
              <Button variant="primary" size="lg" onClick={this.onSearchForm}>
                Приступить к поиску
              </Button>
              <p className="wanna-help">
                Помогите сделать поиск лучше - добавьте недостающую информацию и мы ее опубликуем!
              </p>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdTOMQFz4SAghmm7_gPhKjsJcYZKvxEOp3kPA6MsNOhLy1TGQ/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </div>
          )}
        </div>
      </div>
    );
  }
}
