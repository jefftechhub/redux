import React from "react";
import Cart from "./components/Cart";

const Home = () => {
  return (
    <main className="p-8 pt-28 min-h-screen bg-blue-100">
      <h1 className="text-3xl uppercase text-center ">your bag</h1>
      <div className="flex justify-center items-center">
        <Cart />
      </div>
    </main>
  );
};

export default Home;
