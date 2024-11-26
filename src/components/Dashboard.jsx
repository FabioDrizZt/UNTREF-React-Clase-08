import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import AdminPanel from "./AdminPanel"
import CartDetails from "./CartDetails"
import ProductList from "./ProductList"

export default function Dashboard() {
  const { user, login, logout } = useContext(AuthContext)

  const handleLogin = () => login('Fabio', 'admin')
  const handleLogout = () => logout()

  return (
    <div>
        {!user ? (
            <>
              <h2>Bienvenido, invitado</h2>
              <button onClick={handleLogin}> Iniciar Sesión </button>
            </>
        ) : (
            <>
              <h2> Hola de nuevo, {user.username } 👋</h2>
              <ProductList />
              <CartDetails />
              <p> Tu rol es: {user.role}</p>
              <button onClick={handleLogout}> Cerrar Sesión </button>
              {user.role === 'admin' && <AdminPanel/> }
            </>
        )

        }
    </div>
  )
}
