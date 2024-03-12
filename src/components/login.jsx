"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get('http://localhost:3000/users/');
            const users = response.data;

            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
               
                 router.push('/home');
                alert('Inicio de sesión exitoso');
            } else {
                setError('Credenciales inválidas');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Hubo un problema al procesar tu solicitud');
        }
    };


    return (
        <div>
            <h2>Iniciar sesión</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='text-black'
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='text-black'
                    />
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
                <button>
            <Link href="/register">
                Registrarse
            </Link>
                </button>
        </div>
    );
};

export default LoginForm;