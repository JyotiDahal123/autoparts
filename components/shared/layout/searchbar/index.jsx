import React, { useState } from "react";
import { AlignCenterOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Input,
  Select,
  Space,
  Button,
  Avatar,
  Badge,
  Drawer,
  Menu,
} from "antd";

const { Search } = Input;
const Searchbar = () => {
  const items = [
    {
      key: "1",
      label: "Home",
      href: "/",
    },
    {
      key: "2",
      label: "Shop",
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:111",
            },
            {
              label: "Option 2",
              key: "setting:2222",
            },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            {
              label: "Option 3",
              key: "setting:33",
            },
            {
              label: "Option 4",
              key: "setting:44",
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
      children: [
        {
          type: "group",
          label: "Item",
          children: [
            {
              label: "Option",
              key: "setting:1",
            },
            {
              label: "Option",
              key: "setting:2",
            },
          ],
        },
      ],
    },
  ];

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-[#082f49]">
      <div className="w-11/12 m-auto py-6 flex justify-between items-center gap-2">
        <div className="flex items-center gap-6">
          <img src="logo-auto.png" alt="logo" width={170} />

          <Space className="">
            <Button
              className="text-white text-sm px-4 py-6   flex justify-center items-center gap-1  bg-slate-700 rounded hover:bg-slate-600 border-none"
              onClick={showDrawer}
            >
              <i className="bx bx-menu text-3xl"></i> Menu
            </Button>
          </Space>
          <Drawer
            title={<img src="logo-dark.png" className="w-40" />}
            placement={placement}
            onClose={onClose}
            open={open}
            key={placement}
            closable={true}
          >
            <Menu
              mode="vertical"
              items={items}
              className="font-semibold text-[16px] w-10/12 py-1"
            />
          </Drawer>
        </div>

        <div className="w-1/2 border-2 border-orange-600 rounded-lg">
          <Space.Compact className="h-12 w-full">
            <Select defaultValue="All" className="h-12" />
            <Input
              type="text"
              className="outline-none border-r-0 border-t-0 border-b-0 border-l-1 border-gray-400"
              placeholder="Search for Products..."
            />
            <Button className="h-12 flex justify-center items-center text-white bg-orange-600">
              <i className="bx bx-search text-xl font-bold"></i>
            </Button>
          </Space.Compact>
        </div>
        <div className="flex text-white gap-6 items-center">
          <div className="flex gap-3 justify-center items-center">
            <i className="bx bx-user text-3xl"></i>
            <div className="flex flex-col justify-center items-center">
              <p className="text-gray-400 text-[13px]">sign in</p>
              <p className="text-sm">Account</p>
            </div>
          </div>

          <div>
            <Space size="middle">
              <Badge count={1}>
                <i className="bx bx-heart text-3xl text-white"></i>
              </Badge>
            </Space>
          </div>
          <div>
            <Space size="middle">
              <Badge count={1}>
                <i className="bx bx-cart text-3xl text-white"></i>
              </Badge>
            </Space>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="text-gray-400 text-sm">Total</p>
            <p className="text-sm">$0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
