import DominoIcon from "../assets/images/dominoIcon.svg";
import Button from "./Button";
import PhoneIcon from "../assets/images/ic_round-phone.svg";
import MailIcon from "../assets/images/tabler_mail-filled.svg";
import LinkedinIcon from "../assets/images/Frame 427319055.svg";
import FacebookIcon from "../assets/images/Frame 427319056.svg";
import InstagramIcon from "../assets/images/Frame 427319057.svg";
const Footer = () => {
  return (
    <footer>
      <div className="py-[2rem] px-[1rem] md:px-[3rem] text-white flex flex-col md:flex-row gap-5 md:gap-8 items-center md:items-start justify-center md:justify-between">
        <div className="flex flex-col items-center gap-5">
          <div className="size-16 md:hidden lg:hidden">
            <img className="size-full object-contain" src={DominoIcon} alt="" />
          </div>
          <p className="font-semibold text-center md:hidden text-xl lg:hidden block">
            Get exclusive update and deals in your inbox
          </p>
          <p className="font-semibold text-xl md:text-base lg:text-2xl hidden md:block lg:block">
            Stay updated with out latest offers and updates
          </p>
          <div className="border-white w-[90%] md:w-full lg:w-full flex justify-between border-2 pl-2 rounded-3xl">
            <input
              type="text"
              placeholder="Email"
              className="text-[#c8e5fb] text-xl w-full outline-none"
            />
            <Button
              text="Subscribe"
              className="text-white bg-[red] rounded-[20px] h-full border-2 border-white p-3 px-5"
            />
          </div>
        </div>
        <div className="hidden md:block lg:block">
          <h1 className="font-bold text-xl md:text-base lg:text-2xl mb-4">
            Domino's
          </h1>
          <ul className="text-xl font-semibold flex flex-col gap-4 lg:gap-6 md:text-base lg:text-2xl">
            <li>Our Services</li>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="block md:hidden lg:hidden">
          <a className="underline text-sm text-[#a7e5fe]" href="">
            Read email policy
          </a>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-[#06487C] text-center block md:hidden lg:hidden bg-white py-2 font-semibold text-xl rounded-3xl">
            Contact us via:
          </div>
          <div className="hidden md:block md:text-base lg:block lg:text-2xl font-bold text-xl">
            Contact us
          </div>
          <div className="flex flex-col gap-2 text-xl md:text-base">
            <div className="flex items-center gap-3">
              <div className="size-5">
                <img
                  className="size-full object-contain"
                  src={MailIcon}
                  alt=""
                />
              </div>
              <div>dominos.ng@gmail.com</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-5">
                <img
                  className="size-full object-contain"
                  src={PhoneIcon}
                  alt=""
                />
              </div>
              <div>+234900850018</div>
            </div>
          </div>
          <div className="flex gap-5 items-center justify-center">
            <div className="size-10 md:size-8 lg:size-12">
              <img
                src={LinkedinIcon}
                alt=""
                className="size-full object-cover"
              />
            </div>
            <div className="size-10 md:size-8 lg:size-12">
              <img
                src={FacebookIcon}
                alt=""
                className="size-full object-cover"
              />
            </div>
            <div className="size-10 md:size-8 lg:size-12">
              <img
                src={InstagramIcon}
                alt=""
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
