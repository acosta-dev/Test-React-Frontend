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

import Slide1 from "../../../public/Slide1.svg";
import Slide2 from "../../../public/Slide2.svg";
import Slide3 from "../../../public/Slide3.svg";

interface Slides {
  id: string;
  icon: string;
  title: string;
  description: string;
  link: string;
}
const url = "https://react-frontend.pages.dev/slides.json";
const Carousel = (props: any) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={2}
        navigation
        // navigation={{ nextEl: ".nav-next", prevEl: ".nav-prev" }}
        pagination={{ clickable: true }}
      >
        {data!.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <div className=" lg:ml-[40px] lg:mr-[100px] w-[285px] h-[400px] mt-[20px] hover:bg-[#2E53A3] pl-[30px] cursor-pointer">
              <Image
                  src={`/Slide${slide.id}.svg`}
                  width={95}
                  height={95}
                  alt=""
                  className="pt-[40px] group-hover:hidden"
                  style={{ fill: "#FFFFFF" }}
                />
                <p className="mt-[17px] font-[600] text-[22px]">{slide.title}</p>
                <p className="font-[400] text-[#B7B7B7] text-[14px] w-[239px] pt-[6px]">{slide.description}</p>
                <p className="font-[600] text-[20px] pt-[5px]">
                  Leer más
                </p>
              </div>
              
              {/* <div className=" w-[285px] h-[450px] text-black pl-[30px] hover:bg-[#2E53A3] cursor-pointer">
                <Image
                  src={`/Slide${slide.id}.svg`}
                  width={95}
                  height={95}
                  alt=""
                  className="pt-[40px] group-hover:hidden"
                  style={{ fill: "#FFFFFF" }}
                />

                <p className="font-[600] text-[22px] pt-[40px]" id="title">
                  {slide.title}
                </p>
                <p
                  className="font-[400] text-[#B7B7B7] text-[14px] w-[239px] pt-[6px]"
                  id="description"
                >
                  {slide.description}
                </p>
                <p className="font-[600] text-[20px] pt-[5px] hidden" id="more">
                  Leer más
                </p>
              </div> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousel;
