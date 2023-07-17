import { useEffect } from 'react';
import '~/assets/icons/font-awesome.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import Home from "~/pages/Home"
import './App.css'

function App() {

  useEffect(()=>{
    AOS.init({
      duration: 2000,
    })
  },[])

  return (
    <>
     <Home/>
    </>
  )
}

export default App
