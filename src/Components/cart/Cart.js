import React from "react";
import styles from "./cart.module.css";

function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  //reduce recebe o acumulado e o valor do item atual como parametro. o retorno do reduce é atribuida ao acc(acumulado)
  const itemsPrice = cartItems.reduce((acc,cur)=> acc + cur.price * cur.qty,0)
  return (
    <aside className={styles.cart}>
      <h2 className={styles.titleCart}>Seu Pedido</h2>
      <div className={styles.itemCart}>
        {cartItems.length === 0 && <div>Cart is Empty</div>}
        {cartItems.map((item) => {
          return (
            <section key={item.id} className={styles.rows}>
              <div className={styles.order}>
                <div className={`${styles.qtyOrder} ${styles.colorYellow}`}>
                  <div>
                    <button className={styles.buttonQty} onClick={() => onAdd(item)}>
                      +
                    </button>
                  </div>
                  <div>{item.qty}</div>
                  <div>
                    <button
                      className={styles.buttonQty}
                      onClick={() => onRemove(item)}
                    >
                      -
                    </button>
                  </div>
                </div>
                <figure>
                  <div className={styles.image}></div>
                </figure>
                <div>{item.name}</div>
                <div className={styles.colorYellow}>
                  R${item.qty * item.price.toFixed(2)}
                </div>
              </div>
              <p className={styles.line}></p>
            </section>
          );
        })}
      </div>
      {cartItems.length !== 0 && (
        <div className={styles.totalCart}>Total: R$ {itemsPrice.toFixed(2)}</div>
      )}
      {cartItems.length !== 0 && (
        <button className={styles.orderFinished}>Finalizar compra</button>
      )}
    </aside>
  );
}

export default Cart;
