import React from "react";
import CartMapSection from "./CartMapSection";
import { toast } from "react-toastify";
import shoPing from "../assets/products/shopping-cart.png"

const CartSection = ({ carts, setCarts }) => {
  const totalprice = carts.reduce((sum, c) => sum + c.price, 0);
  const handleDelete = (c) => {
    toast("Delete");
    console.log("jvnefu");
    const deleteBtn = carts.filter((d) => d.id !== c.id);
    setCarts(deleteBtn);
  };
  const procced = () => {
    toast("Add to carts");
    setCarts([]);
  };

  return (
    <div className="container mx-auto">
      <div className="shadow-2xl rounded-lg p-8">
        <h2 className="text-2xl font-semibold p-8">Your Carts</h2>
        <div className=" ">
          <div className="space-y-4">
            {carts.length === 0 ? (
              <div className="text-center justify-center">
                <img className="mx-auto" src={shoPing} alt="" />
                <h2>Your Carts is empty</h2>
              </div>
            ) : (
              <CartMapSection
                carts={carts}
                procced={procced}
                handleDelete={handleDelete}
                totalprice={totalprice}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
