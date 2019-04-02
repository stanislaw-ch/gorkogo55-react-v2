import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const searchForm = props => {
  const { searchValue, changeSearchValue, location } = props;

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
      </Row>
    </Container>
  );
};

export default searchForm;
