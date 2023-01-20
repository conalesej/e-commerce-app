import React from "react";
import { cartActions } from "../../../features/cart/cartSlice";
import { useAppDispatch } from "../../../store";
import "./TitleBarCart.scss";
const TitleBarCart: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="Title-Bar-Cart">
      <div className="title-bar-cart-row-1">My Cart</div>
      <div className="title-bar-cart-row-2">
        <button
          className="title-bar-cart-row-2-button"
          onClick={() => dispatch(cartActions.deleteAllItems())}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default TitleBarCart;
