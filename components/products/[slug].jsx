import React, { useState } from "react";
import Link from "next/link";
import Layout from "../shared/layout";
import Image from "next/image";
import { Card } from "antd";
import Discription from "./discription";
import RelatedProducts from "./related-products";
import RecentlyViewItems from "./recentaly-view-items";
import Subscribe from "../shared/sub-components/subscribe";
import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    count < 20 ? setCount(count + 1) : 0;
  };
  const decrementHandler = () => {
    count > 0 ? setCount(count - 1) : 0;
  };

  const icon_items = [
    {
      icon: <i className="bx bxl-facebook text-xl"></i>,
      href: "/",
      color: "#3b82f6",
    },
    {
      icon: <i className="bx bxl-twitter"></i>,
      href: "/",
      color: "#38bdf8",
    },
    {
      icon: <i className="bx bxl-pinterest"></i>,
      href: "/",
      color: "#e11d48",
    },
    {
      icon: <i className="bx bxl-linkedin"></i>,
      href: "/",
      color: "#60a5fa",
    },
    {
      icon: <i className="bx bxl-reddit"></i>,
      href: "/",
      color: "#ea580c",
    },
  ];
  return (
    <Layout>
      <div className="w-11/12 m-auto">
        <div>
          <div className=" my-3 flex items-center">
            <Link href="/" className="text-sm font-extralight">
              Home
            </Link>
            <i class="bx bx-chevron-right"></i>
            <Link href="/" className="text-sm font-extralight">
              Body Parts
            </Link>
            <i class="bx bx-chevron-right"></i>
            <Link href="/" className="text-sm text-gray-400 font-extralight">
              {router.query.slug && router.query.slug.split("-").join(" ")}
            </Link>
          </div>
          <div className="p-2">
            <h2 className="text-3xl font-semibold">
              {router.query.slug && router.query.slug.split("-").join(" ")}
            </h2>
            <div className="flex text-sm gap-2 font-semibold">
              <div className="flex text-[#fbbf24]">
                {Array(3)
                  .fill(<i class="bx bxs-star"></i>)
                  .map((item, index) => (
                    <p key={index} className="">
                      {item}
                    </p>
                  ))}
              </div>
              <p>3 reviews</p>
            </div>
          </div>
          <hr className="border-t-1 border-gray-300" />
        </div>
        {/* grid */}
        <div className="py-10">
          <div className="grid grid-cols-3 gap-3">
            <div className="p-6 relative">
              <Image
                src="https://klbtheme.com/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/image-1-13-1024x1024.png"
                width="1024"
                height="1024"
              />
              <div className="absolute top-10 left-6">
                <div className="bg-red-600 p-2 w-14 h-14 text-white font-bold rounded-full flex justify-center items-center">
                  20%
                </div>
              </div>
              <div className="flex gap-2  justify-center">
                <Link href="/" className="w-16 border-1 border-gray-600">
                  <Image
                    src="https://klbtheme.com/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/image-1-13-150x150.png"
                    width={150}
                    height={150}
                  />
                </Link>
                <Link href="/" className="w-16">
                  <Image
                    src="https://klbtheme.com/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/image-2-11-150x150.png"
                    width={150}
                    height={150}
                  />
                </Link>
                <Link href="/" className="w-16">
                  <Image
                    src="https://klbtheme.com/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/image-3-6-150x150.png"
                    width={150}
                    height={150}
                  />
                </Link>
              </div>
            </div>

            <div>
              <p className="bg-green-100 text-green-600 w-20 text-sm text-center text-bold rounded-md py-1 px-2">
                In stock
              </p>
              <p className="my-3 text-sm text-gray-500">
                Fusce sapien urna, tristique non sapien nec, rutrum fringilla
                eros. Etiam accumsan odio eget tempus consectetur. Aliquam et
                sapien nulla. Suspendisse lobortis leo ante, imperdiet tristique
                magna tristique eu. Nullam ultrices vulputate odio, eu iaculis
                nulla congue quis.
              </p>
              <div className="bg-red-100 flex gap-2 items-center rounded my-6  px-4 py-2">
                <i className="bx bx-cart text-orange-600 text-xl"></i>
                <p className="text-sm text-orange-600 font-extralight">
                  This product has been added to{" "}
                  <span className="font-semibold">1 people</span> carts.
                </p>
              </div>
              <div className="flex gap-2 flex-col font-light text-sm mb-6">
                <p>
                  <i className="bx bx-check text-lg text-green-800"></i>
                  <span className="font-bold">Delivered today</span> (order
                  Mon-Fri before 12:00, delivery between 17:00 and 22:00)
                </p>
                <p>
                  <i className="bx bx-check text-lg text-green-800"></i>
                  <span className="font-bold">Including</span> shipping costs,
                  sent by blonwe.com
                </p>
                <p>
                  <i className="bx bx-check text-lg text-green-800"></i> Pick up
                  at a blonwe.com collection point is possible
                </p>
                <p>
                  <i className="bx bx-check text-lg text-green-800"></i> 30 days
                  to change your mind and free returns
                </p>
                <p>
                  <i className="bx bx-check text-lg text-green-800"></i> Day and
                  night customer service
                </p>
              </div>
              <hr className="border-t-1 border-gray-300" />
              <div className="my-4 flex gap-2 flex-col text-sm font-extralight">
                <p>
                  SKU: <span className="font-normal">U5Z8B9I6Q1</span>
                </p>
                <p>
                  Categories:{" "}
                  <span className="font-normal">
                    Body Parts, Tools & Equipment
                  </span>{" "}
                </p>
                <p>
                  Tags:
                  <span className="font-normal">Android Auto ,CarPlay</span>
                </p>
              </div>
              {/* social icon */}
              <div className=" flex gap-1">
                {icon_items.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className={`flex justify-center items-center rounded-full w-8 h-8 
                      `}
                      style={{
                        border: "1px solid " + item.color,
                        color: item.color,
                      }}
                    >
                      {item.icon}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col items-center ">
              <Card bordered={false} className="w-80 border h-fit">
                <div className="flex justify-center gap-1">
                  <h2 className="line-through text-lg text-gray-400">
                    $369.00
                  </h2>
                  <h2 className="text-red-500 text-2xl font-semibold">
                    $350.00
                  </h2>
                </div>
                <div className="flex justify-between my-4 py-2">
                  <p className="cursor-pointer" onClick={decrementHandler}>
                    <i className="bx bx-minus text-lg font-bold"></i>
                  </p>
                  <p>{count}</p>
                  <p className="cursor-pointer" onClick={incrementHandler}>
                    <i className="bx bx-plus text-lg font-bold"></i>
                  </p>
                </div>
                <hr className="border-t-1 border-gray-300" />
                <div className="my-4">
                  <button className="w-full bg-green-600 text-white text-[15px] py-3 font-semibold rounded">
                    Add to Cart
                  </button>
                </div>
              </Card>
              <div className="flex flex-col items-start justify-start   my-8">
                <p>
                  <i className="bx bxs-heart text-lg"></i>View wishlist
                </p>
                <p className="text-gray-400">
                  {" "}
                  <span className="text-semibold text-gray-400">
                    2 people
                  </span>{" "}
                  favorited this product
                </p>
              </div>
            </div>
          </div>
        </div>
        <Discription />
        <RelatedProducts />
        <RecentlyViewItems />
        <hr className="border-t-1 border-gray-300" />
        <Subscribe />
      </div>
    </Layout>
  );
};

export default Slug;
