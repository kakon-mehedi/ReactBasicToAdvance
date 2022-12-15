import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../api/Api";
import "./country.css";

function Countries() {
  const [countryData, setCountryData] = useState([]);
  const [filterdCountry, setFilterdCountry] = useState(countryData);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchApi(url) {
      let response = await fetch(url);
      let ApiDataInJson = await response.json();
      setCountryData(ApiDataInJson);
      setFilterdCountry(ApiDataInJson);
    }
    fetchApi(API_BASE_URL);
  }, []);

  useEffect(() => {
    search(query);
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleRemoveClick = (countryName) => {
    const updatedCountries = filterdCountry.filter(
      (country) => country.name.common !== countryName
    );
    setFilterdCountry(updatedCountries);
  };

  const search = (query) => {
    const searchResult = countryData.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setFilterdCountry(searchResult);
  };

  return (
    <>
      <div className="search">
        <input type="text" placeholder="Search" onChange={handleInputChange} />
      </div>
      <div className="country-list">
        {filterdCountry.map((country) => {
          return (
            <div className="country" key={country.name.common}>
              <div className="flag">
                <img className="country-img" src={country.flags.png} alt="" />
              </div>
              <div
                className="remove"
                onClick={() => {
                  handleRemoveClick(country.name.common);
                }}
              >
                X
              </div>
              <h2 className="country-name">{country.name.common}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Countries;
