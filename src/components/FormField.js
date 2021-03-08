import React from 'react'

const FormField = ({labelFor, inputType}) => {
    return (
        <div className="formfield h-4 mt-s mb-s">
            <label htmlFor={labelFor}>{labelFor}</label>
            <input className="" type={inputType} />
        </div>
    )
}

export default FormField
