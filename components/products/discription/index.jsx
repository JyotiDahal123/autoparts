import React from "react";
import { Tabs } from "antd";

const { items } = Tabs;

const Description = () => (
  <Tabs defaultActiveKey="1" className="my-8">
    <items
      tab={<span className="border-none text-lg">Description</span>}
      key="1"
    >
      <p className="text-lg font-extralight">
        Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin
        vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra
        vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at
        sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque
        lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam
        aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel
        ornare vel, dignissim a tortor.
      </p>
      <br />
      <p className="text-lg font-extralight">
        Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor,
        eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra.
        Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor.
        Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus
        ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit.
        Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus,
        ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet
        consequat nulla felis pharetra lacus. Duis semper erat mauris, sed
        egestas purus commodo vel.
      </p>
    </items>
    <items tab={<span className="border-none text-lg">Reviews</span>} key="2">
      <p className="text-lg font-semibold">
        3 reviews for 10.1″ CD/DVD Multimedia Receiver with Apple CarPlay and
        Android Auto – CAR8000
      </p>
    </items>
  </Tabs>
);

export default Description;
