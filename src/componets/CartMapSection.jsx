import React from "react";

const CartMapSection = ({ carts, procced, handleDelete, totalprice }) => {
  return (
    <div>
      <div className="p-8">
        {carts.map((c) => (
          <div className="flex items-center justify-between gap-4 rounded-lg my-5 p-5 bg-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10">
                <img className="rounded-full p-1 border" src={c.icon} alt="" />
              </div>
              <div>
                <h2>{c.name}</h2>
                <p>${c.price}</p>
              </div>
            </div>
            <div className="flex  items-center">
              <button
                onClick={() => handleDelete(c)}
                className="btn btn-ghost text-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-between font-bold text-xl">
          <p>Total :</p>
          <p>${totalprice}</p>
        </div>
        <div>
          <button onClick={procced} className="btn btn-primary w-full">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartMapSection;
