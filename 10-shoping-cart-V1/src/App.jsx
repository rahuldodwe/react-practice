import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/productList";
import ProductDetailsPage from "./pages/productDetails";
import CartListPage from "./pages/cartList";
import Default from "./pages/default/Default";

const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<ProductListPage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartListPage />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </>
  );
};

export default App;
