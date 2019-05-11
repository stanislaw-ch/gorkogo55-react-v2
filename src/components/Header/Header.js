import React from "react";
import { FaAngleLeft } from "react-icons/fa";

import classes from './Header.module.css';

const header = ({ goBack = alert('wrong'), title = 'Горького55', ...props } = {}) => {
  return (
    <header className={[classes.Brown, classes.BoxShadow, classes.Header].join(' ')}>
      <div onClick={goBack} className={classes.Icon}>
        <FaAngleLeft />
      </div>
      <div className={classes.TitleHeader}>
        <p>{title}</p>
      </div>
      <div className={[classes.Icon, classes.Disabled].join(' ')}>
        <FaAngleLeft />
      </div>
    </header>
  );
};

export default header;
