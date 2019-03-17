import React, { Component } from "react";

import SearchForm from "../../components/SearchForm/SearchForm";
import "./SearchPage.css";

class SearchPage extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="SearchPage">
        <SearchForm />
      </div>
    );
  }
}

export default SearchPage;
