import React from 'react'
import FormField from './FormField'

const Footer = () => {
    return (
        <div className="footer__background" style={{background: '#252526'}}>

    <div className="container"> 
        <div className="footer">
            <div className="h-3 h-3--cta mt-l">Free Real Estate Reports</div>
            <div className="footer__email">
            <FormField inputType="text" labelFor="Name"/>
            <FormField inputType="email" labelFor="Email"/>
            </div>
            <button className="border-round cta-link btn-contact btn-cta mt-s">Get Free Reports</button>

            <ul className="footer__links">
                <li className="h-4 h-3--white">+1 6476851425 </li>
                <li className="h-4 h-3--white">suzannediloski@gmail.com </li>
                <li className="h-4 h-3--white">Instagram </li>
                <li className="h-4 h-3--white">Facebook </li>
                <li className="h-4 h-3--white">Realtor </li>
            </ul>

            </div>
        </div>
        </div>
    )
}

export default Footer
