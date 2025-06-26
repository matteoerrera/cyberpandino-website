import React, { useEffect, useRef } from "react";
import "./ContentHorizontal.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ContentHorizontalProps } from "./ContentHorizontal.types";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ContentHorizontal: React.FC<ContentHorizontalProps> = (props) => {
  const sectionRef = useRef<HTMLElement>(null);
  const panelsContainerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!panelsContainerRef.current) return;

    const panels = gsap.utils.toArray(".panel");
    
    tweenRef.current = gsap.to(panels, {
      x: () => -1 * (panelsContainerRef.current!.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainerRef.current,
        pin: true,
        start: "top top",
        scrub: 1,
        end: () => "+=" + (panelsContainerRef.current!.scrollWidth - window.innerWidth),
        onUpdate: (self) => {
          // also useful!
          // console.log(self.progress, '/1')
          // console.log(window.scrollY, `/${document.body.scrollHeight - window.innerHeight}`)
        }
      }
    });

    return () => {
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`componentContentHorizontal ${props.classes ? props.classes : ""} `}
    >
      <div className="componentContentHorizontal__container">
        <div className="componentContentHorizontal__wrapper">
          <section id="panels" className="componentContentHorizontal__panels">
            <div 
              ref={panelsContainerRef}
              id="panels-container" 
              className="componentContentHorizontal__panels-container" 
              style={{width: "100%"}}
            >
              <article id="panel-1" className="componentContentHorizontal__panel panel full-screen red">
                <div className="container">
                  <div className="row">
                    <div className="col-6">

                      <img src="" alt="" />

                    </div>
                    <div className="col-6 d-flex flex-column">

                      <h2>Panel 1</h2>

                      <p className="step-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum.
                      </p>

                      
                    </div>
                  </div>
                </div>
              </article>
              <article id="panel-2" className="componentContentHorizontal__panel panel full-screen orange">
                <div className="container">
                  <div className="row">
                    <div className="col-6">

                      <img src="" alt="" />

                    </div>
                    <div className="col-6 d-flex flex-column">

                      <h2>Panel 2</h2>

                      <p className="step-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum.
                      </p>

                     
                    </div>
                  </div>
                </div>
              </article>
              <article id="panel-3" className="componentContentHorizontal__panel panel full-screen purple">
                <div className="container">
                  <div className="row">
                    <div className="col-6">

                      <img src="" alt="" />

                    </div>
                    <div className="col-6 d-flex flex-column">

                      <h2>Panel 3</h2>

                      <p className="step-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum.
                      </p>

                     
                    </div>
                  </div>
                </div>
              </article>
              <article id="panel-4" className="componentContentHorizontal__panel panel full-screen green">
                <div className="container">
                  <div className="row">
                    <div className="col-6">

                      <img src="" alt="" />

                    </div>
                    <div className="col-6 d-flex flex-column">

                      <h2>Panel 4</h2>

                      <p className="step-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum.
                      </p>

                     
                    </div>
                  </div>
                </div>
              </article>
              <article id="panel-5" className="componentContentHorizontal__panel panel full-screen gray">
                <div className="container">
                  <div className="row">
                    <div className="col-6">

                      <img src="" alt="" />

                    </div>
                    <div className="col-6 d-flex flex-column">

                      <h2>Panel 5</h2>

                      <p className="step-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum.
                      </p>
                      <div className="cards-wrapper">
                        <div className="card">test</div>
                        <div className="card">test</div>
                        <div className="card">test</div>
                        <div className="card">test</div>
                        <div className="card">test</div>
                        <div className="card">test</div>
                        <div className="card">test</div>
                        <div className="card">test</div>
                        <div className="card">test</div>
                        <div className="card">test</div>
                        <div className="card">test</div>

                        <div className="card">test</div>
                        <div className="card">test</div>
                        <div className="card">test</div>
                        <div className="card">test</div>
                        <div className="card">test</div>
                        <div className="card">test</div>
                        <div className="card">test</div>
                        <div className="card">test</div>
                        <div className="card">test</div>
                        <div className="card">test</div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ContentHorizontal;
