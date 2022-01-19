import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import CountryInfo from "./country-info/CountryInfo";
import "./details.css";
import { darkMode, lightMode } from "../../dynamic-styles";

function Details({
  isDark,
  countryDetails,
  setCountryDetails,
  displayCountryDetails,
  getCodeByName,
}) {
  const loadCountry = () => {
    if (localStorage.getItem("countryDetails") === null) {
      localStorage.setItem("countryDetails", JSON.stringify([]));
    } else {
      let countryLoaded = JSON.parse(localStorage.getItem("countryDetails"));
      setCountryDetails(countryLoaded);
    }
  };

  useEffect(() => {
    loadCountry();
  }, []);

  return (
    <div className="details-container container">
      <Link to="/">
        <Button
          isDark={isDark}
          className="back-btn"
          style={isDark ? darkMode.component.btn : lightMode.component.btn}
          children={
            <Fragment>
              <i className="back-arrow fas fa-long-arrow-alt-left"></i>
              Back
            </Fragment>
          }
        ></Button>
      </Link>

      {countryDetails?.map((country) => (
        <CountryInfo
          key={country.alpha3Code}
          country={country}
          isDark={isDark}
          getCodeByName={getCodeByName}
          displayCountryDetails={displayCountryDetails}
        />
      ))}
    </div>
  );
}

export default Details;
