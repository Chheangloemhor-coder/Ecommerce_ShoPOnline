import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaStar,
  FaHeart,
  FaShoppingCart,
  FaEye,
  FaCheck,
  FaFire,
} from "react-icons/fa";

import { CartContext } from "./CartProvider";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(0);

  const { addToCart } = useContext(CartContext);

  // Prevent error if product doesn't exist
  if (!product) return null;

  // ============================================
  // PRICE
  // ============================================

  const originalPrice =
    product.originalPrice || product.originalprice;

  const discountPercent =
    originalPrice && originalPrice > product.price
      ? Math.round(
          ((originalPrice - product.price) / originalPrice) * 100
        )
      : null;

  // ============================================
  // PRODUCT IMAGE
  // ============================================

  const displayImage =
    product.imgs?.[hoveredImageIndex] ||
    product.imgs?.[0] ||
    "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80";

  // ============================================
  // VIEW PRODUCT DETAIL
  // ============================================

  const handleViewProduct = () => {
    navigate(`/product/${product.id}`);
  };

  // ============================================
  // WISHLIST
  // ============================================

  const handleToggleWishlist = (e) => {
    e.stopPropagation();

    setIsWishlisted((prev) => !prev);
  };

  // ============================================
  // ADD TO CART
  // ============================================

  const handleAddToCart = (e) => {
    e.stopPropagation();

    console.log("Add Product to cart:", product);

    addToCart(product);

    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 1800);
  };

  // ============================================
  // CHANGE IMAGE
  // ============================================

  const handleChangeImage = (e, index) => {
    e.stopPropagation();

    setHoveredImageIndex(index);
  };

  return (
    <div
      onClick={handleViewProduct}
      className="
        group
        relative
        flex
        flex-col
        justify-between
        rounded-3xl
        bg-white
        border
        border-amber-100/80
        p-4
        shadow-sm
        hover:shadow-2xl
        hover:shadow-amber-500/15
        hover:border-amber-400
        transition-all
        duration-300
        hover:-translate-y-1.5
        cursor-pointer
        overflow-hidden
      "
    >

      {/* ============================================
          IMAGE AREA
      ============================================ */}

      <div className="relative">

        {/* --------------------------------------------
            BADGES
        -------------------------------------------- */}

        <div
          className="
            absolute
            top-2.5
            left-2.5
            z-10
            flex
            flex-col
            gap-1.5
            items-start
          "
        >

          {/* Discount */}
          {discountPercent && (
            <span
              className="
                bg-linear-to-r
                from-red-500
                to-rose-600
                inline-flex
                items-center
                gap-1
                rounded-xl
                px-2.5
                py-1
                text-[11px]
                font-black
                text-white
                shadow-md
              "
            >
              <FaFire className="text-[10px]" />

              -{discountPercent}%
            </span>
          )}

          {/* Flash Sale */}
          {product.flashSale && (
            <span
              className="
                rounded-lg
                bg-amber-500/90
                backdrop-blur-sm
                px-2
                py-0.5
                text-[10px]
                font-extrabold
                uppercase
                tracking-wider
                text-white
                shadow-sm
              "
            >
              Flash Sale
            </span>
          )}

          {/* Best Seller */}
          {product.bestSale && !product.flashSale && (
            <span
              className="
                rounded-lg
                bg-orange-600/90
                backdrop-blur-sm
                px-2
                py-0.5
                text-[10px]
                font-extrabold
                uppercase
                tracking-wider
                text-white
                shadow-sm
              "
            >
              Best Seller
            </span>
          )}

        </div>

        {/* --------------------------------------------
            WISHLIST
        -------------------------------------------- */}

        <button
          onClick={handleToggleWishlist}
          aria-label="Save to Wishlist"
          type="button"
          className={`
            absolute
            top-2.5
            right-2.5
            z-10
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-2xl
            backdrop-blur-md
            transition-all
            duration-300
            shadow-sm

            ${
              isWishlisted
                ? `
                  bg-red-50
                  text-red-500
                  border
                  border-red-200
                  scale-110
                  shadow-red-500/20
                `
                : `
                  bg-white/85
                  text-gray-400
                  hover:text-red-500
                  hover:bg-white
                  hover:scale-105
                  border
                  border-gray-100
                `
            }
          `}
        >
          <FaHeart
            className={`
              text-sm
              ${isWishlisted ? "fill-red-500" : ""}
            `}
          />
        </button>

        {/* --------------------------------------------
            PRODUCT IMAGE
        -------------------------------------------- */}

        <div
          className="
            relative
            h-52
            w-full
            overflow-hidden
            rounded-2xl
            bg-linear-to-br
            from-amber-50/50
            to-orange-50/30
            flex
            items-center
            justify-center
          "
        >

          <img
            src={displayImage}
            alt={product.name}
            className="
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          {/* ------------------------------------------
              VIEW DETAILS
          ------------------------------------------ */}

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

        {/* --------------------------------------------
            IMAGE DOTS
        -------------------------------------------- */}

        {product.imgs && product.imgs.length > 1 && (
          <div
            className="
              flex
              items-center
              justify-center
              gap-1.5
              mt-2.5
            "
          >
            {product.imgs.slice(0, 3).map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`View image ${idx + 1}`}
                onMouseEnter={(e) =>
                  handleChangeImage(e, idx)
                }
                onClick={(e) =>
                  handleChangeImage(e, idx)
                }
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    hoveredImageIndex === idx
                      ? "w-5 bg-amber-500"
                      : "w-1.5 bg-gray-200 hover:bg-amber-300"
                  }
                `}
              />
            ))}
          </div>
        )}

      </div>


      {/* ============================================
          PRODUCT INFORMATION
      ============================================ */}

      <div
        className="
          mt-3
          flex
          flex-1
          flex-col
          justify-between
        "
      >

        <div>

          {/* ------------------------------------------
              BRAND + CATEGORY
          ------------------------------------------ */}

          <div
            className="
              flex
              items-center
              justify-between
              text-xs
              mb-1
            "
          >

            <span
              className="
                font-extrabold
                uppercase
                tracking-wider
                text-amber-600
                text-[11px]
                bg-amber-50
                px-2
                py-0.5
                rounded-md
              "
            >
              {product.brand}
            </span>

            <span
              className="
                text-[11px]
                font-medium
                text-gray-400
              "
            >
              {product.category}
            </span>

          </div>


          {/* ------------------------------------------
              PRODUCT NAME
          ------------------------------------------ */}

          <h2
            className="
              font-bold
              text-base
              text-gray-800
              group-hover:text-amber-600
              transition-colors
              duration-200
              line-clamp-1
              mt-1
            "
          >
            {product.name}
          </h2>


          {/* ------------------------------------------
              SPECIFICATIONS
          ------------------------------------------ */}

          {product.specification && (
            <div
              className="
                flex
                flex-wrap
                gap-1
                mt-2
              "
            >

              {product.specification.GPU && (
                <span
                  className="
                    rounded-md
                    bg-gray-100
                    px-1.5
                    py-0.5
                    text-[10px]
                    font-medium
                    text-gray-600
                  "
                >
                  {product.specification.GPU}
                </span>
              )}

              {product.specification.RAM && (
                <span
                  className="
                    rounded-md
                    bg-gray-100
                    px-1.5
                    py-0.5
                    text-[10px]
                    font-medium
                    text-gray-600
                  "
                >
                  {product.specification.RAM}
                </span>
              )}

              {product.specification.Display && (
                <span
                  className="
                    rounded-md
                    bg-gray-100
                    px-1.5
                    py-0.5
                    text-[10px]
                    font-medium
                    text-gray-600
                  "
                >
                  {product.specification.Display}
                </span>
              )}

            </div>
          )}


          {/* ------------------------------------------
              STAR RATING
          ------------------------------------------ */}

          <div
            className="
              flex
              items-center
              gap-1.5
              mt-2
              text-xs
            "
          >

            <div
              className="
                flex
                text-amber-400
                text-[11px]
              "
            >
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <span
              className="
                font-bold
                text-gray-700
                text-xs
              "
            >
              5.0
            </span>

            <span
              className="
                text-[11px]
                text-gray-400
              "
            >
              (48)
            </span>

          </div>

        </div>


        {/* ============================================
            PRICE + CART
        ============================================ */}

        <div
          className="
            mt-4
            pt-3
            border-t
            border-gray-100
            flex
            items-center
            justify-between
            gap-2
          "
        >

          {/* ------------------------------------------
              PRICE
          ------------------------------------------ */}

          <div className="flex flex-col">

            <div
              className="
                flex
                items-baseline
                gap-1.5
              "
            >

              <span
                className="
                  text-xl
                  font-extrabold
                  text-red-600
                "
              >
                ${product.price}
              </span>

              {originalPrice && (
                <span
                  className="
                    text-xs
                    text-gray-400
                    line-through
                  "
                >
                  ${originalPrice}
                </span>
              )}

            </div>

            <span
              className="
                text-[10px]
                font-semibold
                text-emerald-600
              "
            >
              ✓ In Stock
            </span>

          </div>


          {/* ------------------------------------------
              ADD TO CART
          ------------------------------------------ */}

          <button
            onClick={handleAddToCart}
            aria-label="Add to Cart"
            type="button"
            className={`
              flex
              items-center
              justify-center
              gap-1.5
              px-3.5
              py-2.5
              rounded-2xl
              text-xs
              font-bold
              transition-all
              duration-300
              shadow-md
              cursor-pointer

              ${
                addedToCart
                  ? `
                    bg-emerald-600
                    text-white
                    shadow-emerald-500/25
                    scale-105
                  `
                  : `
                    bg-linear-to-r
                    from-amber-500
                    to-orange-500
                    hover:from-amber-400
                    hover:to-orange-400
                    text-white
                    shadow-amber-500/20
                    hover:scale-105
                  `
              }
            `}
          >

            {addedToCart ? (
              <>
                <FaCheck className="text-xs" />

                <span>
                  Added
                </span>
              </>
            ) : (
              <>
                <FaShoppingCart className="text-xs" />

                <span>
                  Add To Cart
                </span>
              </>
            )}

          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;