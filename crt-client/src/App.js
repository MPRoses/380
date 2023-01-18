import React, {useEffect, useState} from 'react';
import "./App.css";

import Home from './home/home';
import $ from "jquery";

import {ScrollContainer, ScrollPage} from "react-scroll-motion";


const App = ({ children }) => {

  const [backendData, setBackendData] = useState([{}]);
  
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )  
  }, [])

  //       <div> Hello, {(typeof backendData.user === 'undefined') ? (<p>loading...</p>) : (<p>{backendData.user}</p>)}!</div>

  return (
    <div className="App">
            <Home />
  
    </div>
  );
}

export default App;
