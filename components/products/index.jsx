import React from "react";
import Layout from "../shared/layout";
import Image from "next/image";
import Link from "next/link";
import Parts from "./parts";
import Filter from "./parts/main";
import Subscribe from "../shared/sub-components/subscribe";
import RecentlyViewItems from "./recentaly-view-items";

const Products = () => {
  return (
    <Layout>
      <div className="">
        <div className="relative">
          <Image
            src="https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/banner-67.jpg"
            width="900"
            height="500"
            alt=""
            className="w-full h-80 object-cover"
          />
          <div className="w-full h-80 flex flex-col gap-4 justify-center items-center absolute text-white border-3 border-white top-0 left-0">
            <p className="text-semibold">Contact Us For Blonwe</p>
            <h1 className="text-6xl font-semibold">Our Shop</h1>
            <p className="w-2/5 text-center">
              Contact us for all your questions and opinions, or you can solve
              your problems in a shorter time with our contact offices.
            </p>
          </div>
        </div>
        <div className="w-11/12 m-auto">
          <div className=" my-3 flex items-center">
            <Link href="/" className="text-sm font-extralight">
              Home
            </Link>
            <i class="bx bx-chevron-right"></i>
            <Link href="/" className="text-gray-400 text-sm font-extralight">
              Body Parts
            </Link>
          </div>
          <Parts />
          <hr className="border-t-1 border-gray-300" />
          <Filter />

          <RecentlyViewItems />
          <hr className="border-t-1 border-gray-300" />
          <Subscribe />
        </div>
      </div>
    </Layout>
  );
};

export default Products;
