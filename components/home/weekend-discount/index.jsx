import React from "react";
import { Card, Col, Row } from "antd";
import Image from "next/image";
const WeekendDiscount = () => {
  return (
    <div>
      <div className="flex justify-between py-8">
        <div className="border-none relative">
          <Image
            src="https://klbtheme.com/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/banner-62.jpg"
            alt=""
            width={400}
            height={400}
            className="rounded-md shadow"
          />
          <div className="absolute top-0 left-0 pt-10 pl-8 flex gap-2 flex-col">
            <p className="font-light text-lg text-orange-600">
              Weekend Discount
            </p>
            <h2 className="text-2xl font-semibold">Tires & Wheels</h2>
            <p className="text-gray-400">Only for this week...</p>
            <p className="text-gray-400">
              from{" "}
              <span className="font-bold text-black text-xl">$ 549.99</span>
            </p>
          </div>
        </div>

        <div className="border-none relative">
          <Image
            src="https://klbtheme.com/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/banner-63.jpg"
            alt=""
            width={400}
            height={400}
            className="rounded-md shadow"
          />
          <div className="absolute top-0 left-0 pt-10 pl-8 flex gap-2 flex-col">
            <p className="font-light text-lg text-orange-600">
              Weekend Discount
            </p>
            <h2 className="text-2xl font-semibold">Brake Disk & Pads</h2>
            <p className="text-gray-400">Only for this week...</p>
            <p className="text-gray-400">
              from{" "}
              <span className="font-bold text-black text-xl">$ 449.99</span>
            </p>
          </div>
        </div>

        <div className="border-none relative">
          <Image
            src="https://klbtheme.com/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/banner-64.jpg"
            alt=""
            width={400}
            height={400}
            className="rounded-md shadow"
          />
          <div className="absolute top-0 left-0 pt-10 pl-8 flex gap-2 flex-col">
            <p className="font-light text-lg text-orange-600">
              Weekend Discount
            </p>
            <h2 className="text-2xl font-semibold">Tool & Equipment</h2>
            <p className="text-gray-400">Only for this week...</p>
            <p className="text-gray-400">
              from{" "}
              <span className="font-bold text-black text-xl">$ 849.99</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-8 pb-6">
        <div className="flex items-center gap-8">
          <h2 className="text-xl font-semibold">
            Don't miss this week's sales
          </h2>
          <p className="text-3xl">12:23:34</p>
        </div>
        <p>
          view all <i class="bx bx-right-arrow-alt"></i>
        </p>
      </div>
    </div>
  );
};

export default WeekendDiscount;
