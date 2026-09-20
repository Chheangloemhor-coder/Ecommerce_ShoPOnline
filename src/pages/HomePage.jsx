import React from "react";
import { useProduct } from "../context/ProductContext";
import ProductCard from "../product/ProductCard";
import HeroSection from "../components/home/HeroSection"
import Feature from "../components/home/Feature";

function HomePage() {
  const { product } = useProduct();

  return (
    <div className="m-0 p-0 relative">
      <HeroSection/>
      <Feature/>
      <h1 className="text-amber-500 font-bold uppercase tracking-widest text-4xl mb-2 text-center"><u>Our Product</u></h1>
      <div className="mx-auto max-w-7xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {product?.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}
        </div>
      </div>
    </div>
      
  );
}

export default HomePage;
