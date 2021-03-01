import React from 'react'

const FormField = ({labelFor, inputType}) => {
    return (
        <div className="formfield flex align-cen space-bet">
            <label htmlFor={labelFor}>{{labelFor}}</label>
            <input type={inputType} />
        </div>
    )
}

export default FormField
