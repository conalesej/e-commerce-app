import React, { useContext } from "react";
import { ModalContext } from "../../../App";
import { cartActions } from "../../../features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../store";
import "./Total.scss";

const Total: React.FC = () => {
  const { setIsShowing } = useContext(ModalContext);
  const { cart: cartData } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const quantityList = cartData.map((data) =>
    data.quantity ? data.quantity : 0
  );

  const totalItems = quantityList.length
    ? quantityList.reduce((prev: number, cur: number) => {
        prev = prev + cur;
        return prev;
      })
    : 0;

  let myArray: number[] = [];
  cartData.forEach((element) => {
    myArray.push((element.quantity ? element.quantity : 0) * element.unitPrice);
  });

  const totalAmount = myArray.length
    ? myArray.reduce((prev: number, cur: number) => {
        prev = prev + cur;
        return prev;
      })
    : 0;

  return (
    <div className="Total-Container">
      <div className="total-row-1">
        <div className="total-row-1-items">Total Items:</div>
        <div className="total-row-1-items-number">{totalItems}</div>
      </div>
      <div className="total-row-2">
        <div className="total-row-2-items">Total Amount:</div>
        <div className="total-row-2-items-number">₱{totalAmount}</div>
      </div>
      <div className="total-row-3">
        <button
          className="total-row-3-button"
          onClick={() => {
            if (totalAmount !== 0) setIsShowing(true);
            dispatch(cartActions.deleteAllItems());
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Total;
