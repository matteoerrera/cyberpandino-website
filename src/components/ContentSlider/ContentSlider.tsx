import React, { useEffect, useRef, useState } from "react";
import "./ContentSlider.scss";
import { ContentSliderProps } from "./ContentSlider.types";
import Skeleton from "react-loading-skeleton";
import Button from "../Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import ContentSliderSlide from "./components/ContentSliderSlide";
import { Pagination } from "swiper/modules";


const ContentSlider: React.FC<ContentSliderProps> = (props) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [isPlaying]);

  return (
    <section
      className={`componentContentSlider ${props.classes ? props.classes : ""} `}
    >
      <div className="componentContentSlider__container container">
        <div className="componentContentSlider__wrapper ">

        <Swiper
          className=" slide-same-height"
          draggable={true}
          grabCursor={true}
          centeredSlides={false}   
          navigation={false}
          slidesPerView={"auto"}
          spaceBetween={20}
          pagination={{
            type: "progressbar",
          }}
          modules={[Pagination]}

          loop={false}
            >
                {props.content.map((slide, i) => (
                    <SwiperSlide key={i}>
                     <ContentSliderSlide {...slide} />
                    </SwiperSlide>
                ))}
            </Swiper>


         
        </div>
      </div>
    </section>
  );
};

export default ContentSlider;
