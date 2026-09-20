import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainlayout from "./components/layout/Mainlayout";
import ProductDetail from "./product/ProductDetail";
import Shoppage from "./pages/Shoppage";
import Aboutpage from "./pages/Aboutpage";
import CartProvider from "./product/CartProvider";
import { ProductProvider } from "./context/ProductContext";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import SignIn from "./pages/Signin";
import Service from "./pages/Service";
import Feature from "./components/home/Feature";

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mainlayout />}>
              <Route index element={<HomePage />} />
              <Route path="/Home" element={<HomePage />} />
              <Route path="/feature/:id" element={<ProductDetail/>}/>
              {/* <Route path="/home" element={<HomePage />} /> */}
              <Route path="/shop" element={<Shoppage />} />
              <Route path="/about" element={<Aboutpage />} />
              <Route path="/About" element={<Aboutpage />} />
              <Route path="/service" element={<Service />} />
              <Route path="/Service" element={<Service />} />
              <Route path="/services" element={<Service />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/sign-in" element={<SignIn/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
