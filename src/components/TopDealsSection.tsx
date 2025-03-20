import MobileTopDealsImage from "../assets/images/Mobile top deals.svg";
import DesktopTopDealsImage from "../assets/images/Deals.svg";
import firstBackgroundImage from "../assets/images/image 74.svg";
import thirdBackgroundImage from "../assets/images/image 78.svg";
import secondBackgroundImage from "../assets/images/image 75.svg";
import Button from "./Button";
const TopDealsSection = () => {
  return (
    <section className="bg-[#f3f6f8] flex pb-4 lg:pb-40 flex-col relative">
      <h1 className="hidden text-[#06487C] lg:text-[2rem] md:text-[1.9rem] text-[1.7rem] font-bold md:hidden lg:block text-center py-25">
        Our Top Deals
      </h1>
      <div className="absolute size-35 md:size-50 lg:size-120 -top-5 md:-top-8 lg:top-70 -right-4 md:-right-9 lg:right-0 transform rotate-150 lg:rotate-160">
        <img
          src={firstBackgroundImage}
          className="object-contain size-full"
          alt=""
        />
      </div>
      <div className="w-full block md:hidden lg:hidden">
        <img
          src={MobileTopDealsImage}
          className="object-contain size-full"
          alt=""
        />
      </div>
      <div className="hidden pl-[2rem] pr-[5rem] md:block lg:block">
        <img
          src={DesktopTopDealsImage}
          className="object-contain size-full"
          alt=""
        />
      </div>
      <div className="absolute size-60 md:size-100 top-0 lg:top-70 lg:size-135 -left-20 transform rotate-200">
        <img
          src={secondBackgroundImage}
          className="object-contain size-full"
          alt=""
        />
      </div>
      <div className="absolute hidden lg:block left-[30%] top-32">
        <img src={thirdBackgroundImage} alt="" />
      </div>
      <div className="flex justify-end pr-4 lg:hidden md:hidden">
        <Button
          text="All Deals"
          className="text-[red] text-sm bg-white rounded-3xl py-2 px-4 border border-red-500"
        />
      </div>
      <div className="lg:flex justify-end md:flex hidden pr-20 md:mt-10 lg:mt-20">
        <Button
          text="Start Order >>"
          className="text-white font-bold px-4 py-3 bg-[red] rounded-3xl"
        />
      </div>
    </section>
  );
};

export default TopDealsSection;
