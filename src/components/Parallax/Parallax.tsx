import React, { useState, useEffect, useRef } from "react";
import "./Parallax.scss";
import { ParallaxProps } from "./Parallax.types";
import Skeleton from "react-loading-skeleton";
import Button from "../Button";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Parallax: React.FC<ParallaxProps> = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

 
  return (
    <section
      className={`componentParallax ${props.classes ? props.classes : ""} `}
      style={{ 
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="componentParallax__container container">
        <div className="componentParallax__wrapper outilne-border">
          <div ref={contentRef} className="componentParallax__content dotted-bg">
            <h3>
              {props.title}
            </h3>
            <p>
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
