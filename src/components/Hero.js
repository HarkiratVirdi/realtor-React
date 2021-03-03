import React, { useEffect, useState } from 'react'
import axios from 'axios';
import House from '../pexels-pixabay-276551.jpg';
const Hero = () => {
    const [address, setAddress] = useState("");
    
const onSearch = async() => {
    await axios(`http://www.mapquestapi.com/geocoding/v1/address?key=pvsghb2CWyLCu9X61thqVq2X8e5FtuP7&location=${address}`).then((res) => console.log(res.data.results[0].locations[0])).catch((err) => console.log(err));
}
    return (
        <div className="hero">
            <div className="hero__image">
                <img src={House} alt="Living Room"/>
            </div>

            <div className="hero__search">
                <div className="hero__search__form">
                <div className="hero__inputs">
                    <input type="text" onChange={(e) => setAddress(e.target.value)} value={address} placeholder="Search by Postal Code, Neighbourhood, City or Address"/>
                    
                    
                    {window.innerWidth > 870 ? <button onClick={onSearch}>Search Home</button> : <button onClick={onSearch}>Search</button>
                    }
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
