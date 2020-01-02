import React from "react"
import "./custom-button.styles.scss"

const CustomButton = ({ children, otherClassName, ...otherProps }) => (
    <button className={`custom-button ${otherClassName ? otherClassName : ''}`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton