import React from "react";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";

const Parts = () => {
  const sort_items = [
    {
      key: "1",
      label: "sort by popularity",
    },
    {
      key: "2",
      label: "sort by average rating",
    },
    {
      key: "3",
      label: "sort by latest",
    },
    {
      key: "4",
      label: "sort by price",
    },
  ];
  const sort_items1 = [
    {
      key: "1",
      label: "24 items",
    },
    {
      key: "2",
      label: "32 items",
    },
    {
      key: "3",
      label: "48 items",
    },
    {
      key: "4",
      label: "64 items",
    },
  ];
  return (
    <div className="flex justify-between py-3">
      <p className="text-sm font-light">Showing all 14 results</p>
      <div className="flex gap-8">
        <div className="flex items-center gap-3">
          <span className="text-gray-500">Sort:</span>
          <Dropdown
            className="cursor-pointer"
            menu={{
              items: sort_items,
            }}
            placement="bottomLeft"
            arrow
          >
            <span className="text-sm text-light">
              Default shorting <DownOutlined className="text-[12px] " />
            </span>
          </Dropdown>
        </div>
        <div>
          <span className="text-gray-500">Show:</span>
          <Dropdown
            className="cursor-pointer"
            menu={{
              items: sort_items1,
            }}
            placement="bottomLeft"
            arrow
          >
            <span className="text-sm text-light">
              16 items <DownOutlined className="text-[12px] " />
            </span>
          </Dropdown>
        </div>
        <Link href="/">
          <i class="bx bx-grid-alt"></i>
        </Link>
        <Link href="/">
          <i class="bx bx-list-ul"></i>
        </Link>
      </div>
    </div>
  );
};

export default Parts;
