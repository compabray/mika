import { useState, useEffect} from "react";
import axios from "axios";
import fruitImg from "../assets/fruitImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";


function FruitEditor({id, fruit}) {
    const [price, setPrice] = useState(fruit.price);
    const [oldPrice, setOldPrice] = useState(fruit.oldPrice);
    const [offer, setOffer] = useState(fruit.offer);
    const [state, setState] = useState(fruit.state);

    useEffect(() => {
        setPrice(fruit.price);
        setOldPrice(fruit.oldPrice);
        setOffer(fruit.offer);
        setState(fruit.state);
    }, [id, fruit]);

    return(
        <div className="w-1/4 h-[70vh] bg-gray-200 p-2">
            {id === null ? (
                <div className="">
                    <h3 className="text-5xl text-center mt-8 p-4 font-semibold text-gray-700">Edita un producto</h3>
                    <p className="text-lg text-center p-4 text-gray-500">Para poder editar un producto, debes seleccionarlo haciendo click sobre el.</p>

                    <FontAwesomeIcon icon={faUserPen} className="text-8xl w-full text-center text-gray-400 mt-8"/>
                </div>
            ) : (
                <div className="">
                    <img className="w-3/5 mt-4 m-auto" src={fruitImg[fruit.name]} alt={fruit.name}/>
                    <h3 className="text-3xl text-center font-semibold text-gray-700">{fruit.name.charAt(0).toUpperCase() + fruit.name.slice(1).toLowerCase()}</h3>
                    <label className="w-full text-gray-500">Precio:</label>
                    <div className="w-2/5">
                        <span className="w-1/12 mr-2">$</span>
                        <input type="text" onChange={(e) => setPrice(e.target.value)} className="w-8/12 bg-gray-200 px-1 border border-transparent border-b-blue-500" placeholder={fruit.price} value={price} />
                    </div> 
                    <h3 className="w-full text-gray-500 mt-8">Precio Anterior:</h3>
                    <div className="w-2/5"> 
                        <span className="w-1/12 mr-2">$</span>
                        <input type="text" onChange={(e) => setOldPrice(e.target.value)} className="w-8/12 bg-gray-200 px-1 border border-transparent border-b-blue-500" placeholder={fruit.oldPrice ? fruit.oldPrice : "-"} value={oldPrice} />
                    </div> 
                </div>
            )}
        </div>
    )
}

export default FruitEditor;