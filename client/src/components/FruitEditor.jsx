import { useState, useEffect} from "react";
import axios from "axios";
import fruitImg from "../assets/fruitImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";


function FruitEditor({id, fruit, token, setSuccess, success}) {
    const [price, setPrice] = useState(0);
    const [oldPrice, setOldPrice] = useState(0);
    const [offer, setOffer] = useState(false);
    const [state, setState] = useState(null);
    const [cantidad, setCantidad] = useState(0);
// Reset the form when the id changes 
    useEffect(() => {
        if (fruit) {
            setPrice(fruit.price);
            setOldPrice(fruit.oldPrice ? fruit.oldPrice : "");
            setOffer(fruit.offer);
            setState(fruit.state);
            setCantidad(fruit.cantidad ? fruit.cantidad : "");
        }

    }, [id, fruit]);
    
    const handleFormSubmit = (e) => {
        
        e.preventDefault();

        const sFruitData = {
            name: fruit.name,
            price,
            oldPrice,
            offer,
            state,
            cantidad
        }

        const fruitData = {
            name: fruit.name,
            price,
            oldPrice,
            offer,
            cantidad
        }
        
        if(fruit.hasOwnProperty('state')) {
            axios.put("http://localhost:5000/api/sfruit/update/", sFruitData, {
                headers: {
                    'Authorization': token
                }
            })
                .then(res => {

                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 3000)
                })
                .catch(err => console.log(err))
            } else {
                axios.put("http://localhost:5000/api/fruit/update/", fruitData, {
                    headers: {
                        'Authorization': token
                    }
                })
                    .then(res => {

                        setSuccess(true);
                        setTimeout(() => {
                            setSuccess(false);
                        }, 3000)
                    })
                    .catch(err => console.log(err))
                }
    }



    return(
        <div className={`${id === null ? "pb-16 lg:pb-0" : null} w-11/12 sm:w-2/3 h-fit lg:h-full mb-6 lg:mb-0 m-auto rounded-md lg:w-1/3 xl:w-1/4 bg-gray-200 py-5 px-3`}>
            {id === null ? (
                <>
                    <h3 className="text-3xl md:text-5xl text-center mt-8 p-4 font-semibold text-gray-700">Edita un producto</h3>
                    <p className="text-md md:text-lg text-center p-4 text-gray-500">Para poder editar un producto, debes seleccionarlo haciendo click sobre el.</p>

                    <FontAwesomeIcon icon={faUserPen} className="text-8xl lg:text-8xl w-full text-center text-gray-400 mt-8"/>
                </>
            ) : (
                <div className="">
                    <img className="w-3/5 mt-4 m-auto" src={fruitImg[fruit.name]} alt={fruit.name}/>
                    <h3 className="text-2xl xl:text-3xl text-center font-semibold text-gray-700">{fruit.name.charAt(0).toUpperCase() + fruit.name.slice(1).toLowerCase()}</h3>
                    <form className="w-full flex flex-wrap" onSubmit={
                        (e) => handleFormSubmit(e)
                    }>
                    <div className="w-1/2">
                    <h3 className="w-full text-gray-500">Precio:</h3>
                    
                        <span className="w-1/12 mr-2 mt-3">$</span>
                        <input type="text" onChange={(e) => setPrice(e.target.value)} className="mt-3 w-8/12 bg-gray-200 px-1 border border-transparent border-b-blue-500" placeholder={fruit.price} value={price} />

                    <h3 className="w-full text-gray-500 mt-8">Precio Anterior:</h3>

                        <span className="w-1/12 mr-2 mt-3">$</span>
                        <input type="text" onChange={(e) => setOldPrice(e.target.value)} className="mt-3 w-8/12 bg-gray-200 px-1 border border-transparent border-b-blue-500" placeholder={fruit.oldPrice ? fruit.oldPrice : "-"} value={oldPrice} />

                    </div>
                    <div className="w-1/2 flex flex-wrap justify-center">
                    <h3 className="w-full text-gray-500 text-center">¿Es una oferta?</h3>

                    <div className="mt-3 relative w-2/3 m-auto bg-gray-300 rounded-lg border border-gray-500">
                        <div className={`absolute w-1/2 h-full transform duration-100 ${offer === true ? " bg-green-400 rounded-l-lg" : "rounded-r-lg translate-x-full bg-red-500 "}`}></div> 

                        <button type="button" className=" relative w-1/2 z-20" onClick={() => setOffer(true)}>
                            Si
                        </button>
                        <button type="button" className="w-1/2 z-20 relative" onClick={() => setOffer(false)}>
                            No
                        </button>
                    </div>
                    
                    
                    <h3 className="w-full text-gray-500 text-center mt-8">Cantidad:</h3>
                    <input type="text" onChange={(e) => setCantidad(e.target.value)} className="mt-3 w-10/12 bg-gray-200 px-1 border border-transparent border-b-blue-500" placeholder={fruit.cantidad ? fruit.cantidad : "1kg?"} value={cantidad} />

                  
                         <div className={`${fruit.hasOwnProperty("state") ? "" : "-z-10"}`}>
                            <h3 className="w-full text-gray-500 mt-8">¿El producto esta activo?</h3>     
                         <div className="mt-3 relative w-2/3 m-auto bg-gray-300 rounded-lg border border-gray-500">
                             <div className={`absolute w-1/2 h-full transform duration-100 ${state === true ? " bg-green-400 rounded-l-lg" : "rounded-r-lg translate-x-full bg-red-500 "}`}></div> 
     
                             <button type="button" className=" relative w-1/2 z-20" onClick={() => setState(true)}>
                                 Si
                             </button>
                             <button type="button" className="w-1/2 z-20 relative" onClick={() => setState(false)}>
                                 No
                             </button>
                         </div></div>
                   
                   
                        </div>
                        
                        <button type="submit" className="w-2/3 mt-8 m-auto bg-blue-800 text-white py-2 rounded-md">{success ? "Guardado!" : "Guardar"}</button>
                    
                     
                      
                    </form>
                    </div>
  
            )}
        </div>
    )
}

export default FruitEditor;