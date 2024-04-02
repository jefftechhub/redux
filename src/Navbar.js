import React from "react";
import NavBarComp from "./components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { updateAmount } from "./features/cart/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  dispatch(updateAmount());

  const { amount } = useSelector((state) => state.cart);

  return <NavBarComp amount={amount} />;
};

export default Navbar;
