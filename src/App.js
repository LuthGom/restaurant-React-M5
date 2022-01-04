import React, { useState } from "react";
import Cart from "./Components/cart/Cart";
import menuData from "./assets/utils/MenuData";
import Main from "./Components/Main";
// import data from "./data"


function App() {
  let items = menuData.map(item =>{
    return item.items.map(prod=>{
      return prod
    })
  });
  
  console.log(items)
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems,{...item,qty:1}])
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
    <div className="App">
      <Main items={items} onAdd={onAdd} /> 
      <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
    </div>
  );
}

export default App;
