import Link from "next/link";
import { Button, Dropdown } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

const Topbar = () => {
  const lang_items = [
    {
      key: "1",
      label: "Spanish",
    },
    {
      key: "2",
      label: "French",
    },
    {
      key: "3",
      label: "German",
    },
  ];
  const money_items = [
    {
      key: "1",
      label: "EUR",
    },
    {
      key: "2",
      label: "INR",
    },
    {
      key: "3",
      label: "GBP",
    },
  ];
  return (
    <div className="bg-[#082f49] border-b-[1px] border-gray-500">
      <div className="w-11/12 m-auto flex justify-between text-[13px]  text-white py-3  ">
        <div className="flex gap-4">
          <Link href="/">
            <i class="bx bx-package"></i> Track Order
          </Link>
          <Link href="/">About Us</Link>
          <Link href="/">Contact</Link>
          <Link href="/">FAQ</Link>
        </div>
        <div className="flex gap-4">
          <span>
            <i class="bx bx-phone"></i> You can contact us 24/7
          </span>
          <Link href="/" className="text-[#fbbf24]">
            0 800 300-353
          </Link>
          <Dropdown
            className="cursor-pointer"
            menu={{
              items: lang_items,
            }}
            placement="bottomLeft"
            arrow
          >
            <span>
              English <DownOutlined className="text-[12px] " />
            </span>
          </Dropdown>
          <Dropdown
            className="cursor-pointer"
            menu={{
              items: money_items,
            }}
            placement="bottomLeft"
            arrow
          >
            <span>
              USD <DownOutlined className="text-[12px]" />
            </span>
          </Dropdown>
          <Link href="/" className="flex  gap-1 ">
            <i className="bx bx-sun text-md p-1 rounded bg-gray-700 hover:bg-slate-600"></i>{" "}
            Dark Theme
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
