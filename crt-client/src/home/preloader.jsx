import React from 'react';
import "./preloader.css";
import $ from "jquery";


function Preloader() {

  $( () => {

    setTimeout(() => {
      
      $(".Preloader-container").css("opacity",  "0")

    }, 2000);

  })
  return (
    <div className="Preloader-container">
      <div className="preloader">
        <div className="preloader-circle"></div>
        <div className="preloader-circle"></div>
        <div className="preloader-circle"></div>
        <div className="preloader-circle"></div>
        <div className="preloader-circle"></div>
        <div className="preloader-circle"></div>
        <div className="preloader-circle"></div>
        <div className="preloader-circle"></div>
        <div className="preloader-circle"></div>
        <div className="preloader-circle"></div>
        </div>
    </div>
  );
}

export default Preloader;
