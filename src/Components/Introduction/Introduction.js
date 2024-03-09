const Introduction = () => {
  return (
    <div className="w-[99%] sm:w-[560px] md:w-[99%] p-[1%] pt-2 border-2 border-black rounded-md">
      <h1 className="font-bold text-2xl text-center mb-2 rounded-md bg-gray-300">
        More Than a Decade Experience In Leather Industry
      </h1>
      <div className="flex flex-col md:flex-row gap-2 md:gap-[1%] overflow-hidden">
        <img
          src={
            "https://www.mackenzieleatheredinburgh.com/wp-content/uploads/2021/01/IMG_1249-scaled.jpg"
          }
          alt=""
          className="w-full md:w-[49.75%] lg:w-[33%] h-80"
        />
        <img
          src={"https://imagesnatural.supernaturale.com/1664703870613.jpg"}
          alt=""
          className="w-full md:w-[49.75%] lg:w-[33%] h-80"
        />
        <img
          src={
            "https://www.westleyrichards.com/explora/wp-content/uploads/2021/05/77A1952b.jpg"
          }
          alt=""
          className="w-full md:w-[49.75%] lg:w-[33%] h-80"
        />
      </div>
    </div>
  );
};

export default Introduction;
