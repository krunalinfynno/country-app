import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import CardLayout from "./CardLayout";
import Loader from "./Loader";

const Home = ({ darkMode }) => {
  const [region, setRegion] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);

  const menuItemStyle = {
    backgroundColor: darkMode ? "#2b3945" : "#fff",
    color: darkMode ? "#fff" : "hsl(200, 15%, 8%)",
    paddingLeft: "20px",
    paddingTop: "8px",
    paddingBottom: "8px",
  };

  useEffect(() => {
    let api_url;
    region !== ""
      ? (api_url = `https://restcountries.com/v3.1/region/${region}`)
      : (api_url = "https://restcountries.com/v3.1/all");

    axios
      .get(api_url)
      .then((res) => setCountryData(res?.data))
      .catch((err) => console.error(err));
    return () => {};
  }, [region]);

  useEffect(() => {
    setSearchData(
      countryData.filter((country) => {
        const name = country?.name?.official;
        return name?.includes(searchText);
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <div
      className={`text-sm text-light-mode-text h-full ${
        darkMode && "bg-dark-mode-bg text-white"
      }`}
    >
      <div className="w-full flex justify-between px-28 py-8">
        <div className="flex items-center gap-2">
          <div
            className={`shadow-md w-max h-[56px] px-6 py-4 rounded-md m-2 items-center justify-center gap-3
          ${darkMode ? "bg-dark-mode-elements" : "border border-border-gray"}`}
          >
            <SearchIcon className="text-light-mode-input mr-3" />
            <input
              className={`pl-1 border-none outline-none w-96  ${
                darkMode && "bg-dark-mode-elements text-white"
              }`}
              placeholder="Search for a country"
              onChange={(e) => setSearchText(e?.target?.value)}
            />
          </div>
          {searchText !== "" && (
            <span className="text-light-mode-input">
              {searchData.length} results found.
            </span>
          )}
        </div>

        <FormControl
          sx={{ m: 1, minWidth: 120 }}
          className={`shadow-md text-white hover:outline-none hover:border-none
          ${
            darkMode
              ? "bg-dark-mode-elements text-white"
              : "border border-border-gray"
          }`}
        >
          <Select
            value={region}
            sx={{
              minWidth: "175px",
              color: darkMode ? "white" : "black",
              backgroundColor: darkMode ? "bg-dark-mode-elements" : "bg-white",
            }}
            onChange={(e) => setRegion(e?.target?.value)}
            displayEmpty
          >
            <MenuItem style={menuItemStyle} value="">
              Filter by region
            </MenuItem>
            <MenuItem style={menuItemStyle} value={"Americas"}>
              Americas
            </MenuItem>
            <MenuItem style={menuItemStyle} value={"Africa"}>
              Africa
            </MenuItem>
            <MenuItem style={menuItemStyle} value={"Europe"}>
              Europe
            </MenuItem>
            <MenuItem style={menuItemStyle} value={"Oceania"}>
              Oceania
            </MenuItem>
            <MenuItem style={menuItemStyle} value={"Asia"}>
              Asia
            </MenuItem>
          </Select>
        </FormControl>
      </div>

      <div>
        {searchText !== "" ? (
          <CardLayout data={searchData} darkMode={darkMode} />
        ) : countryData.length > 0 ? (
          <CardLayout data={countryData} darkMode={darkMode} />
        ) : (
          <div
            className={`flex items-center justify-center h-[667px]
    ${darkMode && "bg-dark-mode-bg"}`}
          >
            <Loader darkMode={darkMode} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
