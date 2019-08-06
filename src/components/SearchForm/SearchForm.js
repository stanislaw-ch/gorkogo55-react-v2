import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

import classes from "./SearchForm.module.css";

const searchForm = ({
  searchValue = "",
  changeSearchValue = alert("wrong")
}) => {
  return (
    <Container>
      <ListGroup.Item className={classes["SearchPanel"]}>
        <p className={classes["SearchTitle"]}>
          Введите поисковое слово или первые буквы:
        </p>
        <Form.Control
          type="text"
          placeholder="Что найти?"
          value={searchValue}
          onChange={changeSearchValue}
          className={classes["Input"]}
        />
      </ListGroup.Item>
    </Container>
  );
};

export default searchForm;
