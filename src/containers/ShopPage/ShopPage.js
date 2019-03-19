import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import Spinner from "../../components/Spinner/Spinner";

class ShopPage extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    setTimeout(this.finishLoading, 500);
  }

  finishLoading = () => {
    this.setState({ isLoading: false });
  };

  renderShop = () => {
    const selectedShop = this.props.testData.filter(
      shop => shop.number === +this.props.match.params.id
    );
    const shop = selectedShop[0];
    const shopComponent = (
      <Card>
        <Card.Body>
          <Card.Title>
            {shop.title}. Повильон № {shop.number}
          </Card.Title>
          {shop.description ? <Card.Text>{shop.description}</Card.Text> : null}
          {shop.phone ? <Card.Text>Телефон: {shop.phone}</Card.Text> : null}
          {shop.vk ? <Card.Link href={shop.vk}>Вконтакте</Card.Link> : null}
          {shop.instagram ? (
            <Card.Link href={shop.instagram}>Instagram</Card.Link>
          ) : null}
        </Card.Body>
      </Card>
    );
    return shopComponent;
  };

  render() {
    const { isLoading } = this.state;
    const content = isLoading ? <Spinner /> : this.renderShop();
    return <Container style={{ padding: "20px" }}>{content}</Container>;
  }
}

export default ShopPage;
