import { useState } from "react";
import "./App.css";
import Navbar from "./componets/Navbar";
import CartSection from "./componets/CartSection";
import Products from "./componets/Products";
import Banner from "./componets/Banner";
import GetStart from "./componets/GetStart";
import Transparent from "./componets/Transparent";
import WorkFlow from "./componets/WorkFlow";
import Footer from "./componets/Footer";

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
      <Navbar carts={carts}></Navbar>
      <Banner></Banner>
      <div className="text-center justify-center mt-8">
        <h2 className="text-4xl font-bold">Premium Digital Tools</h2>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>
      {/* banner section;;; */}

      <div>
        <div className="tabs tabs-box w-43 my-8 rounded-full mx-auto justify-center items-center bg-transparent ">
          <input
            type="radio"
            name="my_tabs_6"
            onClick={() => setProductCart("Products")}
            className={`tab rounded-full ${productCart === "Products" ? "bg-gradient-to-r from-[#4F39F6]  to-[#9514FA]" : ""}`}
            aria-label="Products"
            defaultChecked
          />

          <input
            type="radio"
            name="my_tabs_6"
            onClick={() => setProductCart("Carts")}
            className={`tab rounded-full ${productCart === "Carts" ? "bg-gradient-to-r from-[#4F39F6]  to-[#9514FA]" : ""}`}
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

      <GetStart></GetStart>
      <Transparent></Transparent>
      <WorkFlow></WorkFlow>
      <Footer></Footer>
    </>
  );
}

export default App;
