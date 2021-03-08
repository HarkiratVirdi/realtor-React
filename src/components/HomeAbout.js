import React from 'react'
import Girl from '../pexels-andrea-piacquadio-733872.jpg';

const HomeAbout = () => {
    return (
      <div className="homeabout">
        <div className="homeabout__img">
          <img src={Girl} alt="" />
        </div>
        <div className="homeabout__content h-4">
            {/* <div className="heading h-2 mb-s">About Me</div> */}
          Suzzanne has over 12 years experience in the client service industry
          serving the Peel Region and surrounding areas in the GTA specializing
          in residential and rural properties. Suzzanne is one of the most
          sought after real estate agent who is very committed and client
          centric focused. Honesty and Integrity , along with determination and
          dedication are philosophies that Suzzanne strives in all aspects of
          her life. From the first time you meet Suzzanne, you will feel at ease
          with her professional and personable working style and confident in
          her ability to represent your best interest through the Real Estate
          transaction. She has invested in long term client relationships by
          building trust and is truly passionate about helping her clients. She
          has a proven record of directly impacting her clients financial
          success. With her business degree, work experience as a business owner
          and several years in the banking sector, Suzzanne has driven her real
          estate business to a high level of experience leadership and
          professionalism.
          <button className="cta-link btn-contact mt-l h-4 border-round">
            Free Home Valuation
          </button>
        </div>
      </div>
    );
}

export default HomeAbout
