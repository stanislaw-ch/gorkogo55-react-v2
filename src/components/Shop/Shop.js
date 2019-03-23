import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

import "./Shop.css";

const Shop = props => {
  const {
    number,
    title,
    description,
    keywords,
    phone,
    vk,
    instagram,
    onSelectShop
  } = props;
  return (
    <ListGroup.Item
      className="Shop"
      onClick={() => onSelectShop(number)}
      // style={{ padding: "1vh" }}
    >
      <h5>
        № {number}. {title}
      </h5>
      {description && keywords ? (
        <p>
          {description}. Ключевые слова: {keywords}
        </p>
      ) : description ? (
        <p>{description}</p>
      ) : keywords ? (
        <p>Ключевые слова: {keywords}</p>
      ) : null}
      {phone ? <p>Телефон: {phone}</p> : null}
      {vk ? <Card.Link href={vk}>Вконтакте</Card.Link> : null}
      {instagram ? <Card.Link href={instagram}>Instagram</Card.Link> : null}
    </ListGroup.Item>
  );
};

export default Shop;
