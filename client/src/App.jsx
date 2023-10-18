import { Route, Routes, Navigate } from "react-router-dom"

import Navbar from "./components/Navbar";

import Home from "./pages/Home"
import Login from "./pages/Login"
import Catalogo from "./pages/Catalogo";
import ProductosEstacionales from "./pages/ProductosEstacion";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <Navbar/>

      <div className='flex-grow mt-24'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/catalogo' element={<Catalogo/>}/>
          <Route path='/productos-estacionales' element={<ProductosEstacionales/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
        </div>
    </div>
  );
}

export default App;
