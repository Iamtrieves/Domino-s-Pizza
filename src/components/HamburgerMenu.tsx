const HamburgerMenu = () => {
  return (
    <div className="lg:hidden md:hidden relative w-full">
      <div className="flex flex-1 justify-end">
        <div className="flex flex-col items-center justify-center gap-1 cursor-pointer z-50 relative">
          <span
            className={`h-[2px] w-5 rounded-md bg-[white] "
            }`}
          ></span>

          <span
            className={`h-[2px] w-5 rounded-md bg-[white]
            }`}
          ></span>

          <span
            className={`h-[2px] w-5 rounded-md bg-[white] "
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
