'use client';

import React from 'react'
import Image from "next/image";
import {useTranslations} from 'next-intl';
import LocaleSwitcher from '../languageSwitcher/LocaleSwitcher';

const Navbar = () => {
  const t = useTranslations('Index');
  return (
    <div className="p-6">
      
    <nav className="flex items-center justify-between rounded-lg flex-wrap bg-white p-6">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow uppercase lg:ml-8">
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
        <div>
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