import axios from 'axios';
import { useEffect, useState } from 'react';

import fruitImg from '../assets/fruitImg';

function Catalogo() {

    const [fruit, setFruit] = useState([]);
    const [sFruit, setSFruit] = useState([]);

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

    return (
        <div className='w-full'> 
        
            <h1 className='w-full text-center text-4xl font-bold text-gray-900'>Catalogo de frutas y verduras</h1>
            <h2 className='w-full text-center text-xl text-gray-700 mt-5'>Aquí estan todas las frutas y verduras disponibles en nuestro negocio! </h2>
            <div className='w-2/3 flex flex-wrap justify-evenly m-auto mt-8'>
            {sortedFruits.map((f, index) => (
                <div className={`w-1/6 m-2 rounded-lg p-2 border border-gray-200`} key={index}>
                    <img src={fruitImg[f.name]} alt={f.name} className="rounded-lg"/>
                    <h3 className='mt-2 text-xl text-center text-gray-800 font-semibold'>{f.name.charAt(0).toUpperCase() + f.name.slice(1).toLowerCase()}</h3>
                    <p className='text-semibold text-xl text-gray-500 text-center'>${f.price}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Catalogo;