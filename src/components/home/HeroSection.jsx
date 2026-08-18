import React from "react";


function HeroSection() {
  return (
    <div className="w-full bg-amber-300 relative">
      <div className="px-7 py-10">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1 gap-10">
              <div>
                <h1 className="text-5xl text-orange-900 font-extrabold"><u>New Collection</u></h1>
                <h1 className="text-4xl font-medium text-white first-letter:text-6xl">Best <i className="text-red-500">ECOMMERCE</i>{ " " }Shop in{" "} <b className="text-green-500">Cambodia</b></h1>
                <h1 className="text-3xl text-white font-light">
                  Upgrade Your Sigital Lifestyle.
                </h1>
                <h1>
                  Discovery the latest laptops, phones, accessories, and computer products at great prices.
                </h1>
                <div className="flex gap-3 mt-2">
                  <button className="bg-amber-500 text-white text-2xl rounded-3xl p-1">Shop Now →</button>
                  <button className="bg-amber-500 text-white text-2xl rounded-3xl p-1">About us →</button>
                </div>
                <div className="">
                  <div>
                    <h1>Rating Star</h1>
                    <p className="text-amber-300"><i></i></p>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default HeroSection;