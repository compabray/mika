import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/admin/login', {
                username,
                password,
            });
            localStorage.setItem('token', response.data.token); // store token in local storage
            navigate("/admin"); // redirect to admin
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-3xl lg:text-5xl font-bold mb-4'>INICIAR SESIÓN</h1>
                    <h2 className='text-lg text-center text-gray-700'>Debe iniciar sesion para comprobar que eres un administrador</h2>
                    <form onSubmit={handleSubmit} className='lg:w-1/3 m-auto mt-8 bg-gray-100 p-4 rounded flex justify-center flex-wrap'>
                        <div className='mb-4 w-3/4'>
                            <label htmlFor="username" className='w-full'>Usuario:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                required
                                onChange={(e) => setUsername(e.target.value)}
                                className='w-full border-b bg-gray-100 border-blue-500 p-2'
                            />
                        </div>
                        <div className='mb-4 w-3/4'>
                            <label htmlFor="password" className='w-full'>Contraseña:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                className='w-full border-b bg-gray-100 border-blue-500 p-2'
                            />
                        </div>
                        {error && <div className='w-full font-semibold text-red-500 text-center p-4'>{error}</div>}
                        <button type="submit" className='w-3/4 bg-blue-500 text-white p-4 rounded-md mt-4 lg:w-2/3 font-semibold '>Entrar</button>
                    </form>
                </div>
            );
        };

        export default Login;
