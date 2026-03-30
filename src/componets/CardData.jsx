import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const CardData = ({ item }) => {
  const [buyNow, setBuyNow] = useState(false);
  console.log(buyNow);
  return (
    <div>
      <div className="border space-y-2 border-zinc-200 shadow-lg rounded-lg p-3">
        <div className="flex justify-end">
          <button className=" px-2 py-1 rounded-full bg-amber-200">
            {item.tag}
          </button>
        </div>
        <div className="w-10 h-10 ">
          <img className="rounded-full p-1 border " src={item.icon} alt="" />
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
            onClick={() => setBuyNow(true)}
            className={`${buyNow ? "btn btn-success w-full mt-2 rounded-full" : "btn btn-primary w-full mt-2 rounded-full"}`}
          >
            {buyNow ? "Add to cart" : "Buy now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardData;
