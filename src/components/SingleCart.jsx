import React from "react";
import { ArrowDown } from "./Icons";
import { ArrowUp } from "./Icons";
import { useDispatch } from "react-redux";
import {
  remove,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice";

const SingleCart = (props) => {
  const { name, id, price, imageSrc, quantity } = props;
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-start gap-0 w-1/2">
        <div className="w-20 h-20  relative">
          <img className=" w-full h-full object-cover" src={imageSrc} />
        </div>
        <div className="flex flex-col justify-between items-start m-3">
          <div className="">
            <h2 className="text-sm ">{name}</h2>
            <h3 className="text-sm font-bold">
              Ksh. {price.toFixed(2).toLocaleString()}
            </h3>
          </div>
          <button
            className="px-2 py-1 text-orange-600 text-sm rounded-lg mt-2"
            onClick={() => {
              dispatch(remove(id));
            }}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between  items-center">
        <button
          onClick={() => {
            dispatch(increaseQuantity(id));
          }}
        >
          <ArrowUp />
        </button>
        <p>{quantity}</p>
        <button
          onClick={() => {
            dispatch(decreaseQuantity(id));
          }}
        >
          <ArrowDown />
        </button>
      </div>
    </div>
  );
};

export default SingleCart;
