import React, { useEffect, useRef } from "react";
import "./HeroOld.scss";
import { HeroOldProps } from "./HeroOld.types";
import Skeleton from "react-loading-skeleton";
import Button from "../Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";


const HeroOld: React.FC<HeroOldProps> = (props) => {
  const heroRef = useRef<HTMLElement>(null);
  const imageContainers = useRef<(HTMLDivElement | null)[]>([]);

  
  return (
    <section
      ref={heroRef}
      className={`componentHeroOld ${props.classes ? props.classes : ""} `}
      style={{
       /*  backgroundImage: props.image ? `url(${props.image})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat" */
      }}
    >
      {props.video && (
        <div className="componentHeroOld__video">
          <ReactPlayer
            url={`https://vimeo.com/${props.video}`} 
            controls={false}
            playing={true}
            muted={true}
            loop={true}
            playsinline={true}
            width="100%" 
            height="100%"
            className="componentHeroOld__video__player"
          />
        </div>
      )}
      <div className="componentHeroOld__container">
        <div className="componentHeroOld__content">
          <div className="componentHeroOld__content-wrapper">
          {props.brand ? 
            <img src={props.brand} title={props.title} className="componentHeroOld__content__brand" />
          :
            <h2 className="mb-3">{props.title}</h2>
          }
          <h3 className="mb-4" dangerouslySetInnerHTML={{ __html: props.description }} />
          {/* <div className="componentHeroOld__buttons">
            {props.buttons.map((button, index) => (
              <Button 
                key={index} 
                {...button} 
              />
            ))}
          </div>  */}
          </div>
          <Link to="https://pixel.cyberpandino.com" className="btn">
            Supporta il progetto
          </Link>
        </div>
        <div className="componentHeroOld__stats">
          {props.stats.map((stat, index) => (
            <div key={index} className="componentHeroOld__stat">
              <h5>{stat.value} {stat.um}</h5>
              <h6>{stat.label}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroOld;
