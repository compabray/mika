import { Route, Routes, Navigate } from "react-router-dom"

import Navbar from "./components/Navbar";

import Home from "./pages/Home"

import Login from "./pages/Login"
import Admin from "./pages/Admin"

import Catalogo from "./pages/Catalogo";
import ProductosEstacionales from "./pages/ProductosEstacion";
import AdminCat from "./pages/AdminCat";
import AdminSF from "./pages/AdminSF";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <Navbar/>

      <div className='flex-grow mt-24 p-2'>
        <Routes>
          {/* Rutas publicas */}
          <Route path='/' element={<Home/>}/>
          <Route path='/catalogo' element={<Catalogo/>}/>
          <Route path='/productos-estacionales' element={<ProductosEstacionales/>}/>

          {/* Rutas privadas */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/admin/catalogo' element={<AdminCat/>}/>
          <Route path='/admin/productos-estacion' element={<AdminSF/>}/>

          {/* Ruta por defecto */}

          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
        </div>
    </div>
  );
}

export default App;
