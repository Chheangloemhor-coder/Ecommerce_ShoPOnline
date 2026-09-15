import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import ShoppingCart from '../../pages/ShoppingCart';

function Second_Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive
      ? 'text-amber-400 font-bold underline underline-offset-8'
      : 'text-white hover:text-amber-300 hover:underline transition';

  const mobileNavClass = ({ isActive }) =>
    isActive
      ? 'text-amber-400 font-bold bg-amber-900/40 px-3 py-2 rounded-xl'
      : 'text-stone-200 hover:text-white px-3 py-2 rounded-xl transition';

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/service', label: 'Service' },
    { to: '/about', label: 'About Us' },
  ];

  return (
    <nav className="bg-linear-to-r from-amber-950 via-stone-900 to-amber-950 px-6 py-3 border-t border-amber-900/40 shadow-inner w-full">

      <div className="flex justify-between items-center w-full">

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-amber-400 hover:text-amber-300 p-2 rounded-xl bg-stone-800/80 border border-amber-800/40 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>

          <span className="text-xs font-bold text-stone-300 uppercase tracking-wider">
            Menu
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 text-2xl font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={navClass}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Shopping Cart */}
        <div className="relative">
          <ShoppingCart />
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-3 pb-2 border-t border-amber-900/40 mt-2 flex flex-col gap-1 text-base font-medium">

          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={mobileNavClass}
            >
              {link.label}
            </NavLink>
          ))}

        </div>
      )}
    </nav>
  );
}

export default Second_Navbar;