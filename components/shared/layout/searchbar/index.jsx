import { AlignCenterOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Select, Space, Button, Avatar, Badge } from "antd";

const { Search } = Input;
const Searchbar = () => {
  const options = [
    {
      value: "zhejiang",
      label: "Zhejiang",
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
    },
  ];
  return (
    <div className="bg-[#082f49]">
      <div className="w-11/12 m-auto py-6 flex justify-between items-center gap-2">
        <div className="flex items-center gap-6">
          <img src="logo-auto.png" alt="logo" width={170} />
          <div className="text-white  flex justify-center items-center gap-1 p-2 bg-slate-700 rounded hover:bg-slate-600">
            <i className="bx bx-menu text-3xl"></i>
            <p className="text-sm">Menu</p>
          </div>
        </div>
        <div className="w-1/2 border-2 border-orange-600 rounded-lg">
          <Space.Compact className="h-12 w-full">
            <Select defaultValue="All" options={options} className="h-12" />
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
