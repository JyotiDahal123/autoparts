import Link from "next/link";
import { Menu } from "antd";
const items = [
  {
    key: "1",
    label: "Home",
    href: "/",
  },
  {
    key: "2",
    label: "Shop",
    icon: <i className="bx bx-chevron-down"></i>,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    key: "3",
    label: "Tires & Wheels",
  },
  {
    key: "4",
    label: "Oils & Fluids",
  },
  {
    key: "5",
    label: "Blog",
  },
  {
    key: "6",
    label: "Tires & Wheels",
    icon: <i className="bx bx-chevron-down"></i>,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
    ],
  },
];
const Navbar = () => {
  return (
    <div className="w-11/12 m-auto flex">
      <Menu
        mode="horizontal"
        items={items}
        className="font-semibold text-[16px] w-10/12 py-1"
      />

      <div className="flex justify-end items-center pl-10">
        <Link href="/" className="font-semibold text-red-600 ">
          Buy Theme
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
