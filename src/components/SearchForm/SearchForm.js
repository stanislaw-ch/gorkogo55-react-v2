import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

import "./SearchForm.css";

const searchForm = ({ searchValue = '', changeSearchValue = alert('wrong'), ...props } = {}) => {
  return (
    <Container>
      <ListGroup.Item className="SearchPanel">
        <p className="SearchTitle">Введите поисковое слово или первые буквы:</p>
        <Form.Control
          type="text"
          placeholder="Что найти?"
          value={searchValue}
          onChange={changeSearchValue}
          className="Input"
        />
      </ListGroup.Item>
    </Container>
  );
};

export default searchForm;
