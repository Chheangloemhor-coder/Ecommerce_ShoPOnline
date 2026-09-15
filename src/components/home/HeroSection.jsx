import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingBag, FaHeadset, FaStar, FaAward, FaShieldAlt, FaUsers, FaTools } from "react-icons/fa";

function HeroSection() {
  const navigate = useNavigate();
  const stats = [
      { icon: FaAward, value: "20+", label: "Years of Experience in Cambodia", color: "text-amber-500" },
      { icon: FaUsers, value: "2,500K+", label: "Happy & Satisfied Customers", color: "text-orange-500" },
      { icon: FaTools, value: "100%", label: "Professional Repair & Service", color: "text-emerald-500" },
      { icon: FaShieldAlt, value: "1-2 Yrs", label: "Official Genuine Warranty", color: "text-blue-500" },
    ];

  return (
    <section className="w-full bg-linear-to-br from-orange-600 via-amber-500 to-yellow-400 min-h-135px flex flex-col lg:flex-row overflow-hidden">

      {/* LEFT content*/}
      <div className="flex-1 flex flex-col justify-center -mt-10 px-6 sm:px-12 lg:px-20 py-14 lg:py-0 text-white">

        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold w-fit mb-6">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          New Collection · 2026
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
          Best Online Shop
          <br />
          <span className="text-white/80 font-light italic text-3xl sm:text-4xl lg:text-5xl">
            in Cambodia
          </span>
        </h1>

        {/* Description */}
        <p className="mt-5 text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
          Laptops, phones, accessories & expert repair — all in one place.
          Trusted by over 2,500,000 customers across Cambodia.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => navigate("/shop")}
            className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold text-sm sm:text-base rounded-xl px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 cursor-pointer"
          >
            <FaShoppingBag />
            Shop Now
          </button>
          <button
            onClick={() => navigate("/service")}
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/40 text-white font-semibold text-sm sm:text-base rounded-xl px-6 py-3 transition-all active:scale-95 cursor-pointer backdrop-blur-sm"
          >
            <FaHeadset />
            Our Services
          </button>
        </div>

        {/* 4 Core Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 mt-20">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white p-6 shadow-md border border-amber-100 text-center flex flex-col items-center justify-center hover:-translate-y-1 transition duration-300"
              >
                <div className={`text-4xl mb-3 ${stat.color}`}>
                  <Icon />
                </div>
                <div className="text-3xl font-extrabold text-gray-800">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-500 mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── RIGHT: Image ──────────────────────────── */}
      <div className="relative w-full lg:w-[45%] shrink-0 min-h-70 sm:min-h-90 lg:min-h-0">
        {/* Overlay fade on left for lg screens */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-20 bg-linear-to-r from-amber-100 to-transparent z-10 pointer-events-none" />

        <img
          src="https://i.pinimg.com/736x/f7/af/98/f7af98397f0822f3386d4178931da5ac.jpg"
          alt="New Collection"
          className="w-full h-full object-cover object-center"
        />

        {/* Hot Deal badge */}
        <span className="absolute top-5 right-5 bg-red-500 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg tracking-wide z-20">
          🔥 Hot Deal
        </span>

        {/* View More overlay button */}
        <button
          onClick={() => navigate("/shop")}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-white text-orange-600 font-bold text-sm rounded-xl px-8 py-2.5 shadow-xl transition hover:-translate-y-0.5 active:scale-95 cursor-pointer whitespace-nowrap z-20"
        >
          View All Products →
        </button>
      </div>

    </section>
  );
}

export default HeroSection;
