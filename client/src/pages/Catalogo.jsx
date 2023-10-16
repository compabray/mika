import axios from 'axios';
import { useEffect, useState } from 'react';

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
        <> 
            {sortedFruits.map((f, index) => (
                <div key={index}>
                    <p>{f.name}</p>
                    <p>{f.price}</p>
                    <p>{f.offer ? 'On Offer' : 'Not on Offer'}</p>
                </div>
            ))}
        </>
    )
}

export default Catalogo;