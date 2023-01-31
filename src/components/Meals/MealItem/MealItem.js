import styles from "./MealItem.module.css";
import React from "react";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";


const MealItem = (props) => {

  const cartContext = useContext(CartContext);


  const formattedPrice = `$${props.price.toFixed(2)}`;

  const onAddToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm  onAddToCart={onAddToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
