import { createSlice, current } from "@reduxjs/toolkit";
import { ItemInterface } from "../../data/appDataUtils";

interface IInitialState {
  cart: ItemInterface[];
}
const initialState: IInitialState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Since immer library is already handling the state spreading mutation
    readAll: (state) => {
      return state;
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    changeQuantity: (state, action) => {
      const specificObjectIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      state.cart[specificObjectIndex] = {
        ...state.cart[specificObjectIndex],
        quantity: state.cart[specificObjectIndex].quantity // can be undefined
          ? state.cart[specificObjectIndex].quantity + action.payload.quantity
          : action.payload.quantity,
      };
    },
    deleteToCart: (state, action) => {
      const specificObjectIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      let newArray = [...state.cart];
      newArray.splice(specificObjectIndex, 1);
      state.cart = newArray;
    },
    deleteAllItems: (state) => {
      state.cart = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
