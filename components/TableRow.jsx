import React, { useContext } from "react";
import { Store } from "../utils/Store";

const TableRow = ({ item, index }) => {
  const { state, dispatch } = useContext(Store);

  const handleRemoveCartItem = () => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item.id });
  };

  return (
    <tr key={item.id}>
      <th>{index + 1}</th>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
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
