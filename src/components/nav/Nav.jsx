"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [activeLink, setActiveLink] = useState("");

  // UseEffect para cambiar el estado activo cuando cambie la ruta
  useEffect(() => {
    const path = window.location.pathname;
    setActiveLink(path);
  }, []);

  // Función para manejar el cambio de enlace activo
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="bg-transparent py-4 px-4 md:py-8 md:px-8 text-artistfont mb-[1px] bg-red-700">
      <ul className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
        <div className="text-center md:flex md:justify-center">
          <li>
            <Link href="/">
              <span
                className={`font-rocksalt text-md lg:text-4xl hover:text-pink-600 hover:border-pink-600 border-b-[2px] ${
                  activeLink === "/" ? "text-pink-600 border-pink-600" : ""
                }`}
                onClick={() => handleLinkClick("/")}
              >
                Constanza Weiner
              </span>
            </Link>
          </li>
        </div>
        <div className="flex items-center gap-x-4 md:gap-x-8">
        <li>
            <Link href="/experience">
              <span
                className={`cursor-pointer pb-1 font-newrocker text-[14px] md:text-[19px] border-b-[2px] border border-1px px-2 md:px-4 py-1 md:py-2 rounded-md border-gray-200 ${
                  activeLink === "/experience" ? "text-pink-600 border-pink-600" : "hover:text-pink-600 hover:border-pink-600"
                }`}
                onClick={() => handleLinkClick("/experience")}
              >
                Experience
              </span>
            </Link>
          </li>
          <li>
            <Link href="/education">
              <span
                className={`pb-1 font-newrocker text-[14px] md:text-[19px] border-b-[2px] border-gray-200 border border-1px px-2 md:px-4 py-1 md:py-2 rounded-md ${
                  activeLink === "/education" ? "text-pink-600 border-pink-600" : "hover:text-pink-600 hover:border-pink-600"
                }`}
                onClick={() => handleLinkClick("/education")}
              >
                Education
              </span>
            </Link>
          </li>
         
          <li>
            <Link href="/about">
              <span
                className={`cursor-pointer pb-1 font-newrocker text-[14px] md:text-[19px] border-b-[2px] border border-1px px-2 md:px-4 py-1 md:py-2 rounded-md border-gray-200 ${
                  activeLink === "/about" ? "text-pink-600 border-pink-600" : "hover:text-pink-600 hover:border-pink-600"
                }`}
                onClick={() => handleLinkClick("/about")}
              >
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span
                className={`cursor-pointer pb-1 font-newrocker text-[14px] md:text-[19px] border-b-[2px] border border-1px px-2 md:px-4 py-1 md:py-2 rounded-md border-gray-200 ${
                  activeLink === "/contact" ? "text-pink-600 border-pink-600" : "hover:text-pink-600 hover:border-pink-600"
                }`}
                onClick={() => handleLinkClick("/contact")}
              >
                Contact
              </span>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}