import Link from "next/link";
import Image from "next/image";
const BodyParts = () => {
  const partsItems = [
    {
      label: "Body Parts",
      src: "https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/body.png",
      href: "/",
    },
    {
      label: "Brake Disks & Pads",
      src: "https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/brakes.png",
      href: "/",
    },
    {
      label: "Engine Parts",
      src: "https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/transmission.png",
      href: "/",
    },
    {
      label: "Filters",
      src: "https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/filters.png",
      href: "/",
    },
    {
      label: "Oils & Fluids",
      src: "https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/oils.png",
      href: "/",
    },
    {
      label: "Tires & Wheels",
      src: "https://klbtheme.com/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/tyres.png",
      href: "/",
    },
    {
      label: "Tools & Equipment",
      src: "https://klbtheme.com/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/tuning.png",
      href: "/",
    },
  ];
  return (
    <ul className="flex justify-between items-center py-6">
      {partsItems.map((item, index) => {
        return (
          <li key={index}>
            <Link
              href={item.href}
              className="flex flex-col justify-center items-center text-sm font-semibold hover:text-orange-600 gap-2"
            >
              <Image width={100} height={100} src={item.src} alt="" />
              <p>{item.label}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default BodyParts;