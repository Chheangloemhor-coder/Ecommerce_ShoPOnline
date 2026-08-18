import React, { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { useParams } from 'react-router-dom'
import { ProductData } from '../data/ProductData'


function ProductDetail() {
  const {id} = useParams();
  const product = ProductData.find((item)=>
  item.id === Number(id));
  
  const [seletimage, setselectimage] = useState(product.imgs[0]);
  return (
    <div className='mx-auto max-w-7xl mt-5 bg-amber-300 rounded-3xl mb-2'>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-2'>
        <div>
          <div className='overflow-hidden rounded-3xl border-0 h-100'>
              <img src={seletimage} alt="" className='overflow-hidden w-full'/>
          </div>
          <div className='grid grid-cols-4 gap-2 mt-2 p-2'>
            {
              product.imgs.map((image, index) =>(
                <button
                key={index}
                  onClick={()=> setselectimage(image)}
                  className = {`overflow-hidden rounded-xl border-2 ${
                    seletimage === image
                    ? "border-blue-500"
                    : "border-gray-200"
                  }`}>
                  
                
                  <img src={image} alt={`${product.name} ${index + 1}`}
                  className='h-25 w-full object-cover' />
                  
                </button>
              ))
            }
          </div>
        </div>
          <div className='text-4xl p-5'>
            <h1>ASUS ROG Strix G16</h1>
            <p className='text-xl text-gray-700'>Brand: ASUS</p>            
            <p className='text-xl text-red-600 font-mono'>Price: $1,999</p> 
            <p className='text-xs'>The ASUS ROG Strix G16 is a high-performance gaming laptop designed for gamers, creators, and demanding everyday use. It combines powerful Intel/AMD processors with NVIDIA GeForce RTX graphics, a fast high-refresh-rate display, and an aggressive ROG gaming design. Its advanced cooling system helps maintain performance during long gaming sessions, while features such as a spacious keyboard, customizable RGB lighting, and fast storage provide a responsive overall experience.</p> 
            <button className='bg-amber-500 rounded-2xl text-xl w-30 text-white'>Fast Sale</button> <br />
            <button className='bg-amber-500 rounded-2xl w-full text-1xl mt-20 text-white'>Fast Sale</button>          
          </div>
      </div>
    </div>
  )
}

export default ProductDetail
