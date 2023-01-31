import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css'
import React from 'react'
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';


const HeaderCartButton = (props) => {
  
  const [isButtoAninated, setIsButtoAninated] = useState(false);

  const cartContext = useContext(CartContext)

  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount
  }, 0)

 const buttonClasses = `${styles.button} ${isButtoAninated ? styles.bump : ''}`;

 useEffect(() => {
  if (cartContext.items.length === 0){
    return;
  }
  setIsButtoAninated(true)
 const timer = setTimeout(() => {
    setIsButtoAninated(false);
  }, 300)

  return () => {
    clearTimeout(timer)
  }
  
 }, [cartContext.items])



  return (
    <button className={buttonClasses} onClick={props.onClick}> 
        <span className={styles.icon}>
        <CartIcon/>
        </span>
        <span>Корзина</span>
        <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
  )
}

export default HeaderCartButton;