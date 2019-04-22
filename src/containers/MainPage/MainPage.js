import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FiPhone, FiAlertCircle } from "react-icons/fi";

// import Spinner from "../../components/Spinner/Spinner";
import "./MainPage.css";

export default class MainPage extends Component {
  componentDidMount() {
    this.props.clearSearchValue();
  }

  onSearchForm = () => {
    this.props.history.push("/search");
  };

  render() {
    return (
      <section className="Main">
        <header className="Brown BoxShadow">
          <p className="Title">Добро пожаловать в</p>
          <p>торговый центр «Две пятерки»</p>
        </header>
        <section className="Separator" />
        <section className="Black BoxShadow">
          <p>Все товары и услуги в одном месте</p>
        </section>
        <section className="Brown BoxShadow">
          <p className="Option">
            <FaSearch className="Icon" />
            Моментальный поиск
          </p>
          <p className="Option">
            <FiPhone className="Icon" />
            Звонок в один клик
          </p>
          <p className="Option">
            <FiAlertCircle className="Icon" />
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
        <section className="Separator" />
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
      </section>
    );
  }
}
