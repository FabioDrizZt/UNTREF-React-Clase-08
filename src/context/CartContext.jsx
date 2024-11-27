import { createContext, useContext, useState } from 'react'
import { AuthContext } from './AuthContext'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext)
  const [cart, setCart] = useState(() => {
    // Restauramos el carrito del local Storage
    const storedCart = window.localStorage.getItem('cart')
    return storedCart ? JSON.parse(storedCart) : []
  })

  const addToCart = (product) => {
    if (!user) window.alert('⚠ Debe iniciar sesión para poder agregar productos al carrito 🛒')
    else {
      // Verificar si existe el producto
      // Si existe entonces sumarle al atributo cantidad +1
      // Si no existe el producto, lo agrego pero {...product, quantity: 1}
      const updatedCart = [...cart, product]
      setCart(updatedCart)
      // Guardar en el Local Storage
      window.localStorage.setItem('cart', JSON.stringify(updatedCart))
    }
  }
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(prod => prod.id !== productId)
    setCart(updatedCart)
    // Guardar en el Local Storage
    window.localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const clearCart = () => {
    // Vaciar el Local Storage
    setCart([])
    window.localStorage.removeItem('cart')
  }

  const totalPrice = cart.reduce((sum, prod) => sum + prod.price, 0)

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}
