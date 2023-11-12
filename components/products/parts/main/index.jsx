import React from "react";
import { Card } from "antd";
import Image from "next/image";
import SideBar from "../sidebar";
import { useRouter } from "next/router";
import Link from "next/link";
const { Meta } = Card;

const Filter = () => {
  const router = useRouter();
  const products_items = [
    {
      label:
        "10.1 CD-DVD Multimedia Receiver with Apple CarPlay and Android Auto – CAR8000",
      image:
        "https://klbtheme.com/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/image-1-13.png",
      price: 219.0,
      discount: 14,
      // sold: 8,
      // available: 11,
      // shipping: "Shipping within 3 days",
      // time: "Time remaining until the end of the offer.",
      star: 5,
    },
    {
      label: "Spyder@ - LED Tail Lights",
      image:
        "https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/image-1-39.png",
      price: 219.0,
      discount: 14,
      sold: 8,
      available: 11,
      shipping: "Shipping within 3 days",
      time: "Time remaining until the end of the offer.",
      star: 5,
    },
    {
      label: "Spyder - Custom tail lights",
      image:
        "https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/image-1-38.png",
      price: 200,
      discount: 14,
      sold: 10,
      available: 12,
      shipping: "Today Shipping",
      time: "Time remaining until the end of the offer.",
      star: 4,
    },
    {
      label: "Anzo® – Switchback Headlights",
      image:
        "https://klbtheme.com/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/image-1-3-600x600.png",
      price: 479,
      discount: 8,
      sold: 10,
      available: 12,
      shipping: "Today Shipping",
      time: "Time remaining until the end of the offer.",
      star: 4,
    },
    {
      label: "Oracle Lighting@ - Round Color Halo Sealed Beam Headlights",
      image:
        "https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/image-1-26.png",
      price: 89.13,
      discount: 9,
      sold: 34,
      available: 27,
      shipping: "Shipping within 3 days",
      time: "Time remaining until the end of the offer.",
      star: 4,
    },
    {
      label: "Mothers@ - California Gold Brazilian Carnauba Cleaner Wax",
      image:
        "https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/image-2-19.png",
      price: 9.99,
      discount: 21,
      sold: 36,
      available: 38,
      shipping: "Today Shipping",
      time: "Time remaining until the end of the offer.",
      star: 3,
    },
    {
      label: "Lumen - Custom headlights",
      image:
        "https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/image-1-16.png",
      price: 75.99,
      discount: 7,
      sold: 14,
      available: 15,
      shipping: "Today Shipping",
      time: "Time remaining until the end of the offer.",
      star: 3,
    },
    {
      label: "Two-Piece Brake Rotor",
      image:
        "https://klbtheme.com/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/image-1-40.png",
      price: 435.0,
      discount: 4,
      sold: 22,
      available: 13,
      shipping: "Shipping within 3 days",
      time: "Time remaining until the end of the offer.",
      star: 5,
    },
  ];
  return (
    <div className="grid py-4  grid-flow-col gap-4">
      <div className="row-span-3">
        <SideBar />
      </div>

      <div className="grid grid-cols-4 gap-2">
        {products_items.map((item, index) => {
          return (
            <Card
              hoverable
              className="w-64 relative"
              cover={
                <Image
                  alt="wheel"
                  src={item.image}
                  width={60}
                  height={60}
                />
              }
            >
              {/* <Meta title={item.label} /> */}
              <Link
                href={
                  "/products/" + item.label.toLowerCase().split(" ").join("-")
                }
              >
                <button className="font-semibold text-left">
                  {item.label}
                </button>
              </Link>
              <div className="flex justify-between mb-2">
                <p className="absolute top-3 left-3 text-[12px] bg-red-500 p-1 text-white rounded-md">
                  {item.discount}%
                </p>
                <p className="absolute top-3 right-3">
                  <i className="bx bx-heart text-2xl"></i>
                </p>
              </div>
              <div>
                <p>
                  {Array(item.star).fill(
                    <i className="bx bxs-star text-yellow-500"></i>
                  )}
                </p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-400 line-through">${item.price}</p>
                  <p className="font-semibold text-lg text-red-500">
                    $
                    {(item.price - item.price * (item.discount / 100)).toFixed(2)}
                  </p>
                </div>
                <div>
                  <i
                    className={`bx bx-cart text-2xl bg-red-500 p-1 text-white rounded-md`}
                  ></i>
                </div>
              </div>
              <p className="text-sm font-semibold my-4 text-green-600">
                In Stock
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default Filter;
