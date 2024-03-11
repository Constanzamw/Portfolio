"use client"
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link'

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/users/', {
                email,
                password
            });

            if (response.status === 200) {
                
                router.push('/home');
            } else {
                setError('Hubo un problema al registrar el usuario');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Hubo un problema al procesar tu solicitud');
        }
    };

    return (
        <div>
            <h2>Registro</h2>
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
                <button type="submit">Registrarse</button>
            </form>
            <button>
            <Link href="/">
                Volver
            </Link>
                </button>
        </div>
    );
};

export default RegisterForm;
