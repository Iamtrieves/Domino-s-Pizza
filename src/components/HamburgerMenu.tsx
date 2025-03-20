import { FC } from "react";
import Button from "./Button";
interface HamburgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ isOpen, onToggle }) => {
  return (
    <div className="lg:hidden md:hidden relative w-full">
      <div className="flex flex-1 justify-end">
        <div
          onClick={onToggle}
          className="flex flex-col items-center justify-center gap-1 cursor-pointer z-50 relative"
        >
          <span
            className={`h-[2px] w-5 rounded-md bg-[white] transition-transform duration-300 ${
              isOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          ></span>

          <span
            className={`h-[2px] w-5 rounded-md bg-[white] transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>

          <span
            className={`h-[2px] w-5 rounded-md bg-[white] transition-transform duration-300 ${
              isOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          ></span>
        </div>
      </div>
      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-screen bg-[#F5F5F5] text-[white] transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col h-[90dvh] items-center justify-between mt-10">
          <div className="items-center flex flex-col text-[1.2rem] gap-6">
            <div className="cursor-pointer" onClick={onToggle}>
              Home
            </div>
            <div className="cursor-pointer" onClick={onToggle}>
              About
            </div>
            <div className="cursor-pointer" onClick={onToggle}>
              Service
            </div>
            <div className="cursor-pointer" onClick={onToggle}>
              Works
            </div>
            <div className="cursor-pointer" onClick={onToggle}>
              Contact Us
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Button
              className="text-[#FFFFFF] cursor-pointer py-[0.7375rem] px-[1rem]  bg-black rounded-3xl scale lg:text-[1.1rem] md:text-[0.735rem]"
              text="Sign In"
            />
            <Button
              className="text-[#1E1E1E] cursor-pointer py-[0.7375rem] px-[1rem]  border-[1.5px] scale border-black rounded-3xl md:text-[0.735rem] lg:text-[1.1rem]"
              text="Sign Up"
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
