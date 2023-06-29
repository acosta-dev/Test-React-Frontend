import React from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import "./Carousel.css";

const Services = () => {
  return (
    <div className="mt-[208px] ml-[420px]">
      <div className="flex mb-4 h-[600px] w-[450px]">
        <div className="flex-1 ">
          <p className="uppercase font-bold text-[#3A67CC]">Servicios</p>
          <p className="w-[405px] text-[36px] font-semibold text-[#0F0F0F]">
            Esta info te llega desde un servicio externo
          </p>
          <p className="w-[405px] text-[18px] font-[300]">
            Consultando el servicio en <br/>
            https://react-frontend.pages.dev/slides.json, debes usar Context
            para enviar los datos que necesitas en la sección de abajo. A la
            derecha tiene un slide o carrusel.
          </p>
          <button className="hover:scale-110 rounded-full mt-[27px] w-[199px] h-[55px] bg-[#2E53A3] text-white font-bold shadow-xl shadow-[#709DDA]">
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
        <div className="flex-1 pr-50">
        <Image
          src="/PrevArrow.png"
          width={17}
          height={29}
          alt=""
          className="nav-prev"
        />
        <Carousel/>
        <Image
          src="/NextSliderArrow.png"
          width={17}
          height={29}
          alt=""
          className="nav-next"
        />
        </div>
      </div>
      
    </div>
  );
};

export default Services;