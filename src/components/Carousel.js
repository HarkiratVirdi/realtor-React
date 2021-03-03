import React, {useState} from 'react'
import SwiperCore, {Lazy, Navigation, Pagination, Scrollbar, A11y} from "swiper";
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
              spaceBetween={50}
              slidesPerView={3}
            >
              <div className="h-1 carousel_line">
                  <p className="h-2">I Deal all</p>
                  <p className="h-2">over Ontario</p>
              </div>
              <SwiperSlide>
                Toronto Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Molestiae distinctio soluta consequuntur eum ut
                doloremque, reprehenderit possimus, voluptatibus saepe sit
                asperiores recusandae itaque eveniet et excepturi officia
                repellendus ad obcaecati. Quibusdam qui fugit quam commodi
                dolorum eligendi, consequuntur, temporibus ullam aspernatur
                tempore quaerat minima suscipit non iste modi. Tempora, saepe?{" "}
              </SwiperSlide>
              <SwiperSlide>Brampton</SwiperSlide>
              <SwiperSlide>Oakville</SwiperSlide>
              <SwiperSlide>Oven South</SwiperSlide>
            </Swiper>
          </div>
        );
}

export default Carousel
