import { useState, useEffect } from "react";
import axios from "axios";
import fruitImg from "../assets/fruitImg";
import FruitEditor from "../components/FruitEdior";

function AdminCat () {

    const [fruit, setFruit] = useState([]);
    const [sFruit, setSFruit] = useState([]);
    const [activate, setActivate] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/fruit/all')
            .then(res => {
                setFruit(res.data);
            })
            .catch(err => console.log(err))

        axios.get('http://localhost:5000/api/sfruit/all')
            .then(res => {
                setSFruit(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const concatAndSort = () => {
        const combinedFruits = [...fruit, ...sFruit];
        combinedFruits.sort((a, b) => {
            if (a.offer && !b.offer) {
                return -1;
            } else if (!a.offer && b.offer) {
                return 1;
            } else {
                return 0;
            }
        });
        return combinedFruits;
    }

    const sortedFruits = concatAndSort();

    const handleFruitClick = (id) => {
        setActivate(id);
    }

    return (

        <div className='w-full'> 
            <h1 className="w-full text-center text-4xl font-bold text-gray-900">Modifica las frutas y verduras del catalogo</h1>
            <div className="w-11/12 m-auto mt-8 flex flex-wrap justify-around">
                <div className="w-2/3 flex flex-wrap bg-gray-100">
                    {sortedFruits.map((f, index) => (
                        <div className={`relative w-1/6 m-2 cursor-pointer ${activate === f._id && "border-2 p-1 rounded-md border-blue-800"}`} key={index} onClick={() => handleFruitClick(f._id)}>
                            {f.offer && <div className="bg-blue-800  text-white text-xs font-bold uppercase absolute top-0 left-0 px-2 py-1">Oferta</div>}
                            <img src={fruitImg[f.name]} alt={f.name}/>
                            <h3 className='mt-2 text-xl text-center text-gray-800 font-semibold'>{f.name.charAt(0).toUpperCase() + f.name.slice(1).toLowerCase()}</h3>
                            <p className='text-lg font-normal text-gray-700 text-center'>
                                {f.offer && f.oldPrice ? <><span className='text-gray-400 line-through'>${f.oldPrice}</span><span className='ml-3 text-gray-900 underline font-medium'>${f.price}</span></> : `$${f.price}`}
                            </p>
                        </div>
                    ))}
                </div>
                
                <FruitEditor id={activate} fruit={sortedFruits.find(f => f._id === activate)}/>

            </div>
        </div>

    )

}

export default AdminCat;