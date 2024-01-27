import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";

const Root = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<div>404</div>} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default Root;
