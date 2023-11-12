import Image from "next/image";
import { Card } from "antd";
import Link from "next/link";

const Car = () => {
  return (
    <div>
      <div className="w-5/6 my-2 m-auto">
        <h2 className="text-center py-4 text-2xl font-[500]">
          Genuine Auto Parts You Can Find at Affordable Prices
        </h2>
        <p className=" text-gray-600 text-center">
          In hac habitasse platea dictumst. Pellentesque viverra sem nec orci
          lacinia, in bibendum urna mollis. Quisque nunc lacus, varius vel leo
          a, pretium lobortis metus. Vivamus consectetur consequat justo. Sed
          interdum nunc ut tristique congue.
        </p>
      </div>
      <div className="flex justify-between my-10 py-2">
        <div className="w-1/4 p-2 flex flex-col gap-10">
          <div className="flex items-start gap-4">
            <i className="bx bx-color text-5xl bg-orange-600 p-3 text-white rounded-lg"></i>
            <div>
              <h2 className="text-lg font-semibold">
                Praesent blandit ligula non molestie euismod
              </h2>

              <p className="text-gray-500 font-light text-sm">
                Donec euismod, arcu sit amet bibendum malesuada, turpis risus
                posuere nulla, a varius erat tellus vitae nisl.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <i className="bx bx-color text-5xl bg-orange-600 p-3 text-white rounded-lg"></i>
            <div>
              <h2 className="text-lg font-semibold">
                Praesent blandit ligula non molestie euismod
              </h2>

              <p className="text-gray-500 font-light text-sm">
                Donec euismod, arcu sit amet bibendum malesuada, turpis risus
                posuere nulla, a varius erat tellus vitae nisl.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <i className="bx bx-color text-5xl bg-orange-600 p-3 text-white rounded-lg"></i>
            <div>
              <h2 className="text-lg font-semibold">
                Praesent blandit ligula non molestie euismod
              </h2>

              <p className="text-gray-500 font-light text-sm">
                Donec euismod, arcu sit amet bibendum malesuada, turpis risus
                posuere nulla, a varius erat tellus vitae nisl.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <i className="bx bx-color text-5xl bg-orange-600 p-3 text-white rounded-lg"></i>
            <div>
              <h2 className="text-lg font-semibold">
                Praesent blandit ligula non molestie euismod
              </h2>

              <p className="text-gray-500 font-light text-sm">
                Donec euismod, arcu sit amet bibendum malesuada, turpis risus
                posuere nulla, a varius erat tellus vitae nisl.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center px-3">
          <Image
            src="https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/car-banner.png"
            width={400}
            height={400}
            className=""
          />
        </div>
        <div className="w-1/4 p-2 flex flex-col gap-10">
          <div className="flex items-start gap-4">
            <i className="bx bx-color text-5xl bg-orange-600 p-3 text-white rounded-lg"></i>
            <div>
              <h2 className="text-lg font-semibold">
                Praesent blandit ligula non molestie euismod
              </h2>

              <p className="text-gray-500 font-light text-sm">
                Donec euismod, arcu sit amet bibendum malesuada, turpis risus
                posuere nulla, a varius erat tellus vitae nisl.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <i className="bx bx-color text-5xl bg-orange-600 p-3 text-white rounded-lg"></i>
            <div>
              <h2 className="text-lg font-semibold">
                Praesent blandit ligula non molestie euismod
              </h2>

              <p className="text-gray-500 font-light text-sm">
                Donec euismod, arcu sit amet bibendum malesuada, turpis risus
                posuere nulla, a varius erat tellus vitae nisl.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <i className="bx bx-color text-5xl bg-orange-600 p-3 text-white rounded-lg"></i>
            <div>
              <h2 className="text-lg font-semibold">
                Praesent blandit ligula non molestie euismod
              </h2>

              <p className="text-gray-500 font-light text-sm">
                Donec euismod, arcu sit amet bibendum malesuada, turpis risus
                posuere nulla, a varius erat tellus vitae nisl.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <i className="bx bx-color text-5xl bg-orange-600 p-3 text-white rounded-lg"></i>
            <div>
              <h2 className="text-lg font-semibold">
                Praesent blandit ligula non molestie euismod
              </h2>

              <p className="text-gray-500 font-light text-sm">
                Donec euismod, arcu sit amet bibendum malesuada, turpis risus
                posuere nulla, a varius erat tellus vitae nisl.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full mb-8">
        <div className="w-full relative">
          <Image
            src="https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/05/banner-67.jpg"
            alt=""
            width={600}
            height={300}
            className="w-full rounded-md"
          />

          <div className="absolute top-0 left-0 flex flex-col gap-2 p-10 w-3/5 ">
            <p className="font-light text-lg text-orange-600">
              Weekend Discount
            </p>
            <h2 className="text-4xl font-semibold text-white">
              Durable car parts up for sale
            </h2>
            <p className="text-gray-400">
              There Is No Sore It Will Not Heal, No Part It Will Not Subdue...
            </p>
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
      </div>
      <div className="flex justify-between items-center gap-8 pb-6">
        <div className="flex items-center gap-8">
          <h2 className="text-xl font-semibold">Featured Products</h2>
          <p className="text-3xl">12:23:34</p>
        </div>
        <p>
          view all <i class="bx bx-right-arrow-alt"></i>
        </p>
      </div>
    </div>
  );
};

export default Car;
