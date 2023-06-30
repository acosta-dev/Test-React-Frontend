import React from "react";

import Image from "next/image";
import Carousel from "./Carousel";
import "./Carousel.css";

const Services = () => {
  return (
    <div className="flex flex-wrap">
      <div className="mt-[90px] ml-[20px] mr-[5px] lg:pt-[147px] lg:ml-[310px] lg:w-[405px]">
        <p className="uppercase font-bold text-[#3A67CC]">Servicios</p>
        <p className="flex flex-wrap  text-[36px] font-semibold text-[#0F0F0F]">
          Esta info te llega desde un servicio externo
        </p>
        <p className="text-[18px] font-[300] ">
          Consultando el servicio en <br />
          https://react-frontend.pages.dev/slides.json, debes usar Context para
          enviar los datos que necesitas en la sección de abajo. A la derecha
          tiene un slide o carrusel.
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
      <div className="flex flex-wrap ml-[-20px] lg:mt-[160px] lg:ml-[69px]">
        <Image
          src="/PrevArrow.png"
          width={17}
          height={29}
          alt=""
          className="nav-prev hidden lg:visible bg-red-500"
        />
        <Carousel />
      </div>

      {/* <div className="flex flex-row flex-wrap mt-[208px] ml-[20px] lg:ml-[420px]">
      <div className="flex flex-wrap mb-4 lg:h-[600px] lg:w-[450px]">
        <div className="flex flex-wrap lg:flex-1 ">
          <p className="uppercase font-bold text-[#3A67CC]">Servicios</p>
          <p className="flex flex-wrap  text-[36px] font-semibold text-[#0F0F0F]">
            Esta info te llega desde un servicio externo
          </p>
          <p className="w-[405px] text-[18px] font-[300]">
            Consultando el servicio en <br />
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
        </div> */}

      {/* <div className="flex flex-wrap lg:flex-1 pr-50"> */}
      {/* <Image
            src="/PrevArrow.png"
            width={17}
            height={29}
            alt=""
            className="nav-prev"
          /> */}
      {/* <Carousel/> */}
      {/* <Image
            src="/NextSliderArrow.png"
            width={17}
            height={29}
            alt=""
            className="nav-next"
          /> */}
      {/* </div> */}
    </div>
  );
};

export default Services;
