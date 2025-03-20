import Card from "./Card";
import { cards } from "../../cards";
import Button from "./Button";
import SwipeImage from "../assets/images/swipe.svg";

const HomeCards = () => {
  return (
    <div className="relative w-full lg:px-[3rem] px-[2rem] lg:pb-[5rem] pb-[2rem]">
      <div className="flex gap-7 overflow-x-scroll no-scrollbar">
        {cards.map((card) => (
          <div
            key={card.id}
            className="min-w-full sm:min-w-[50%] md:min-w-[33.333%] snap-center"
          >
            <Card
              title={card.title}
              rating={card.rating}
              location={card.location}
              image={card.image}
              bgColor={card.bgColor}
              description={card.description}
            />
          </div>
        ))}
      </div>
      <div className="absolute right-8 lg:right-12">
        <div className="size-24 md:hidden lg:hidden">
          <img
            className="size-full object-contain cursor-pointer"
            src={SwipeImage}
            alt=""
          />
        </div>
        <Button
          text="View More"
          className="hidden mt-10 md:block lg:block text-[red] text-2xl border-2 border-[red] py-4 px-6 font-bold rounded-3xl"
        />
      </div>
    </div>
  );
};

export default HomeCards;
