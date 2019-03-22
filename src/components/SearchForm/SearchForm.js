import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const searchForm = props => {
  const { onSearchForm, searchValue, changeSearchValue } = props;

  return (
    <Container>
      <Row>
        <Col md="10" xs="8">
          <Form.Control
            type="text"
            placeholder="Что найти?"
            value={searchValue}
            onChange={changeSearchValue}
          />
        </Col>
        <Col md="2" xs="4">
          <Button variant="primary" onClick={() => onSearchForm()}>
            Найти
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default searchForm;
