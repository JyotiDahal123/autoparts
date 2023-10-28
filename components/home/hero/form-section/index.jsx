import React from "react";
import { Button, Form, Input, Select } from "antd";
const { Option } = Select;

const FormSection = () => {
  const formRef = React.useRef(null);

  return (
    <div className="p-6">
      <div>
        <h2 className="text-xl font-semibold pb-2">
          Find The Right Parts Faster
        </h2>
        <p className="text-sm text-gray-500">
          Having the right automotive parts and car accessories will help you to
          boost your travel comfort and go on the long-distance journey
          comfortably that you have been planning.
        </p>
      </div>
      <div className="mt-4">
        <Form
          ref={formRef}
          name="control-ref"
          className="w-full flex flex-col items-center justify-between gap-6"
        >
          <Select
            placeholder="Select Make"
            allowClear
            className="w-full text-lg"
          >
            <Option value="audi">Audi</Option>
            <Option value="bmw">BMW</Option>
            <Option value="chevrolet">Chevrolet</Option>
            <Option value="dodge">Dodge</Option>
          </Select>

          <Select placeholder="Select Model" allowClear className="w-full">
            <Option value="a3">A3</Option>
            <Option value="b5">B5</Option>
            <Option value="c4">C4</Option>
            <Option value="c2">C2</Option>
          </Select>

          <Select placeholder="Select Year" allowClear className="w-full">
            <Option value="2020">2020</Option>
            <Option value="2021">2021</Option>
            <Option value="2022">2023</Option>
            <Option value="2024">2024</Option>
          </Select>

          <Button className="bg-orange-600 text-white w-full" htmlType="submit">
            Find auto parts
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default FormSection;
{
  /*  */
}
