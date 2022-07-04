import Image from "next/image";
import React, { useContext } from "react";
import { Store } from "../utils/Store";

const Product = ({ p }) => {
  const { state, dispatch } = useContext(Store);
  const handleAddToCart = () => {
    dispatch({ type: "CART_ADD_ITEM", payload: p });
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "150px",
          paddingBottom: "20%",
        }}
      >
        <figure>
          <Image src={p.img} layout="fill" objectFit="cover" alt="Shoes" />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {p.name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <h3 className="text-2xl font-bold text-green-500">
          ${p.price}
          <span className="ml-4 text-red-600 text-xl">
            <del>${p.oldPrice}</del>
          </span>
        </h3>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <button onClick={handleAddToCart} className="btn btn-primary btn-sm">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
