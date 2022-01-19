import React from 'react';
import './header.css';
import {darkMode, lightMode} from '../../dynamic-styles';

function Header({isDark, handleTheme}) {
    return (
        <header
            className = 'header container'
            style = {isDark ?
                            darkMode.component.global
                            :
                            lightMode.component.global
                    }
        >
            <h1
                className = 'title'
            >
                Where in the world?

            </h1>

            <div
                className = 'change-theme'
                onClick = {handleTheme}
            >

                {isDark ? 
                        <i className="moon-icon fas fa-moon"></i> 
                        :
                        <i className="moon-icon far fa-moon"></i>
                    
                }
                

                <h2
                    className = "theme-title"
                >
                    {isDark ? 'Dark' : 'Light'} Mode
                </h2>

            </div>

        </header>
    )
}

export default Header
