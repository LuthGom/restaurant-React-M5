import React from "react";
import menuData from "./../../assets/utils/MenuData";

const Cart = () => {
  menuData.forEach((e) => {
    const { items } = e;
    items.map((prato, index) => {
      return prato.title, prato.price, prato.img, index;
    });
  });

  return <></>;
};

export default Cart;
