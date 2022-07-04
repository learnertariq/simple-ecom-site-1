import React, { useContext } from "react";
import { Store } from "../utils/Store";
import Layout from "../components/Layout";
import getSubTotal from "../utils/getSubTotal";
import TableRow from "../components/TableRow";
import Link from "next/link";

const CartPage = () => {
  const { state, dispatch } = useContext(Store);

  return (
    <Layout title="cart">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center my-4">Cart</h1>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {state.cart.cartItems?.map((i, index) => (
                <TableRow key={i.id} item={i} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-3 gap-8">
          <button className="btn btn-ghost text-xl">
            SubTotal:{" "}
            <span className="text-primary ml-2 font-bold">
              {" "}
              ${getSubTotal(state.cart.cartItems)}
            </span>
          </button>
          <Link href="/checkout">
            <a className="btn btn-primary">Checkout</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
