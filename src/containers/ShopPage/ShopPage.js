import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

import { capitalizeFirstLetter } from "../../components/Shop/Shop";
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
    const selectedShop = this.props.data.filter(
      shop => shop.number === this.props.match.params.id
    );

    const shop = selectedShop[0];
    const shopComponent = shop ? (
      <Card>
        <Card.Body>
          <Card.Title>
            <p>Павильон № {shop.number}</p>
            <p>{capitalizeFirstLetter(shop.title)}</p>
          </Card.Title>
          {shop.description && shop.description !== "-" ? (
            <Card.Text>{shop.description}</Card.Text>
          ) : null}
          {shop.keywords && shop.keywords !== "-" ? (
            <Card.Text>{shop.keywords}</Card.Text>
          ) : null}
          {shop.phone && shop.phone !== "-" ? (
            <Card.Text>Телефон: {shop.phone}</Card.Text>
          ) : null}
          {shop.vk && shop.vk !== "-" ? (
            <Card.Text>
              <Nav.Link href={shop.vk}>Вконтакте</Nav.Link>
            </Card.Text>
          ) : null}
          {shop.instagram && shop.instagram !== "-" ? (
            <Card.Text>
              <Nav.Link href={shop.instagram}>Instagram</Nav.Link>
            </Card.Text>
          ) : null}
          {shop.website && shop.website !== "-" ? (
            <Card.Text>
              <Nav.Link href={shop.website}>Веб-сайт</Nav.Link>
            </Card.Text>
          ) : null}
          {shop.route && shop.route !== "-" ? (
            <Card.Text>Можно найти: {shop.route}</Card.Text>
          ) : null}
        </Card.Body>
      </Card>
    ) : (
      <p>Ищем информацию...</p>
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
