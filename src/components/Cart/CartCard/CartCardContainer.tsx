import React, { useEffect, useState } from "react";
import { ItemInterface } from "../../../data/appDataUtils";
import { cartActions } from "../../../features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../store";
import { NoData, NoDataType } from "../../NoData/NoData";
import Card from "./Card/Card";
import "./CartCardContainer.scss";

const CartCardContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const { cart } = useAppSelector((state) => state.cart);

  const [cartData, setCartData] = useState<ItemInterface[]>([]);

  useEffect(() => {
    if (cart.length) {
      setCartData(cart);
      localStorage.setItem("savedCartData", JSON.stringify(cartData));
    } else {
      let newObject = localStorage.getItem("savedCartData");
      let saveNewObject = JSON.parse(newObject || "{}");

      saveNewObject.forEach((item: ItemInterface) => {
        dispatch(cartActions.addToCart({ ...item, quantity: 1 }));
      });
      setCartData(saveNewObject);
    }
  }, [cart]);
  const displayCards = cartData.map((cart) => {
    return <Card item={cart} key={cart.id} />;
  });

  return (
    <div className="Cart-Card-Container">
      {displayCards.length ? (
        <div className="cart-card-flexbox">{displayCards}</div>
      ) : (
        <NoData content="Empty Cart..." type={NoDataType.CART} />
      )}
    </div>
  );
};

export default CartCardContainer;
