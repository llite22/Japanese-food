import Header from "./components/Laoyut/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {

  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  }

  const hideCartHandler = () => {
    setCartIsVisible(false);
  }

  return (
    <>
   {cartIsVisible && <Cart onHideCart={hideCartHandler} />} 
      <Header onshowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </>
  );
}

export default App;
