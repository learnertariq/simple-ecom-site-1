import Image from "next/image";
import React, { useContext } from "react";
import { Store } from "../utils/Store";

const CartItem = ({ item }) => {
  const { state, dispatch } = useContext(Store);

  const handleRemoveCartItem = () => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item.id });
  };
  return (
    <li key={item.id} className="flex items-center justify-between gap-3">
      <div className="w-16 rounded-full">
        <Image
          className="rounded-full"
          src={item.img}
          width="100"
          height="100"
          alt=""
        />
      </div>
      <h3 className="text-xl font-semibold">{item.name}</h3>
      <button
        className="btn btn-circle btn-error w-8"
        onClick={handleRemoveCartItem}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
  );
};

export default CartItem;
