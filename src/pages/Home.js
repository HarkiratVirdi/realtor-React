import React from 'react'
import Features from '../components/Features';
import Header from '../components/Header';
import Hero from '../components/Hero';


const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Hero/>
            <Features/>
        </div>
    )
}

export default Home
