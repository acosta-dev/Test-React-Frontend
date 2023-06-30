"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Carousel.css";
import { useGlobalContext } from "../../context/store";

const Carousel = (props: any) => {
  const { data } = useGlobalContext();

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
      >
        {data!.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <div className="lg:ml-[40px] lg:mr-[100px] text-black w-[320px] h-[400px] mt-[20px] hover:bg-[#2E53A3] pl-[30px] cursor-pointer slide hover:text-white">
                <Image
                  src={`/Slide${slide.id}.svg`}
                  width={95}
                  height={95}
                  alt=""
                  className="pt-[40px] group-hover:hidden"
                  style={{ fill: "#FFFFFF" }}
                />
                <p className="mt-[17px]  font-[600] text-[22px] card">
                  {slide.title}
                </p>
                <p className="font-[400] text-[14px] w-[239px] pt-[6px] description card">
                  {slide.description}
                </p>
                <p className="font-[600] text-[20px] pt-[5px] card">Leer más</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousel;
