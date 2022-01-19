import React from 'react';
import Form from './form/Form';
import Countries from '../countries/Countries';
import './home.css';

function Home(
            {
                isDark, 
                displayCountryDetails, 
                filteredCountry, 
                handleSubmit, 
                handleChange,
                filterByRegion,
                isLoaded
            }
            ) {

    return (
        <div className = 'home-container container'>
            <Form
                isDark = {isDark}
                handleSubmit = {handleSubmit}
                handleChange = {handleChange}
                filterByRegion = {filterByRegion}

            />
            <Countries
                 isDark = {isDark}
                 isLoaded = {isLoaded}
                 displayCountryDetails = {displayCountryDetails}
                 filteredCountry = {filteredCountry}
            />
        </div>
      
    )
}

export default Home
