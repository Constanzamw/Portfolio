"use client"
import Link from "next/link";
import Nav from "../../components/nav/Nav";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
//import { RiHeartLine,RiHeartFill } from "react-icons/ri";



export default function Home() { 
  
  const [books, setBooks] = useState([]);

  useEffect(() => {
      const fetchBooks = async () => {
          try {
              const response = await axios.get('http://localhost:3000/books/');
              setBooks(response.data);
          } catch (error) {
              console.error('Error fetching books:', error);
          }
      };

      fetchBooks();
  }, []);

  //<RiHeartLine /> <RiHeartFill />

  return (
    <div>
      <Nav/>
        <h2 className="text-3xl font-bold mb-4">Libros</h2>
        <div className="grid grid-cols-4 gap-8">
            {books.map(book => (
                <div key={book._id} className="border border-gray-300 rounded p-4">
                  <Link href={`/book/${book._id}`}>
                    <h3 className="text-md font-semibold mb-2">{book.title}</h3>
                    <p className="text-sm">Autor: {book.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    </div>
);
};

//
