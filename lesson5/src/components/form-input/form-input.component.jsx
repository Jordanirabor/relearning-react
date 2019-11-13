import React from 'react'

const FormInput = ({ label, handleChange, ...otherProps }) => (
    <div className="group">
        <input onChange={handleChange} {...otherProps} />

        {label ?
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input`}> </label>) : ''
        }
    </div>
)