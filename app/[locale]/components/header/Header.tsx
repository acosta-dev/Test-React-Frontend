"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <div className="bg-[#001853] h-[722px] shadow-xl">
      <Navbar />
     
      <div className="relative">
      <Image
          src="/Image.png"
          width="809"
          height="846"
          alt=""
          className="absolute block top-[39px] left-[1080px] w-[809px] h-[658px]"
        />
        <Image
          src="/Overlay.png"
          width="1492"
          height="846"
          alt=""
          className="relative block left-[188px] top-[-47]"
        />
       
        <h1 className="absolute top-[150px] left-[150px] text-white text-[60px] font-bold w-[578px]">
          Es tiempo de maquetar
        </h1>
        <p className="absolute top-[345px] left-[150px] w-[547px] text-white text-[20px] font-[700px]">
          Debes usar <strong>NextJS</strong> y <strong>Tailwind CSS</strong> . Cada sección de la página debe ser
          un componente individual. Usa el módulo <strong>next-intl</strong> para
          internacionalización. Usa la imaginación para desarrollar el 
          <strong> responsive</strong> de la versión móvil.
          <Image
          src="/DownArrow.png"
          width="165"
          height="122"
          alt=""
          className="relative block top-[77px] ml-[342px]"
        />
       
        </p>

       

      </div>
    </div>
  );
};

export default Header;
