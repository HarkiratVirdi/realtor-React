import React from 'react'
import Carousel from '../components/Carousel';
import Features from '../components/Features';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HomeAbout from '../components/HomeAbout';
import Maplocation from '../components/Maplocation';


const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Hero/>
            <Features/>
            <Carousel/>
            <HomeAbout/>
            <Maplocation/>
        </div>
    )
}

export default Home
