import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bienvenido a Mi App
        </h1>
        <p className="text-gray-600 text-lg">
          Aquí inicia tu contenido principal.
        </p>
      </div>
    </div>
  );
}

export default App;
