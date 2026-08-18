import React from 'react'

function Footer() {
  return (
    <div>
      <div className='bg-amber-500 p-2 flex justify-between items-center'>
        <h1  className='text-3xl font-bold text-white items-center'>Shop Online</h1>
      <div>
        <h1 className='text-2xl text-white'>Product</h1>
        <p>. ASUS</p>
        <p>. MSI</p>
        <p>. MACBOOK</p>
      </div>
      <div>
        <h1 className='text-2xl text-white'>Service</h1>
        <p>. fix Computer</p>
        <p>. repair computer</p>
        <p>. sell computer</p>
        <p>. change computer</p>
      </div>
      <div>
        <h1 className='text-2xl text-white'>About-Us</h1>
        <p>. experaince (20years+)</p>
        <p>. customer (2500K)</p>
        <p>. be kind to customer</p>
        <p>. The best service</p>
      </div>
      <div>
        <p className='text-white'>More Information!...</p>
      <div className='flex items-center gap-2'>
        <input type="text" className='bg-amber-600 text-1xl  text-white rounded-2xl outline-0 ps-4 p-2' placeholder='🔍Search Here...'/>
        <button className='bg-orange-600 rounded-2xl h-10 w-30 text-2xl text-white hover:bg-yellow-500  cursor-pointer'>Search</button>
      </div>
      </div>
      </div>

    </div>
  )
}

export default Footer
