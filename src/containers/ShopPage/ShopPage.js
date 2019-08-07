import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import ShopFull from "../../components/Shop/ShopFull";
import Header from "../../components/Header/Header";
import Spinner from "../../components/Spinner/spinner.tsx";

export default function ShopPage({
  history,
  match,
  data,
  hashTageSearch,
  isLoadingData
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function goSearchPage() {
    history.push(`/search`);
  }

  if (isLoadingData) {
    return (
      <Container style={{ padding: "3vh", paddingTop: "7vh" }}>
        <Spinner />
      </Container>
    );
  } else {
    return (
      <>
        <Header goBack={goSearchPage} title="Горького 55" history={history} />
        <Container style={{ padding: "3vh", paddingTop: "7vh" }}>
          {renderShop(data, match, hashTageSearch)}
        </Container>
      </>
    );
  }
}

function renderShop(shopList, matchRouter, hashTageSearch) {
  var [shop] = [...shopList].filter(
    shop => shop.number === matchRouter.params.id
  );
  if (shop) {
    return (
      <ShopFull
        hashTageSearch={hashTageSearch}
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
    );
  } else {
    return <p>Ищем информацию...</p>;
  }
}
