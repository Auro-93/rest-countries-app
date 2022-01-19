import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Loading from "./components/loading/Loading";
import Error from "./components/error/Error";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import "./global-style.css";
import { darkMode, lightMode } from "./dynamic-styles";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [countries, setCountries] = useState([]);
  const [countryDetails, setCountryDetails] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState([]);

  const handleTheme = () => {
    setIsDark(isDark ? false : true);
  };

  const displayAllCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const countries = await response.json();

      if (countries) {
        console.log(countries);
        setCountries(countries);
        setFilteredCountry(countries);
        setIsLoaded(true);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const displayCountryDetails = (alpha3Code) => {
    const country = countries.filter(
      (country) => country.alpha3Code === alpha3Code
    );
    setCountryDetails(country);
    return country;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (term) => {
    if (term.length < 2 || term.length === "") return;
    const countrySearched = countries.filter((country) => {
      return country.name.toLowerCase().includes(term);
    });

    setFilteredCountry(countrySearched);
  };

  const filterByRegion = (region) => {
    switch (region) {
      case "Africa":
      case "Americas":
      case "Asia":
      case "Europe":
      case "Oceania":
        const filtered = countries.filter(
          (country) => country.region === region
        );
        setFilteredCountry(filtered);
        break;
      case "All":
      default:
        setFilteredCountry(countries);
    }
  };

  const getCodeByName = (code) => {
    if (isLoaded === true) {
      const match = countries.filter((country) => country.alpha3Code === code);
      if (match[0] !== undefined) {
        return match[0].name;
      }
    }
  };

  const saveTheme = () => {
    localStorage.setItem("theme", JSON.stringify(isDark));
  };

  const loadTheme = () => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", JSON.stringify(""));
    } else {
      let themeLoaded = JSON.parse(localStorage.getItem("theme"));
      setIsDark(themeLoaded);
    }
  };

  useEffect(() => {
    displayAllCountries();
    loadTheme();
  }, []);

  useEffect(() => {
    saveTheme();
  }, [isDark]);

  return (
    <Router>
      <div
        className="App"
        style={isDark ? darkMode.background : lightMode.background}
      >
        <Header isDark={isDark} handleTheme={handleTheme} />

        <Route exact path="/">
          {isLoaded ? (
            <Home
              isDark={isDark}
              isLoaded={isLoaded}
              countries={countries}
              setCountries={setCountries}
              displayCountryDetails={displayCountryDetails}
              filteredCountry={filteredCountry}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              filterByRegion={filterByRegion}
            />
          ) : error === true ? (
            <Error />
          ) : (
            <Loading />
          )}
        </Route>

        <Route
          path="/home/:name"
          children={
            <Details
              isDark={isDark}
              countryDetails={countryDetails}
              setCountryDetails={setCountryDetails}
              getCodeByName={getCodeByName}
              countries={countries}
              isLoaded={isLoaded}
              displayAllCountries={displayAllCountries}
              displayCountryDetails={displayCountryDetails}
            />
          }
        ></Route>
      </div>
    </Router>
  );
}

export default App;
