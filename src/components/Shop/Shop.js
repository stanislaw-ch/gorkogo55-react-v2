import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

import "./Shop.css";

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Shop = props => {
  const { number, title, description, keywords, onSelectShop } = props;
  return (
    <ListGroup.Item className="Shop" onClick={() => onSelectShop(number)}>
      <h6>
        {number}. {capitalizeFirstLetter(title)}
      </h6>
      {description && description !== "-" && (keywords && keywords !== "-") ? (
        <p>
          {description}. <i>{keywords}</i>
        </p>
      ) : description && description !== "-" ? (
        <p>{description}</p>
      ) : keywords && keywords !== "-" ? (
        <p>Ключевые слова: {keywords}</p>
      ) : null}
    </ListGroup.Item>
  );
};

export default Shop;
