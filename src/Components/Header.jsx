import React from "react";
import ModeNightIcon from "@mui/icons-material/ModeNight";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div
      className={`flex justify-between px-28 shadow-md py-6 ${
        darkMode
          ? "bg-dark-mode-elements shadow-md shadow-light-mode-bg text-white"
          : ""
      }`}
    >
      <div className="font-semibold text-xl">Where in the world?</div>
      <div
        className="flex justify-center items-center gap-2 cursor-pointer"
        onClick={() => {
          setDarkMode(!darkMode);
          localStorage.setItem("darkMode", darkMode);
        }}
      >
        <ModeNightIcon /> <span>Dark Mode</span>
      </div>
    </div>
  );
};

export default Header;
