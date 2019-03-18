import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import Spinner from "../../components/Spinner/Spinner";

class ShopPage extends Component {
  state = {
    testData: [
      {
        number: 1,
        title: "цветы",
        description: null,
        keywords: "букет, розы, ромашки",
        phone: "12345678",
        vk: null,
        instagram: "rose12345"
      },
      {
        number: 216,
        title: "скупка и ремонт техники",
        description: null,
        keywords: null,
        phone: "697966",
        vk: null,
        instagram: "@vadimcpp"
      },
      {
        number: 40,
        title: "nextek",
        description: "комьютерная техника",
        keywords: "нотбук, монитор, принтер",
        phone: null,
        vk: "vadimcpp",
        instagram: null
      }
    ],
    isLoading: true
  };

  componentDidMount() {
    setTimeout(this.finishLoading, 2000);
  }

  finishLoading = () => {
    this.setState({ isLoading: false });
  };

  renderShop = () => {
    const selectedShop = this.state.testData.filter(
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
