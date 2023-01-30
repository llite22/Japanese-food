import React from 'react';
import SushiImage from '../../assets/sushi.jpg';
import styles from './Header.module.css';



const Header = (props) => {
  return (
    <>
        <header className={styles.header}>
            <h1>Японская Кухня</h1>
            <button>Корзина</button>
        </header>
        <div className={styles['main-image']}>
            <img src={SushiImage} alt="SushiImage" />
        </div>
    </>
  )
}

export default Header