import React from "react";
import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const exitstingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    const exitstingCartItem = state.items[exitstingCartItemIndex];

    let updatedItem;
    let updatedItems;

    if (exitstingCartItem) {
      updatedItem = {
        ...exitstingCartItem,
        amount: exitstingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[exitstingCartItemIndex] = updatedItem;
    } else {
      updatedItem = {
        ...action.item,
      };
      updatedItems = state.items.concat(updatedItem);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {

    const exitstingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });

    const exitstingCartItem = state.items[exitstingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - exitstingCartItem.price;

    let updatedItems;
    if (exitstingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      
      const updatedItem = {
        ...exitstingCartItem,
        amount: exitstingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[exitstingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
    
  }

 

  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
