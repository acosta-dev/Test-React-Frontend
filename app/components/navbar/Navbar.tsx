'use client';

import React from 'react'
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="p-6">
    <nav className="flex items-center justify-between rounded-lg flex-wrap bg-white p-6">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow uppercase lg:ml-8">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4 font-[16px]"
          >
            Inicio
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
          >
            Servicios
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
          >
            Nosotros
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
          >
            Herramientas
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-white"
          >
            Socios
          </a>
          
        </div>
        <div>
            <div className="flex">
          <button
            className="inline-block text-sm px-4 py-2 bg-[#2D509E] rounded-full leading-none border border-white hover:border-transparent hover:bg-white mt-4 lg:mt-0 text-white font-bold text-[20px]"
          >
            Contactar
          </button>
          <Image
          className="ml-[20px] cursor-pointer"
          src="./es.svg"
          width={27}
          height={18}
          alt="Spanish"
          />
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Navbar