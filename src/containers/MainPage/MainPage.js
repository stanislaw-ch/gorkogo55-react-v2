import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FiPhone, FiAlertCircle } from "react-icons/fi";

// import Spinner from "../../components/Spinner/Spinner";
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
      <section className="Main">
        <header className="Brown">
          <p>Добро пожаловать в</p>
          <p>
            в торговый центра <span className="NameCS">«Две пятерки»</span>
          </p>
        </header>
        <section className="ImageBackground" />
        <section className="Black">
          <p>Все товары и услуги в одном месте</p>
        </section>
        <section className="Brown">
          <p>
            <FaSearch />
            <span> Моментальный поиск</span>
          </p>
          <p>
            <FiPhone />
            Звонок в один клик
          </p>
          <p>
            <FiAlertCircle />
            Вся информация под рукой
          </p>
          <Button
            variant="light"
            size="lg"
            className="Button"
            onClick={this.onSearchForm}
          >
            Приступить к поиску
          </Button>
        </section>
        <section className="ImageBackground" />
        <section className="Black">
          <p>Нашли ошибку? Сообщите нам!</p>
          <Button variant="light" size="lg" className="Button">
            Сообщить об ошибке
          </Button>
        </section>
      </section>
    );
  }
}
