import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-amber-50/40">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-200">
        <div className="text-center mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-amber-600 bg-amber-100/60 px-3 py-1 rounded-full">
            Welcome Back
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">
            Account Login
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Access your orders, cart, and repair service tickets
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
              Username
            </label>
            <input
              type="text"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 outline-hidden transition"
              placeholder="name"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 outline-hidden transition"
              placeholder="email"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 outline-hidden transition"
              placeholder="password"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 text-base shadow-lg transition hover:scale-[1.01] active:scale-95 cursor-pointer mt-2"
          >
            Sign In to Account
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-500">
          Don't have an account?{" "}
          <Link to="/sign-in" className="font-bold text-amber-600 hover:underline">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

