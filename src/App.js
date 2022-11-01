import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryDetail from "./Components/CountryDetail";

function App() {
  const mode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(mode !== null ? mode : false);
  return (
    <Router>
      <div className="App min-h-screen">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route
            exact
            path="/country/:name"
            element={<CountryDetail darkMode={darkMode} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
