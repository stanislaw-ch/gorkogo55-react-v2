import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

import { capitalizeFirstLetter } from "../../components/Shop/Shop";
import Spinner from "../../components/Spinner/Spinner";

class ShopPage extends Component {
  goSearchPage = () => {
    this.props.history.push(`/search`);
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
            <Card.Text>Ключевые слова: {shop.keywords}</Card.Text>
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
    if (this.props.isLoadingData) {
      return (
        <Container style={{ padding: "3vh", paddingTop: "7vh" }}>
          <p>Загрузка данных ...</p>
          <Spinner />
        </Container>
      );
    }
    return (
      <Container style={{ padding: "3vh", paddingTop: "7vh" }}>
        <ButtonToolbar style={{ paddingBottom: "10%" }}>
          <Button onClick={this.goSearchPage} variant="primary" size="lg" block>
            Искать ещё
          </Button>
        </ButtonToolbar>
        {this.renderShop()}
      </Container>
    );
  }
}

export default ShopPage;
