import React from 'react'
import FormField from './FormField'

const Footer = () => {
    return (
    <div className="container" style={{background: '#252526'}}> 
        <div className="footer">
            <div className="h-3 h-3--cta mt-l">Free Real Estate Reports</div>
            <div className="footer__email">
            <FormField inputType="text" labelFor="Name"/>
            <FormField inputType="email" labelFor="Email"/>
            </div>
            <button className="border-round cta-link btn-contact btn-cta">Get Free Reports</button>
            </div>
        </div>
    )
}

export default Footer
