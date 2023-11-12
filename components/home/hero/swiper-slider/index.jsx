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
import Link from "next/link";

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
          <div className="relative w-full">
            <Image
              src="https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/slider-32.jpg"
              alt=""
              width={900}
              height={450}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-3/5 flex flex-col text-black pt-14 pl-16 gap-6">
              <p className="font-bold">
                Exclusive offer <span className="text-red-500">40% off</span>
              </p>
              <h2 className="text-5xl font-semibold">
                We love cars, also passionate about their parts
              </h2>
              <p className="text-lg font-light">
                Limited time offer for new customers only...
              </p>
              <div className="">
                <Link
                  href="/products"
                  className="flex text-sm gap-2 bg-orange-600 text-white justify-center items-center px-5 py-3 rounded-3xl w-36 mt-2"
                >
                  <spna>Shop now </spna>
                  <i class="bx bx-chevrons-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <Image
              src="https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/slider-34.jpg"
              alt=""
              width={900}
              height={450}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-3/5 flex flex-col text-black pt-14 pl-16 gap-6">
              <p className="font-bold text-white">
                Exclusive offer <span className="text-red-500">30% off</span>
              </p>
              <h2 className="text-5xl text-white font-semibold">
                Providing high quality car parts for any brands
              </h2>
              <p className="text-lg font-light text-white">
                Limited time offer for new customers only...
              </p>
              <div className="">
                <Link
                  href="/products"
                  className="flex text-sm gap-2 bg-orange-600 text-white justify-center items-center px-5 py-3 rounded-3xl w-36 mt-2"
                >
                  <spna>Shop now </spna>
                  <i class="bx bx-chevrons-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <Image
              src="https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/slider-33.jpg"
              alt=""
              width={900}
              height={450}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-3/5 flex flex-col text-white pt-14 pl-16 gap-6">
              <p className="font-bold">
                Exclusive offer <span className="text-red-500">60% off</span>
              </p>
              <h2 className="text-5xl font-semibold">
                Taking your car's performance to the next level
              </h2>
              <p className="text-lg font-light">
                Limited time offer for new customers only...
              </p>
              <div className="">
                <Link
                  href="/products"
                  className="flex text-sm gap-2 bg-orange-600 text-white justify-center items-center px-5 py-3 rounded-3xl w-36 mt-2"
                >
                  <spna>Shop now </spna>
                  <i class="bx bx-chevrons-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SwiperSlider;
