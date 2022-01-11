import React from "react";
import {
  CartContainer,
  TitleCart,
  ItemCart,
  RowsOrder,
  Order,
  ButtonQty,
  QtyOrder,
  Img,
  Info,
  QtyPrice,
  TotalCart,
  Icons,
  Line,
  OrderFinished,
} from "./CartElements";
import { FaMinus, FaPlus, FaEdit } from "react-icons/fa";
// import CartModal from "../CartModal";
import Button from "../layout/Button";

function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  
  const itemsPrice = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.qty,
    0
  );

  // const removeItem = (item) => {
  //   console.log(cartItems);
  //   const exist = cartItems.find((x) => x.id === item.id);
  //   console.log(exist)
  //   if (exist.qty !== 0) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === item.id ? { ...exist, qty: 0 } : x
  //       )
  //     );
  //   }
  // };

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
                  <Info href="#">Adicionar observação</Info>
                </div>
                <QtyPrice>R${item.qty * item.price}</QtyPrice>
                <Icons>
                  {/* <button onClick={removeItem}>
                    <FaTrashAlt />
                    
                  </button> */}
                  <FaEdit />
                  
                </Icons>
              </Order>
              <Line />
            </RowsOrder>
          );
        })}
      </ItemCart>
      {cartItems.length !== 0 && <TotalCart>Total: R$ {itemsPrice.toFixed(2)}</TotalCart>}
      {cartItems.length !== 0 && (
        <Button to="/signin" textBtn="Finalizar compra" />
      )}

      {/* <CartModal isOpen></CartModal> */}
    </CartContainer>
  );
}

export default Cart;
