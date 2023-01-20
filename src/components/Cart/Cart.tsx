import React from "react";
import "./Cart.scss";
import CartCardContainer from "./CartCard/CartCardContainer";
import TitleBarCart from "./TitleBarCart/TitleBarCart";
import Total from "./TotalAmount/Total";
const Cart: React.FC = () => {
  return (
    <div className="Cart-Container">
      {/* <button onClick={() => {}}>Add Me now</button>
      <button
        onClick={() => {
          console.log(cartData);
        }}
      >
        Check me now Me now
      </button> */}
      <div className="cart-panel row-1">
        <TitleBarCart />
      </div>
      <div className="cart-panel row-2">
        <CartCardContainer />
      </div>
      <div className="cart-panel row-3">
        <Total />
      </div>
    </div>
  );
};

export default Cart;
