import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const header = ({ goBack, title } = {}) => {
  return (
    <header className="Brown BoxShadow Header">
      <div onClick={goBack} className="Icon">
        <FaAngleLeft />
      </div>
      <div className="TitleHeader">
        <p>{title}</p>
      </div>
      <div className="Icon Disabled">
        <FaAngleLeft />
      </div>
    </header>
  );
};

export default header;
