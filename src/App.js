import React, { useState } from "react";
import Cart from "./Components/cart/Cart";
import menuData from "./assets/utils/MenuData";
import Main from "./Components/Main";
import data from "./data"
// import Main from "./Components/Main";

function App() {
  // const contador = 0
  // if (contador < menuData.length){
  //   const prato = menuData[contador]
  //   const pratofinal = prato.items;
  //   for(let i=0; i <= pratofinal.length; i++){
  //     pratofinal.map((item,index)=>{
  //       console.log(item.title)
  //     })
  //   }
  // }

 
  // menuData.forEach((element,index) => {
  //   const { items } = element
  //   items.map((prato,index)=>{

    //Como vazer as informações para serem usadas no Main?????????

  //     console.log(prato.title, prato.price, prato.img, index)
  //   })
  // });
  const { products } = data;

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
      <Main products={products} onAdd={onAdd} /> 
      <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
    </div>
  );
}

export default App;
