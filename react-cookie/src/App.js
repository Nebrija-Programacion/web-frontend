import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Other from "./Other";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["webtoken"]);

  useEffect(() => {
    setCookie("view-menu", "true");
    return () => {};
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Saving Cookies :)</p>
        <Other></Other>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
