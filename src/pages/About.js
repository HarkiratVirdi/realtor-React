import React from 'react'
import Girl from '../pexels-andrea-piacquadio-733872.jpg';

const About = () => {
    return (
      <div className="container">
        <div className="about mt-xl">
          <div className="about__content">
            {/* <div className="heading h-3 h-3--black">About Me</div> */}
            <div className="about__details">
              <div className="h-3 mb-s heading">Suzanne Diloski</div>
              <div className="h-4 mb-s">Role: Sales Representative</div>
              <div className="h-4 mb-s">Contact: +1 6476851425</div>
              <div className="h-4 mb-s">Email: suzannediloski@gmail.com</div>
              <div className="h-4 mb-s">
                Languages: English, Punjabi, French, Hindi
              </div>
              <div className="about__overview h-4 pr-m textjustify">
                Suzzanne has over 12 years experience in the client service industry
                serving the Peel Region and surrounding areas in the GTA
                specializing in residential and rural properties. Suzzanne is one of
                the most sought after real estate agent who is very committed
                and client centric focused. Honesty and Integrity , along with
                determination and dedication are philosophies that Suzzanne strives
                in all aspects of her life. From the first time you meet Suzzanne,
                you will feel at ease with her professional and personable
                working style and confident in her ability to represent your
                best interest through the Real Estate transaction. She has
                invested in long term client relationships by building trust and
                is truly passionate about helping her clients. She has a proven
                record of directly impacting her clients financial success. With
                her business degree, work experience as a business owner and
                several years in the banking sector, Suzzanne has driven her real
                estate business to a high level of experience leadership and
                professionalism.
              </div>
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
