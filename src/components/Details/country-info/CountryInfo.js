import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../../button/Button";
import "./country-info.css";
import { darkMode, lightMode } from "../../../dynamic-styles";

function CountryInfo({
  country,
  isDark,
  getCodeByName,
  displayCountryDetails,
}) {
  const {
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    alpha3Code,
  } = country;

  return (
    <div
      className="country-container"
      style={
        isDark
          ? { color: darkMode.component.global.color }
          : { color: lightMode.component.global.color }
      }
    >
      <div className="flag-container">
        {flag?.length !== 0 ? <img src={flag} alt={name} /> : null}
      </div>

      <div className="info-container2">
        <h1>{name}</h1>

        <div className="flex">
          <div className="info-item-1">
            <h3>
              {nativeName?.length !== 0 ? (
                <Fragment>
                  <span className="title">Native name:</span>
                  {nativeName}
                </Fragment>
              ) : null}
            </h3>
            <h3>
              {population?.toString().length !== 0 ? (
                <Fragment>
                  <span className="title">Population:</span>
                  {population}
                </Fragment>
              ) : null}
            </h3>
            <h3>
              {region?.length !== 0 ? (
                <Fragment>
                  <span className="title">Region:</span>
                  {region}
                </Fragment>
              ) : null}
            </h3>
            <h3>
              {subregion?.length !== 0 ? (
                <Fragment>
                  <span className="title">Sub Region:</span>
                  {subregion}
                </Fragment>
              ) : null}
            </h3>
            <h3>
              {capital?.length !== 0 ? (
                <Fragment>
                  <span className="title">Capital:</span>
                  {capital}
                </Fragment>
              ) : null}
            </h3>
          </div>

          <div className="info-item-2">
            <h3>
              {topLevelDomain?.length !== 0 ? (
                <Fragment>
                  <span className="title">Top Level Domain:</span>
                  {topLevelDomain.map((t) => t).join(", ")}
                </Fragment>
              ) : null}
            </h3>
            <h3>
              {currencies?.length !== 0 ? (
                <Fragment>
                  <span className="title">Currencies:</span>
                  {currencies.map((c) => c.name).join(", ")}
                </Fragment>
              ) : null}
            </h3>
            <h3>
              {languages?.length !== 0 ? (
                <Fragment>
                  <span className="title">Languages:</span>
                  {languages.map((l) => l.name).join(", ")}
                </Fragment>
              ) : null}
            </h3>
          </div>
        </div>

        <div className="info-item-3">
          {borders?.length !== 0 ? (
            <Fragment>
              <span className="title border-span">Border Countries:</span>
              {borders?.map((b) => {
                const countryName = getCodeByName(b);
                return (
                  <Link
                    to={`/home/${countryName}`}
                    key={Math.random() * 1000}
                    onClick={() => {
                      displayCountryDetails(b);
                    }}
                  >
                    <Button
                      className="border-btn"
                      style={
                        isDark
                          ? darkMode.component.btn
                          : lightMode.component.btn
                      }
                      children={<Fragment>{countryName}</Fragment>}
                    ></Button>
                  </Link>
                );
              })}
            </Fragment>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
