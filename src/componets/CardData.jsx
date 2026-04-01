import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const CardData = ({ item, carts, setCarts }) => {
  const [buyNow, setBuyNow] = useState(false);
  const isHere = carts.find((menu) => menu.id === item.id);
  const handleBuy = () => {
    if (isHere) {
      toast.error("Already added");
      return;
    }
    toast.success("Buy successfully");

    setBuyNow(true);

    setCarts([...carts, item]);
  };
  console.log(buyNow);
  return (
    <div>
      <div className="border space-y-2 border-zinc-200 shadow-lg rounded-lg p-3">
        <div className="flex justify-end">
          <button
            className={`${
              item.tag === "best seller"
                ? "bg-purple-300 rounded-full px-2  text-purple-600"
                : item.tag === "new"
                  ? "bg-green-300 rounded-full px-2 text-green-600"
                  : "bg-amber-200 rounded-full px-2  text-amber-600"
            }`}
          >
            {item.tag}
          </button>
        </div>
        <div className="w-10 h-10 ">
          <img
            className="rounded-full p-1 border border-zinc-300"
            src={item.icon}
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h2 className="font-bold text-2xl">{item.name}</h2>
          <p className="text-[#627382]">{item.description}</p>
        </div>
        <div>
          <p className="my-2">
            <span className="font-bold text-2xl">${item.price}</span>/
            {item.period}
          </p>
          <div className="">
            {item.features.map((i) => (
              <div className="flex gap-1 items-center">
                <span className="text-green-500">
                  <FaCheck></FaCheck>
                </span>
                <p>{i}</p>
              </div>
            ))}
          </div>
          <button
            onClick={handleBuy}
            className={`w-full mt-2 rounded-full ${
              isHere ? "btn btn-success" : "btn btn-primary"
            }`}
          >
            {isHere ? (<span className="flex gap-1 items-center"><FaCheck></FaCheck>Added to cart</span>) : "Buy now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardData;
