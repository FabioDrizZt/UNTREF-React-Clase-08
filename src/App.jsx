import Dashboard from './components/Dashboard'
import { ThemeContext } from './context/ThemeContext'
import { useContext } from 'react'

function App() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)
  
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? '#333' : '#FFF',
        color: isDarkMode ? '#FFF' : '#000',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
     <h1> Mi App con {isDarkMode ? 'Modo Oscuro 🌙' : 'Modo Claro ☀'} </h1>
     <button
     onClick={toggleDarkMode}
     > Cambiar Tema 
     </button>

     <Dashboard />
    </div>
  )
}

export default App
