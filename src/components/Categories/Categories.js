import React from "react";
import { Button } from "react-bootstrap";

import classes from "./Categories.module.css";

const Categories = props => {
  const categories = [
    "Мебель и предметы интерьера",
    "Техника и электроника",
    "Обувь и сумки",
    "Кафе и развлечения",
    "Сувениры и подарки",
    "Красота и здоровье",
    "одежда",
    "Белье и одежда для дома",
    "Услуги",
    "Туалет"
  ].map(cat => (
    <Button
      variant="light"
      className={classes.Button}
      onClick={() => props.changeSearchCategory(cat)}
      key={Math.random()}
    >
      {cat}
    </Button>
  ));

  return <div className={classes.Btns}>{categories}</div>;
};

export default Categories;
