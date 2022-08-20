import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Order from "./Components/Order";
import Reviews from "./Components/Reviews";
import Shop from "./Components/Shop";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/review" element={<Reviews />}></Route>
      </Routes>
    </div>
  );
}

export default App;
