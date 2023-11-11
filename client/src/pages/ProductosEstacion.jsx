import axios from 'axios';
import { useEffect, useState } from 'react';
import cantidadTransform from '../utils/cantidadTransform';

import fruitImg from '../assets/fruitImg';

function Catalogo() {

    const [sFruit, setSFruit] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/sfruit/all')
            .then(res => {
                setSFruit(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const concatAndSort = () => {
        const combinedFruits = sFruit.filter(fruit => fruit.state === true);
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
        
            <h1 className='w-full text-center text-2xl lg:text-4xl font-bold text-gray-900'>Productos de estacion</h1>
            <h2 className='w-full text-center text-md lg:text-xl text-gray-700 mt-5'>Aquí estan todos los productos de estacion disponibles en nuestro  negocio! </h2>
            <div className='lg:w-2/3 flex flex-wrap justify-evenly m-auto mt-8'>
                {sortedFruits.map((f, index) => (

                    f.state === true && (
                        <div className={`relative w-2/5 lg:w-1/6 m-2 h-fit`} key={index}>
                        {f.offer && <div className="bg-blue-800  text-white text-xs font-bold uppercase absolute top-0 left-0 px-2 py-1">Oferta</div>}
                        <img src={fruitImg[f.name.toLowerCase()]} alt={f.name}/>
                        <h3 className='mt-2 text-md lg:text-lg text-center text-gray-800 font-medium'>
                            {f.name.charAt(0).toUpperCase() + f.name.slice(1).toLowerCase()}
                            {f.cantidad && f.cantidad !== 0 && f.cantidad !== "0" ?  <span className='font-normal'> {" "}({cantidadTransform(`${f.cantidad}`)})</span> : null}
                        </h3>
                        <p className='text-md font-normal text-gray-700 text-center'>
                            {f.offer && f.oldPrice ? <><span className='text-gray-400 line-through'>${f.oldPrice}</span><span className='ml-3 text-gray-900 underline font-medium'>${f.price}</span></> : `$${f.price}`}
                        </p>
                    </div>
                )))}
            </div>
        </div>
    )
}

export default Catalogo;