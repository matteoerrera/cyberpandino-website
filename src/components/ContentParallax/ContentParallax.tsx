import React, { useEffect, useRef } from "react";
import "./ContentParallax.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContentParallaxProps } from "./ContentParallax.types";

gsap.registerPlugin(ScrollTrigger);

const ContentParallax: React.FC<ContentParallaxProps> = (props) => {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imagesRef.current && itemsRef.current) {
      const images = gsap.utils.toArray<HTMLImageElement>(".componentContentParallax__image img");
      const items = gsap.utils.toArray<HTMLDivElement>(".componentContentParallax__item");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=20%",
          pin: true,
          scrub: true,
          markers: false,
          invalidateOnRefresh: true,
          fastScrollEnd: true
        }
      });

      images.forEach((img, i) => {
        if (images[i + 1]) {
          tl.to(img, { opacity: 0 })
            .to(images[i + 1], { opacity: 1 }, "<")
            .to(items, { yPercent: -(100 * (i + 1)), ease: "none" }, "<");
        }
      });

      tl.to({}, {}, "+=0.5");
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`componentContentParallax ${props.classes ? props.classes : ""} `}
    >
      <div className="componentContentParallax__container">
        <div className="componentContentParallax__wrapper">
          <div ref={imagesRef} className="componentContentParallax__images">
            {props.images.map((image, i) => (
              <div key={i} className="componentContentParallax__image">
                <img style={{zIndex: 10 - i}} src={image} alt="" />
              </div>
            ))}
          </div>
          <div ref={itemsRef} className="componentContentParallax__items">
            {props.content.map((slide, i) => (
              <div className="componentContentParallax__item" key={i}>
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentParallax;
