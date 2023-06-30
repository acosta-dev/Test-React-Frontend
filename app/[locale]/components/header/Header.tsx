"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <div className="bg-[#001853] h-[850px] lg:h-[722px] shadow-xl">
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

        <h1 className="absolute top-[10px] lg:top-[150px] left-[20px] lg:left-[150px] text-white text-[60px] font-bold w-[350px] lg:w-[547px]">
          Es tiempo de maquetar
        </h1>
        <p className="absolute left-[20px] top-[300px] lg:top-[345px] lg:left-[150px] lg:w-[590px] text-white text-[20px] font-[700px]">
          Debes usar <strong>NextJS</strong> y <strong>Tailwind CSS</strong> .
          Cada sección de la página debe ser un componente individual. Usa el
          módulo <strong>next-intl</strong> para internacionalización. Usa la
          imaginación para desarrollar el
          <strong> responsive</strong> de la versión móvil.
          <Image
            src="/DownArrow.png"
            width="165"
            height="122"
            alt=""
            className="relative block ml-[200px] top-[30px] sm:top-[270px] md:top-[300px] lg:top-[90px] lg:ml-[240px]  "
          />
        </p>
      </div>
    </div>
  );
};

export default Header;
