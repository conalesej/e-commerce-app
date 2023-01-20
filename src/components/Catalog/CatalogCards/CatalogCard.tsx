import React from "react";
import {
  capitalizeFirstLetter,
  convertToCurrency,
  ItemInterface,
} from "../../../data/appDataUtils";
import { cartActions } from "../../../features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../store";
import "./CatalogCard.scss";
interface ICatalogCard {
  item: ItemInterface;
}
const CatalogCard: React.FC<ICatalogCard> = ({ item }) => {
  const { cart: cartData } = useAppSelector((state) => state.cart);
  const idList = cartData.map((data) => data.id);

  const dispatch = useAppDispatch();

  return (
    <div className="Catalog-card" key={`item-id` + item.id}>
      <div className="catalog-panel row-1">
        <img src={item.imageUrl} alt="" />
      </div>
      <div className="catalog-panel row-2">
        <div className="row-2-product-name">{item.productName}</div>
        <div className="row-2-product-category">
          {capitalizeFirstLetter(item.category)}
        </div>
        <div className="row-2-product-description">
          <div className="text">{item.description}</div>
        </div>
      </div>
      <div className="catalog-panel row-3">
        <div className="row-3-price">₱{convertToCurrency(item.unitPrice)}</div>
        <button
          className="row-3-button"
          onClick={() => {
            if (idList.includes(item.id)) {
              dispatch(cartActions.changeQuantity({ ...item, quantity: 1 }));
            } else {
              dispatch(cartActions.addToCart({ ...item, quantity: 1 }));
            }
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CatalogCard;
