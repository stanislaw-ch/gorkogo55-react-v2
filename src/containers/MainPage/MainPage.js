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
          <div className="OptionsContainer">
            <div className="Options">
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
            </div>
          </div>
          <div>
            <Button
              variant="light"
              size="lg"
              className="Button"
              onClick={this.onSearchForm}
            >
              Приступить к поиску
            </Button>
          </div>
          <div className="Btns">
            <Button
              variant="light"
              // size="lg"
              className="Button Category"
              onClick={() =>
                this.props.changeSearchCategory("Мебель и предметы интерьера")
              }
            >
              Мебель и предметы интерьера
            </Button>
            <Button
              variant="light"
              // size="lg"
              className="Button Category"
              onClick={() =>
                this.props.changeSearchCategory("Техника и электроника")
              }
            >
              Техника и электроника
            </Button>
            <Button
              variant="light"
              // size="lg"
              className="Button Category"
              onClick={() => this.props.changeSearchCategory("Обувь и сумки")}
            >
              Обувь и сумки
            </Button>
            <Button
              variant="light"
              // size="lg"
              className="Button Category"
              onClick={() =>
                this.props.changeSearchCategory("Кафе и развлечения")
              }
            >
              Кафе и развлечения
            </Button>
            <Button
              variant="light"
              // size="lg"
              className="Button Category"
              onClick={() =>
                this.props.changeSearchCategory("Сувениры и подарки")
              }
            >
              Сувениры и подарки
            </Button>
            <Button
              variant="light"
              // size="lg"
              className="Button Category"
              onClick={() =>
                this.props.changeSearchCategory("Красота и здоровье")
              }
            >
              Красота и здоровье
            </Button>
            <Button
              variant="light"
              // size="lg"
              className="Button Category"
              onClick={() => this.props.changeSearchCategory("одежда")}
            >
              Одежда
            </Button>
            <Button
              variant="light"
              // size="lg"
              className="Button Category"
              onClick={() =>
                this.props.changeSearchCategory("Белье и одежда для дома")
              }
            >
              Белье и одежда для дома
            </Button>
            <Button
              variant="light"
              // size="lg"
              className="Button Category"
              onClick={() => this.props.changeSearchCategory("Услуги")}
            >
              Услуги
            </Button>
            <Button
              variant="light"
              // size="lg"
              className="Button Category"
              onClick={() => this.props.changeSearchCategory("Туалет")}
            >
              Туалет
            </Button>
          </div>
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
