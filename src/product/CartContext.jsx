import React, { createContext, useState } from 'react'

export const Cart = createContext()

function CartContext({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <Cart.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </Cart.Provider>
  )
}

export default CartContext
