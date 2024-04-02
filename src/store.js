import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartreducer,
  },
});
