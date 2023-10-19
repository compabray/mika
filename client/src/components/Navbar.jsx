import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from 'react-router-dom';


function Navbar() {

    const location = useLocation();
    const [click, setClick] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        setActiveSection(location.pathname);
    }, [location])


    const handleClick = () => setClick(!click);

  return (
    <header>
        <nav className="fixed z-50 bg-gray-50 top-0 w-full flex justify-between items-center h-16 border border-transparent border-b-gray-200 text-black shadow-sm" role="navigation">
            <Link to="/" className='flex align-middle'>
                <h2 className='text-xl lg:text-2xl text-blue-500 font-semibold h-full ml-3 '>SIN FRONTERAS</h2>
            </Link> 
            
            <div className="px-4 cursor-pointer absolute top-4 right-4 z-40 text-yellow-600 text-2xl md:hidden" onClick={handleClick}>
                {click ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>}
            </div>
            <div className={`flex flex-col absolute top-0 right-0 left-0 h-screen bg-items-center justify-center text-center bg-gray-50 text-xl md:hidden ${click ? 'nav' : 'navB'}`}>
                <a href="/" className={`p-4 hover:text-blue-500 duration-200 ${activeSection === "/" ? "text-blue-500" : null }`}>Inicio</a>
                <a href="/catalogo" className={`p-4 hover:text-blue-500 duration-200 ${activeSection === "/catalogo" ? "text-blue-500" : null }`}>Catalogo</a>
                <a href="/productos-estacionales" className={`p-4 hover:text-blue-500 duration-200 ${activeSection === "/productos-estacionales" ? "text-blue-500" : null }`}>Productos estacionales</a>
                <a href="/contacto" className={`p-4 hover:text-blue-500 duration-200 ${activeSection === "/contacto" ? "text-blue-500" : null }`}>Contacto</a>
            </div>
            <div className="pr-8 md:block hidden">
                <a href="/" className={`p-4 hover:text-blue-500 duration-200 ${activeSection === "/" ? "text-blue-500" : null }`}>Inicio</a>
                <a href="/catalogo" className={`p-4 hover:text-blue-500 duration-200 ${activeSection === "/catalogo" ? "text-blue-500" : null }`}>Catalogo</a>
                <a href="/productos-estacionales" className={`p-4 hover:text-blue-500 duration-200 ${activeSection === "/productos-estacionales" ? "text-blue-500" : null }`}>Productos estacionales</a>
                <a href="/contacto" className={`p-4 hover:text-blue-500 duration-200 ${activeSection === "/contacto" ? "text-blue-500" : null }`}>Contacto</a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;

  

