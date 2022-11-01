import React from "react";

const Loader = ({darkMode}) => {
  return (
    <div
      className={`${
        darkMode ? "lds-ellipsis-dark bg-dark-mode-bg" : "lds-ellipsis"
      } flex items-center`}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
