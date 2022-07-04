import Image from "next/image";
import React, { useContext } from "react";
import { Store } from "../utils/Store";
import CartItem from "./CartItem";

const Cart = () => {
  const { state, dispatch } = useContext(Store);
  return (
    <div>
      <h2 className="text-4xl mb-4 text-primary text-center font-bold">Cart</h2>
      <div className="card card-compact w-full shadow-xl">
        <div className="card-body xl:mx-12">
          <ul className="flex flex-col gap-4">
            {state.cart.cartItems?.map((i) => (
              <CartItem key={i.id} item={i} />
            ))}
          </ul>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
