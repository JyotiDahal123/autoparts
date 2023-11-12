import Image from "next/image";
import Link from "next/link";

const CardDesign = ({ bannerItems }) => {
  return (
    <div>
      <div className="flex justify-between gap-8 py-8">
        {bannerItems.map((item, index) => (
          <div className="w-1/2 rounded-md relative" key={index}>
            <Image
              src={item.imgItem}
              width={400}
              height={400}
              className="w-full rounded-md h-64"
            />
            <div className="absolute top-0 left-0 flex flex-col gap-2 py-8 px-10 w-3/5 ">
              <p className="font-light text-lg text-orange-600">
                Weekend Discount
              </p>
              <h2 className="text-3xl font-semibold text-white">
                {item.title}
              </h2>
              <p className="text-gray-400">{item.dis}</p>
              <div className="">
                <Link
                  href="/products"
                  className="flex text-sm gap-2 bg-orange-600 text-white justify-center items-center px-3 py-2 rounded-3xl w-36 mt-2"
                >
                  <spna>Shop now </spna>
                  <i class="bx bx-chevrons-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDesign;
