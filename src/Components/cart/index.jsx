import React from "react";
import {
  CartContainer,
  TitleCart,
  ItemCart,
  RowsOrder,
  Order,
  ButtonQty,
  Line,
  QtyOrder,
  Img,
  QtyPrice,
  TotalCart,
  OrderFinished
} from "./CartElements";
import { FaMinus, FaPlus } from "react-icons/fa";




function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
 
  const itemsPrice = cartItems.reduce(
   (acc, cur) => acc + cur.price * cur.qty,0);

  return (
    <CartContainer>
      <TitleCart>Seu Pedido</TitleCart>
      <ItemCart>
        {cartItems.length === 0 && <div>Cart is Empty</div>}
        {cartItems.map((item) => {
          return (
            <RowsOrder key={item.id}>
              <Order>
                <QtyOrder>
                  <ButtonQty onClick={() => onAdd(item)}>
                    <FaPlus />
                  </ButtonQty>
                  {item.qty}
                  <ButtonQty onClick={() => onRemove(item)}>
                    <FaMinus />
                  </ButtonQty>
                </QtyOrder>              
                <Img src={`${item.img}`} alt={`${item.alt}`} />
                <div>
                  <div>{item.title}</div>
                  <a href="#">Informações</a>
                </div>
                <QtyPrice>
                  R${item.qty * item.price}
                </QtyPrice>
                
              </Order>
              <Line />
            </RowsOrder>
          );
        })}
      </ItemCart>
      {cartItems.length !== 0 && (
        <TotalCart>Total: R$ {itemsPrice}</TotalCart>
      )}
      {cartItems.length !== 0 && (
        <OrderFinished>Finalizar compra</OrderFinished>
      )}
    

    </CartContainer>
  );
}

export default Cart;
