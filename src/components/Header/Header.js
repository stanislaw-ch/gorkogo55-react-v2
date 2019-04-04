import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";

import "./Header.css";

const header = props => {
  return (
    <Navbar bg="dark" variant="dark" style={{ paddingRight: "15px" }}>
      <div className="Nav">
        <div className="ButtonBack">
          <Button variant="danger">
            <IoIosArrowBack onClick={props.onPressBack} />
          </Button>
        </div>
        <div className="NavTitle">
          <Nav.Link eventKey="disabled" disabled>
            {props.title ? props.title : "Title"}
          </Nav.Link>
        </div>
        <div style={{ width: "42px", margin: "0" }} />
      </div>
    </Navbar>
  );
};

export default header;
