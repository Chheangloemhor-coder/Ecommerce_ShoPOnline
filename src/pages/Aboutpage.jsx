import React from "react";
import { Link } from "react-router-dom";
import { FaAward, FaUsers, FaTools, FaShieldAlt, FaMapMarkerAlt, FaPhoneAlt, FaCheckCircle, FaLaptop } from "react-icons/fa";

function Aboutpage() {
  const stats = [
    { icon: FaAward, value: "20+", label: "Years of Experience in Cambodia", color: "text-amber-500" },
    { icon: FaUsers, value: "2,500K+", label: "Happy & Satisfied Customers", color: "text-orange-500" },
    { icon: FaTools, value: "100%", label: "Professional Repair & Service", color: "text-emerald-500" },
    { icon: FaShieldAlt, value: "1-2 Yrs", label: "Official Genuine Warranty", color: "text-blue-500" },
  ];

  const services = [
    {
      title: "Sell Computers & Tech",
      desc: "Authorized retailer for ASUS ROG, Apple, MSI, Razer, and top flagship laptops and accessories at great prices.",
      icon: FaLaptop
    },
    {
      title: "Repair & Fix Computers",
      desc: "Full hardware diagnostics, screen replacements, motherboard repair, and genuine part replacements.",
      icon: FaTools
    },
    {
      title: "Upgrade & Change Parts",
      desc: "RAM and SSD ultra-fast upgrades, thermal paste optimization, and custom gaming PC building.",
      icon: FaCheckCircle
    },
    {
      title: "Friendly Customer Service",
      desc: "We are always kind, dedicated, and ready to assist you with free technical consulting and lifetime support.",
      icon: FaUsers
    }
  ];

  return (
    <div className="bg-amber-50/50 min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Hero Banner Header */}
        <div className="relative overflow-hidden rounded-3xl from-amber-500 via-orange-500 to-amber-600 p-8 sm:p-14 text-white shadow-xl mb-12">
          <div className="max-w-3xl">
            <span className="bg-linear-to-r bg-amber-500 to-amber-700 inline-block rounded-full px-4 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-sm mb-3">
              🇰🇭 Best E-Commerce & Computer Shop in Cambodia
            </span>
            <h1 className="text-3xl text-yellow-300 sm:text-5xl font-black leading-tight">
              About Our Store
            </h1>
            <p className="mt-4 text-base sm:text-lg text-amber-400 leading-relaxed font-medium">
              We have over 20 years of experience providing Cambodia with the latest gaming laptops, phones, computer accessories, and expert repair services.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="rounded-xl bg-amber-950 px-6 py-3 text-sm font-bold text-orange-600 shadow-md transition hover:bg-amber-500 hover:scale-105 cursor-pointer"
              >
                Explore Shop →
              </Link>
              <a
                href="#contact"
                className="rounded-xl bg-amber-500 border border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-amber-950 hover:scale-105 transition"
              >
                Contact Us ↓
              </a>
            </div>
          </div>
        </div>

        {/* 4 Core Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

        {/* Our Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-md border border-amber-100">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4">
              Why Customers Love Shopping With Us
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our store was founded with one primary mission: to upgrade Cambodia's digital lifestyle by providing 100% genuine tech products at unbeatable local prices with dependable after-sales care.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you are an esports enthusiast looking for the newest ROG Strix laptops, a creative professional needing a MacBook Pro, or someone needing fast computer repairs, our certified team is here to help.
            </p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <FaCheckCircle className="text-emerald-500 text-lg" />
                <span>100% Genuine Seals & Official Cambodia Warranties</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <FaCheckCircle className="text-emerald-500 text-lg" />
                <span>Always Kind & Friendly Customer Care</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <FaCheckCircle className="text-emerald-500 text-lg" />
                <span>Fast Door-to-Door Delivery Across All Provinces</span>
              </div>
            </div>
          </div>

          {/* Services & Capabilities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((srv, index) => {
              const Icon = srv.icon;
              return (
                <div
                  key={index}
                  className="rounded-3xl bg-white p-6 shadow-sm border border-amber-100 hover:border-amber-400 hover:shadow-md transition"
                >
                  <div className="h-10 w-10 rounded-xl bg-amber-500 text-white flex items-center justify-center text-lg mb-3 shadow-md shadow-amber-500/20">
                    <Icon />
                  </div>
                  <h3 className="font-bold text-base text-gray-800 mb-1">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact & Location Info */}
        <div id="contact" className="rounded-3xl bg-amber-950 p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
                Visit Our Showroom in Cambodia
              </h2>
              <p className="mt-2 text-sm text-amber-200">
                Have questions or need technical support? Contact our friendly team today.
              </p>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-amber-400 text-xl shrink-0" />
                  <span>Phnom Penh Showroom, Kingdom of Cambodia</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-amber-400 text-lg shrink-0" />
                  <span>Hotline: +855 (0) 11 213818</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-amber-900/60 p-6 border border-amber-800 text-center">
              <h3 className="text-lg font-bold">Ready to upgrade your tech?</h3>
              <p className="text-xs text-amber-200 mt-1 mb-4">
                Explore our full catalog of laptops, phones, and gear.
              </p>
              <Link
                to="/shop"
                className="inline-block w-full rounded-xl bg-amber-500 py-3 text-sm font-bold text-white shadow-md hover:bg-amber-400 transition"
              >
                Browse All Products
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Aboutpage;
