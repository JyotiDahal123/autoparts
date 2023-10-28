import FormSection from "./form-section";
import SwiperSlider from "./swiper-slider";
const Hero = () => (
  <section className="flex gap-8 my-4">
    <div className="w-4/12">
      <div className="border-4 border-orange-600 w-full h-full rounded-md">
        <FormSection />
      </div>
    </div>
    <div className="w-8/12">
      <div className="px-4 w-full  rounded-md ">
        <SwiperSlider />
      </div>
    </div>
  </section>
);
export default Hero;
