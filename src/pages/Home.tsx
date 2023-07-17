import { FunctionComponent } from 'react'
import Header from "~/components/header/Header"
import Slider from "~/components/slider/Slider"
import About from "~/components/layouts/About"
import Speciality from "~/components/layouts/Speciality"
import dataCard from "../assets/data/data-card"
import Portfolio from "~/components/layouts/Portfolio"
import dataPortfolio from "~/assets/data/portfolioData"

const Home: FunctionComponent = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <About/>
            <Speciality data={dataCard}/>
            <Portfolio data={dataPortfolio}/>
            </div>
    )
}

export default Home