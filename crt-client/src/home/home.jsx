import React from 'react';
import "./home.css";

import Cursor from './cursor';
import Preloader from './preloader';
import $ from "jquery";

import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import linkedin from '../img/linkedin.png';
import apple from '../img/apple.png';
import android from '../img/android.png';
import magister from '../img/somNmagister.png';
import lock from '../img/lock.png';
import circle from '../img/circle.png';
import review from '../img/review.png'; 
import stars from '../img/stars.png'; 
import enabledcircle from '../img/activecircle.png'; 
import disabledcircle from '../img/disabledcircle.png'; 


import pageindicator from '../img/pageindicator.png';

import CircleType from "circletype";


import { gsap } from "gsap";

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const Home = ({ children }) => {
  // todo change navbar <p> to <a> 

  var a = 1;

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

   $( function () {

   

    // preloader
    $("#logo-container").css("opacity", "1");
    setTimeout(() => {
      $(".fadein").css("opacity", "1");
      $("#left-background").css("transition",  "left 1s cubic-bezier(.49, .99, .62, .97), top 1s cubic-bezier(.49, .99, .62, .97)");
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
        $("#left-background").css("transition",  "left 1s cubic-bezier(.49, .99, .62, .97), top 1s cubic-bezier(.49, .99, .62, .97)");
      }, 1000)
    }, 600);

    const text = document.querySelector(".circular-text .text")
    const rotate = new CircleType(text).radius(15)

    $(window).scroll(function () { 
      gsap.to(".circular-text .text", {rotate: (window.scrollY * 0.15), duration: 2});
      if (window.scrollY > 1 * window.innerHeight && window.scrollY < 1.8 * window.innerHeight) {
        $("#page-indicator-text").css("opacity", "0")
        $("#page-indicator-text2").css("opacity", "1")
        $("#left-background").css("left", '-.5vw')
        $(".fadeinS2").css("opacity",  "1"); 
        $("#S2-head").css("top",  "50px");
        $("#S2-description").css("top",  "110px");
        $("#Apple-slide, #Register-slide, #Slimmer-slide").css("top",  "200px");
        $("#Android, #Review").css("top",  "32.5vh");
        //$("#Review-indicator").css("top", "30vh")
        $("#left-background").css("top", '0vh')
        $(".perspective-item").css("transform", "translate(0, 0)")
      } else if (window.scrollY < 1 * window.innerHeight){
        $("#page-indicator-text").css("opacity", "1")
        $("#page-indicator-text2").css("opacity", "0")
        $("#left-background").css("left", '-50vw')
        $(".fadeinS2").css("opacity",  "0");
        $("#S2-head").css("top",  "100px");
        $("#S2-description").css("top",  "160px");
        $("#Apple-slide, #Register-slide, #Slimmer-slide").css("top",  "250px");
        $("#Android, #Review").css("top",  "calc(32.5vh + 50px)");
        //$("#Review-indicator").css("top", "calc(30vw + 50px)");
        $(".perspective-item").css("transform", "translate(0, -90px)")
        $("#left-background").css("top", '0vh')
      } else {
        $(".fadeinS2").css("opacity",  "0");
        $("#S2-head").css("top",  "50px");
        $("#S2-description").css("top",  "70px");
        $("#Apple-slide, #Register-slide, #Slimmer-slide").css("top",  "150px");
        $("#Android, #Review").css("top",  "calc(32.5vh - 50px)");
        $(".perspective-item").css("transform", "translate(0, 90px)")
        $("#left-background").css("top", '-100vh')
      }
     
    })

    $(".App").on("mousemove", (e) => {

      if (window.scrollY < 1 * window.innerHeight && $("#fullscreenbg").css("top") !== "0px") {  
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
      }
    })


    // slides

    const Aslide = document.getElementById('Apple-slide');

    Aslide.addEventListener('mousemove', function(e) {
      const r = this.getBoundingClientRect()
      this.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
      this.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
    })

    Aslide.addEventListener('mouseleave', function() {
      this.style.setProperty('--x', 0)
      this.style.setProperty('--y', 0) 
    })

    const Bslide = document.getElementById('Android-slide');

    Bslide.addEventListener('mousemove', function(e) {
      const r = this.getBoundingClientRect()
      this.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
      this.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
    })

    Bslide.addEventListener('mouseleave', function() {
      this.style.setProperty('--x', 0)
      this.style.setProperty('--y', 0) 
    })

    const Cslide = document.getElementById('Register-slide');

    Cslide.addEventListener('mousemove', function(e) {
      const r = this.getBoundingClientRect()
      this.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
      this.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
    })

    Cslide.addEventListener('mouseleave', function() {
      this.style.setProperty('--x', 0)
      this.style.setProperty('--y', 0) 
    })

    const Dslide = document.getElementById('Slimmer-slide');

    Dslide.addEventListener('mousemove', function(e) {
      const r = this.getBoundingClientRect()
      this.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
      this.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
    })

    Dslide.addEventListener('mouseleave', function() {
      this.style.setProperty('--x', 0)
      this.style.setProperty('--y', 0) 
    })

    const Eslide = document.getElementById('Review-slide');

    Eslide.addEventListener('mousemove', function(e) {
      const r = this.getBoundingClientRect()
      this.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
      this.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
    })

    Eslide.addEventListener('mouseleave', function() {
      this.style.setProperty('--x', 0)
      this.style.setProperty('--y', 0) 
    })


    $("#navbar-item-1").on("click", () => {
      window.scrollTo({top: 1.1 * window.innerHeight, behavior: "smooth"})
    })


    $("#Review").on("click", () => {
      a++;
      if (a === 1) {
        $(".cube-description-rating2").html("Tantoeleipe app jonguh. echt helemaal koeke of nie dan! super ( :<");
      } else if (a === 2) {
        $(".cube-description-rating2").html("Tantoeleipe app review 2");
      } else if (a === 3) {
        $(".cube-description-rating2").html("Tantoeleipe app review 3");
      } else if (a === 4) {
        $(".cube-description-rating2").html("Tantoeleipe app review 4.");
      } else if (a === 5) {
        $(".cube-description-rating2").html("echt helemaal koeke of nie dan! super ( :<");
        a = 0
      }
    })

    $("#Register").on("click", () => {
      if (window.location.href.includes("login")) {
        window.location.href = window.location.href;
      } else {
        window.location.href = `${window.location.href}login`
      }

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
        <div className="circular-text fadein">
            <p className="text">Scroll • Verder • Voor • Meer • Info •</p>
            <div className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512.568 512.568" style={{"enable-background": "new 0 0 512.568 512.568"}} xmlSpace="preserve"  width="512" height="512">
                    <path d="M184.284,235.284h140v40h-140V235.284z M275.284,436V315.284h-40V436l-53.858-53.858l-28.284,28.285l102.142,102.142  l105.142-105.142l-28.284-28.285L275.284,436z M235.284,76.568v118.716h40V76.568l56.858,56.858l28.284-28.284L255.284,0  L152.142,103.142l28.284,28.284L235.284,76.568z"/>
                </svg>
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

        <div className="area fadeinS2">
              <ul className="circles">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
              </ul>
      </div >

          <div id="S2-head" className="fadeinS2">
              Soepele ervaring op elk apparaat
            </div>
          <div id="S2-description" className="fadeinS2">
            <p> 
            Of je nu achter <span>je bureau of op school zit</span> - Pentagon helpt je met het moeilijke door het voor je uit te stippelen
            </p>
          </div>
          <div id="S2-cubes">
            <div id="Apple" onClick={() => openInNewTab('https://apple.nl')} className="small-cube hoverable fadeinS2">
            <div id="Apple-slide" className="slide">
                <div className="slide__bg-wrapper Apple-wrapper">
                </div>
                <div className="slide__content">
                  <p className="cube-title">IOS</p>
                  <p className="cube-description">Nu beschikbaar in de App Store</p>
                  <img className="cube-image" src={apple} alt="apple" />
                </div>

              </div>
            </div>
            <div id="Android" onClick={() => openInNewTab('https://google.nl')}  className="small-cube hoverable fadeinS2">
            <div id="Android-slide" className="slide">
                <div className="slide__bg-wrapper Android-wrapper">
                </div>
                <div className="slide__content">
                  <p className="cube-title">ANDROID</p>
                  <p className="cube-description">Nu beschikbaar in de Google Play Store</p>
                  <img className="cube-image" src={android} alt="android" />
                </div>

              </div>
              
            </div>
            <div id="Register" className="small-cube hoverable fadeinS2">
            <div id="Register-slide" className="slide">
                <div className="slide__bg-wrapper Register-wrapper">
                  <img className="cube-image-register" src={magister} alt="images" />
                </div>
                <div className="slide__content">
                  <p className="cube-title">GEMAKKELIJK AANMELDEN</p>
                  <p className="cube-description">Meld veilig en eenvoudig aan met 
  Somtoday of Magister</p>
                  <img className="cube-image-up" src={lock} alt="lock" />
                </div>

              </div>
              
            </div>
            <div id="Slimmer" className="small-cube hoverable fadeinS2">
            <div id="Slimmer-slide" className="slide">
                <div className="slide__bg-wrapper Slimmer-wrapper">
                </div>
                <div className="slide__content">
                  <p className="cube-title">LEER SLIMMER</p>
                  <p className="cube-description">Leer gerichter met Pentagon door handige adviezen</p>
                  <img className="cube-image" src={circle} alt="circle" />
                </div>

              </div>
              
            </div>
            <div id="Review" className="small-cube hoverable fadeinS2">
            <div id="Review-slide" className="slide">2
                <div className="slide__bg-wrapper Review-wrapper">
                  <img className="cube-image-review" src={review} alt="images" />
                </div>
                <div className="slide__content">
                  <p className="cube-title-rating">4,4</p>
                  <img className="cube-image-stars" src={stars} alt="images" />
                  <p className="cube-description-rating">App rating</p>
                  <p className="cube-description-rating2">Tantoeleipe app jonguh. echt helemaal
  koeke of nie dan! super ( :</p>
                </div>

              </div>
              
            </div>
            <div id="Review-indicator" className="fadeinS2">
              <img src={enabledcircle} alt="indicator" id="indicator-circle-1" className="indicator-circle"/>
              <img src={disabledcircle} alt="indicator" id="indicator-circle-2" className="indicator-circle"/>
              <img src={disabledcircle} alt="indicator" id="indicator-circle-3" className="indicator-circle"/>
              <img src={disabledcircle} alt="indicator" id="indicator-circle-4" className="indicator-circle"/>
              <img src={disabledcircle} alt="indicator" id="indicator-circle-5" className="indicator-circle"/>
            </div>
          </div>
          <div className="perspective-text fadeinS2">
            <div className="perspective-line">
              <p className="perspective-item"></p>
              <p className="perspective-item">Leer</p>
            </div>
            <div className="perspective-line">
              <p className="perspective-item">Leer</p>
              <p className="perspective-item">Slimmer</p>
            </div>
            <div className="perspective-line">
              <p className="perspective-item">Slimmer</p>
              <p className="perspective-item">Niet</p>
            </div>
            <div className="perspective-line">
              <p className="perspective-item">Niet</p>
              <p className="perspective-item">Harder</p>
            </div>
            <div className="perspective-line">
              <p className="perspective-item">Harder</p>
              <p className="perspective-item"></p>
            </div>
          </div>

        </div>
      </div>
  );
}

export default Home;
