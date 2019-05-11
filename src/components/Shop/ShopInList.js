import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { FaShoppingCart, FaAngleRight } from "react-icons/fa";

import classes from "./ShopList.module.css";

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Shop = ({ number, title, description, onSelectShop }) => {
  return (
    <ListGroup.Item
      className={classes.ShopCard}
      onClick={() => onSelectShop(number)}
      action
    >
      <div className={classes.Icon}>
        <FaShoppingCart />
      </div>
      <div className={classes.Text}>
        <p className={classes.NameShop}>
          {number}. {capitalizeFirstLetter(title)}
        </p>
        {description && description !== "-" ? (
          <p className={classes.Description}>{capitalizeFirstLetter(description)}. </p>
        ) : null}
      </div>
      <div className={classes.Icon}>
        <FaAngleRight />
      </div>
    </ListGroup.Item>
  );
};

export default Shop;
