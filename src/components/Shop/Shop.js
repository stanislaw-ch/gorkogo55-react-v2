import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

import "./Shop.css";

const Shop = props => {
  const { number, title, description, keywords, onSelectShop } = props;
  return (
    <ListGroup.Item
      className="Shop"
      onClick={() => onSelectShop(number)}
      // style={{ padding: "1vh" }}
    >
      <h6>
        № {number}. {title}
      </h6>
      {description && keywords ? (
        <p>
          {description}. Ключевые слова: {keywords}
        </p>
      ) : description ? (
        <p>{description}</p>
      ) : keywords ? (
        <p>Ключевые слова: {keywords}</p>
      ) : null}
    </ListGroup.Item>
  );
};

export default Shop;
