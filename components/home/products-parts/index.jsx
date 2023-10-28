import { Card } from "antd";
import Image from "next/image";
const { Meta } = Card;
const WheelsParts = ({ parts_items }) => {
  return (
    <div className="flex justify-between gap-3 py-6">
      {parts_items.map((item, index) => {
        return (
          <Card
            hoverable
            className="w-64 relative"
            cover={
              <Image
                alt="wheel"
                src={item.image}
                width={50}
                height={50}
                className=""
              />
            }
          >
            <Meta title={item.label} />
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

            <div className="flex justify-between">
              <p className="text-gray-400">
                Available:{" "}
                <span className="text-black font-semibold">
                  {item.available}
                </span>
              </p>
              <p className="text-gray-400">
                Sold:{" "}
                <span className="text-red-600 font-semibold">{item.sold}</span>
              </p>
            </div>
            <p className="text-sm font-light">{item.time}</p>
            <p className="mt-2 border px-4 py-1 rounded-full  font-light">
              <i class="bx bxs-package"></i> {item.shipping}
            </p>
          </Card>
        );
      })}
    </div>
  );
};

export default WheelsParts;
