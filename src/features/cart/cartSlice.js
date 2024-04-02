import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";

const initialState = {
  cartItems: data,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    updateAmount: (state) => {
      const total = state.cartItems.reduce((acc, item) => {
        acc += item.quantity;
        return acc;
      }, 0);

      state.amount = total;
    },
    getTotal: (state) => {
      const total = state.cartItems.reduce((acc, item) => {
        acc = item.quantity * item.price + acc;
        return acc;
      }, 0);

      state.total = total;
    },

    increaseQuantity: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload);

      item.quantity += 1;
    },

    decreaseQuantity: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload);

      if (item.quantity <= 1) {
        item.quantity = 1;
      } else {
        item.quantity -= 1;
      }
    },

    remove: (state, { payload }) => {
      const items = state.cartItems.filter((item) => item.id !== payload);

      state.cartItems = items;
    },
  },
});

export const {
  remove,
  clearCart,
  getTotal,
  updateAmount,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
