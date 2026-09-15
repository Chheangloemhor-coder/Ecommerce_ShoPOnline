import React, { useState } from "react";
import { ProductData } from "../data/ProductData";
import { useProduct } from "../context/ProductContext";
import ProductCard from "../product/ProductCard";
import { FaSearch } from "react-icons/fa";

function Shoppage() {
  const { product: contextProducts } = useProduct();
  const products = contextProducts || ProductData;

  const [selectbrand, setSelectBrand] = useState("");
  const [selectcategory, setSelectCategory] = useState("");

  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const filterproduct = products.filter((item) => {
    const Brand =
      selectbrand === "" ||
      item.brand?.toLowerCase() === selectbrand.toLowerCase();

    const Category =
      selectcategory === "" ||
      item.category?.toLowerCase() === selectcategory.toLowerCase();

    const Search =
      item.name?.toLowerCase().includes(search.toLowerCase());

    return Brand && Category && Search;
  });

  const handleSearch = () => {
    setSearch(searchValue);
  };

  return (
    <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6">

      {/* BANNER */}
      <section className="relative overflow-hidden rounded-3xl mb-8 sm:mb-10 bg-linear-to-r from-amber-200 to-orange-300 border border-amber-100 shadow-sm">
        <div className="min-h-70px sm:min-h-80px py-8 sm:py-12 flex items-center px-6 sm:px-10 lg:px-14">

          <div className="relative z-10 max-w-xl">

            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-orange-600 mb-2 sm:mb-3">
              Our Collection
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.1]">
              Upgrade Your
              <br />
              <span className="text-amber-600">
                Digital Lifestyle.
              </span>
            </h1>

            <p className="mt-3 sm:mt-5 text-sm sm:text-base text-gray-600 max-w-md leading-relaxed">
              Explore premium laptops, smartphones, and accessories from trusted brands with official warranty.
            </p>

            <a
              href="#products"
              className="inline-flex items-center mt-5 sm:mt-6 bg-gray-900 hover:bg-gray-800 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm transition duration-300 hover:-translate-y-0.5"
            >
              Explore Products
              <span className="ml-2">→</span>
            </a>

          </div>

        </div>
      </section>

      {/* FILTER */}
      <section
        id="products"
        className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-3 mb-8"
      >

        {/* BRAND */}
        <select
          className="border border-gray-300 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer text-sm sm:text-base"
          value={selectbrand}
          onChange={(e) => setSelectBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          <option value="ASUS">ASUS</option>
          <option value="Apple">Apple</option>
          <option value="MSI">MSI</option>
          <option value="LENOVO">LENOVO</option>
          <option value="DELL">DELL</option>
        </select>

        {/* CATEGORY */}
        <select
          className="border border-gray-300 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer text-sm sm:text-base"
          value={selectcategory}
          onChange={(e) => setSelectCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Laptop">Laptop</option>
          <option value="Phone">Phone</option>
          <option value="Watch">Watch</option>
        </select>

        {/* SEARCH INPUT */}
        <div className="relative flex-1 sm:col-span-2 lg:col-span-1">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="w-full bg-amber-950/80 border border-amber-400 rounded-xl h-12 outline-none pl-12 pr-4 text-sm sm:text-base text-white placeholder-amber-200 focus:ring-2 focus:ring-amber-400"
            placeholder="Search products, models, specifications..."
          />
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-200" />
        </div>

        {/* SEARCH BUTTON */}
        <button
          type="button"
          onClick={handleSearch}
          className="bg-linear-to-r from-amber-500 to-orange-500 flex items-center justify-center gap-2 rounded-xl hover:from-amber-400 hover:to-orange-400 px-6 h-12 font-bold text-base text-white shadow-lg transition hover:scale-105 active:scale-95 cursor-pointer sm:col-span-2 lg:col-span-1"
        >
          <FaSearch />
          Search
        </button>

      </section>


      {/* PRODUCT COUNT */}
      <div className="flex items-center justify-between mb-5">

        <h2 className="text-2xl font-extrabold text-gray-900">
          Our Products
        </h2>

        <span className="text-sm text-gray-500 font-medium">
          {filterproduct.length} Products
        </span>

      </div>


      {/* PRODUCTS */}
      {filterproduct.length > 0 ? (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-16">

          {filterproduct.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}

        </div>

      ) : (

        <div className="text-center py-20 bg-gray-100 rounded-2xl mb-16">

          <h3 className="text-xl font-bold text-gray-700">
            No products found
          </h3>

          <p className="text-gray-500 mt-2">
            Try changing your filters or search.
          </p>

        </div>

      )}

    </div>
  );
}

export default Shoppage;