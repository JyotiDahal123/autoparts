import Link from "next/link";
const SocialLinks = () => {
  const icon_items = [
    {
      icon: <i className="bx bxl-facebook text-xl"></i>,
      href: "/",
    },
    {
      icon: <i className="bx bxl-youtube text-xl"></i>,
      href: "/",
    },
    {
      icon: <i className="bx bxl-whatsapp text-xl"></i>,
      href: "/",
    },
    {
      icon: <i className="bx bxl-instagram-alt text-xl"></i>,
      href: "/",
    },
    {
      icon: <i className="bx bxl-telegram text-xl"></i>,
      href: "/",
    },
  ];
  return (
    <div className="py-4">
      <div className="flex justify-between">
        <div className="text-white flex gap-2 items-center">
          <p>Follow us: </p>
          {icon_items.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.href}
                className=" flex justify-center items-center bg-slate-600 rounded-full w-9 h-9 hover:bg-slate-500"
              >
                {item.icon}
              </Link>
            );
          })}
        </div>
        <div className="flex  gap-4 text-white justify-center items-center">
          <p>Download Apps: </p>
          <img src="app-store.png" alt="" />
          <img src="google-play.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default SocialLinks;
