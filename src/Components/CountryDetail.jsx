import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const CountryDetail = ({ darkMode }) => {
  const { name } = useParams();
  const [country, setCountry] = useState();
  useEffect(() => {
    name &&
      axios
        .get(`https://restcountries.com/v2/alpha/${name.toLowerCase()}`)
        .then((res) => setCountry(res.data));
  }, [name]);

  return country ? (
    <div
      className={`h-[803px] px-28 pb-20 text-base ${
        darkMode ? "bg-dark-mode-bg text-white" : ""
      }`}
    >
      <div className="text-left py-20">
        <Link to="/">
          <div
            className={`flex items-center gap-2 px-5 w-max py-2 shadow-md rounded-md cursor-pointer
          ${
            darkMode
              ? "bg-dark-mode-elements text-light-mode-bg"
              : "bg-light-mode-bg border border-border-gray"
          }`}
          >
            <KeyboardBackspaceIcon />
            Back
          </div>
        </Link>
      </div>
      <div className="flex lg:flex-row flex-col justify-left 2xl:gap-40 xl:gap-16 gap-12">
        <div>
          <img
            className="w-[550px] xl:h-[350px] lg:h-[250px] shadow-lg"
            src={country?.flags.png}
            alt="Flag not found"
          />
        </div>
        <div className=" flex flex-col gap-10 text-left w-max">
          <div className="text-left text-3xl font-bold mb-5">
            {country?.name}
          </div>
          <div className="flex md:flex-row flex-col gap-20">
            <div className="flex flex-col gap-3">
              <div>
                <span className="font-semibold">Native Name : </span>
                <span>{country?.nativeName}</span>
              </div>
              <div>
                <span className="font-semibold">Popolation : </span>
                <span>
                  {country?.population
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </div>
              <div>
                <span className="font-semibold">Region : </span>
                <span>{country?.region}</span>
              </div>
              <div>
                <span className="font-semibold">Sub Region : </span>
                <span> {country?.subregion}</span>
              </div>
              <div>
                <span className="font-semibold">Capital : </span>
                <span> {country?.capital}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <span className="font-semibold">Top Level Domain : </span>
                <span> {country?.region}</span>
              </div>
              <div>
                <span className="font-semibold">Currrencies : </span>
                {country?.currencies.map((currency, index) => (
                  <span> {currency.code}</span>
                ))}
              </div>
              <div>
                <span className="font-semibold">Languages : </span>
                {country?.languages?.map((language, index) => (
                  <span>
                    {" "}
                    {language.name}
                    {index < country.languages.length - 1 && ","}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-1 h-max w-full">
            <div className="font-semibold w-60">Border Countries :</div>
            <div className="flex flex-wrap gap-1 w-full h-max">
              {country?.borders?.length > 0 ? (
                country?.borders?.map((item) => (
                  <span
                    className={`px-4 py-1 shadow-md mr-3 rounded-md cursor-pointer
              ${
                darkMode
                  ? "bg-dark-mode-elements text-light-mode-bg"
                  : "bg-light-mode-bg border border-border-gray"
              }`}
                  >
                    {item}{" "}
                  </span>
                ))
              ) : (
                <span>No border countries found</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`flex items-center justify-center h-[803px]
    ${darkMode && "bg-dark-mode-bg"}`}
    >
      <Loader darkMode={darkMode} />
    </div>
  );
};

export default CountryDetail;
