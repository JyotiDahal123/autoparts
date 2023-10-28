const HomeTop = () => {
  return (
    <div className="flex justify-between px-20 py-4 text-sm font-[300] ">
      <div className="flex gap-1 justify-center items-center">
        <i className="bx bx-dollar-circle text-2xl text-orange-600"></i>
        <p>Installments Without Card</p>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <i className="bx bx-package text-2xl text-orange-600"></i>
        <p>Free pickup in stores</p>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <i className="bx bxs-truck text-2xl text-orange-600"></i>
        <p>Free delivery from €35 </p>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <i className="bx bxs-edit-location text-2xl text-orange-600"></i>
        <p>Track your order</p>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <i className="bx bx-like text-2xl text-orange-600"></i>
        <p>100% Customer satisfaction rate</p>
      </div>
    </div>
  );
};
export default HomeTop;
