import { useState } from 'react'

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto)
  }

  return (
    <nav className="bg-indigo-600 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo "Mi App" */}
        <div className="text-xl font-bold">Mi navbar</div>

        {/* Enlaces para pantallas grandes */}
        <div className="hidden sm:flex gap-x-6">
          <a href="#" className="hover:text-gray-200 hover:underline">
            Inicio
          </a>
          <a href="#" className="hover:text-gray-200 hover:underline">
            Servicios
          </a>
          <a href="#" className="hover:text-gray-200 hover:underline">
            Contacto
          </a>
        </div>

        {/* Botón hamburguesa para móvil */}
        <button onClick={toggleMenu} className="sm:hidden text-2xl">
          {menuAbierto ? '✕' : '☰'}
        </button>
      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <div className="sm:hidden mt-4">
          <a
            href="#"
            className="block py-2 hover:text-gray-200 hover:underline"
          >
            Inicio
          </a>
          <a
            href="#"
            className="block py-2 hover:text-gray-200 hover:underline"
          >
            Servicios
          </a>
          <a
            href="#"
            className="block py-2 hover:text-gray-200 hover:underline"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
