import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function CartDetails () {
  const { cart, removeFromCart, totalPrice, clearCart } = useContext(CartContext)

  return (
    <div>
      <h3>Tu carrito</h3>
      {cart.length === 0
        ? (
          <p>El carrito esta vacio</p>
          )
        : (
          <>
            <ul>
              {cart.map(prod =>
                <li key={prod.id}> {prod.name} - ${prod.price}
                  <button onClick={() => removeFromCart(prod.id)} style={{ marginLeft: '10px' }}>🗑</button>
                </li>
              )}
            </ul>
            <p>Total: $ {totalPrice}</p>
            <button style={{ backgroundColor: 'red' }} onClick={clearCart}>
              Vaciar Carrito
            </button>
          </>
          )}
    </div>
  )
}
