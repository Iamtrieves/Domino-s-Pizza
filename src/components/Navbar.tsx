import SearchIcon from "../assets/images/searchIcon.svg";
import DominoIcon from "../assets/images/dominoIcon.svg";
import CartIcon from "../assets/images/cartIcon.svg";
import LocationIcon from "../assets/images/locationIcon.svg";
import HamburgerMenu from "./HamburgerMenu";
import Button from "./Button";

const MobileNavbar = () => {
  return (
    <header className="bg-[#06487C] block md:hidden lg:hidden z-50">
      <nav className="flex items-center justify-between py-[1rem] pl-[0.5rem] pr-[1rem]">
        <div className="size-12">
          <img className="size-full object-cover" src={DominoIcon} alt="" />
        </div>
        <div className="bg-white w-[65%] rounded-[2rem] gap-[0.4125rem] px-1 flex items-center">
          <div className="size-7">
            <img className="size-full" src={SearchIcon} alt="" />
          </div>
          <input
            className="bg-transparent outline-none text-sm w-full placeholder-[#06487C] py-2"
            type="text"
            placeholder="Dominos in your location"
          />
        </div>
        <div className="size-7">
          <img className="size-full" src={CartIcon} alt="" />
        </div>
        <div>
          <HamburgerMenu />
        </div>
      </nav>
    </header>
  );
};

const DesktopNavbar = () => {
  return (
    <header className="hidden bg-white md:block lg:block relative z-50 top-3 w-[calc(100%-4.5rem)] mx-auto rounded-4xl">
      <nav className="size-full flex items-center justify-between pl-[1.5rem] pr-[2rem] py-[0.8125rem]">
        <div className="dominoIcon size-14">
          <img className="size-full object-cover" src={DominoIcon} alt="" />
        </div>
        <ul className="flex ul gap-[3rem] items-center text-[#0078AD]">
          <li>Menu</li>
          <li>Deals</li>
          <li>Value Range</li>
        </ul>
        <div className="flex items-center input w-[40%] p-2 rounded-3xl bg-[#dde1ed] gap-[1.5rem]">
          <div className="size-6 locationIcon">
            <img className="size-full object-cover" src={LocationIcon} alt="" />
          </div>
          <input
            className="inputClass outline-none"
            type="text"
            placeholder="Domino in your location"
          />
        </div>
        <div className="flex buttonContainer gap-[2.125rem]">
          <div>
            <Button
              text="Sign Up"
              className="py-[0.625rem] button px-[1.25rem] rounded-2xl bg-[#E21836] text-white"
            />
          </div>
          <div>
            <Button
              text="Sign In"
              className="py-[0.625rem] button px-[1.25rem] rounded-2xl bg-white text-[#E21836] border-[1px] border-[#E21836]"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavBar = () => {
  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
    </>
  );
};

export default NavBar;
