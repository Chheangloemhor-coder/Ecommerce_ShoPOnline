import React, { useState } from 'react'
import { ProductData } from '../data/ProductData'
import ProductCard from '../product/ProductCard';

function Shoppage() {
    const [product, setproduct] = useState(ProductData);
    const [selectbrand, setselectbrand] = useState("");
    const [selectgategory, setselectgategory] = useState("");

    const filterproduct = product.filter((item) => {
        const Brand = selectbrand === "" || item.brand === selectbrand;
        const Category = selectgategory === "" || item.category === selectgategory;

        return Brand && Category;
    })
    return (
        <div className='mt-10 m-auto w-7xl'>

                <select className='border' value={selectbrand} onChange={(e) => setselectbrand(e.target.value)}>
                    <option value="">ALL</option>
                    <option value="ASUS">ASUS</option>
                    <option value="Apple">Apple</option>
                </select>
                <select className='border ms-2' value={selectgategory} onChange={(e) => setselectgategory(e.target.value)}>
                    <option value="">ALL Category</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Smartphone">Smartphone</option>
                </select>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap5 gap-5'>
                {
                    filterproduct.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))
                }

            </div>

        </div>
    )
}

export default Shoppage
