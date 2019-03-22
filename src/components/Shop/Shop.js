import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

const Shop = props => {
  const {
    number,
    title,
    description,
    phone,
    vk,
    instagram,
    onSelectShop
  } = props;
  return (
    <ListGroup.Item
      onClick={() => onSelectShop(number)}
      style={{ padding: "1vh" }}
    >
      <h5>{title}</h5>
      <p> № {number}</p>
      {description ? <p>{description}</p> : null}
      {phone ? <p>Телефон: {phone}</p> : null}
      {vk ? <Card.Link href={vk}>Вконтакте</Card.Link> : null}
      {instagram ? <Card.Link href={instagram}>Instagram</Card.Link> : null}
    </ListGroup.Item>
  );
};

export default Shop;
