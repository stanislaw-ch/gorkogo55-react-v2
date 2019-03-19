import React from "react";
import Container from "react-bootstrap/Container";
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
    <Container style={{ padding: "20px" }}>
      <Card onClick={() => onSelectShop(number)}>
        <Card.Body>
          <Card.Title>
            {title}. Повильон № {number}
          </Card.Title>
          {description ? <Card.Text>{description}</Card.Text> : null}
          {phone ? <Card.Text>Телефон: {phone}</Card.Text> : null}
          {vk ? <Card.Link href={vk}>Вконтакте</Card.Link> : null}
          {instagram ? <Card.Link href={instagram}>Instagram</Card.Link> : null}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Shop;
