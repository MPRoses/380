import React, {useEffect, useState} from 'react';
import "./App.css";

import Home from './home/home';
import $ from "jquery";

import {ScrollContainer, ScrollPage} from "react-scroll-motion";


function App() {

  const [backendData, setBackendData  ] = useState([{}]);


  function appel() {

      fetch("/api").then(
        response => response.json()
      ).then(
        data => {
          setBackendData(data);
        }
      )  

  }

  //       <div> Hello, {(typeof backendData.user === 'undefined') ? (<p>loading...</p>) : (<p>{backendData.user}</p>)}!</div>

  //      <button id="knop" onClick={()=>appel()}>Call appel(), die callt een fetch, die haalt data op</button>

  //    <p>{backendData.user}</p>

  return (
    <div className="App">
      
      <Home />
    
      

      <form method="POST" action="getMessage">
        <input type="text" name="message" placeholder="vul je message in"></input>
        <input type="submit" value="submit het maar"></input>
      </form>

    </div>
  );
}

export default App;
