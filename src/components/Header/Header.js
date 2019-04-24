import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const header = props => {
  return (
    <header className="Brown BoxShadow Header">
      <div onClick={props.goBack} className="Icon">
        <FaAngleLeft />
      </div>
      <div className="TitleHeader">
        <p>{props.title}</p>
      </div>
      <div className="Icon Disabled">
        <FaAngleLeft />
      </div>
    </header>
  );
};

export default header;
