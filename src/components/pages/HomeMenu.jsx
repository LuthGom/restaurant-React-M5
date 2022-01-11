import React, { useState } from "react";
import CategoryMenu from "../CategoryMenu";
import Menu from "../Menu";
import Cart from "../Cart";

const HomeMenu = ({ cartItems, setCartItems, comment, setComment }) => {
  const [active, setActive] = useState(0);

  const onAdd = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };
  const onRemove = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <>
      <CategoryMenu active={active} setActive={setActive} />
      <Menu active={active} setActive={setActive} onAdd={onAdd} />
      {cartItems.length !== 0 && (
        <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} comment={comment} />
      )}
      
    </>
  );
};

export default HomeMenu;
