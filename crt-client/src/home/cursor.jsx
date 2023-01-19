import React from 'react';
import "./cursor.css";
import { gsap } from "gsap";
import $ from "jquery";


function Cursor() {

  $( () => {
     const cursor = document.getElementById("cursor");
  const cursorBallBig = document.querySelector(".circle-big");
  const cursorBallSmall = document.querySelector(".circle-small");

  let posS = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let posB = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let mouse = { x: posS.x, y: posS.y };
  const speed = 0.1;
  let fpms = 60 / 1000;

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  const xSetBallSmall = gsap.quickSetter(cursorBallSmall, "x", "px");
  const ySetBallSmall = gsap.quickSetter(cursorBallSmall, "y", "px");
  const xSetBallBig = gsap.quickSetter(cursorBallBig, "x", "px");
  const ySetBallBig = gsap.quickSetter(cursorBallBig, "y", "px");

  gsap.ticker.add((time, deltaTime) => {
    let delta = deltaTime * fpms;
    let dt = 1.0 - Math.pow(1.0 - speed, delta);

    posS.x += mouse.x - posS.x - 4;
    posS.y += mouse.y - posS.y - 6;
    posB.x += (mouse.x - posB.x - 15) * dt;
    posB.y += (mouse.y - posB.y - 12) * dt;
    xSetBallSmall(posS.x);
    ySetBallSmall(posS.y);
    xSetBallBig(posB.x);
    ySetBallBig(posB.y);
    });

    $(window).on("mousedown", () => {
      $("#bigcircle-svg").css("transform", "scale(1.2)");
    })
    $(window).on("mouseup", () => {
      $("#bigcircle-svg").css("transform", "scale(1)");
    })
    $(".hoverable").on("mouseenter", () => {
      $("#bigcircle-svg").css({
        transform: "Scale(1.4)"
      });
      $("#circle-big").css("fill", "rgba(255,255,255,0)")
    })
    $(".hoverable").on("mouseleave", () => {
      $("#bigcircle-svg").css({
        transform: "Scale(1)"
      });
      $("#circle-big").css("fill", "rgba(255,255,255,1)")
    })
  })



  return (
    <div id="cursor">
  <div className="cursor-circle circle-big">
    <svg height="30" width="30" id="bigcircle-svg">
      <circle cx="15" cy="15" r="12" stroke-width="0" id="circle-big"></circle>
    </svg>
  </div>
  <div className="cursor-circle circle-small">
    <svg height="10" width="10">
      <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
    </svg>
  </div>
</div>

  );
}


export default Cursor;
