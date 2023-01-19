import React from 'react';
import "./home.css";

import Cursor from './cursor';
import Preloader from './preloader';
import $ from "jquery";

import login from '../img/login.png';
import centralimage from '../img/voorbeeld1.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import linkedin from '../img/linkedin.png';

import { gsap } from "gsap";


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
      $("#centraltextleft").css("animation", "bounceleft 6s cubic-bezier(0.280, 0.840, 0.420, 1) 1 forwards");
      $("#centraltextright").css("animation", "bounceright 6s cubic-bezier(0.280, 0.840, 0.420, 1) 1 forwards");
      setTimeout(() => {
        $("#navbar-item-2").css("animation", "bounce 2s cubic-bezier(0.280, 0.840, 0.420, 1) 1 forwards")
        
        setTimeout(() => {
        $("#navbar-item-1").css("animation", "bounce 2s cubic-bezier(0.280, 0.840, 0.420, 1) 1 forwards")
      }, 250);
      }, 250);
      setTimeout(() => {
        $("#left-background").css("transition",  "left 1s cubic-bezier(.49, .99, .62, .97)");
      }, 1000)
    }, 600);
    

    $(window).scroll(function () { 

      if (window.scrollY > 710) {
        
        $("#left-background").css("left", '-.5vw')
      } else {
        $("#left-background").css("left", '-50vw')
      }
     
    })

    $(".App").on("mousemove", (e) => {
      var a = (e.pageX / window.innerWidth)
      var b = (e.pageY / window.innerHeight);

      $("#centraltextleft").css("left", `calc(-.5vw + ${a} * 1vw)`)
      $("#centraltextright").css("left", `calc(-.5vw + ${a} * 1vw - 50vw)`)
      //$("#centraltextright").css("top", `calc(-0.25vh + ${a} * .5vh - 10vh)`)


    })


  })

  // todo change navbar <p> to <a> 


  return (
      <div className="App">

       
        <div id="left-container">
        <div id="animator">

          <Animator animation={batch(Fade(), Move(), MoveOut(0, 100))}>


          <p id="centraltextleft">
            KIJK NAAR JE<br></br>
            CIJFERS VANUIT<br></br>
            EEN ANDERE HOEK<br></br>
          </p>

        </Animator>

        </div>
               </div>

                 <div id="right-container">
        <div id="animator">

          <Animator animation={batch(Fade(), Move(), MoveOut(0, 100))}>


          <p id="centraltextright">
            KIJK NAAR JE<br></br>
            CIJFERS VANUIT<br></br>
            EEN ANDERE HOEK<br></br>
          </p>

        </Animator>

        </div>
               </div>
          <Cursor />
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
            <p className="navbar-item hoverable" id="navbar-item-1">Download de app</p>
            <p className="navbar-item hoverable" id="navbar-item-2">Ontmoet het team</p>
            <p className="navbar-item hoverable" id="navbar-item-3">Over ons</p>
          </div>
          <div id="login-container">
               <div id="login" className="fadein hoverable">
            <img id="login-image" src={login} alt="login logo thingy" />
            <p id="login-text">
              LOGIN OF<br></br>REGISTREER HIER
            </p>
          </div>
          </div>

          <div id="get-better-grades" className="fadein">
            HAAL<br></br>BETERE<br></br>RESULTATEN
          </div>

          <div id="socials-fixed" className="fadein">
            <p id="socials-text">
              VOLG ONS
            </p>
            <img src={linkedin} id="linkedin" alt="linkedin" className="hoverable" />
            <img src={facebook} id="facebook" alt="facebook" className="hoverable" />
            <img src={instagram} id="instagram" alt="instagram" className="hoverable" />
          </div>

          <div id="left-background"></div>
  
      </div>
  );
}

export default Home;
