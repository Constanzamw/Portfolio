"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link'
import LoginForm from '@/components/login';

const App = () => {
   


    return (
        <div>
            <LoginForm/>
           
        </div>
    );
};

export default App;

/*
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
            <Link href="/register">
                Registrarse
            </Link>
*/