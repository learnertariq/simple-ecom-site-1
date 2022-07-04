import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";

const TableRow = ({ item, index }) => {
  const { state, dispatch } = useContext(Store);
  const [tempQuantity, setTempQuantity] = useState(item.quantity);

  const handleChangeValue = (e) => {
    const newQuantity = e.target.value;
    setTempQuantity(newQuantity);
    const updatedItem = { ...item, quantity: newQuantity };

    dispatch({ type: "CART_UPDATE_ITEM", payload: updatedItem });
  };

  const handleRemoveCartItem = () => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item.id });
  };

  return (
    <tr key={item.id}>
      <th>
        <div className="w-16 rounded-full">
          <Image
            className="rounded-full"
            src={item.img}
            width="100"
            height="100"
            alt=""
          />
        </div>
      </th>
      <td>{item.name}</td>
      <td>
        <select
          name="quantity"
          value={tempQuantity}
          onChange={handleChangeValue}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </td>
      <td>{item.price * item.quantity}</td>
      <td>
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
      </td>
    </tr>
  );
};

export default TableRow;
