import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../product/CartProvider";
import { createReceiptPDF } from "../checkout/Receipt";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaLock,
  FaShoppingBag,
  FaShoppingCart,
  FaTrash,
  FaDownload,
  FaTimes,
  FaFilePdf,
  FaQrcode,
  FaReceipt,
  FaShieldAlt,
  FaTruck,
  // FaBuilding,
  // FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Checkout() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useContext(CartContext);

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [showQRPopup, setShowQRPopup] = useState(false);
  const [receiptUrl, setReceiptUrl] = useState("");
  const [orderId, setOrderId] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "Phnom Penh",
    province: "",
    postalCode: "",
    paymentMethod: "cash",
  });

  useEffect(() => {
    return () => {
      if (receiptUrl) {
        URL.revokeObjectURL(receiptUrl);
      }
    };
  }, [receiptUrl]);

  const subtotal = cart.reduce(
    (acc, item) => acc + Number(item.price || 0) * Number(item.quantity || 1),
    0
  );
  const shopping = subtotal >= 100 ? 0 : 5;
  const total = subtotal + shopping;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateOrderId = () => `ORD-${Date.now().toString().slice(-8)}`;

  const finalizeOrder = () => {
    if (cart.length === 0) return;

    const newOrderId = generateOrderId();
    setOrderId(newOrderId);

    const order = {
      orderId: newOrderId,
      formData: { ...formData },
      cart: [...cart],
      subtotal,
      shipping: shopping,
      total,
    };

    try {
      const pdfBlob = createReceiptPDF(order);
      const url = URL.createObjectURL(pdfBlob);

      if (receiptUrl) URL.revokeObjectURL(receiptUrl);

      setReceiptUrl(url);
      setShowQRPopup(false);
      setOrderPlaced(true);
      setShowReceipt(true);
      clearCart();
    } catch (err) {
      console.error("Receipt generation failed:", err);
      alert("Unable to generate receipt PDF. Please try again.");
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    if (formData.paymentMethod === "aba" || formData.paymentMethod === "acleda") {
      setShowQRPopup(true);
    } else {
      finalizeOrder();
    }
  };

  const downloadReceipt = () => {
    if (!receiptUrl) return;
    const a = document.createElement("a");
    a.href = receiptUrl;
    a.download = `receipt-${orderId}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-slate-50/60 py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-xl rounded-2xl border border-slate-200/80 bg-white p-8 text-center shadow-lg">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <FaCheckCircle className="text-3xl" />
          </div>

          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Order Confirmed!
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Thank you for your purchase. We have received your order and are preparing it for shipment.
          </p>

          <div className="mt-6 rounded-xl bg-slate-50 p-4 text-left border border-slate-100">
            <div className="flex justify-between items-center text-sm py-1">
              <span className="text-slate-500 font-medium">Order Number</span>
              <span className="font-mono font-bold text-slate-900">{orderId}</span>
            </div>
            <div className="flex justify-between items-center text-sm py-1 border-t border-slate-200/60">
              <span className="text-slate-500 font-medium">Payment Method</span>
              <span className="font-semibold text-slate-800 capitalize">
                {formData.paymentMethod === "aba" ? "ABA Bank QR" : formData.paymentMethod === "acleda" ? "ACLEDA Bank" : "Cash on Delivery"}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm py-1 border-t border-slate-200/60">
              <span className="text-slate-500 font-medium">Total Paid</span>
              <span className="text-lg font-extrabold text-amber-600">${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setShowReceipt(true)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-amber-500 bg-amber-50 px-5 py-3 text-sm font-bold text-amber-700 hover:bg-amber-100 transition cursor-pointer"
            >
              <FaFilePdf />
              <span>View / Download Receipt</span>
            </button>
            <Link
              to="/shop"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-white shadow hover:bg-amber-600 transition"
            >
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>

        {showReceipt && receiptUrl && (
          <ReceiptModal
            receiptUrl={receiptUrl}
            orderId={orderId}
            onClose={() => setShowReceipt(false)}
            onDownload={downloadReceipt}
          />
        )}
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50/60 py-16 px-4">
        <div className="mx-auto max-w-md rounded-2xl bg-white p-8 text-center shadow-md border border-slate-200">
          <FaShoppingBag className="mx-auto text-5xl text-slate-300" />
          <h2 className="mt-4 text-2xl font-bold text-slate-800">Your Cart is Empty</h2>
          <p className="mt-2 text-sm text-slate-500">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link
            to="/shop"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-600 transition"
          >
            <FaArrowLeft className="text-xs" />
            <span>Return to Shop</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/60 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 hover:text-amber-700"
            >
              <FaArrowLeft className="text-xs" />
              <span>Back to Shopping</span>
            </Link>
            <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Checkout & Payment
            </h1>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
            <FaShieldAlt className="text-emerald-500" />
            <span>Secure 256-Bit SSL Checkout</span>
          </div>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Form Fields Column */}
          <div className="space-y-6 lg:col-span-7">
            {/* Contact Details */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FaEnvelope className="text-amber-500" />
                <span>Contact Details</span>
              </h2>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="firstName"
                  required
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="lastName"
                  required
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="eamil"
                  required
                />
                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="011 213818"
                  required
                />
              </div>
            </div>

            {/* Shopping Address */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FaMapMarkerAlt className="text-amber-500" />
                <span>Shopping Address</span>
              </h2>

              <div className="mt-4 space-y-4">
                <Input
                  label="Street Address / House No."
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="No. 123, St. 271, Sangkat Boeung Tumpun"
                  required
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="City / Province"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Phnom Penh"
                    required
                  />
                  <Input
                    label="District / Khan"
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    placeholder="Chamkarmon"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4">
                <FaReceipt className="text-amber-500" />
                <span>Select Payment Method</span>
              </h2>

              <div className="space-y-3">
                <PaymentOption
                  value="cash"
                  selected={formData.paymentMethod}
                  onChange={handleChange}
                  title="Cash on Delivery"
                  description="Pay with cash directly when your parcel is delivered to your door."
                  badge="Simple & Fast"
                />

                <PaymentOption
                  value="aba"
                  selected={formData.paymentMethod}
                  onChange={handleChange}
                  title="ABA Bank (KHQR Mobile Pay)"
                  description="Scan KHQR code instantly with ABA Mobile to complete checkout."
                  badge="Recommended"
                />

                <PaymentOption
                  value="acleda"
                  selected={formData.paymentMethod}
                  onChange={handleChange}
                  title="ACLEDA Bank"
                  description="Scan ACLEDA mobile QR to transfer payment."
                />
              </div>
            </div>
          </div>

          {/* Sticky Order Summary Column */}
          <div className="lg:col-span-5">
            <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <FaShoppingCart className="text-amber-500" />
                  <span>Order Summary</span>
                </h3>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                  {cart.reduce((total, p) => total + (Number(p.quantity) || 1), 0)} items
                </span>
              </div>

              {/* Items List */}
              <div className="mt-4 max-h-72 overflow-y-auto divide-y divide-slate-100 pr-1">
                {cart.map((item) => {
                  const image = item.imgs?.[0] || item.image || "/placeholder.jpg";
                  const itemQty = Number(item.quantity || 1);
                  const itemPrice = Number(item.price || 0);

                  return (
                    <div key={item.id} className="py-3 flex gap-3 items-center">
                      <img
                        src={image}
                        alt={item.name}
                        className="h-14 w-14 shrink-0 rounded-xl object-cover border border-slate-200"
                      />
                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/product/${item.id}`}
                          className="text-xs font-semibold text-slate-800 hover:text-amber-600 line-clamp-1"
                        >
                          {item.name}
                        </Link>
                        <p className="text-xs text-slate-500 mt-0.5">
                          ${itemPrice.toFixed(2)} × {itemQty}
                        </p>
                        <div className="flex items-center gap-2 mt-1.5">
                          <div className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50">
                            <button
                              type="button"
                              onClick={() => decreaseQuantity(item.id)}
                              disabled={itemQty <= 1}
                              className="h-6 w-6 flex items-center justify-center text-xs font-bold text-slate-600 hover:bg-slate-200 disabled:opacity-30 cursor-pointer"
                            >
                              -
                            </button>
                            <span className="px-2 text-xs font-bold text-slate-800">{itemQty}</span>
                            <button
                              type="button"
                              onClick={() => increaseQuantity(item.id)}
                              className="h-6 w-6 flex items-center justify-center text-xs font-bold text-slate-600 hover:bg-slate-200 cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1 cursor-pointer"
                          >
                            <FaTrash className="text-[10px]" />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-slate-900 shrink-0">
                        ${(itemPrice * itemQty).toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Price Calculations */}
              <div className="mt-4 border-t border-slate-100 pt-4 space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <FaTruck className="text-slate-400" />
                    <span>Shopping</span>
                  </span>
                  <span className="font-semibold text-slate-900">
                    {shopping === 0 ? <span className="text-emerald-600 font-bold">FREE</span> : `$${shopping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-3 text-base font-bold text-slate-900">
                  <span>Total Due</span>
                  <span className="text-xl font-black text-amber-600">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 px-4 shadow-md transition hover:shadow-lg cursor-pointer"
              >
                <FaLock className="text-sm" />
                <span>
                  {formData.paymentMethod === "cash"
                    ? `Place Order • $${total.toFixed(2)}`
                    : `Proceed to Pay • $${total.toFixed(2)}`}
                </span>
              </button>

              <p className="mt-3 text-center text-[11px] text-slate-400">
                By placing your order, you agree to our Terms and Service.
              </p>
            </div>
          </div>
        </form>
      </div>

      {/* QR Code & Live Receipt Modal During Payment */}
      {showQRPopup && (
        <QRPopupModal
          paymentMethod={formData.paymentMethod}
          formData={formData}
          cart={cart}
          subtotal={subtotal}
          shipping={shopping}
          total={total}
          onConfirm={finalizeOrder}
          onClose={() => setShowQRPopup(false)}
        />
      )}

      {/* Standalone Receipt Modal */}
      {showReceipt && receiptUrl && (
        <ReceiptModal
          receiptUrl={receiptUrl}
          orderId={orderId}
          onClose={() => setShowReceipt(false)}
          onDownload={downloadReceipt}
        />
      )}
    </div>
  );
}

function Input({ label, name, type = "text", value, onChange, placeholder, required = false }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
      />
    </div>
  );
}

function PaymentOption({ value, selected, onChange, title, description, badge }) {
  const isSelected = selected === value;
  return (
    <label
      className={`block cursor-pointer rounded-xl border p-4 transition ${
        isSelected
          ? "border-amber-500 bg-amber-50/40 ring-1 ring-amber-500"
          : "border-slate-200 hover:border-slate-300 bg-white"
      }`}
    >
      <div className="flex items-start gap-3">
        <input
          type="radio"
          name="paymentMethod"
          value={value}
          checked={isSelected}
          onChange={onChange}
          className="mt-1 h-4 w-4 accent-amber-500"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-900">{title}</span>
            {badge && (
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                {badge}
              </span>
            )}
          </div>
          <p className="text-xs text-slate-500 mt-0.5">{description}</p>
        </div>
      </div>
    </label>
  );
}

function QRPopupModal({ paymentMethod, formData, cart, subtotal, shipping, total, onConfirm, onClose }) {
  const isAba = paymentMethod === "aba";
  const bankName = isAba ? "ABA Bank" : "ACLEDA Bank";
  const qrImage = isAba ? "/images/aba.jpg" : "/images/acleda.jpg";
  const appName = isAba ? "ABA Mobile" : "ACLEDA Mobile";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-linear-to-r from-amber-600 via-orange-500 to-amber-600 px-6 py-4 text-white shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="rounded-lg bg-white/20 p-2">
              <FaReceipt className="text-lg" />
            </div>
            <div>
              <h3 className="text-base font-bold">Payment & Invoice Receipt</h3>
              <p className="text-xs text-amber-100">Scan QR Code with {appName} to complete order</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-white hover:bg-white/20 transition cursor-pointer"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Content: Receipt on Left, QR on Right */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-50/50">
          {/* Order Receipt Pane */}
          <div className="md:col-span-6 flex flex-col justify-between rounded-xl bg-white p-5 border border-slate-200 shadow-xs">
            <div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-3">
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Order Receipt</h4>
                  <p className="text-[11px] text-slate-500">Shop Online Cambodia</p>
                </div>
                <span className="text-xs text-slate-400 font-mono">{new Date().toLocaleDateString()}</span>
              </div>

              {/* Customer summary */}
              <div className="mt-3 rounded-lg bg-slate-50 p-3 text-xs space-y-1 text-slate-600 border border-slate-100">
                <p className="font-semibold text-slate-800">
                  Customer: {formData.firstName} {formData.lastName}
                </p>
                <p>Phone: {formData.phone || "N/A"}</p>
                <p className="truncate">Address: {formData.address}, {formData.city}</p>
                <p className="font-semibold text-amber-600">Payment: {bankName} (QR Pay)</p>
              </div>

              {/* Items List */}
              <div className="mt-3.5">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Purchased Items ({cart.length})
                </p>
                <div className="max-h-44 overflow-y-auto divide-y divide-slate-100 pr-1">
                  {cart.map((item) => {
                    const img = item.imgs?.[0] || item.image || "/placeholder.jpg";
                    const qty = Number(item.quantity || 1);
                    const price = Number(item.price || 0);

                    return (
                      <div key={item.id} className="py-2 flex items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img src={img} alt={item.name} className="h-9 w-9 rounded-lg object-cover border border-slate-200 shrink-0" />
                          <div className="truncate">
                            <p className="font-semibold text-slate-800 truncate">{item.name}</p>
                            <p className="text-[11px] text-slate-500">${price.toFixed(2)} × {qty}</p>
                          </div>
                        </div>
                        <span className="font-bold text-slate-900 shrink-0">${(price * qty).toFixed(2)}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Calculations */}
            <div className="mt-4 border-t border-dashed border-slate-200 pt-3 space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Delivery</span>
                <span className="font-semibold text-slate-900">
                  {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-2 text-sm font-bold">
                <span className="text-slate-900">Total Payable</span>
                <span className="text-base font-extrabold text-amber-600">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* QR Code Payment Pane */}
          <div className="md:col-span-6 flex flex-col justify-between items-center rounded-xl bg-white p-5 border border-slate-200 shadow-xs text-center">
            <div className="w-full">
              <div className="rounded-xl bg-amber-50 border border-amber-200/80 p-3 mb-3">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Amount to Transfer</p>
                <p className="text-2xl sm:text-3xl font-black text-amber-600">${total.toFixed(2)}</p>
              </div>

              <div className="relative mx-auto inline-block">
                <div className="rounded-xl border-2 border-amber-300 bg-white p-2 shadow-sm">
                  <img
                    src={qrImage}
                    alt={`${bankName} QR Code`}
                    className="h-44 w-44 sm:h-48 sm:w-48 rounded-lg object-cover"
                  />
                </div>
              </div>

              <div className="mt-3 text-xs text-slate-500 space-y-0.5">
                <p className="font-semibold text-slate-700">1. Open {appName} & scan QR code</p>
                <p>2. Transfer exact amount <strong className="text-amber-600">${total.toFixed(2)}</strong></p>
                <p>3. Tap button below to confirm payment</p>
              </div>
            </div>

            <div className="mt-4 w-full space-y-2">
              <button
                type="button"
                onClick={onConfirm}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 text-sm shadow transition cursor-pointer"
              >
                <FaCheckCircle className="text-base" />
                <span>I Have Paid & Place Order</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-1 text-xs font-semibold text-slate-500 hover:text-slate-700 transition cursor-pointer"
              >
                Cancel / Edit Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReceiptModal({ receiptUrl, orderId, onClose, onDownload }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
      <div className="flex h-[90vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200">
        <div className="flex items-center justify-between border-b border-slate-200 bg-amber-500 px-6 py-4 text-white">
          <div className="flex items-center gap-2">
            <FaFilePdf className="text-xl" />
            <div>
              <h3 className="text-base font-bold">Order Receipt</h3>
              <p className="text-xs text-amber-100">Order ID: {orderId}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onDownload}
              className="flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-1.5 text-xs font-bold text-amber-700 shadow hover:bg-amber-50 transition cursor-pointer"
            >
              <FaDownload />
              <span>Download PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1.5 text-white hover:bg-amber-600 transition cursor-pointer"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-slate-100 p-2">
          <iframe
            src={receiptUrl}
            title={`Receipt-${orderId}`}
            className="h-full w-full rounded-xl border-0 bg-white"
          />
        </div>
      </div>
    </div>
  );
}