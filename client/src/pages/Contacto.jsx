import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

import frutas from '../assets/frutas-juntas.jpg';


function Contacto(){

    return(
        <>
            <div className="h-[60vh] -translate-y-28 bg-cover brightness-50" style={{ backgroundImage: `url(${frutas})` }}></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-11/12 sm:w-3/4 lg:w-3/5 xl:w-2/5 bg-gray-50 pt-2 lg:pt-8 pb-8 lg:pb-16 border border-gray-200 "> 

            <h1 className="w-full text-2xl lg:text-3xl font-bold text-center mt-8">Contactanos!</h1>

                <div className="w-full p-4 lg:p-8">

                    <div className="flex items-center mt-4">
                        <FontAwesomeIcon icon={faMapLocationDot} className="text-3xl lg:text-5xl w-8 lg:w-12 text-gray-200 mr-4 p-3 bg-blue-800 rounded-full" />
                        <div className="text-md lg:text-lg">Av. Antonio Lussich, entre Juan Etchurry y Estanislao González</div>
                    </div>
                    <div className="flex items-center mt-8">
                        <FontAwesomeIcon icon={faWhatsapp} className="w-8 lg:w-12 text-3xl lg:text-5xl text-gray-200 mr-4 p-3 bg-blue-800 rounded-full" />
                        <div className="text-lg lg:text-xl font-medium">+598 099 999 999 </div>
                    </div>
                    <h2 className="w-full text-2xl lg:text-3xl font-bold text-center mt-8">Redes Sociales:</h2>
                    <div className="flex flex-wrap justify-around">
                    <a href="https://instagram.com/" target="_blank" className="flex justify-center items-center mt-4 lg:mt-8 w-3/4 lg:w-2/5 border rounded-3xl border-blue-800 p-4 lg:py-2 lg:px-4 text-blue-800 hover:text-gray-100 hover:bg-blue-600 duration-300" >
                        <FontAwesomeIcon icon={faInstagram} className="text-3xl lg:text-5xl mr-4" />
                        <div className="text-lg lg:text-xl font-medium">Instagram</div>
                    </a>
                    <a href="https://facebook.com/" target="_blank" className="flex justify-center items-center mt-4 lg:mt-8 w-3/4 lg:w-2/5 border rounded-3xl border-blue-800 py-2 px-4 text-blue-800 hover:text-gray-100 hover:bg-blue-600 duration-300" >
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