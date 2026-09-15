import { createContext, useContext, useState } from "react";
import { ProductData } from "../data/ProductData";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(ProductData);
  const [selectBrand, setSelectBrand] = useState("All");
  const [selectCategory, setSelectCategory] = useState("All");

  const filterProduct = product.filter((item) => {
    const brandMatch =
      !selectBrand ||
      selectBrand === "All" ||
      item.brand?.toLowerCase() === selectBrand.toLowerCase();

    const categoryMatch =
      !selectCategory ||
      selectCategory === "All" ||
      item.category?.toLowerCase() === selectCategory.toLowerCase();

    return brandMatch && categoryMatch;
  });

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        selectBrand,
        setSelectBrand,
        selectCategory,
        setSelectCategory,
        filterProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);