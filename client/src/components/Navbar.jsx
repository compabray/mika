import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUserGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo_nb.png';

function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();
    const [click, setClick] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token === null || token === undefined) {
           setAdmin(false);
        }
        else if (token){
    
            const checkToken = async () => {
                try {
                    const res = await axios.post('http://localhost:5000/api/admin/checkToken', {
                        token: token
                    });
            
                    if (res.data.state === false) {
                        setAdmin(false);
                    } else if (res.data.state === true) {
                        setAdmin(true);
                    }
                } catch (error) {
                    console.error("An error occurred:", error);
                    // Handle the error as needed
                }
            };
        checkToken()

        }
    }, [admin, location])


    useEffect(() => {
        setActiveSection(location.pathname);
    }, [location])


    const handleClick = () => setClick(!click);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setAdmin(false);
        navigate('/');
    }

    const routeList = <>
                <a href="/" className={`p-4 lg:text-sm xl:text-base hover:text-blue-500 duration-200 ${activeSection === "/" ? "text-blue-500" : null }`}>Inicio</a>
                <a href="/catalogo" className={`p-4 lg:text-sm xl:text-base hover:text-blue-500 duration-200 ${activeSection === "/catalogo" ? "text-blue-500" : null }`}>Catalogo</a>
                <a href="/productos-estacionales" className={`p-4 lg:text-sm xl:text-base hover:text-blue-500 duration-200 ${activeSection === "/productos-estacionales" ? "text-blue-500" : null }`}>Productos estacionales</a>
                <a href="/contacto" className={`p-4 lg:text-sm xl:text-base hover:text-blue-500 duration-200 ${activeSection === "/contacto" ? "text-blue-500" : null }`}>Contacto</a>
                {admin && <a href="/admin" className={`mt-8 lg:text-sm xl:text-base lg:mt-0 xl:ml-16 p-2 hover:text-blue-500 duration-200 ${activeSection === "/admin" ? "text-blue-500" : null }`}> <FontAwesomeIcon icon={faUserGear} className='text-xl text-blue-600'/> Admin</a>}
                {admin && <button className='xl:ml-4 lg:text-sm  xl:text-base p-2 hover:text-blue-500 duration-200' onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} className='text-xl text-blue-700'/> Cerrar sesión</button>}
    </>

  return (
    <header>
        <nav className="fixed z-50 bg-gray-50 top-0 w-full flex justify-between items-center h-24 border border-transparent border-b-gray-200 text-black shadow-sm" role="navigation">
            <Link to="/" className='flex align-middle'>
                <img src={logo} className='h-20 ml-4' alt="" />
            </Link> 

            <div className="px-4 cursor-pointer absolute top-4 right-4 z-40 text-blue-600 text-2xl lg:hidden" onClick={handleClick}>
                {click ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>}
            </div>
            <div className={`flex flex-col absolute top-0 right-0 left-0 h-screen bg-items-center justify-center text-center bg-gray-50 text-xl lg:hidden ${click ? 'nav' : 'navB'}`}>
                {routeList}
            </div>
            <div className="pr-8 lg:block hidden">
                {routeList}
            </div>
        </nav>
    </header>
  )
}

export default Navbar;

  

