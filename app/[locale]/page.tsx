import Image from 'next/image'
import Header from './components/header/Header'
import Services from './components/services/Services'
import About from './components/about/About'

export default function Home() {
  return (
    <>
      <Header/>
      <Services/>
      <About/>
    </>
  )
}
