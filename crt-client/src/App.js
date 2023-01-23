import React, {useEffect, useState} from 'react';
import "./App.css";

import Home from './home/home';
import $ from "jquery";
import login from './img/login.png';
import cross from './img/cross.png';



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


  $(() => {


    if (window.location.href.includes("login")) {
      $("#fullscreenbg").css("top", "0")
    }


    $("#login").on("click", () => {
      if (window.location.href.includes("login")) {
        window.location.href = window.location.href;
      } else {
        window.location.href = `${window.location.href}login`
      }
     
    })
    $("#cross-login").on("click", () => {
      $("#fullscreenbg").css("top", "100vh")
    })


  })

  return (
   
    <ScrollContainer>
      <div className="App">
        
          <Home />

          <div id="login-container">
               <div id="login" className="fadein hoverable">
            <img id="login-image" src={login} alt="login logo thingy" />
            <p id="login-text">
              LOGIN OF<br></br>REGISTREER HIER
            </p>
          </div>
          </div>

      
        

  

        <div id="fullscreenbg">
          <img id="cross-login" src={cross} alt="cross" />

          <form method="POST" action="getMessage">
          <input type="text" name="message" placeholder="vul je message in"></input>
          <input type="submit" value="submit het maar"></input>
        </form> 
        </div>

      </div>
    </ScrollContainer>

  );
}

export default App;
