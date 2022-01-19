import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { darkMode, lightMode } from "../../dynamic-styles";
import "./countries.css";
import Country from "./country/Country";

function Countries({
  isDark,
  isLoaded,
  displayCountryDetails,
  filteredCountry,
}) {
  return (
    <div className="countries-container">
      {filteredCountry.length > 0 ? (
        filteredCountry?.map((country) => (
          <Link
            to={`/home/${country.name}`}
            key={country.alpha3Code}
            className="country-link"
            onClick={() => {
              displayCountryDetails(country.alpha3Code);
              localStorage.setItem(
                "countryDetails",
                JSON.stringify(displayCountryDetails(country.alpha3Code))
              );
            }}
          >
            <Country isDark={isDark} country={country} />
          </Link>
        ))
      ) : (
        <div
          className="error"
          style={isDark ? darkMode.component.error : lightMode.component.error}
        >
          <i className=" error-icon fas fa-exclamation-triangle"></i>
          <span>Sorry, Country not found.</span>
        </div>
      )}
    </div>
  );
}

export default Countries;
