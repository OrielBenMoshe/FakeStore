import React, { useEffect, useState, useRef } from "react";
import MyContext from "./MyContext";

import logo from "./logo.svg";
import Spinner from "./Spinner.gif";
import "./App.css";

import Button from "react-bootstrap/Button";
import Item from "./Item";

import useFetch from "./useFetch";

function App() {
  // const [list, setList] = useState(null);
  // const [isClicked, setIsClicked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const input = useRef();
  const {
    data: list,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products?limit=12");

  if (error) console.log("error:", error);

  const handleFetch = () => {
    console.log("clicked");
    // setIsClicked(true);
    // fetch("https://fakestoreapi.com/products?limit=12")
    //   .then((res) => res.json())
    //   .then((json) => setList(json));
  };

  useEffect(() => {
    console.log("list:", list);
  }, [list]);

  useEffect(() => {
    console.log(input);
    input.current.focus();
  }, []);

  return (
    <MyContext.Provider value={[isDarkMode, setIsDarkMode]}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>מתרגלים</p>
          <h1>FULL STACK</h1>
        </header>
        <div className="App-body">
          <Button onClick={handleFetch}>לחץ עלי</Button>
          <input ref={input} />
          <div className="items">
            {list ? (
              list.map((item, key) => {
                
                return <Item key={key} value={item} />;
              })
            ) : (
              <img
                src={Spinner}
                className="spinner"
                alt="spinner"
                style={{ margin: "auto" }}
              />
            )}
          </div>
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
