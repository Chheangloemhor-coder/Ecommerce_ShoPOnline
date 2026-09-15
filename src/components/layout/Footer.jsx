import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaArrowAltCircleUp } from 'react-icons/fa';

function Footer() {
  /* Scroll up */
  const scrollTotop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full mt-15">
      <div className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-inner w-full">

        {/* Brand */}
        <h1 className="text-3xl font-bold text-white items-center whitespace-nowrap">
          <Link to="/" className="hover:opacity-90 transition">
            Shop Online
          </Link>
        </h1>

        {/* Product Column */}
        <div>
          <h1 className="text-2xl text-white font-bold mb-2">Product</h1>
          <p className="text-white/90">• ASUS</p>
          <p className="text-white/90">• MSI</p>
          <p className="text-white/90">• MACBOOK</p>
          <p className="text-white/90">• DELL</p>
        </div>

        {/* Service Column */}
        <div>
          <h1 className="text-2xl text-white font-bold mb-2">
            <Link to="/service" className="hover:underline">
              Service
            </Link>
          </h1>
          <p className="text-white/90">• Fix Computer</p>
          <p className="text-white/90">• Repair Computer</p>
          <p className="text-white/90">• Sell Computer</p>
          <p className="text-white/90">• Upgrade Parts</p>
        </div>

        {/* About-Us Column */}
        <div>
          <h1 className="text-2xl text-white font-bold mb-2">
            <Link to="/about" className="hover:underline">
              About-Us
            </Link>
          </h1>
          <p className="text-white/90">• Experience (20+ Years)</p>
          <p className="text-white/90">• Customers (2,500K+)</p>
          <p className="text-white/90">• Kind Customer Care</p>
          <p className="text-white/90">• Best Service in Cambodia</p>
        </div>

        {/* More Information Search */}
        <div>
          <p className="text-white font-semibold mb-2">More Information...</p>
          <div className="flex items-center gap-2 relative">
            <input
              type="text"
              className="bg-amber-800/60 border border-amber-400/30 text-sm h-10 text-white rounded-2xl outline-0 ps-10 placeholder-amber-200 w-48 sm:w-60"
              placeholder="Search Here..."
            />
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white" />
            <button className="bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 rounded-2xl h-10 px-5 text-base text-white font-bold shadow-md cursor-pointer transition whitespace-nowrap">
              Search
            </button>
          </div>
        </div>

        {/* Scroll To Top */}
        <div
          className="text-5xl text-white hover:scale-105 cursor-pointer self-center md:self-auto"
          onClick={scrollTotop}
        >
          <FaArrowAltCircleUp />
        </div>

      </div>
    </footer>
  );
}

export default Footer;

