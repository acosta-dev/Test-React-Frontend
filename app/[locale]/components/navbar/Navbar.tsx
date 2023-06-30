'use client';

import React, { useState } from 'react'
import Image from "next/image";
import {useTranslations} from 'next-intl';
import LocaleSwitcher from '../languageSwitcher/LocaleSwitcher';
import "./Navbar.css"

const Navbar = () => {
  const t = useTranslations('Index');
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="p-6">
      
    <nav className="flex items-center justify-between rounded-lg flex-wrap bg-white p-6">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">


      <section className="flex lg:hidden">
          <div
            className="space-y-2 cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)} 
          >
            <span className="block h-0.5 w-8 animate-pulse bg-blue-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-blue-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-blue-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} 
            >
              <svg
                className="h-8 w-8 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" className='cursor-pointer'/>
                <line x1="6" y1="6" x2="18" y2="18" className='cursor-pointer'/>
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#"> {t("home")}</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#"> {t("services")}</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">{t("about_us")}</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">{t("tools")}</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">{t("partners")}</a>
              </li>
              
              <LocaleSwitcher/>
             
            </ul>
          </div>
        </section>











        <div className="hidden lg:block text-sm lg:flex-grow uppercase lg:ml-8">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-blue-700 hover:underline hover:font-bold mr-4 font-[16px]"
          >
            {t("home")}
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-blue-700 hover:underline hover:font-bold mr-4"
          >
            {t("services")}
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-blue-700 hover:underline hover:font-bold mr-4"
          >
            {t("about_us")}
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-blue-700 hover:underline hover:font-bold mr-4"
          >
            {t("tools")}
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-blue-700 hover:underline hover:font-bold"
          >
            {t("partners")}
          </a>
          
        </div>
        <div className='hidden lg:block'>
            <div className="flex items-center">
          <button
            className="inline-block text-sm px-4 py-2 bg-[#2D509E] rounded-full leading-none border-white hover:border-transparent hover:scale-110 mt-4 lg:mt-0 text-white font-bold text-[20px] shadow-xl shadow-[#709DDA] border-0"
          >
            {t("contact")}
          </button>
          <LocaleSwitcher/>
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Navbar