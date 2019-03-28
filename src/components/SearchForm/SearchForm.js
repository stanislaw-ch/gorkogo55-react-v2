import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const searchForm = props => {
  const { onSearchForm, searchValue, changeSearchValue, location } = props;

  return (
    <Container
      style={location.pathname !== "/search" ? { height: "15vh" } : null}
    >
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Что найти?"
            value={searchValue}
            onChange={changeSearchValue}
          />
        </Col>
        {location.pathname !== "/search" ? (
          <Col md="2" xs="4">
            <Button variant="primary" onClick={() => onSearchForm()}>
              Найти
            </Button>
          </Col>
        ) : null}
      </Row>
    </Container>
  );
};

export default searchForm;
