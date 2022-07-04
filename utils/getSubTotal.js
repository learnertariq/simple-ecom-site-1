const getSubTotal = (cartItems) => {
  const initialValue = 0;
  const sumWithInitial = cartItems.reduce((previousValue, currentValue) => {
    console.log(previousValue, currentValue.price);
    return previousValue + currentValue.price * currentValue.quantity;
  }, initialValue);

  return sumWithInitial;
};

export default getSubTotal;
