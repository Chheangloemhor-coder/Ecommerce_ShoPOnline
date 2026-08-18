import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainlayout from "./components/layout/Mainlayout";
import ProductDetail from "./product/ProductDetail";
import Shoppage from "./pages/Shoppage";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainlayout/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/shop" element={<Shoppage/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
