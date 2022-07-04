import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
  cart: { cartItems: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      const itemExists = state.cart.cartItems.find(
        (i) => i.id == action.payload.id
      );
      const cartItems = !itemExists
        ? [...state.cart.cartItems, action.payload]
        : [...state.cart.cartItems];

      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (i) => i.id != action.payload
      );
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_UPDATE_ITEM": {
      const cartItemsWithRemoved = state.cart.cartItems.filter(
        (i) => i.id != action.payload.id
      );

      const updatedCartItems = [...cartItemsWithRemoved, action.payload];
      return { ...state, cart: { ...state.cart, cartItems: updatedCartItems } };
    }
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
