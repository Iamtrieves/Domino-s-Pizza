import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Card from "./Card";
import { cards } from "../../cards";
import Button from "./Button";
import SwipeImage from "../assets/images/swipe.svg";

const HomeCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  // Function to track scroll position and update index
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const cardWidth = containerRef.current.children[0]?.clientWidth || 0;
        const newIndex = Math.round(
          containerRef.current.scrollLeft / cardWidth
        );
        setIndex(newIndex);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      container.addEventListener("touchmove", (e) => e.preventDefault(), {
        passive: false,
      });
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
        container.removeEventListener("touchmove", (e) => e.preventDefault());
      }
    };
  }, []);

  // Function to scroll to the next card
  const scrollNext = () => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.children[0]?.clientWidth || 0;
      const newIndex = (index + 1) % cards.length; // Infinite loop
      setIndex(newIndex);
      containerRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full lg:px-[3rem] px-[2rem] lg:pb-[5rem] pb-[2rem]">
      <motion.div
        ref={containerRef}
        className="flex gap-8 overflow-x-scroll container no-scrollbar scroll-smooth snap-x snap-mandatory lg:mb-[8rem] mb-[1rem]"
        drag="x"
        dragConstraints={{ left: -1000, right: 1000 }}
      >
        {cards.map((card) => (
          <motion.div
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
          </motion.div>
        ))}
      </motion.div>
      <div className="absolute right-8 lg:right-12">
        <div className="size-24 md:hidden lg:hidden">
          <img
            onClick={scrollNext}
            className="size-full object-contain cursor-pointer"
            src={SwipeImage}
            alt=""
          />
        </div>
        <Button
          text="View More"
          className="hidden md:block lg:block text-[red] text-2xl border-2 border-[red] py-4 px-6 font-bold rounded-3xl"
          onClick={scrollNext}
        />
      </div>
    </div>
  );
};

export default HomeCards;
