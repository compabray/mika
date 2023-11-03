import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

import frutas from '../assets/frutas-juntas.jpg';


function Contacto(){

    return(
        <>
            <div className="h-[60vh] -translate-y-28 bg-cover brightness-50" style={{ backgroundImage: `url(${frutas})` }}></div>
            <div className="absolute translate-x-full -translate-y-[85%] w-1/3 bg-gray-100 pt-8 pb-16 border "> 

            <h1 className="w-full text-2xl lg:text-4xl font-bold text-center mt-8">Contactanos!</h1>

                <div className="w-full p-8">

                    <div className="flex items-center mt-4">
                        <FontAwesomeIcon icon={faMapLocationDot} size="3x" className="w-12 text-gray-200 mr-4 p-3 bg-blue-800 rounded-full" />
                        <div className="text-lg">Av. Antonio Lussich, entre Juan Etchurry y Estanislao González</div>
                    </div>
                    <div className="flex items-center mt-8">
                        <FontAwesomeIcon icon={faWhatsapp} size="3x" className="w-12 text-gray-200 mr-4 p-3  bg-blue-800 rounded-full" />
                        <div className="text-xl font-medium">+598 099 999 999 </div>
                    </div>
                    <h2 className="w-full text-2xl lg:text-4xl font-bold text-center mt-8">Redes Sociales:</h2>
                    <div className="flex flex-wrap justify-around">
                    <a href="https://instagram.com/" target="_blank" className="flex justify-center items-center mt-8 w-2/5 border rounded-3xl border-blue-800 py-2 px-4 text-blue-800 hover:text-gray-100 hover:bg-blue-600 duration-300" >
                        <FontAwesomeIcon icon={faInstagram} size="3x" className="mr-4" />
                        <div className="text-xl font-medium">Instagram</div>
                    </a>
                    <a href="https://facebook.com/" target="_blank" className="flex justify-center items-center mt-8 w-2/5 border rounded-3xl border-blue-800 py-2 px-4 text-blue-800 hover:text-gray-100 hover:bg-blue-600 duration-300" >
                        <FontAwesomeIcon icon={faFacebook} size="3x" className="mr-4" />
                        <div className="text-xl font-medium">Facebook</div>
                    </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contacto;