import { Divider } from "antd";
import Link from "next/link";
import SocialLinks from "./social-links.jsx";

const Footer = () => {
  const items1 = [
    {
      label: "Accessibility Statement",
      href: "/",
    },
    {
      label: "Your Orders",
      href: "/",
    },
    {
      label: "Returns & Replacements",
      href: "/",
    },
    {
      label: "Shipping Rates & Policies",
      href: "/",
    },
    {
      label: "Refund and Returns Policy",
      href: "/",
    },
    {
      label: "Privacy Policy",
      href: "/",
    },
    {
      label: "Terms and Conditions",
      href: "/",
    },
    {
      label: "Cookie Settings",
      href: "/",
    },
    {
      label: "Help Center",
      href: "/",
    },
  ];
  const items2 = [
    {
      label: "Sell on Blonwe",
      href: "/",
    },
    {
      label: "Sell Your Services on Blonwe",
      href: "/",
    },
    {
      label: "Sell on Blonwe Business",
      href: "/",
    },
    {
      label: "Sell Your Apps on Blonwe",
      href: "/",
    },
    {
      label: "Become an Affilate",
      href: "/",
    },
    {
      label: "Advertise Your Products",
      href: "/",
    },
    {
      label: "Sell-Publish with Us",
      href: "/",
    },
    {
      label: "Become an Blonwe Vendor",
      href: "/",
    },
    {
      label: "Help Center",
      href: "/",
    },
  ];
  const items3 = [
    {
      label: "Sell on Blonwe",
      href: "/",
    },
    {
      label: "Sell Your Services on Blonwe",
      href: "/",
    },
    {
      label: "Sell on Blonwe Business",
      href: "/",
    },
    {
      label: "Sell Your Apps on Blonwe",
      href: "/",
    },
    {
      label: "Become an Affilate",
      href: "/",
    },
    {
      label: "Advertise Your Products",
      href: "/",
    },
    {
      label: "Sell-Publish with Us",
      href: "/",
    },
    {
      label: "Become an Blonwe Vendor",
      href: "/",
    },
    {
      label: "Help Center",
      href: "/",
    },
  ];
  return (
    <div className="bg-[#082f49]">
      <div className="w-11/12 m-auto ">
        <div className="pt-20 pb-10">
          <div className="flex justify-between text-white">
            <div className="w-80 border-r-2 border-x-gray-600 pr-8">
              <h2 className="font-semibold pb-4">Do you need help ?</h2>
              <p className="text-sm">
                Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
                Pressa fåmoska.
              </p>
              <h1 className="text-orange-500 font-bold text-2xl pt-3">
                0 800 300-353
              </h1>
              <p className="text-sm text-gray-400">
                Free from fixed and mobile phones in USA.
              </p>
              <p className="text-gray-400 py-2">
                Email:{" "}
                <span className="text-white text-sm">info@example.com</span>
              </p>
              <p className="text-gray-400">Call Center hours</p>
              <p className="text-sm">Mon-Sun 09:00-19:00</p>
            </div>
            <div>
              <h2 className="font-semibold pb-4">Let's help you</h2>
              <ul className="text-sm">
                {items1.map((item, index) => (
                  <li key={index} className="py-1 hover:underline">
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold pb-4">Make Money with Us</h2>
              <ul className="text-sm">
                {items2.map((item, index) => (
                  <li key={index} className="py-1 hover:underline">
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold pb-4">Make Money with Us</h2>
              <ul className="text-sm">
                {items3.map((item, index) => (
                  <li key={index} className="py-1 hover:underline">
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-t-1 border-gray-500" />
        <SocialLinks />
        <hr className="border-t-1 border-gray-500" />
        <div className="text-white flex justify-between py-8">
          <p className="text-sm">
            Copyright 2023 © Blonwe WordPress Theme. All right reserved. Powered
            by KLBTheme.
          </p>
          <div className="flex justify-center items-center gap-2">
            <p>We accept:</p>
            <div className="flex justify-center items-center">
              <i className="bx bxl-visa text-6xl text-blue-400"></i>
            </div>
            <div className="flex justify-center items-center">
              <i className="bx bxl-mastercard text-5xl text-yellow-500"></i>
            </div>
            <div className="flex justify-center items-center">
              <i className="bx bxl-paypal text-3xl text-blue-500"></i>
            </div>
            <div className="flex justify-center items-center">
              <h2 className="text-xl font-bold text-fuchsia-600">Skrill</h2>
            </div>
            <div className="flex justify-center items-center">
              <h2 className="text-xl font-bold ">Klarna.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
