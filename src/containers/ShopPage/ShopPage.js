import React, { Component } from "react";
import { Container } from "react-bootstrap";

import ShopFull from "../../components/Shop/ShopFull";
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
      <ShopFull
        hashTageSearch={this.props.hashTageSearch}
        number={shop.number}
        title={shop.title}
        description={shop.description}
        keywords={shop.keywords}
        phone={shop.phone}
        vk={shop.vk}
        instagram={shop.instagram}
        website={shop.website}
        route={shop.route}
      />
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
