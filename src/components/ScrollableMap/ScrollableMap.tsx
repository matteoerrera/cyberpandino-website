import React, { useEffect, useRef } from "react";
import "./ScrollableMap.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollableMapProps } from "./ScrollableMap.types";

/* gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin); */

const ScrollableMap: React.FC<ScrollableMapProps> = (props) => {

  /* useEffect(() => {
    
    // set initial states
    gsap.set("#scrollDist", { width: "100%", height: "2500%" });
    gsap.set("#container", {
      position: "fixed",
      width: 2883,
      height: 2875,
      transformOrigin: "0 0"
    });
    gsap.to("#container", {
      duration: 1,
      opacity: 1,
      ease: "power2.inOut",
      delay: 0.3
    });
    // gsap.set("#c", { transformOrigin: "50% 50%", x: 610, y: 2300 });
    // gsap.set("#c", { transformOrigin: "50% 50%", x: 610, y: 2300 });
    let rotateTo = gsap.quickTo("#c", "rotation"),
      prevDirection = 0;
    //tween the svg path + circle
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#scrollDist",
        markers: true,
        onUpdate: ({ direction, progress }) => {
          if (prevDirection !== direction) {
            // only run this when we're changing direction
            rotateTo(direction === 1 ? 0 : 180);
            prevDirection = direction;
          }
          console.log(progress);
        },
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5
      }
    });

    t1.to(
      ".car-container",
      {
        immediateRender: true,
        ease: "none",
        motionPath: {
          path: "#p",
          align: "#p",
          alignOrigin: [1, 0.5],
          autoRotate: 90
        }
      },
      0
    );

    t1.to(
      ".text1",
      {
        visibility: "visible",
        duration: 2,
        ease: "elastic"
      },
      0.15
    );
    t1.to(
      ".text1",
      {
        visibility: "hidden",
        duration: 2,
        ease: "elastic"
      },
      0.17
    );

    //move container's x/y to follow the red circle
    gsap.ticker.add(() =>
      gsap.to("#container", {
        duration: 0.7,
        x: -gsap.getProperty(".car-container", "x"),
        y: -gsap.getProperty(".car-container", "y")
      })
    );

    //center the container's left/top position
    window.onload = window.onresize = () => {
      gsap.set("#container", { left: innerWidth / 2, top: innerHeight / 2 });
    };

  }, []); */
 

  return (
    <section
      className={`componentScrollableMap ${props.classes ? props.classes : ""} `}
    >
      <div id="scrollDist"></div>
      <div id="container">

        <img src="https://res.cloudinary.com/dgsoeeawo/image/upload/v1683126659/far-cry-6-checkpoint-locations-map_s1qyhy.jpg" />
        <div className="car-container">
          <img id="c" src="https://res.cloudinary.com/dgsoeeawo/image/upload/v1683126657/top-car-view-png-34867_cbkrga.png" width="50"  alt="" />
        </div>
        <p className="text text1">
          hello 1
        </p>
        <p className="text text2">
          hello 2
        </p>
        <p className="text text3">
          hello 3
        </p>
        <svg width="990" height="1828" viewBox="0 0 990 1828" stroke="#f00" strokeWidth="5" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: "absolute", top: "18%", left: "12.8%"}}>

          <path id="p" d="M322 1827.5L1 538.5L275 460L14 184.5L510.5 58.5L963 1.5L989 345.5L613 474L763.5 578.5L989 495.5" stroke="black" />
        </svg>
      </div>
     
    </section>
  );
};

export default ScrollableMap;
