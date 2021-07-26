import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FiPhone, FiAlertCircle } from "react-icons/fi";

import Categories from "../../components/Categories/Categories.js";
import classes from "./MainPage.module.css";

const MainPage = props => {
  useEffect(() => {
    props.clearSearchValue();
  });

  const onSearchForm = () => {
    props.history.push("/search");
  };

  return (
    <section className={classes.Main}>
      <header className={[classes.Brown, classes.BoxShadow].join(" ")}>
        <p className={classes.Title}>Добро пожаловать в</p>
        <p>торговый центр «Парковый»</p>
      </header>
      <section className={[classes.Black, classes.BoxShadow].join(" ")}>
        <p>Выберите категорию:</p>
      </section>
      <section className={classes.Separator}>
        <Categories changeSearchCategory={props.changeSearchCategory} />
      </section>
      <section className={[classes.Black, classes.BoxShadow].join(" ")}>
        <p>Все товары и услуги в одном месте</p>
      </section>
      <section className={[classes.Brown, classes.BoxShadow].join(" ")}>
        <div className={classes.OptionsContainer}>
          <div className={classes.Options}>
            <div
              className={classes.Option}
              onClick={onSearchForm}
              onKeyPress={() => {}}
              role="button"
              tabIndex={0}
            >
              <FaSearch className={classes.Icon} />
              Моментальный поиск
            </div>
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
    </section>
  );
};

export default MainPage;
