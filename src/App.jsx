import "./App.css";
import Jsondata from "./componets/Jsondata";
import Navbar from "./componets/Navbar";
const jsondata = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const datas = jsondata();
console.log(datas);
function App() {
  return (
    <>
      <h2 className="text-2xl font-bold">Name</h2>
      <Navbar></Navbar>
      <Jsondata datas={datas}></Jsondata>
    </>
  );
}

export default App;
