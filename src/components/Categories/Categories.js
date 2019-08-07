import React from "react";
import { Button } from "react-bootstrap";

import classes from "./Categories.module.css";

var categories = [
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
]

function renderCategories(items, clickFunc) {
	return <div className={classes.Btns}>{
		items.map(cat => (
			<Button
				variant="light"
				className={classes.Button}
				onClick={() => clickFunc(cat)}
				key={Math.random()}
			>
				{cat}
			</Button>
		))
	}</div>;
}

export default function Categories({ changeSearchCategory }) {
	return renderCategories(
		Object.freeze(categories),
		changeSearchCategory
	)
};
