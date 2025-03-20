const AboutUsSection = () => {
  return (
    <div className="bg-white text-black lg:py-[10rem] md:py-[8rem] py-[4rem] md:px-[2.3rem] px-[0.8rem] hidden lg:block lg:px-[2.3rem]">
      <div>
        <h1 className="text-[#1E3A89] mb-[2rem] text-center lg:text-[2rem] md:text-[1.9rem] text-[1.7rem] font-bold">
          About Us
        </h1>
        <div className="flex flex-col gap-4 lg:text-2xl text-xl text-justify">
          <p>
            Domino's pizza is the world's largest and the best pizza hut in
            Nigeria! Delivering hot, fresh pizzas to your foorstep within 30
            minutes and take away in all our stores in Abuja, Lagos, Ogun,
            Port-harcourt, Benin and other parts of Nigeria.
          </p>
          <p>
            We are also the food delivery experts! Order online for delicious
            pizza, pasta, sandwiches, chicken wings and many more
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
