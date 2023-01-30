import styles from "./Cart.module.css";
import React from "react";
import Modal from '../UI/Modal'
const Cart = (props) => {

  
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: "m1", name: "Suchi", amount: 2, price: 10.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>49.99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['buttons--alt']}>Закрыть</button>
        <button className={styles.button}>Заказать</button>
      </div>
    </Modal>
  );
};

export default Cart;
