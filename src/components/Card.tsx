interface CardProps {
  id?: string;
  title: string;
  description: string;
  image: string;
  rating: string;
  location: string;
  bgColor: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  bgColor,
  rating,
  location,
}) => {
  return (
    <div className="relative">
      <div className="relative flex flex-col gap-8 py-8 px-5 rounded-4xl text-white pb-10 min-h-[25rem] overflow-hidden">
        <div
          className="absolute inset-0 rounded-4xl opacity-85"
          style={{ backgroundColor: bgColor }}
        ></div>

        <div className="relative z-10 flex items-center gap-4">
          <div className="lg:size-30 size-20 md:size-18">
            <img className="size-full object-cover" src={image} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-xl">{title}</h1>
            <div className="w-24 h-auto">
              <img className="size-full object-contain" src={rating} alt="" />
            </div>
            <p className="text-[1rem] font-semibold">{location}</p>
          </div>
        </div>
        <div className="relative z-10 text-justify font-semibold">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
