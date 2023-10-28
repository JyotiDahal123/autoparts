import Image from "next/image";
import Link from "next/link";

const CardDesign = ({ bannerItems }) => {
  return (
    <div>
      <div className="flex justify-between gap-8 py-8">
        {bannerItems.map((item, index) => (
          <Link href="/your-link-url" className="w-1/2 rounded-md" key={index}>
            <Image
              src={item.imgItem}
              width={400}
              height={400}
              className="w-full rounded-md h-64"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardDesign;
