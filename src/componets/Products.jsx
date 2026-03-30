import React, { use } from "react";
import CardData from "./CardData";

const Products = ({ datas, carts, setCarts }) => {
  const data = use(datas);
  console.log(data);
  return (
    <div>
      <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
          {data.map((item) => (
            <CardData carts={carts} setCarts={setCarts} item={item}></CardData>
          ))}
        </div>
      </>
    </div>
  );
};

export default Products;
