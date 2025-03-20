import Button from "./Button";
import ChefIcon from "../assets/images/chefIcon.svg";
import HeroBottomImage from "../assets/images/heroBottomImage.svg";
const Hero = () => {
  return (
    <section className="relative">
      <div className="relative">
        <div className="w-full">
          <div className="flex flex-col gap-[1.6875rem] md:pt-10 pt-7 lg:pt-30 lg:pb-20 md:pl-[2.3rem] pl-[0.8rem] lg:pl-[2.3rem] max-w-[80%] z-50">
            <div>
              <h1 className="text-white text-[1.5rem] lg:font-bold md:font-semibold md:text-[2.5rem] lg:text-[3rem] lg:max-w-[65%]">
                Discover the Ultimate Pizza Experience
              </h1>
            </div>
            <div className="hidden md:block lg:block lg:max-w-[50%]">
              <p className="text-white text-xl lg:text-2xl">
                Indulge in our mouth-watering menu, crafted with the freshest
                ingredients and bursting with flavors in various sizes...
              </p>
            </div>
            <div className="flex gap-2 lg:gap-4">
              <Button
                text="Order Online"
                className="py-1 px-2 md:py-2 md:px-3 md:font-semibold lg:py-2 lg:px-3 text-sm lg:text-[1.2rem] lg:font-bold bg-[#E32424] rounded-2xl text-white"
              />
              <Button
                text="Carry-out"
                className="py-1 px-2 md:py-2 md:px-3 md:font-semibold text-sm lg:px-3 lg:font-bold lg:text-[1.2rem] text-[#06487C] rounded-2xl bg-white"
              />
            </div>
          </div>
          <div className="absolute -top-4 lg:-top-10 md:-top-2 size-[9rem] md:size-[15rem] lg:size-[30rem] right-0">
            <img src={ChefIcon} alt="" className="object-contain" />
          </div>
        </div>
        <div className="mt-[2.5rem] margin text-xl text-white text-justify pb-[1.5rem] px-[0.8rem] md:px-[2.3rem] lg:hidden">
          <p>
            Domino's pizza is the world's largest and the best pizza hut in
            Nigeria! Delivering hot, fresh pizzas to your doorstep within 30
            minutes and take away in all our stores in Abuja, Lagos, Ogun,
            Port-harcourt, Benin and other parts of Nigeria.
          </p>
        </div>
      </div>
      <div className="lg:block absolute hidden lg:-bottom-15">
        <img src={HeroBottomImage} alt="" />
      </div>
    </section>
  );
};
export default Hero;
