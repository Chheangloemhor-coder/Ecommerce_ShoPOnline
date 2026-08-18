import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow">
      <div className="overflow-hidden">
        <img
          onClick={()=>navigate(`/product/${product.id}`)}
          src={product.imgs?.[1]}
          alt={product.name}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h2 className="font-semibold">{product.brand}</h2>
        <p className="text-gray-500">{product.category}</p>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-red-500">
            ${product.price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ${product.originalprice}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

