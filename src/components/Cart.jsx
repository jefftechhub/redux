import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleCart from "./SingleCart";
import { clearCart, getTotal } from "../features/cart/cartSlice";

const Cart = () => {
  const { cartItems, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  dispatch(getTotal());

  if (cartItems.length === 0) {
    return <p className="text-sm m-5">Your cart is empty</p>;
  } else {
    return (
      <div className="py-12 px-20  bg-white rounded-md mt-5  w-2/3">
        {cartItems.map((item) => {
          return <SingleCart key={item.id} {...item} />;
        })}
        <div className="flex justify-between items-center  border-t-2 mt-10 py-2">
          <p className="text-2xl">Total</p>
          <p className="">Ksh. {total.toFixed(2)}</p>
        </div>
        <div className="flex justify-center py-5">
          <button
            className="bg-orange-600 text-white px-7 py-2 rounded-xl"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            clear cart
          </button>
        </div>
      </div>
    );
  }
};

export default Cart;
