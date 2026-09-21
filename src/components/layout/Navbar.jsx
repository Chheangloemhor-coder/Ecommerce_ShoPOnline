import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function Navbar() {
  return (
    <header className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 shadow-md w-full">
      {/* Desktop & Tablet Layout (md and up) */}
      <div className="hidden md:flex h-16 justify-between items-center px-6 py-4 w-full">
        <div className="text-3xl font-bold text-white whitespace-nowrap">
          <Link to="/" className="hover:opacity-90 transition">
            <h1>Shop Online</h1>
          </Link>
        </div>

        {/* Auth Buttons on Desktop */}
        <div className="gap-4 flex list-none items-center">
          <li>
            <Link to="/login" className="hover:text-amber-300 transition">
              <button className="relative flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 px-5 h-10 font-bold text-lg text-white shadow-lg transition hover:scale-105 cursor-pointer">
                Login
              </button>
            </Link>
          </li>
          <li>
            <Link to="/sign-in" className="hover:text-amber-300 transition">
              <button className="relative flex items-center gap-2 rounded-xl bg-amber-900 hover:bg-amber-800 px-5 h-10 font-bold text-lg text-white shadow-lg transition hover:scale-105 cursor-pointer">
                Sign-in
              </button>
            </Link>
          </li>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-4 py-3 flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-black text-white tracking-tight">
            Shop Online
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/login">
              <button className="rounded-xl bg-amber-500 hover:bg-amber-400 px-3 py-1.5 text-xs font-bold text-white shadow-sm transition">
                Login
              </button>
            </Link>
            <Link to="/sign-in">
              <button className="rounded-xl bg-amber-900 hover:bg-amber-800 px-3 py-1.5 text-xs font-bold text-white shadow-sm transition">
                Sign-in
              </button>
            </Link>
          </div>
        </div>

        {/* <div className="relative w-full flex items-center gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              className="w-full bg-amber-900/60 border border-amber-400/30 rounded-xl h-9 outline-none pl-9 pr-3 text-sm text-white placeholder-amber-200"
              placeholder="Search Here..."
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-xs" />
          </div>
          <button className="rounded-xl bg-amber-500 px-3.5 h-9 font-bold text-xs text-white shadow-md">
            Search
          </button>
        </div> */}
      </div>
    </header>
  );
}

export default Navbar;


