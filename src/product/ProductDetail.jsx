import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductData } from "../data/ProductData";
import { useProduct } from "../context/ProductContext";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import Feature from "../components/home/Feature";

import {
  FaCheckCircle,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

import { CartContext } from "./CartProvider";

function ProductDetail() {
  const { id } = useParams();
  const { product: allProducts } = useProduct();
  const sourceList = allProducts?.length ? allProducts : ProductData;

  const product = sourceList.find(
    (item) => item.id === Number(id)
  );

  const [selectImage, setSelectImage] = useState(
    product?.imgs?.[0] || ""
  );

  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const handleBuyNow = () => {
  addToCart({
    ...product,
    quantity: quantity,
  });

  navigate("/checkout");
};

  // Product not found
  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">
          Product not found
        </h2>

        <Link
          to="/shop"
          className="text-amber-600 underline mt-4 inline-block"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  // Related products
  const relatedProducts = sourceList
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  // Add to cart
  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: quantity,
    });

    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 1800);
  };

  return (
    <>
      {/* PRODUCT DETAIL */}

      <div className="mx-auto max-w-7xl mt-8 bg-linear-to-r from-amber-600 via-amber-300 to-yellow-500 rounded-3xl p-6 sm:p-8 shadow-xl mb-12 border border-amber-200">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* IMAGES */}

          <div>

            {/* Main Image */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-md border border-amber-300 h-100 sm:h-120 flex items-center justify-center">

              {selectImage ? (
                <img
                  src={selectImage}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <p className="text-gray-500">
                  Image not available
                </p>
              )}

            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3 mt-4">

              {product.imgs?.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectImage(image)}
                  className={`overflow-hidden rounded-2xl border-2 transition-all p-0.5 bg-white cursor-pointer ${selectImage === image
                      ? "border-orange-500 ring-2 ring-orange-400/40 scale-105"
                      : "border-gray-200 hover:border-amber-400 opacity-75 hover:opacity-100"
                    }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-20 w-full object-cover rounded-xl"
                  />
                </button>
              ))}

            </div>
          </div>

          {/* PRODUCT INFO */}

          <div className="flex flex-col justify-between py-2">

            <div>

              {/* Brand + Category */}
              <div className="flex items-center gap-2 mb-2">

                <span className="bg-linear-to-r from-orange-500 to-amber-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {product.brand}
                </span>

                <span className="text-xs font-bold text-gray-600 bg-white/70 px-2.5 py-1 rounded-full">
                  {product.category}
                </span>

              </div>

              {/* Name */}
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                {product.name}
              </h1>

              {/* Stars */}
              <div className="flex items-center gap-2 mt-3">

                <div className="flex text-amber-500 text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <span className="text-sm font-bold text-gray-800">
                  5.0
                </span>

                <span className="text-xs text-gray-600">
                  (120+ Customer Reviews)
                </span>

              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mt-4 flex-wrap">

                <span className="text-3xl sm:text-4xl font-black text-red-600 font-mono">
                  ${product.price}
                </span>

                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}

                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-lg">
                  In Stock
                </span>

              </div>

              {/* Description */}
              <p className="text-sm text-gray-700 mt-4 leading-relaxed font-medium bg-white/60 p-4 rounded-2xl border border-amber-100/60 shadow-sm">
                {product.description}
              </p>

              {/* Specification */}
              {product.specification && (
                <div className="grid grid-cols-2 gap-2 mt-4 text-xs">

                  {Object.entries(product.specification).map(
                    ([key, val]) => (
                      <div
                        key={key}
                        className="bg-white/80 p-2.5 rounded-xl border border-amber-100"
                      >
                        <span className="font-bold text-gray-500">
                          {key}:{" "}
                        </span>

                        <span className="font-bold text-gray-800">
                          {val}
                        </span>
                      </div>
                    )
                  )}

                </div>
              )}

              {/* Quantity */}
              <div className="flex items-center gap-4 mt-6">

                <span className="font-bold text-gray-800">
                  Quantity:
                </span>

                <div className="flex items-center border-2 border-amber-400 rounded-xl overflow-hidden bg-white">

                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    disabled={quantity === 1}
                    className="w-10 h-10 text-xl font-bold hover:bg-amber-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
                  >
                    -
                  </button>

                  <span className="w-12 text-center font-bold text-lg">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={increaseQuantity}
                    className="w-10 h-10 text-xl font-bold hover:bg-amber-100 transition"
                  >
                    +
                  </button>

                </div>

              </div>

            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">

              {/* Add to cart */}
              <button
                type="button"
                onClick={handleAddToCart}
                className={`bg-linear-to-r ${addedToCart
                    ? "from-green-500 w-full to-green-600"
                    : "from-amber-500 to-orange-500 w-full hover:from-amber-600 hover:to-orange-600"
                  } rounded-xl py-3 px-6 text-base font-bold text-white shadow-lg hover:scale-101 transition flex items-center justify-center gap-2 cursor-pointer`}
              >
                {addedToCart ? (
                  <>
                    <FaCheckCircle />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <FaShoppingCart />
                    Add to Cart
                  </>
                )}
              </button>

              {/*Buy Now*/}
              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full cursor-pointer rounded-xl bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600"
              >
                Buy Now
              </button>

              {/* Warranty */}
              <Link
                to="/service"
                className="w-full bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 rounded-xl py-3 px-6 text-base font-bold text-white  hover:shadow-lg hover:scale-101 transition flex items-center justify-center gap-2 text-center"
              >
                Warranty & Service Info
              </Link>

            </div>

          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}

      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-16">

          <div className="flex items-end justify-between mb-6">

            <div>
              <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-1">
                You may also like
              </p>

              <h2 className="text-3xl font-extrabold text-gray-900">
                Related Products
              </h2>
            </div>

            <Link
              to="/shop"
              className="hidden sm:block text-sm font-bold text-orange-600 hover:text-orange-700 hover:underline"
            >
              View All →
            </Link>

          </div>

          {/* Related Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {relatedProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
              />
            ))}

          </div>

        </section>
      )}
    </>
  );
}

export default ProductDetail;