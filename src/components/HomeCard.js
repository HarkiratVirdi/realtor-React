import React from 'react'
import Toronto from '../pexels-scott-webb-593150.jpg';

const HomeCard = ({homeDetails}) => {
    return (
        <div className="homecard">
            <div className="homecard__img">
                <img src={Toronto} alt=""/>
            </div>
            <div className="homecard__name h-4">Modern Glass Villa</div>
            <div className="homecard__details"></div>
            <div className="homecard__contact h-4">Contact Me</div>
        </div>
    )
}

export default HomeCard
