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
        <Col>
          <Form.Control
            type="text"
            placeholder="Что найти?"
            value={searchValue}
            onChange={changeSearchValue}
          />
        </Col>
        <Col md="auto">
          <Button variant="primary" onClick={() => onSearchForm()}>
            Найти
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default searchForm;
