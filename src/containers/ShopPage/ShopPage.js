import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import ShopFull from "../../components/Shop/ShopFull";
import Header from "../../components/Header/Header";
import Spinner from "../../components/Spinner/Spinner";

const ShopPage = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goSearchPage = () => {
    props.history.push(`/search`);
  };

  const renderShop = () => {
    const [shop] = props.data.filter(
      shop => shop.number === props.match.params.id
    );

    const shopComponent = shop ? (
      <ShopFull
        hashTageSearch={props.hashTageSearch}
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

  if (props.isLoadingData) {
    return (
      <Container style={{ padding: "3vh", paddingTop: "7vh" }}>
        <Spinner />
      </Container>
    );
  }
  return (
    <>
      <Header
        goBack={goSearchPage}
        title="Горького 55"
        history={props.history}
      />
      <Container style={{ padding: "3vh", paddingTop: "7vh" }}>
        {renderShop()}
      </Container>
    </>
  );
};

export default ShopPage;
