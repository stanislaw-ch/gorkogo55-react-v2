import React from 'react';
import uniqueId from "lodash/uniqueId";
import { Button } from "react-bootstrap";

import classes from './Categories.module.css'

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
            onClick={() =>
                props.changeSearchCategory("Мебель и предметы интерьера")
            }
            key={uniqueId()}
        >{cat}</Button>));

    return (
        <div className={classes.Btns}>
            {categories}
        </div>
    );
}

export default Categories;