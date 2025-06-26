import React, { useEffect, useRef } from "react";
import "./InfoCards.scss";
import { InfoCardsProps } from "./InfoCards.types";
import Skeleton from "react-loading-skeleton";
import Button from "../Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const InfoCards: React.FC<InfoCardsProps> = (props) => {
  const comparisonSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (comparisonSectionRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: comparisonSectionRef.current,
          start: "center center",
          end: () => "+=" + (comparisonSectionRef.current?.offsetWidth || 0),
          scrub: true,
          pin: true,
          anticipatePin: 1
        },
        defaults: { ease: "none" }
      });

      tl.fromTo(
        comparisonSectionRef.current.querySelector(".componentInfoCards__afterImage"),
        { xPercent: 100, x: 0 },
        { xPercent: 0 }
      )
      .fromTo(
        comparisonSectionRef.current.querySelector(".componentInfoCards__afterImage img"),
        { xPercent: -100, x: 0 },
        { xPercent: 0 },
        0
      );
    }
  }, []);

  return (
    <section
      className={`componentInfoCards ${props.classes ? props.classes : ""} `}
    >
      <div className="componentInfoCards__container container">
       

        <div ref={comparisonSectionRef} className="componentInfoCards__comparisonSection">
          <div className="componentInfoCards__comparisonImage componentInfoCards__beforeImage">
            <img src={props.image} alt="before" />
          </div>
          <div className="componentInfoCards__comparisonImage componentInfoCards__afterImage">
            <img src={props.afterImage} alt="after" />
          </div>
        </div>

        <div className="componentInfoCards__stats">
          {props.cards.map((card, index) => (
            <div key={index} className="componentInfoCards__stat">
              <h4>{card.value} <span>{card.unit}</span></h4>
              <h6>{card.description}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
