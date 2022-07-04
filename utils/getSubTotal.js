const getSubTotal = (cartItems) => {
  const initialValue = 0;
  const sumWithInitial = cartItems.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price * currentValue.quantity;
  }, initialValue);

  return sumWithInitial;
};

export default getSubTotal;
