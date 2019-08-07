import React, { FunctionComponent } from "react";
import { Button } from "react-bootstrap";

import classes from "./Categories.module.css";

const Categories: FunctionComponent<{ ChangeSearchCategory: void }> = ({
  ChangeSearchCategory
}) => {
  const categories: string[] = [
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
  ];

  function rendedCategories(items: string[]) {
    return items.map(cat => (
      <Button
        variant="light"
        className={classes.Button}
        onClick={() => ChangeSearchCategory(cat)}
        key={Math.random()}
      >
        {cat}
      </Button>
    ));
  }

  return <div className={classes.Btns}>{rendedCategories(categories)}</div>;
};

export default Categories;
