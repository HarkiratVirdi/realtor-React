import React from 'react'
import Carousel from '../components/Carousel';
import Features from '../components/Features';
import Header from '../components/Header';
import Hero from '../components/Hero';


const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Hero/>
            <Features/>
            <Carousel/>
        </div>
    )
}

export default Home
