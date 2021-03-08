import React from 'react'
import FormField from './FormField'

const Footer = () => {
    return (
      <div className="footer__background" style={{ background: "#252526" }}>
        <div className="container">
          <div className="footer">
            <div className="h-3 h-3--cta mt-l">Free Real Estate Reports</div>
            <div className="footer__email">
              <FormField inputType="text" labelFor="Name" />
              <FormField inputType="email" labelFor="Email" />
            </div>
            <button className="border-round cta-link btn-contact btn-cta mt-s">
              Get Free Reports
            </button>

            <ul className="footer__links">
              <li className="h-4 h-3--white">
                <a className="h-4 h-4--white" href="tel:647-685-1425">647-685-1425 </a>{" "}
              </li>
              <li className="h-4 h-3--white">
                <a className="h-4 h-4--white" href="mailTo:suzannediloski@gmail.com ">
                  suzannediloski@gmail.com{" "}
                </a>{" "}
              </li>
              <li className="h-4 h-3--white"><a className="h-4 h-4--white" href="#">Instagram</a> </li>
              <li className="h-4 h-3--white"><a className="h-4 h-4--white" href="#">Facebook</a> </li>
              <li className="h-4 h-3--white"><a className="h-4 h-4--white" href="#">Realtor</a> </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Footer
