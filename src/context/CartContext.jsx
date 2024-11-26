import { createContext, useContext, useState } from 'react'
import { AuthContext } from './AuthContext'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const { user } = useContext(AuthContext)
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        if (!user) alert('⚠ Debe iniciar sesión para poder agregar productos al carrito 🛒')
        else setCart([...cart, product])
    }
    const clearCart = () => setCart([])
    const totalPrice = cart.reduce((sum, prod) => sum + prod.price, 0)

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, totalPrice }}>
            { children }
        </CartContext.Provider>
    )
}