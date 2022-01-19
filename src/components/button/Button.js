import React from 'react';
import './button.css';


function Button({className, children, style}) {
    return (
        <button 
            type = 'button'
            className = {className}
            style = {style}
           
        > 
        {children}     
        </button>
    )
}

export default Button
