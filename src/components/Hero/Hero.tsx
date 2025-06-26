import React, { useEffect, useRef } from "react";
import "./Hero.scss";
import { HeroProps } from "./Hero.types";
import Skeleton from "react-loading-skeleton";
import Button from "../Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Link } from "react-router-dom";

const Hero: React.FC<HeroProps> = (props) => {
  const heroRef = useRef<HTMLElement>(null);
  const imageContainers = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Animazione dello swipe per ogni container
    gsap.to(".componentHero__swipe", {
      yPercent: 300,
      delay: 0.2,
      duration: 3,
      stagger: {
        from: "random",
        each: 0.1
      },
      ease: "sine.out"
    });

    // Effetto di velocità diversa per ogni colonna
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.effects(".componentHero__image-cont", {
        speed: () => gsap.utils.random(0.55, 0.85, 0.05)
      });
    }

    // Animazione del parallasse per ogni immagine
    imageContainers.current.forEach((container, index) => {
      if (container) {
        gsap.to(container.querySelector('img'), {
          scale: 1.5,
          xPercent: 20,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=3000px",
            scrub: true
          }
        });
      }
    });

    // Effetto di parallasse per il contenuto
    gsap.to(".componentHero__content", {
      yPercent: -50,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=3000px",
        scrub: true
      }
    });

  }, []);

  return (
    <section
      ref={heroRef}
      className={`componentHero ${props.classes ? props.classes : ""} `}
    >
      <div className="componentHero__container">
        <div className="componentHero__inner">
          {[...Array(6)].map((_, index) => (
            <div 
              key={index}
              ref={el => imageContainers.current[index] = el}
              className="componentHero__image-cont"
            >
              <img
                className="componentHero__image"
                src={props.image} 
                alt={props.title} 
              />
              <div className="componentHero__swipe"></div>
            </div>
          ))}
        </div>
        <div className="componentHero__content">
          <div className="componentHero__content-wrapper">
          {props.brand ? 
            <img src={props.brand} title={props.title} className="componentHero__content__brand" />
          :
            <h2 className="mb-3">{props.title}</h2>
          }
          <h3 className="mb-4" dangerouslySetInnerHTML={{ __html: props.description }} />
          {/* <div className="componentHero__buttons">
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
        <div className="componentHero__stats">
          {props.stats.map((stat, index) => (
            <div key={index} className="componentHero__stat">
              <h5>{stat.value} {stat.um}</h5>
              <h6>{stat.label}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
