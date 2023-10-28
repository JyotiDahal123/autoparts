import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const SwiperSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper rounded-lg"
      >
        <SwiperSlide>
          <Image
            src="https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/slider-32.jpg"
            alt=""
            width={1200}
            height={350}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/slider-33.jpg"
            alt=""
            width={1200}
            height={350}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/slider-34.jpg"
            alt=""
            width={1200}
            height={350}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SwiperSlider;
