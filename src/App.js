import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Pillows } from "./pages/Pillows.js";
import { HotelBedding } from "./pages/HotelBedding.js";
import { ShopByBrand } from "./pages/ShopByBrand.js";
import { ShopAllProducts } from "./pages/ShopAllProducts.js";
import { PillowFinder } from "./pages/PillowFinder.js";
import { Sale } from "./pages/Sale.js";
import { Home } from "./components/Home/Home.js";
import { Header } from "./components/Header/Header.js";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pillows" element={<Pillows />} />
          <Route path="/hotel-bedding" element={<HotelBedding />} />
          <Route path="/shop-by-brand" element={<ShopByBrand />} />
          <Route path="/shop-all-products" element={<ShopAllProducts />} />
          <Route path="/pillow-finder" element={<PillowFinder />} />
          <Route path="/sale" element={<Sale />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
