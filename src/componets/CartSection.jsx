import React from "react";

const CartSection = ({ carts, setCarts }) => {
  const totalprice = carts.reduce((sum, c) => sum + c.price, 0);
  const handleDelete = (c) => {
    console.log("jvnefu");
    const deleteBtn = carts.filter((d) => d.id !== c.id);
    setCarts(deleteBtn);
  };
  const procced = () => {
    setCarts([]);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold">Your Carts</h2>
      <div className="space-y-4 ">
        {carts.map((c) => (
          <div className="flex items-center justify-between gap-4 rounded-lg p-3 bg-gray-100">
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

export default CartSection;
