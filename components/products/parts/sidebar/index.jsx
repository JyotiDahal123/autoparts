import React, { useState } from "react";
import { Checkbox } from "antd";
import { Slider } from "antd";

const SideBar = () => {
  const [sliderValue, setSliderValue] = useState([0, 480]);
  const colors = ["red", "blue", "green", "brown", "gray", "orange"];
  const onChange = (value) => setSliderValue(value);

  return (
    <div className="pr-4">
      <div className="mb-6">
        <p className="mb-6 text-sm font-semibold">Filter by Color</p>
        <div className="flex flex-col gap-4">
          {colors.map((item, index) => (
            <div key={index} className="flex justify-between gap-4">
              <div className="flex gap-4  items-cetner">
                <div
                  className={`w-5 h-5 border rounded-full bg-${item}-500`}
                  style={{ background: item }}
                ></div>
                <div className="font-[300]">{item}</div>
              </div>

              <div className="text-gray-400 text-sm">(3)</div>
            </div>
          ))}
        </div>
      </div>

      <p className="mb-6 text-sm font-semibold">Filter by price</p>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col justify-center items-center gap-2">
          <label className="text-sm font-light">min price</label>
          <input
            type="text"
            className="border w-16 p-2 rounded bg-slate-200"
            value={sliderValue[0]}
            readOnly
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <label className="text-sm font-light">max price</label>
          <input
            type="text"
            className="border w-16 p-2 rounded bg-slate-200"
            value={sliderValue[1]}
            readOnly
          />
        </div>
      </div>
      <div className="my-4">
        <Slider
          range
          value={sliderValue}
          defaultValue={[0, 200]}
          trackStyle={{ background: "black" }}
          max={480}
          onChange={onChange}
          tipFormatter={null}
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm font-light">
          price: ${sliderValue[0]} - ${sliderValue[1]}
        </p>
        <input
          type="text"
          readOnly
          className="bg-slate-200 text-sm font-semibold w-16 rounded p-2"
          value="FILTER"
        />
      </div>
      <div className="my-6">
        <p className="py-4">Brands</p>
        <div className="flex gap-2 flex-col">
          <div className="flex justify-between">
            <Checkbox>Vision</Checkbox>
            <p className="text-sm text-gray-400">(3)</p>
          </div>
          <div className="flex justify-between">
            <Checkbox>Vogue</Checkbox>
            <p className="text-sm text-gray-400">(2)</p>
          </div>
        </div>
        <div className="my-6">
          <p className="py-4">Product Status</p>
          <div className="flex gap-2 flex-col">
            <Checkbox>In Stock</Checkbox>
            <Checkbox>On Sale</Checkbox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
