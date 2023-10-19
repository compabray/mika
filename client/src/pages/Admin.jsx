import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature, faCloudSun } from "@fortawesome/free-solid-svg-icons";

import setAuthHeader from "../utils/setAuthHeader";

function Admin () {

    const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token === null || token === undefined) {
           navigate('/login')
        }
        else if (token){
    
            const checkToken = async () => {
                try {
                    const res = await axios.post('http://localhost:5000/api/admin/checkToken', {
                        token: token
                    });
            
                    if (res.data.state === false) {
                        navigate('/login');
                    } else if (res.data.state === true) {
                        setAuthHeader(token);
                    }
                } catch (error) {
                    console.error("An error occurred:", error);
                    // Handle the error as needed
                }
            };
        checkToken()

        }
    }, [navigate])


    return (
        <div className="">
            <h1 className="w-full text-center text-5xl text-blue-700 font-semibold">Panel de administración</h1>
            <h2 className="w-full text-center text-lg text-gray-500 mt-5">Aquí que están todas tus herramientas como administrador, de esta forma podras modificar el contenido de tu página!</h2>

            <div className="mt-16 w-3/4 m-auto flex justify-evenly flex-wrap">
                <div className="w-1/5 flex flex-col flex-wrap justify-center border rounded-lg">
                    <FontAwesomeIcon icon={faFileSignature} className=" py-5 text-center text-7xl ml-5 text-blue-700"/>
                    <h3 className="text-center py-4 text-xl text-gray-700">Frutas y verduras del catalogo</h3>
                    <Link to="/admin/catalogo" className="w-full bg-blue-700 text-white text-center py-3 rounded-b-lg hover:bg-blue-800">Editar el catalogo</Link>
                </div>
                <div className="w-1/5 flex flex-col flex-wrap justify-center border rounded-lg">
                    <FontAwesomeIcon icon={faCloudSun} className=" py-5 text-center text-7xl ml-5 text-blue-700"/>
                    <h3 className="text-center py-4 text-xl text-gray-700">Frutas y verduras de estacion</h3>
                    <Link to="/admin/productos-estacion" className="w-full bg-blue-700 text-white text-center py-3 rounded-b-lg hover:bg-blue-800">Editar productos de estacion</Link>
                </div>

            </div>
        </div>
    )

}

export default Admin;
