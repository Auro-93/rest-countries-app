import React, { Fragment } from "react";
import "../../../dynamic-styles";
import { darkMode, lightMode } from "../../../dynamic-styles";

function Country({ isDark, country }) {
  const { flag, name, population, region, capital } = country;
  return (
    <div
      className="card"
      style={isDark ? darkMode.component.global : lightMode.component.global}
    >
      <div className="flag" style={{ backgroundImage: `url(${flag})` }} />

      <div className="info-container">
        <div className="country-name">
          <p>{name}</p>
        </div>

        <div className="info">
          {population?.toString().length !== 0 ? (
            <Fragment>
              <span>Population:</span>
              {population}
            </Fragment>
          ) : null}
        </div>
        <div className="info">
          {region?.length !== 0 ? (
            <Fragment>
              <span>Region:</span>
              {region}
            </Fragment>
          ) : null}
        </div>
        <div className="info">
          {capital?.length !== 0 ? (
            <Fragment>
              <span>Capital:</span>
              {capital}
            </Fragment>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Country;
