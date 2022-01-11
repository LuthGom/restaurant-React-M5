import React from "react";
import { CartContainer, TitleCart, ItemCart, TotalCart } from "./CartElements";
import Button from "../layout/Button";
import Product from "../Product";

function Cart({ cartItems, onAdd, onRemove }) {

  
  //calculo para o valor total do carrinho
  const itemsPrice = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.qty,
    0
  );
  

  return (
    <CartContainer>
      <TitleCart>Seu Pedido</TitleCart>
      <ItemCart>
        {cartItems.length === 0 && <div>Cart is Empty</div>}
        {cartItems.map((item) => {
          return (
            <Product
              key={item.id}
              item={item}
              onAdd={onAdd}
              onRemove={onRemove}
             
            ></Product>
          );
        })}
      </ItemCart>
      {cartItems.length !== 0 && (
        <TotalCart>Total: R$ {itemsPrice.toFixed(2)}</TotalCart>
      )}
      {cartItems.length !== 0 && (
        <Button to="/signin" textBtn="Finalizar compra" />
      )}

    </CartContainer>
  );
}

export default Cart;
