'use client';
import Image from "next/image";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import About from "./components/about/About";
import { useGlobalContext } from "./context/store";
import { useEffect } from "react";

const url = "https://react-frontend.pages.dev/slides.json";

export default function Home() {
  const { data, setData } = useGlobalContext();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <Header />
      <Services />
      <About />
    </>
  );
}
