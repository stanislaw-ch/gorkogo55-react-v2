import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

import "./SearchForm.css";

const searchForm = props => {
  const { searchValue, changeSearchValue } = props;

  return (
    <Container>
      <ListGroup.Item className="SearchPanel">
        {/* <Row> */}
        {/* <Col> */}
        <p className="SearchTitle">Введите поисковое слово или первые буквы:</p>
        {/* </Col> */}
        {/* </Row> */}
        {/* <Row> */}
        {/* <Col> */}
        <Form.Control
          type="text"
          placeholder="Что найти?"
          value={searchValue}
          onChange={changeSearchValue}
          className="Input"
        />
        {/* </Col> */}
        {/* </Row> */}
      </ListGroup.Item>
    </Container>
  );
};

export default searchForm;
