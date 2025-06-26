import React, { useState, useEffect, useRef } from "react";
import "./Image.scss";
import { ImageProps } from "./Image.types";
import Skeleton from "react-loading-skeleton";
import Button from "../Button";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ReactPlayer from "react-player";

gsap.registerPlugin(SplitText);

const Image: React.FC<ImageProps> = (props) => {

  return (
    <section
      className={`componentImage ${props.classes ? props.classes : ""} `}
    >
      <div className="componentImage__container container">
        <div className="componentImage__wrapper outilne-border">
          <div className="componentImage__image">
              <img src={props.image} alt={props.title} />
          </div>
          <div  className="componentImage__content dotted-bg">
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

export default Image;
