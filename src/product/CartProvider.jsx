import React, { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // ==========================================
    // ADD TO CART
    // ==========================================

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? {
                              ...item,
                              quantity:
                                  item.quantity +
                                  Number(product.quantity || 1),
                          }
                        : item
                );
            }

            return [
                ...prevCart,
                {
                    ...product,
                    quantity: Number(product.quantity || 1),
                },
            ];
        });
    };

    // ==========================================
    // INCREASE
    // ==========================================

    const increaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                      }
                    : item
            )
        );
    };

    // ==========================================
    // DECREASE
    // ==========================================

    const decreaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: Math.max(
                              1,
                              item.quantity - 1
                          ),
                      }
                    : item
            )
        );
    };

    // ==========================================
    // REMOVE
    // ==========================================

    const removeFromCart = (id) => {
        setCart((prevCart) =>
            prevCart.filter((item) => item.id !== id)
        );
    };

    // ==========================================
    // CLEAR CART
    // ==========================================

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;