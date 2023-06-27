import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="mt-[208px] ml-[215px]">
      <p className="uppercase font-bold text-[#3A67CC]">Servicios</p>
      <p className="w-[405px] text-[36px] font-semibold text-[#0F0F0F]">
        Esta info te llega desde un servicio externo
      </p>
      <p className="w-[405px] text-[18px] font-light">
        Consultando el servicio en https://react-frontend.pages.dev/slides.json,
        debes usar Context para enviar los datos que necesitas en la sección de
        abajo. A la derecha tiene un slide o carrusel.
      </p>
      <button className="rounded-full mt-[27px] w-[199px] h-[55px] bg-[#2E53A3] text-white font-bold">
        <div className="flex justify-center items-center">
          <p className="mr-[8px]">Ver más</p>
          <Image
          src="/RightArrow.png"
          width="26"
          height="19"
          alt=""
          className=""
        />
        </div>
        
      
        
        
        
       
      </button>
    </div>
  );
};

export default Services;
