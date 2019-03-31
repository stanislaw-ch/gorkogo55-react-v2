import React, { Component } from "react";
import { Container, Card, Button, ButtonToolbar } from "react-bootstrap";
import { FaVk, FaInstagram } from "react-icons/fa";
import { MdPhoneForwarded } from "react-icons/md";

import { capitalizeFirstLetter } from "../../components/Shop/Shop";
import Header from "../../components/Header/Header";
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
            <Card.Text>
              <p>Телефон: {shop.phone}</p>
              <Button href={`tel:${shop.phone}`} variant="success">
                <MdPhoneForwarded /> Позвонить
              </Button>
            </Card.Text>
          ) : null}
          {shop.vk && shop.vk !== "-" ? (
            <Card.Text>
              <Button href={shop.vk} variant="link">
                <FaVk /> Вконтакте
              </Button>
            </Card.Text>
          ) : null}
          {shop.instagram && shop.instagram !== "-" ? (
            <Card.Text>
              <Button variant="link" href={shop.instagram}>
                <FaInstagram /> Instagram
              </Button>
            </Card.Text>
          ) : null}
          {shop.website && shop.website !== "-" ? (
            <Card.Text>
              <Button href={shop.website} variant="link">
                Cайт
              </Button>
            </Card.Text>
          ) : null}
          {shop.route && shop.route !== "-" ? (
            <Card.Text>Как пройти: {shop.route}</Card.Text>
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
      <>
        <Header onPressBack={this.goSearchPage} title="Горького 55" />
        <Container style={{ padding: "3vh", paddingTop: "7vh" }}>
          {this.renderShop()}
        </Container>
      </>
    );
  }
}

export default ShopPage;
