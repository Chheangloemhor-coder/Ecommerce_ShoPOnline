import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../product/CartProvider";
import { FaShoppingCart } from "react-icons/fa";

export default function ShoppingCart() {
  const [open, setOpen] = useState(false);

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, product) =>
      total +
      Number(product.price || 0) *
      Number(product.quantity || 0),
    0
  );

  // Calculate total items count
  const totalCart = cart.reduce(
    (total, product) =>
      total + Number(product.quantity || 1),
    0
  );

  return (
    <div>
      {/* CART BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 px-4 h-10 font-bold text-lg text-white shadow-lg transition hover:scale-105 cursor-pointer"
      >
        <span>Cart</span>
        <FaShoppingCart className="text-xl" />
        {totalCart > 0 && (
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow">
            {totalCart}
          </span>
        )}
      </button>

      {/* SHOPPING CART DIALOG */}

      <Dialog
        open={open}
        onClose={setOpen}
        className="relative z-50"
      >
        {/* BACKDROP */}
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/50 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">

            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">

              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >

                <div className="flex h-full flex-col bg-white shadow-2xl">

                  {/* HEADER */}

                  <div className="border-b border-gray-200 px-4 py-5 sm:px-6">

                    <div className="flex items-center justify-between">

                      <DialogTitle className="flex items-center gap-2 text-lg font-bold text-gray-900">
                        <FaShoppingCart className="text-orange-500" />
                        Shopping Cart
                      </DialogTitle>

                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="rounded-full p-2 text-gray-400 hover:bg-orange-50 hover:text-orange-600 transition cursor-pointer"
                      >
                        <span className="sr-only">
                          Close panel
                        </span>

                        <XMarkIcon
                          aria-hidden="true"
                          className="size-6"
                        />
                      </button>

                    </div>

                    {/* CART COUNT */}
                    <p className="mt-1 text-sm text-gray-500">
                      {cart.length}{" "}
                      {cart.length === 1
                        ? "product"
                        : "products"}{" "}
                      in your cart
                    </p>

                  </div>

                  {/* CART PRODUCTS */}

                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">

                    {cart.length === 0 ? (
                      /* EMPTY CART */
                      <div className="flex flex-col items-center justify-center text-center">

                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-50">
                          <FaShoppingCart className="text-3xl text-orange-400" />
                        </div>

                        <h3 className="mt-5 text-lg font-bold text-gray-900">
                          Your cart is empty
                        </h3>

                        <p className="mt-2 max-w-xs text-sm text-gray-500">
                          Add some products to your cart and they will appear here.
                        </p>

                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="mt-6 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-orange-600 transition cursor-pointer"
                        >
                          Continue Shopping
                        </button>

                      </div>
                    ) : (
                      /* PRODUCTS */
                      <ul className="divide-y divide-gray-200">

                        {cart.map((product) => {
                          const image =
                            product.imgs?.[0] ||
                            product.image ||
                            "/placeholder.jpg";

                          const originalPrice =
                            product.originalPrice ||
                            product.originalprice;

                          return (
                            <li
                              key={product.id}
                              className="flex py-6"
                            >

                              {/* PRODUCT IMAGE */}
                              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">

                                <img
                                  src={image}
                                  alt={product.name}
                                  className="h-full w-full object-cover"
                                />

                              </div>

                              {/* PRODUCT INFO */}
                              <div className="ml-4 flex min-w-0 flex-1 flex-col">

                                {/* NAME + PRICE */}
                                <div>

                                  <div className="flex items-start justify-between gap-3">

                                    <Link
                                      to={`/product/${product.id}`}
                                      onClick={() =>
                                        setOpen(false)
                                      }
                                      className="line-clamp-2 text-sm font-bold text-gray-900 hover:text-orange-600 transition"
                                    >
                                      {product.name}
                                    </Link>

                                    <p className="shrink-0 text-sm font-bold text-orange-600">
                                      $
                                      {Number(
                                        product.price || 0
                                      ).toFixed(2)}
                                    </p>

                                  </div>

                                  {/* ORIGINAL PRICE */}
                                  {originalPrice && (
                                    <p className="mt-1 text-right text-xs text-gray-400 line-through">
                                      $
                                      {Number(
                                        originalPrice
                                      ).toFixed(2)}
                                    </p>
                                  )}

                                  {/* BRAND */}
                                  {product.brand && (
                                    <p className="text-xs font-medium text-gray-500">
                                      {product.brand}
                                    </p>
                                  )}

                                  {/* COLOR */}
                                  {product.color && (
                                    <p className="mt-1 text-xs text-gray-500">
                                      Color: {product.color}
                                    </p>
                                  )}

                                </div>

                                {/* BOTTOM */}
                                <div className=" mt-2 flex items-center justify-between">

                                  {/* QUANTITY */}
                                  <div className="flex items-center rounded-lg border border-gray-300 bg-white">

                                    <button
                                      type="button"
                                      onClick={() =>
                                        decreaseQuantity(
                                          product.id
                                        )
                                      }
                                      disabled={
                                        product.quantity <= 1
                                      }
                                      className="flex h-8 w-8 items-center justify-center text-lg font-bold text-gray-600 hover:bg-orange-50 hover:text-orange-600 disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer"
                                    >
                                      -
                                    </button>

                                    <span className="flex h-8 w-9 items-center justify-center border-x border-gray-200 text-sm font-bold text-gray-800">
                                      {product.quantity}
                                    </span>

                                    <button
                                      type="button"
                                      onClick={() =>
                                        increaseQuantity(
                                          product.id
                                        )
                                      }
                                      className="flex h-8 w-8 items-center justify-center text-lg font-bold text-gray-600 hover:bg-orange-50 hover:text-orange-600 cursor-pointer"
                                    >
                                      +
                                    </button>

                                  </div>

                                  {/* REMOVE */}
                                  <button
                                    type="button"
                                    onClick={() =>
                                      removeFromCart(
                                        product.id
                                      )
                                    }
                                    className="text-xl font-semibold text-red-500 hover:text-red-600 cursor-pointer"
                                  >
                                    Remove
                                  </button>

                                </div>

                              </div>

                            </li>
                          );
                        })}

                      </ul>
                    )}

                  </div>

                  {/* CART FOOTER */}

                  {cart.length > 0 && (
                    <div className="border-t border-gray-200 bg-white px-4 py-6 sm:px-6">

                      {/* SUBTOTAL */}
                      <div className="flex items-center justify-between">

                        <p className="text-base font-semibold text-gray-900">
                          Subtotal
                        </p>

                        <p className="text-xl font-extrabold text-orange-600">
                          ${subtotal.toFixed(2)}
                        </p>

                      </div>

                      <p className="mt-1 text-xs text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>

                      {/* CHECKOUT */}
                      <div className="mt-5">

                        <Link
                          to="/checkout"
                          onClick={() => setOpen(false)}
                          className="flex w-full items-center justify-center rounded-xl bg-orange-500 px-6 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-orange-600 hover:shadow-lg"
                        >
                          Proceed to Checkout
                        </Link>

                      </div>

                      {/* CONTINUE SHOPPING */}
                      <div className="mt-4 text-center">

                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="text-sm font-semibold text-orange-600 hover:text-orange-700 cursor-pointer"
                        >
                          Continue Shopping
                          <span className="ml-1">
                            →
                          </span>
                        </button>

                      </div>

                    </div>
                  )}

                </div>

              </DialogPanel>

            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}