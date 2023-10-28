import Image from "next/image";
const OurNews = () => {
  const newsItems = [
    {
      image:
        "https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/03/post-04.jpg",
      device: "TABLET",
      title: "English Breakfast Tea With Tasty Donut Desserts",
      by: "shain",
      date: "7 Mar 2023",
    },
    {
      image:
        "https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/03/post-03-500x347.jpg",
      device: "SMARTPHONE",
      title: "The Problem With Typefaces on the Web",
      by: "Jodeep",
      date: "10 May 2023",
    },
    {
      image:
        "https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/03/post-02-500x347.jpg",
      device: "TABLET",
      title: "But I must explain to you how all this mistaken idea",
      by: "deepa",
      date: "10 July 2023",
    },
    {
      image:
        "https://k4j3j2s7.rocketcdn.me/blonwe/autoparts/wp-content/uploads/sites/8/2023/03/post-01-500x347.jpg",
      device: "SMARTPHONE",
      title: "On the other hand we provide denounce with righteous",
      by: "shine",
      date: "10 July 2023",
    },
  ];
  return (
    <div className="my-10">
      <div className="flex justify-between">
        <h2 className="text-xl font-[400]">Our News</h2>
        <p>
          view all <i className="bx bx-right-arrow-alt"></i>
        </p>
      </div>
      <div className="flex justify-between my-4">
        {newsItems.map((item, index) => (
          <div key={index} className="w-[300px]">
            <Image
              src={item.image}
              width={200}
              height={200}
              alt=""
              className="w-full rounded-lg"
            />
            <p className="py-2 font-semibold text-red-600 text-sm">
              {item.device}
            </p>
            <p className="font-[700] text-lg">{item.title}</p>
            <div className="flex gap-4 text-sm py-2">
              <p className="text-gray-400 ">
                by <span className="text-black">{item.by}</span>
              </p>
              <p className="text-gray-700">
                <span>
                  <i className="bx bx-dots-vertical-rounded"></i>
                </span>{" "}
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurNews;
