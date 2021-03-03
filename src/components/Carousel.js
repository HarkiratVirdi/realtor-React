import React, { useState } from "react";
import SwiperCore, {
  Lazy,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import Toronto from "../pexels-maarten-van-den-heuvel-4490699.jpg";
import Ottawa from "../pexels-tetyana-kovyrina-1045915 (1).jpg";
import Tobermory from "../flowerpot-island-lighthouse.jpg";
import Niagara from "../pexels-zachary-debottis-1816237.jpg";
import Missi from "../pexels-scott-webb-593150.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
// import "swiper/components/lazy/lazy";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Lazy]);

const Carousel = () => {
  return (
    <div className="container carousel mt-xl">
      <Swiper
        navigation
        lazy
        centeredSlides={true}
        spaceBetween={20}
        slidesPerView={4}
        updateOnWindowResize={true}
        breakpoints={{
          // when window width is >= 480px
          240: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          640: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: false,
          },

          870: {
            slidesPerView: 4,
            spaceBetween: 20,
            centeredSlides: false,
          },

          871: {
            centeredSlides: true,
          },

          1000: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        preventInteractionOnTransition={false}
        
      >
        <div className="h-1 carousel_line">
          <p className="h-2">I Deal all</p>
          <p className="h-2">over Ontario</p>
        </div>
        <SwiperSlide>
          <img src={Toronto} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ottawa} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Niagara} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Tobermory} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Missi} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
