import { Route, Routes, Navigate } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Catalogo from "./pages/Catalogo";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className='flex-grow mt-24'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/catalogo' element={<Catalogo/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
        </div>
    </div>
  );
}

export default App;
