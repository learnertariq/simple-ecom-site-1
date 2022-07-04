import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import getSubTotal from "../utils/getSubTotal";
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
          <div className="card-actions justify-between mt-4">
            <button className="btn btn-ghost text-xl">
              SubTotal:{" "}
              <span className="text-primary ml-2 font-bold">
                {" "}
                ${getSubTotal(state.cart.cartItems)}
              </span>
            </button>
            <Link href="/cart">
              <a className="btn btn-primary">Manage</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
