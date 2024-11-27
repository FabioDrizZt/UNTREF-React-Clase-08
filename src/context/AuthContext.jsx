import { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Restaurar del Local Storage
    const storedUser = window.localStorage.getItem('user')
    return storedUser ? JSON.parse(storedUser) : null
  })

  const login = (username, role) => {
    const userData = { username, role }
    setUser(userData)
    // Guardar en el Local Storage
    window.localStorage.setItem('user', JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    // Vaciar el Local Storage
    window.localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
