import React from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

import classes from "./Header.module.css";

const header = ({ goBack = alert("wrong"), title = "Парковый", history }) => {
  var pathname = history.location.pathname;
  var goBackElement = (
    <Link to="/search">
      <FaAngleLeft />
    </Link>
  );
  if (pathname == "/search") {
    goBackElement = (
      <a href="http://mira84.ru/">
        <FaAngleLeft />
      </a>
    );
  }
  return (
    <header
      className={[classes.Brown, classes.BoxShadow, classes.Header].join(" ")}
    >
      <div
        onClick={pathname != "/search" ? goBack : null}
        onKeyPress={() => {}}
        role="button"
        tabIndex={0}
        className={classes.Icon}
      >
        {goBackElement}
      </div>
      <div className={classes.TitleHeader}>
        <p>{title}</p>
      </div>
      <div className={[classes.Icon, classes.Disabled].join(" ")}>
        <FaAngleLeft />
      </div>
    </header>
  );
};

export default header;
