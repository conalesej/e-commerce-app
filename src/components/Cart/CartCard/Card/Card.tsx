import React from "react";
import { convertToCurrency, ItemInterface } from "../../../../data/appDataUtils";
import { cartActions } from "../../../../features/cart/cartSlice";
import { useAppDispatch } from "../../../../store";
import "./Card.scss";
interface ICard {
  item: ItemInterface;
}
const Card: React.FC<ICard> = ({ item }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="Card-container">
      <div className="card-row-1">
        <img src={item.imageUrl} alt="" />
      </div>
      <div className="card-row-2">
        <div className="card-row-2-item">{item.productName}</div>
        <div className="card-row-2-item text">
          ₱{convertToCurrency(item.unitPrice)}
        </div>
      </div>
      <div className="card-row-3">
        <button
          onClick={() => {
            dispatch(cartActions.changeQuantity({ quantity: 1, id: item.id }));
          }}
        >
          +
        </button>
        {item.quantity ? item.quantity : 0}
        <button
          onClick={() => {
            if (item.quantity === 1) {
              dispatch(cartActions.deleteToCart({ id: item.id }));
            } else {
              dispatch(
                cartActions.changeQuantity({ quantity: -1, id: item.id })
              );
            }
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Card;
