import React from 'react'

function Navbar() {
  return (
    <div className='bg-amber-500 h-15 justify-between flex items-center p-5'>
      <div className='text-3xl font-bold text-center text-white'>
        <h1>Shop Online</h1>
      </div>
      <div className='text-center gap-2 flex'>
        <input type="text"  className='w-xl bg-amber-800 ms-2 rounded-2xl h-10 outline-0 ps-3 text-2xl text-white' placeholder='🔍Search Here...'/>
        <button className='bg-orange-600 rounded-2xl h-10 w-30 text-2xl text-white hover:bg-yellow-500  cursor-pointer'>Search</button>
      </div>
    </div>

  )
}

export default Navbar
