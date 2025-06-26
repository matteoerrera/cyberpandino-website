import React, { useState, useEffect, useRef } from "react";
import "./Video.scss";
import { VideoProps } from "./Video.types";
import Skeleton from "react-loading-skeleton";
import Button from "../Button";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import ReactPlayer from "react-player";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const Video: React.FC<VideoProps> = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  /* useEffect(() => {
    if (contentRef.current) {
      document.fonts.ready.then(() => {
        const textSplit = SplitText.create(".componentVideo__content p", { type: "chars", charsClass: "char" });

        textSplit.chars.forEach((char) => {
          gsap.set(char, { attr: { "data-content": char.innerHTML } });
        });

        contentRef.current!.onpointermove = (e) => {
          textSplit.chars.forEach((char) => {
            const rect = char.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const content = (char as HTMLElement).dataset.content;
            if (dist < 100 && content)
              gsap.to(char, {
                overwrite: true,
                duration: 1.2 - dist / 100,
                scrambleText: {
                  text: content,
                  chars: ".:",
                  speed: 0.5,
                },
                ease: 'none'
              });
          });
        };
      });
    }
  }, []); */

  return (
    <section
      className={`componentVideo ${props.classes ? props.classes : ""} `}
    >
      <div className="componentVideo__container container">
        <div className="componentVideo__wrapper outilne-border">
          <div className="componentVideo__video">
              <ReactPlayer
                url={`https://vimeo.com/${props.video}`} 
                controls={false}
                playing={true}
                muted={true}
                loop={true}
                playsinline={true}
                width="100%" 
                height="100%"
                className="componentVideo__video__player"
              />
            {/* <button className="componentVideo__play">
              {isPlaying ? 
                <svg width={16} height={16}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M11 4.75v14.5A1.75 1.75 0 0 1 9.25 21h-1.5A1.75 1.75 0 0 1 6 19.25V4.75C6 3.784 6.784 3 7.75 3h1.5c.966 0 1.75.784 1.75 1.75M16.25 3h-1.5A1.75 1.75 0 0 0 13 4.75v14.5c0 .966.784 1.75 1.75 1.75h1.5A1.75 1.75 0 0 0 18 19.25V4.75A1.75 1.75 0 0 0 16.25 3"></path></svg>
                : 
                <svg width={16} height={16}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M11 4.75v14.5A1.75 1.75 0 0 1 9.25 21h-1.5A1.75 1.75 0 0 1 6 19.25V4.75C6 3.784 6.784 3 7.75 3h1.5c.966 0 1.75.784 1.75 1.75M16.25 3h-1.5A1.75 1.75 0 0 0 13 4.75v14.5c0 .966.784 1.75 1.75 1.75h1.5A1.75 1.75 0 0 0 18 19.25V4.75A1.75 1.75 0 0 0 16.25 3"></path></svg>
              }
            </button> */}
          </div>
          <div ref={contentRef} className="componentVideo__content dotted-bg">
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

export default Video;
