import React from 'react'
import Girl from '../pexels-andrea-piacquadio-733872.jpg';

const About = () => {
    return (
      <div className="container">
        <div className="about mt-xl">
          <div className="about__content">
            <div className="heading h-3 h-3--black">About Me</div>
            <div className="about__details">
              <div className="h-4 mt-s mb-s">Suzanne Diloski</div>
              <div className="h-4 mt-s mb-s">Sales Representative</div>
              <div className="h-4 mt-s mb-s">Suzanne Diloski</div>
            </div>
          </div>
          <div className="about__image">
            <img src={Girl} alt="" />
          </div>
        </div>
      </div>
    );
}

export default About
