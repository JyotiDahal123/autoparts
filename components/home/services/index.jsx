const Services = () => {
  return (
    <div className="flex justify-between mt-2 mb-6">
      <div className="flex gap-4 items-center">
        <i className="bx bx-cart-download text-3xl text-orange-600"></i>
        <div>
          <h2 className="font-semibold">Free Delivery</h2>
          <p className="text-gray-400 text-sm font-light">
            Free shipping on all order
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <i className="bx bx-phone-call text-3xl text-orange-600"></i>
        <div>
          <h2 className="font-semibold">Online Support 24/7</h2>
          <p className="text-gray-400 text-sm font-light">
            Support online 24 hours a day
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <i className="bx bx-credit-card text-3xl text-orange-600"></i>
        <div>
          <h2 className="font-semibold">Money Return</h2>
          <p className="text-gray-400 text-sm font-light">
            Back guarantee under 7 days
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <i className="bx bx-sort-down text-3xl text-orange-600"></i>
        <div>
          <h2 className="font-semibold">Member Discount</h2>
          <p className="text-gray-400 text-sm font-light">
            Onevery order over $120.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
