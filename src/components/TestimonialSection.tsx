import HomeCards from "../components/HomeCards";
import backgroundImage from "../assets/images/image 74.svg";
const TestimonialSection = () => {
  return (
    <div className="bg-white py-[2.75rem] relative">
      <div>
        <h1 className="text-[#06487C] text-center pt-8 md:pb-14 lg:pb-18 pb-10 text-[1.3rem] md:text-[2rem] lg:text-[2.5rem] font-semibold md:font-bold lg:font-bold">
          Customer's Testimonial
        </h1>
        <div className="size-50 absolute md:hidden lg:hidden">
          <img src={backgroundImage} alt="" />
        </div>
        <div className="">
          <HomeCards />;
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
