import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { FaShoppingCart, FaAngleRight } from "react-icons/fa";

import "./ShopList.css";

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Shop = props => {
  const { number, title, description, onSelectShop } = props;
  return (
    <ListGroup.Item
      className="ShopCard"
      onClick={() => onSelectShop(number)}
      action
    >
      <div className="Icon">
        <FaShoppingCart />
      </div>
      <div className="Text">
        <p className="Title">
          {number}. {capitalizeFirstLetter(title)}
        </p>
        {description && description !== "-" ? (
          <p className="Description">{capitalizeFirstLetter(description)}. </p>
        ) : null}
      </div>
      <div className="Icon">
        <FaAngleRight />
      </div>
    </ListGroup.Item>
  );
};

export default Shop;
