import React from 'react';
import "./home.css";

import Cursor from './cursor';
import Preloader from './preloader';
import $ from "jquery";

import login from '../img/login.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import linkedin from '../img/linkedin.png';
import pageindicator from '../img/pageindicator.png';

import CircleType from "circletype";


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

    const text = document.querySelector(".circular-text .text")
    const rotate = new CircleType(text).radius(15)

    $(window).scroll(function () { 
      gsap.to(".circular-text .text", {rotate: (window.scrollY * 0.15), duration: 2});
      if (window.scrollY > 1 * window.innerHeight) {
        $("#page-indicator-text").css("opacity", "0")
        $("#page-indicator-text2").css("opacity", "1")
        $("#left-background").css("left", '-.5vw')
      } else {
        $("#page-indicator-text").css("opacity", "1")
        $("#page-indicator-text2").css("opacity", "0")
        $("#left-background").css("left", '-50vw')
      }
     
    })

    $(".App").on("mousemove", (e) => {
      var a = (e.pageX / window.innerWidth)
      var b = (-15 + a * 30);
      var c = (e.pageY / window.innerHeight);
      var d = (-10 + c * 20);

      gsap.to("#centraltextleftone", { x: (b * 5), y: d, duration: 2 })
      gsap.to("#centraltextlefttwo", { x: (b * 2.5), y: d, duration: 2 })
      gsap.to("#centraltextleftthree", { x: b, y: d, duration: 2 })
      gsap.to("#centraltextrightone", { x: (b * 5), y: d, duration: 2 })
      gsap.to("#centraltextrighttwo", { x: (b * 2.5), y: d, duration: 2 })
      gsap.to("#centraltextrightthree", { x: b, y: d, duration: 2 })

    })



  })

  // todo change navbar <p> to <a> 


  return (
      <div className="App">

      <Cursor />
      <Preloader />
          
      <div id="Hero">
      <div id="left-container">
        <div id="animator" className="centraltextl">

          <Animator animation={batch(Fade(), Move(), MoveOut(0, 100))}>


          <p id="centraltextleft">
          <span id="centraltextleftone" className="centraltextitem">KIJK NAAR JE</span><br></br>
          <span id="centraltextlefttwo" className="centraltextitem">CIJFERS VANUIT</span><br></br>
          <span id="centraltextleftthree" className="centraltextitem">EEN ANDERE HOEK</span><br></br>
          </p>

        </Animator>

        </div>
        </div>
        <div id="right-container">
        <div id="animator" className="centraltextr">

          <Animator animation={batch(Fade(), Move(), MoveOut(0, 100))}>


          <p id="centraltextright">
            <span id="centraltextrightone" className="centraltextitem">KIJK NAAR JE</span><br></br>
            <span id="centraltextrighttwo" className="centraltextitem">CIJFERS VANUIT</span><br></br>
            <span id="centraltextrightthree" className="centraltextitem">EEN ANDERE HOEK</span><br></br>
          </p>

        </Animator>

          </div>
        </div>
        <div id="get-better-grades" className="fadein">
            HAAL<br></br>BETERE<br></br>RESULTATEN
          </div>
          <div id="navbar">
            <p className="navbar-item hoverable" id="navbar-item-1">Download de app</p>
            <p className="navbar-item hoverable" id="navbar-item-2">Ontmoet het team</p>
            <p className="navbar-item hoverable" id="navbar-item-3">Over ons</p>
          </div>

          <div className="container fadein">  
        <div className="circular-text">
            <p className="text">Scroll • Verder • Voor • Meer • Info •</p>
            <div className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512.568 512.568" style={{"enable-background": "new 0 0 512.568 512.568"}} xmlSpace="preserve"  width="512" height="512">
                    <path d="M184.284,235.284h140v40h-140V235.284z M275.284,436V315.284h-40V436l-53.858-53.858l-28.284,28.285l102.142,102.142  l105.142-105.142l-28.284-28.285L275.284,436z M235.284,76.568v118.716h40V76.568l56.858,56.858l28.284-28.284L255.284,0  L152.142,103.142l28.284,28.284L235.284,76.568z"/>
                </svg>
            </div>

        </div>
    </div>
        </div>
      <div id="Fixed">
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

         
          <div id="login-container">
               <div id="login" className="fadein hoverable">
            <img id="login-image" src={login} alt="login logo thingy" />
            <p id="login-text">
              LOGIN OF<br></br>REGISTREER HIER
            </p>
          </div>
          </div>


          <div id="socials-fixed" className="fadein">
            <p id="socials-text">
              VOLG ONS
            </p>
            <img src={linkedin} id="linkedin" alt="linkedin" className="hoverable" />
            <img src={facebook} id="facebook" alt="facebook" className="hoverable" />
            <img src={instagram} id="instagram" alt="instagram" className="hoverable" />
          </div>

          <div id="page-indicator">
            <img src={pageindicator} alt="pageindicator"/>
            <p id="page-indicator-text">01</p>
            <p id="page-indicator-text2">02</p>
          </div>


          <div id="left-background"></div>
        </div>
      <div id="S2">
        
      </div>
  
      </div>
  );
}

export default Home;
