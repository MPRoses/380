import React from 'react';
import "./preloader.css";
import $ from "jquery";


function Preloader() {

  $( () => {
    $(".Preloader-container").css("opacity",  "0")

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
