"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const About = () => {
  const t = useTranslations("Index");
  return (
    <div className="lg:grid lg:grid-cols-5 pb-[200px]">
      <div className="hidden ml-[310px] mt-[180px] w-[400px] lg:col-span-2 lg:block">
        <Image
          src="/puzzle/Rectangle1.png"
          width={198}
          height={-10}
          alt=""
          className="pb-[30px] w-[180px]"
        />

        <Image
          src="/puzzle/Puzzle1.png"
          width={199}
          height={358}
          alt=""
          className="mt-[-325px] ml-[20px]"
        />

        <Image
          src="/puzzle/Puzzle2.png"
          width={337}
          height={184}
          alt=""
          className="mt-[-340px] ml-[215px]"
        />

        <Image
          src="/puzzle/Puzzle3.png"
          width={131}
          height={158}
          alt=""
          className="mt-[-10px] ml-[215px]"
        />

        <Image
          src="/puzzle/Puzzle5.png"
          width={328}
          height={169}
          alt=""
          className="mt-[-10px] ml-[20px]"
        />

        <Image
          src="/puzzle/Puzzle6.png"
          width={210}
          height={150}
          alt=""
          className="mt-[-315px] ml-[345px] h-[318px] relative"
        />

        <Image
          src="/puzzle/Rectangle2.png"
          width={193}
          height={341}
          alt=""
          className="mt-[-280px] ml-[375px] h-[290px]"
        />
      </div>
      <div className="flex flex-wrap mt-[40px] lg:text-right lg:mr-[400px] lg:mt-[220px] lg:col-span-3 lg:justify-end">
        <p className="font-[700] text-[20px] text-[#3A67CC] ml-[20px]">
          Sobre nosotros
        </p>
        <p className="font-[700] text-[36px] ml-[20px] lg:w-[678px]">
          {t("text1")}
        </p>
        <p className="ml-[20px] lg:text-right text-[#2C2C2C] lg:w-[424px] text-[18px] pb-[6px] lg:pb-[6px] font-[300px]">
          Usted debe tener un sólido conocimiento de HTML y CSS. Debe comprender
          la arquitectura de componentes de React. Debe tener buena atención al
          detalle, organización del código, habilidades de comunicación efectiva
          y capacidad para trabajar en equipo.
        </p>
        <p className="ml-[20px] lg:text-right text-[#606060] font-[700] text-[22px] lg:pb-[6px] lg:w-[500px]">
          Usa Context para acceder a los títulos de abajo desde la sección
          anterior
        </p>

        <ul className=" ml-[20px]">
          <li className=" ">Pruebas y depuración de problemas</li>
          <li className=" ">Traduce diseños a código</li>
          <li className=" ">Optimización y rendimiento</li>
        </ul>
      </div>
      {/* <div className="ml-[420px] mt-[-80px] col-span-3 mr-[300px]">
        <p className="font-[700] text-[20px] text-[#3A67CC] text-right">
          Sobre nosotros
        </p>
        <p className="font-[700] text-[36px]  text-right w-[478px] pr-[60px] pb-[30px]">
        {t("text1")}
        </p>
        <p className="text-right text-[#2C2C2C] w-[414px] text-[18px] pb-[6px] font-[300px]">
          Usted debe tener un sólido conocimiento de HTML y CSS. Debe comprender
          la arquitectura de componentes de React. Debe tener buena atención al
          detalle, organización del código, habilidades de comunicación efectiva
          y capacidad para trabajar en equipo.
        </p>
        <p className="text-right text-[#606060] font-[700] text-[22px] pb-[36px]">
          Usa Context para acceder a los títulos de abajo desde la sección
          anterior
        </p>
        <ul>
          <li className="flex pb-[36px] items-center flex-row-reverse text-right font-[500] text-[16px] text-[#606060] hover:text-[#3D93FF] hover:font-bold hover:underline hover:cursor-pointer">
            <div className="h-[20px]">
              <Image
                src="/bullet/Bullet.png"
                width={19}
                height={19}
                alt=""
                className=""
              />
            </div>
            <p>Pruebas y depuración de problemas &nbsp;</p>
          </li>

          <li className="flex  pb-[36px] items-center flex-row-reverse text-right font-[500] text-[16px] text-[#606060] hover:text-[#3D93FF] hover:font-bold hover:underline hover:cursor-pointer">
            <div className="h-[20px]">
              <Image
                src="/bullet/Bullet.png"
                width={19}
                height={19}
                alt=""
                className="relative"
              />
            </div>
            <p>Traduce diseños a código &nbsp;</p>
          </li>

          <li className="flex pb-[157px] items-center flex-row-reverse text-right font-[500] text-[16px] text-[#606060] hover:underline hover:text-[#3D93FF] hover:font-bold hover:cursor-pointer">
            <div className="h-[20px]">
              <Image
                src="/bullet/Bullet.png"
                width={19}
                height={19}
                alt=""
                className=""
              />
            </div>
            <p>Optimización y rendimiento &nbsp;</p>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default About;

// w-[416px]
