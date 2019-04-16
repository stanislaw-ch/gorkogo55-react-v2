import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FiPhone, FiAlertCircle } from "react-icons/fi";
import background from "../../assets/images/background.jpg";

// import Spinner from "../../components/Spinner/Spinner";
import "./MainPage.css";

export default class MainPage extends Component {
  state = {
    width: 0,
    height: 0
  };

  componentDidMount() {
    this.props.clearSearchValue();
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  onSearchForm = () => {
    this.props.history.push("/search");
  };

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  render() {
    console.log(this.state);
    return (
      <section className="Main">
        <img src={background} className="ImageBackground" alt="background" />
        <header className="Brown BoxShadow">
          <p className="Welcome">Добро пожаловать в</p>
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
          <Button variant="light" size="lg" className="Button">
            Сообщить об ошибке
          </Button>
        </section>
      </section>
    );
  }
}
