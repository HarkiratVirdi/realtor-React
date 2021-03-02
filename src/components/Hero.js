import React from 'react'
import House from '../pexels-pixabay-276551.jpg';
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__image">
                <img src={House} alt="Living Room"/>
            </div>

            <div className="hero__search">
                <form className="hero__search__form">
                    <input type="text" placeholder="Search by Postal Code, Neighbourhood, City or Address"/>
                </form>
            </div>
        </div>
    )
}

export default Hero
