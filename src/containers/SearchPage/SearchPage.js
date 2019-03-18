import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import uniqueId from "lodash/uniqueId";

import SearchForm from "../../components/SearchForm/SearchForm";
import Shop from "../../components/Shop/Shop";
import Spinner from "../../components/Spinner/Spinner";
import "./SearchPage.css";

class SearchPage extends Component {
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

  render() {
    const { testData, isLoading } = this.state;
    const renderData = testData.map(item => {
      return (
        <Shop
          key={uniqueId()}
          number={item.number}
          title={item.title}
          description={item.description}
          phone={item.phone}
          vk={item.vk}
          instagram={item.instagram}
        />
      );
    });

    return (
      <Container style={{ padding: "20px" }}>
        <SearchForm />
        {isLoading ? <Spinner /> : renderData}
      </Container>
    );
  }
}

export default SearchPage;
