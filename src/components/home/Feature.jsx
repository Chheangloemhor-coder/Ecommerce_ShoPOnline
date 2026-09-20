import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductData } from "../../data/ProductData";
import { FaStar, FaEye, FaFire } from "react-icons/fa";


function Feature() {
  const navigate = useNavigate();

  // Get only Best Sale products and show maximum 3
  const featuredProducts = ProductData
    .filter((product) => product.bestSale === true)
    .slice(0, 3);

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2">
            Featured Products
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Best Products
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Discover our most popular products, carefully selected for
            quality, performance, and value.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {featuredProducts.map((product) => {

            const discount =
              product.originalPrice && product.originalPrice > product.price
                ? Math.round(
                  ((product.originalPrice - product.price) /
                    product.originalPrice) *
                  100
                )
                : 0;

            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
              >

                {/* Image */}
                <div className="relative h-72 bg-gray-100 overflow-hidden">
                  <div
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="relative h-72 bg-gray-100 overflow-hidden cursor-pointer"
                  >
                    {/* Discount */}
                    {discount > 0 && (
                      <span className="absolute top-4 left-4 inline-flex z-10 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold gap-1">
                        <FaFire/>
                        -{discount}%
                      </span>
                    )}

                    {/* Best Seller */}
                    <span className="absolute top-4 right-4 z-10 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Best Seller
                    </span>

                    {/* Product Image */}
                    <img
                      src={product.imgs?.[0]}
                      alt={product.name}
                      className="w-full h-full object-cover p-5 group-hover:scale-110 transition duration-500"
                    />

                    {/* View Details */}
                    <div
                      className="
      absolute
      inset-0
      bg-black/20
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-300
      flex
      items-center
      justify-center
    "
                    >
                      <span
                        className="
        inline-flex
        items-center
        gap-1.5
        rounded-full
        bg-white/95
        backdrop-blur-md
        px-4
        py-2
        text-xs
        font-bold
        text-gray-800
        shadow-lg
        transform
        translate-y-2
        group-hover:translate-y-0
        transition-transform
        duration-300
      "
                      >
                        <FaEye className="text-amber-500" />
                        View Details
                      </span>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">

                  {/* Brand */}
                  <p className="text-sm text-amber-500 font-bold uppercase">
                    {product.brand}
                  </p>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-gray-900 mt-1">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-3">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />

                    <span className="text-sm text-gray-500 ml-1">
                      5.0
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 mt-4">
                    <span className="text-2xl font-bold text-amber-500">
                      ${product.price}
                    </span>

                    {product.originalPrice && (
                      <span className="text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* View Product */}
                  <button
                    onClick={() =>
                      navigate(`/feature/${product.id}`)
                    }
                    className="cursor-pointer w-full mt-5 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-amber-500 transition"
                  >
                    View Product
                  </button>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}


export default Feature;
