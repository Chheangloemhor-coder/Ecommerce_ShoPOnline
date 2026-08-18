import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer' 
import {Outlet} from 'react-router-dom'
import Second_Navbar from './Second_Navbar'

function Mainlayout() {
  return (
    <div>
      <Navbar/>
      <Second_Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Mainlayout
