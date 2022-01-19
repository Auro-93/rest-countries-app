import React, {useState} from 'react';
import './form.css';
import {darkMode, lightMode} from '../../../dynamic-styles';

function Form({isDark, handleSubmit, handleChange, filterByRegion}) {

    const changeSelectTitle = (value) => {
        switch(value){
            case 'Africa':
            case 'Americas':
            case 'Asia':
            case 'Europe':
            case 'Oceania':
            case 'All':
                         document.querySelector('.select-button > p').innerText = value;
                 break;
                 default:
                    document.querySelector('.select-button > p').innerText = 'Filter by region';
          }
    }


    return (
        <form
            onSubmit = {handleSubmit}
        >
            <div
                className = 'input-container'
                style = {isDark ?
                                    darkMode.component.global
                                :
                                    lightMode.component.global
                        }
            >
                <i 
                    className="search-icon fas fa-search"
                    style = {isDark ? 
                                        darkMode.component.input
                                    :
                                        lightMode.component.input
                    }
                >
    
                </i>
                <input
                    type = 'search'
                    name = 'search'
                    placeholder = 'Search for a country...'
                    onChange = {(term) => {handleChange(term.target.value.toLowerCase())
                        document.querySelector('.select-button > p').innerText = 'Filter By Region'}
                    }
               
                     style = {isDark ? 
                                        darkMode.component.input
                                     :
                                        lightMode.component.input                                    
                    }                            

                    className = {isDark ? 'input-dark' : 'input-light'}
                />

            </div>

            <div 
                className = 'select-container'
                id = 'select-container'
                onClick = {(e)=>{changeSelectTitle(e.target.innerText)}}
            >
                <div 
                    className = 'select select-button'
                    
                    style = {isDark ? 
                                        darkMode.component.global
                                    :
                                        lightMode.component.global
                    }
                >
                    <p>
                        Filter by Region
                    </p>

                    <i className= "arrow-icon fas fa-chevron-down"></i>
                    
                </div>

                <ul
                    className = 'select select-dropdown'
                    onClick = {(e) => {filterByRegion(e.target.innerText)} }
                    style = {isDark ?
                                        darkMode.component.global
                                    :
                                        lightMode.component.global
                    }
                >
                    <li
                        className = {isDark ? 'dark-item' : 'light-item'}
                    >
                        All
                    </li>
                    <li
                        className = {isDark ? 'dark-item' : 'light-item'}
                    >
                        Africa
                    </li>
                    <li
                        className = {isDark ? 'dark-item' : 'light-item'}
                    >
                        Americas
                    </li>
                    <li
                        className = {isDark ? 'dark-item' : 'light-item'}
                    >
                        Asia
                    </li>
                    <li
                        className = {isDark ? 'dark-item' : 'light-item'}
                    >
                        Europe
                    </li>
                    <li
                        className = {isDark ? 'dark-item' : 'light-item'}
                    >
                        Oceania
                    </li>
                </ul>
            </div>
            
        </form>
    )
}

export default Form
