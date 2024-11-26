import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const products = [
    { id: 1, name: '📱 Smartphone', price: 300 },
    { id: 2, name: '💻 Laptop', price: 800 },
    { id: 3, name: '🎧 Headphones', price: 100 }
  ]

export default function ProductList() {
    const {addToCart} = useContext(CartContext)

  return (
    <>
        <h3>Productos Disponibles</h3>
        <ul>
            {products.map(prod=>
                <li key={prod.id}> {prod.name} - ${prod.price}
                    <button onClick={() => addToCart(prod)} style={{ marginLeft:'10px'}}>🛒</button>
                </li>
            )}
        </ul>
    </>
  )
}
