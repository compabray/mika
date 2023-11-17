import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import fruitImg from "../assets/fruitImg";
import FruitEditor from "../components/FruitEditor";
import setAuthHeader from "../utils/setAuthHeader";
import cantidadTransform from "../utils/cantidadTransform";


function AdminCat () {

    const navigate = useNavigate();
    const [fruit, setFruit] = useState([]);
    const [sFruit, setSFruit] = useState([]);
    const [activate, setActivate] = useState(null);
    const [success, setSuccess] = useState(false);
    

    const token = localStorage.getItem('token');


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
    }, [navigate, token])

    useEffect(() => {
        axios.get('/api/fruit/all')
            .then(res => {
                setFruit(res.data);
            })
            .catch(err => console.log(err))

        axios.get('/api/sfruit/all')
            .then(res => {
                setSFruit(res.data);
            })
            .catch(err => console.log(err))
    }, [success])


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
            <h1 className="w-full text-center text-3xl lg:text-4xl font-bold text-gray-900">Modifica las frutas y verduras del catalogo</h1>
            <div className="lg:w-11/12  lg:h-[70vh] m-auto mt-8 flex-col-reverse lg:flex-row flex flex-wrap justify-around">
                <div className="w-10/12 lg:w-7/12 xl:w-2/3 m-auto flex flex-wrap justify-around lg:justify-normal mt-4 h-[50vh] lg:h-full bg-gray-100 overflow-y-scroll">
                    {sortedFruits.map((f, index) => (
                        <div className={`relative w-5/12 sm:w-1/4 xl:w-1/6 m-2 h-fit cursor-pointer ${activate === f._id && "border-2 p-1 rounded-md border-blue-800"}`} key={index} onClick={() => handleFruitClick(f._id)}>
                            {f.offer && <div className="bg-blue-800  text-white text-xs font-bold uppercase absolute top-0 left-0 px-2 py-1">Oferta</div>}
                            <img src={fruitImg[f.name.toLowerCase()]} alt={f.name}/>
                            <h3 className='mt-2 text-md lg:text-lg text-center text-gray-800 font-medium'>
                            {f.name.charAt(0).toUpperCase() + f.name.slice(1).toLowerCase()}
                            {f.cantidad && f.cantidad != 0 && f.cantidad != "0" ?  <span className='font-normal'> {" "}({cantidadTransform(`${f.cantidad}`)})</span> : null}
                        </h3>
                            <p className='text-md font-normal text-gray-700 text-center'>
                                {f.offer && f.oldPrice ? <><span className='text-gray-400 line-through'>${f.oldPrice}</span><span className='ml-3 text-gray-900 underline font-medium'>${f.price}</span></> : `$${f.price}`}
                            </p>
                        </div>
                    ))}
                </div>
                
                <FruitEditor token={token} id={activate} fruit={sortedFruits.find(f => f._id === activate)} success={success} setSuccess={setSuccess} />

            </div>
        </div>

    )

}

export default AdminCat;