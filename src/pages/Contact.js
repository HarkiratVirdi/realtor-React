import React from 'react'
import FormField from '../components/FormField'

const Contact = () => {
    return (
        <div className="contact">
            <FormField inputType="text" labelFor="First Name"/>
            <FormField inputType="text" labelFor="Last Name"/>
            <FormField inputType="email" labelFor="Email"/>
            <FormField inputType="Message" labelFor="Message"/>
        </div>
    )
}

export default Contact
