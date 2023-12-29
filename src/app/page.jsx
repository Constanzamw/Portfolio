"use client";
import 'tailwindcss/tailwind.css';
import React from "react";
import Nav from "../components/nav/Nav"



export default function Home() {


  return (
    <div className="flex flex-col w-full h-screen p-0 overflow-hidden relative">
      {/* {isOpenModalLoading && (
        <div className="absolute w-full h-full">
          <Loading />
        </div>
      )} */}
      <div className="w-full h-full relative overflow-hidden">
        {/* <img
          className="w-full h-full object-cover"
          src="https://images3.alphacoders.com/866/866852.jpg"
        /> */}
        <div className="absolute top-0 left-0 w-full h-full custom-gradient">
          <Nav />
       
          <div className="flex flex-col lg:flex-row items-center w-full px-8 py-10 lg:py-1 text-center">
            <div className="lg:w-1/2 lg:pr-8 mb-8">
              <h1 className="text-artistfont text-4xl font-rocksalt mb-8">
                Welcome to my portfolio!
              </h1>
              <h3>
                I am a technology enthusiast with a strong dedication to
                learning and continually evolving in the field of software
                development. My current professional goal is to catalyze
                technological innovation through creative and efficient
                solutions, thereby contributing to progress and excellence in
                this exciting domain.
              </h3>
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <img
                src="/hi.png"
                alt="yo"
                className=" w-[410px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
