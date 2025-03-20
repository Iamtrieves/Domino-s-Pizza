import DesktopPieImage from "../assets/images/Frame 427319198.svg";
import MobilePieImage from "../assets/images/Frame 427319230.svg";
import PizzaImage from "../assets/images/pizza 1 2.svg";
import Button from "./Button";
const Menu = () => {
  return (
    <section className="py-[3rem] md:bg-[#dae4eb] lg:bg-[#dae4eb]">
      <h1 className="text-center text-white md:text-[#06487C] lg:text-[#06487C] font-bold text-xl lg:text-3xl md:text-2xl mb-[2rem]">
        Our Menu
      </h1>
      <div className="relative flex justify-between">
        <div className="flex items-center">
          <div
            className="relative md:hidden lg:hidden -left-3 size-45 z-50 rounded-[50%] flex items-center justify-center"
            style={{ backgroundColor: "rgba(128, 161, 187, 0.6)" }}
          >
            <img
              src={MobilePieImage}
              className="object-contain size-full"
              alt=""
            />
          </div>
          <div className="relative -left-12 size-120 lg:size-150 z-50 rounded-[50%] hidden md:flex lg:flex items-center justify-center">
            <img
              src={DesktopPieImage}
              className="object-contain size-full"
              alt=""
            />
          </div>

          <div
            className="relative text-2xl -left-50 hidden bg-white md:block lg:block text-black py-8 pr-10 pl-30 rounded-4xl"
            // style={{ backgroundColor: "rgba(128, 161, 187, 0.8)" }}
          >
            <p className="text-black font-bold">
              <span className="text-red-600">PEPP</span>ERONI
            </p>
            <p className="text-[#1E3A89] font-bold">Size: Large</p>
            <p className="text-black font-bold">$100.00</p>
          </div>
          <div
            className="relative -left-18 block md:hidden lg:hidden text-black py-2 pr-4 pl-17 rounded-4xl"
            style={{ backgroundColor: "rgba(128, 161, 187, 0.8)" }}
          >
            <p className="text-black font-bold">
              <span className="text-red-600">PEPP</span>ERONI
            </p>
            <p className="text-[#1E3A89] font-bold">Size: Large</p>
            <p className="text-black font-bold">$100.00</p>
          </div>
        </div>
        <div className="size-40 md:size-60 lg:size-80  absolute -right-15 md:-right-20 lg:-right-23 top-3 md:top-30 lg:top-35">
          <img src={PizzaImage} className="object-contain size-full" alt="" />
        </div>
      </div>
      <div className="flex justify-end mt-10 pr-[2rem]">
        <Button
          text="View Menu"
          className="text-white lg:text-2xl bg-[red] py-2 px-3 lg:px-5 font-semibold rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Menu;
