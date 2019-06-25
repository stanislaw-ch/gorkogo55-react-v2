import React from "react";
import { FaAngleLeft } from "react-icons/fa";

import classes from "./Header.module.css";

const header = ({
  goBack = alert("wrong"),
  title = "Горького55",
  history,
  ...props
} = {}) => {
  var pathname = history.location.pathname;
  var href = "";
  if (pathname == "/search") {
    href = "http://gorkogo55.ru/";
  }
  return (
    <header
      className={[classes.Brown, classes.BoxShadow, classes.Header].join(" ")}
    >
      <div
        onClick={pathname != "/search" ? goBack : null}
        className={classes.Icon}
      >
        <a href={href}>
          <FaAngleLeft />
        </a>
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
