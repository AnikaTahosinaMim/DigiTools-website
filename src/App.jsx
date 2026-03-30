import { useState } from "react";
import "./App.css";
import Navbar from "./componets/Navbar";
import CartSection from "./componets/CartSection";
import Products from "./componets/Products";

const jsondata = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const datas = jsondata();
console.log(datas);

function App() {
  // for products usestate
  const [productCart, setProductCart] = useState("Products");
  // for carts usustate:
  const [carts, setCarts] = useState([]);
  return (
    <>
      <h2 className="text-2xl font-bold">Name</h2>
      <Navbar carts={carts} setCarts={setCarts}></Navbar>
      <div>
        <div className="tabs tabs-box w-43 rounded-full mx-auto justify-center items-center bg-transparent ">
          <input
            type="radio"
            name="my_tabs_6"
            onClick={() => setProductCart("Products")}
            className={`tab ${productCart === "Products" ? "bg-gradient-to-r from-[#4F39F6]  to-[#9514FA]" : ""}`}
            aria-label="Products"
            defaultChecked
          />

          <input
            type="radio"
            name="my_tabs_6"
            onClick={() => setProductCart("Carts")}
            className={`tab ${productCart === "Carts" ? "bg-gradient-to-r from-[#4F39F6]  to-[#9514FA]" : ""}`}
            aria-label={`Carts (${carts.length})`}
          />
        </div>
      </div>
      {productCart === "Products" ? (
        <Products datas={datas} carts={carts} setCarts={setCarts}></Products>
      ) : null}
      {productCart === "Carts" ? (
        <CartSection carts={carts} setCarts={setCarts}></CartSection>
      ) : null}
    </>
  );
}

export default App;
