import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FiPhone, FiAlertCircle } from "react-icons/fi";

// import Spinner from "../../components/Spinner/Spinner";
import Categories from '../../components/Categories/Categories';
import classes from "./MainPage.module.css";

const MainPage = props => {
  useEffect(() => {
    props.clearSearchValue();
  })

  const onSearchForm = () => {
    props.history.push("/search");
  };

  return (
    <section className={classes.Main}>
      <header className={[classes.Brown, classes.BoxShadow].join(' ')}>
        <p className={classes.Title}>Добро пожаловать в</p>
        <p>торговый центр «Две пятерки»</p>
      </header>
      <section className={[classes.Black, classes.BoxShadow].join(' ')}>
        <p>Выберите категорию:</p>
      </section>
      <section className={classes.Separator}>
        <Categories changeSearchCategory={props.changeSearchCategory} />
      </section>
      <section className={[classes.Black, classes.BoxShadow].join(' ')}>
        <p>Все товары и услуги в одном месте</p>
      </section>
      <section className={[classes.Brown, classes.BoxShadow].join(' ')}>
        <div className={classes.OptionsContainer}>
          <div className={classes.Options}>
            <p className={classes.Option} onClick={onSearchForm}>
              <FaSearch className={classes.Icon} />
              Моментальный поиск
              </p>
            <p className={classes.Option}>
              <FiPhone className={classes.Icon} />
              Звонок в один клик
              </p>
            <p className={classes.Option}>
              <FiAlertCircle className={classes.Icon} />
              Вся информация под рукой
              </p>
          </div>
        </div>
      </section>
      {/* <section className={[classes.Black, classes.BoxShadow].join(' ')}>
        <p>Нашли ошибку? Сообщите нам!</p>
        <Button
          variant="light"
          size="lg"
          className={classes.Button}
          href="https://forms.gle/gRspoCUZuXFGzzXY8"
        >
          Сообщить об ошибке
          </Button>
      </section> */}
    </section>
  );
}

export default MainPage;