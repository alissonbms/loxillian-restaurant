import { GiShoppingCart } from "react-icons/gi";
import React from "react";

const CartIcon = () => {
  return (
    <div className="flex items-center gap-1">
      <div>Cart (3)</div>
      <GiShoppingCart size="2rem" />
    </div>
  );
};

export default CartIcon;
