import React from 'react'

function Second_Navbar() {
  return (
    <div className='bg-amber-950 p-3'>
      <ul className='flex gap-10 text-3xl text-white cursor-pointer'>
        <a href="/Home"><li className='hover:underline hover:text-amber-300'>Home</li></a>
        <a href="/shop"><li className='hover:underline hover:text-amber-300'>Shop</li></a>
        <li className='hover:underline hover:text-amber-300'>Service</li>
        <li className='hover:underline hover:text-amber-300'>About Us</li>
      </ul>
    </div>
  )
}

export default Second_Navbar
