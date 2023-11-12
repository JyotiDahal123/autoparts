import Link from "next/link";
const Subscribe = () => {
  return (
    <div className="my-8 py-8 flex justify-between">
      <div className="w-1/2 flex flex-col justify-center gap-3">
        <h2 className="text-2xl font-semibold">
          Join our newsletter for £10 offs
        </h2>
        <p className="font-light text-gray-500 w-8/12 ">
          Register now to get latest updates on promotions & coupons. Don’t
          worry, we not spam!
        </p>
      </div>
      <div className="w-1/2 flex items-end justify-end">
        <form action="" className="w-full">
          <div className="w-full flex justify-end">
            <input
              type="text"
              placeholder="Enter your email"
              className="border text-lg py-2 px-4 w-1/2 bg-slate-200 rounded-l-lg"
            />
            <button
              className="border px-3 py-1 bg-orange-600 text-white font-semibold rounded-r-lg"
              type="submit"
            >
              SUBSCRIB
            </button>
          </div>
          <div className="text-right py-4">
            <p className="text-[13px] font-light">
              By subscribing you agree to our{" "}
              <Link href="/" className="text-orange-600 hover:underline">
                Terms & Conditions and Privacy & Cookies Policy.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
