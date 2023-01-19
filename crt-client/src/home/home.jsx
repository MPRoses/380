import React from 'react';
import "./home.css";

import Preloader from './preloader';
import $ from "jquery";

import login from '../img/login.png';
import centralimage from '../img/voorbeeld1.png';

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const Home = ({ children }) => {
  // todo change navbar <p> to <a> 

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

   $( function () {

    // preloader
    $("#logo-container").css("opacity", "1");
    setTimeout(() => {
          $("#logo-container").css("color", "white")
      $(".fadein").css("opacity", "1");
      $("#left-background").css("transition",  "left 1s cubic-bezier(.49, .99, .62, .97)");
      $("#left-background").css("left",  "-50vw");
      $("#logo-other").css("left",  "0");
      $("#navbar-item-3").css("animation", "bounce 2s cubic-bezier(0.280, 0.840, 0.420, 1) 1 forwards")
      $("#centralimage").css("animation", "bounce2 6s cubic-bezier(0.280, 0.840, 0.420, 1) 1 forwards");
      setTimeout(() => {
        $("#navbar-item-2").css("animation", "bounce 2s cubic-bezier(0.280, 0.840, 0.420, 1) 1 forwards")
        
        setTimeout(() => {
        $("#navbar-item-1").css("animation", "bounce 2s cubic-bezier(0.280, 0.840, 0.420, 1) 1 forwards")
      }, 250);
      }, 250);
      setTimeout(() => {
        $("#left-background").css("transition",  "left 0s");
      }, 650)
    }, 250);

    /*$(window).scroll(function () { 
      var a = ($(window).scrollTop() / window.innerHeight)
      if (a < 1) {
        $("#left-background").css("left", `calc(-50vw + ${a} * 50vw)`)
      } else {
        $("#left-background").css("left", '0')
      }
    })*/


  })

  // todo change navbar <p> to <a> 

  return (
      <div className="App">
        <img src={centralimage} id="centralimage" alt="temporary until code is written" />
          <Preloader />
          
          <div id="logo-container">
            <div id="logo-p">
              P
            </div>
            <div id="logo-other-container">
              <div id="logo-other">
                ENTAGON.
              </div>
            </div>
          </div>

          <div id="navbar">
            <p className="navbar-item" id="navbar-item-1">Download de app</p>
            <p className="navbar-item" id="navbar-item-2">Ontmoet het team</p>
            <p className="navbar-item" id="navbar-item-3">Over ons</p>
          </div>
          <div id="login-container">
               <div id="login" className="fadein">
            <img src={login} alt="login logo thingy" />
            <p id="login-text">
              LOGIN OF<br></br>REGISTREER HIER
            </p>
          </div>
          </div>

          <div id="get-better-grades" className="fadein">
            Haal<br></br>Betere<br></br>Resultaten
          </div>

          <div id="left-background"></div>
  
      </div>
  );
}

export default Home;
