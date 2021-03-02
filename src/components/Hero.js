import React, { useState } from 'react'
import House from '../pexels-pixabay-276551.jpg';
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__image">
                <img src={House} alt="Living Room"/>
            </div>

            <div className="hero__search">
                <form className="hero__search__form">
                <div className="hero__inputs">
                    <input type="text" placeholder="Search by Postal Code, Neighbourhood, City or Address"/>
                    
                    
                    {window.innerWidth > 870 ? <input type="submit" value="Search Home"/> : <input type="submit" value="Search"/>
                    }
                </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
