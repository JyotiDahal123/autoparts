import Layout from "../shared/layout";
import BodyParts from "./body-parts";
import Car from "./car";
import CardDesign from "./cardDesign";
import Hero from "./hero";
import HomeTop from "./hero/home-top";
import WeekendDiscount from "./weekend-discount";
import WheelsParts from "./products-parts";
import Services from "./services";
import OurNews from "./our-news";
import Subscribe from "../shared/sub-components/subscribe";
const Home = () => {
  const wheels_items = [
    {
      label: "X-Series Brake Rotor",
      image:
        "https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/image-1-45.png",
      price: 272.34,
      discount: 28,
      sold: 25,
      available: 21,
      shipping: "Shipping within 3 days",
      time: "Time remaining until the end of the offer.",
      star: 3,
    },
    {
      label: "XD SERIES@ -XD820 GRENADE Satin Black Milled with Red Clear Coat",
      image:
        "https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/image-1-44.png",
      price: 395.0,
      discount: 2,
      sold: 13,
      available: 11,
      shipping: "Today Shipping",
      time: "Time remaining until the end of the offer.",
      star: 5,
    },
    {
      label: "VOSSEN@ - EVO-4 Custom Finish",
      image:
        "https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/image-1-43.png",
      price: 2000.0,
      discount: 6,
      sold: 14,
      available: 23,
      shipping: "Shipping within 3 days",
      time: "Time remaining until the end of the offer.",
      star: 4,
    },
    {
      label: "VOSSEN@ - CUSTOM BUILT RADIAL",
      image:
        "https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/image-1-42.png",
      price: 216.68,
      discount: 3,
      sold: 28,
      available: 29,
      shipping: "Today Shipping",
      time: "Time remaining until the end of the offer.",
      star: 4,
    },
    {
      label: "VOSIONN@ - 425 BANE Chrome",
      image:
        "https://klbtheme.com/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/image-1-41.png",
      price: 224.0,
      discount: 2,
      sold: 25,
      available: 38,
      shipping: "Today Shipping",
      time: "Time remaining until the end of the offer.",
      star: 3,
    },
    // {
    //   label: "Two-Piece Brake Rotor",
    //   image:
    //     "https://klbtheme.com/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/image-1-40.png",
    //   price: 435.0,
    //   discount: 4,
    //   sold: 22,
    //   available: 13,
    //   shipping: "Shipping within 3 days",
    //   time: "Time remaining until the end of the offer.",
    //   star: 5,
    // },
  ];
  const products_items = [
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
    // {
    //   label: "Two-Piece Brake Rotor",
    //   image:
    //     "https://klbtheme.com/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/image-1-40.png",
    //   price: 435.0,
    //   discount: 4,
    //   sold: 22,
    //   available: 13,
    //   shipping: "Shipping within 3 days",
    //   time: "Time remaining until the end of the offer.",
    //   star: 5,
    // },
  ];
  const banner1 = [
    {
      title:"The best car parts on the planet",
      dis:"Aftermarket, And on, And on...",
      imgItem:
        "https://klbtheme.com/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/banner-66.jpg",
    },
    {
      title:"We import and export car parts",
      dis:"Aftermarket, And on, And on...",
      imgItem:
        "https://klbtheme.com/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/banner-65.jpg",
    },
  ];
  const banner2 = [
    {
      title:"The best car parts, guaranteed",
      dis:"Only this week, Don't miss..,",
      imgItem:
        "https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/banner-68.jpg",
    },
    {
      title:"Only branded car parts inside",
      dis:"Only this week, Don't miss..,",
      imgItem:
        "https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/banner-69.jpg",
    },
  ];

  return (
    <Layout>
      <div className="w-11/12 m-auto">
        <HomeTop />
        <Hero />
        <hr className="border-t-1 border-gray-300" />
        <BodyParts />
        <hr className="border-t-1 border-gray-300" />
        <WeekendDiscount />
        <hr className="border-t-1 border-gray-300" />
        <WheelsParts parts_items={wheels_items} />
        <CardDesign bannerItems={banner1} />
        <Car />
        <hr className="border-t-1 border-gray-300" />
        <WheelsParts parts_items={products_items} />
        <CardDesign bannerItems={banner2} />
        <Services />
        <OurNews />
        <hr className="border-t-1 border-gray-300" />
        <Subscribe />
      </div>
    </Layout>
  );
};
export default Home;
