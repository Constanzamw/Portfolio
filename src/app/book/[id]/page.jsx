"use client"
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BookDetail = ({ params }) => {
    const router = useRouter();
    //const { params } = router;
    const { id } = params; // Obtener el id de los parámetros de la URL
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                if (id) {
                    const response = await axios.get(`http://localhost:3000/books/${id}`);
                    setBook(response.data);
                }
            } catch (error) {
                console.error('Error fetching book:', error);
            }
        };
    
        fetchBook();
    }, [id]);

    const handleClose = () => {
        router.push('/home');
    };

    // if (!book) {
    //     return <p>Cargando...</p>;
    // }

    return (
        <div>
            <button onClick={handleClose} className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded">X</button>
            {book && ( // Renderizar la información del libro solo si book no es null
                <div key={book._id} className="border border-gray-300 rounded p-4">
                    <h2 className="text-3xl font-bold mb-4 text-white">{book.title}</h2>
                    <img src={book.image} alt={book.title} className="w-64 h-auto mb-4" />
                    <p className="text-lg text-white">Autor: {book.author}</p>
                    <p className="text-lg text-white">Género: {book.genre}</p>
                    <p className="text-lg text-white">Año de publicación: {book.year}</p>
                </div> 
            )}
        </div>
    );
}

export default BookDetail;