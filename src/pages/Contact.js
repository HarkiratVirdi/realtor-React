import React from 'react'
import FormField from '../components/FormField'

const Contact = () => {
    return (
      <div className="container">
        <div className="contact">
          <FormField inputType="text" labelFor="First Name" />
          <FormField inputType="text" labelFor="Last Name" />
          <FormField inputType="email" labelFor="Email" />
          <FormField inputType="number" labelFor="Phone" />
          <div className="formfield w-100 h-4 mt-l mb-l">
            <label htmlFor="Subject">Subject</label>
            <input type="text" />
          </div>
          <div className="formfield w-100 h-4 mt-l mb-l">
            <label htmlFor="Subject">Message</label>
            <textarea
              className="border-cta"
              name="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div className="checkbox">
            <input type="checkbox" name="consent" />
            <label htmlFor="consent" className="ml-s h-4">
           
              I consent to receiving emails containing real estate related
              information from this site. I understand that I can unsubscribe at
              any time.
            </label>
          </div>

          <button className="cta-link btn-contact mt-l h-4 border-round mb-l">
            Send Email
          </button>
        </div>
      </div>
    );
}

export default Contact
