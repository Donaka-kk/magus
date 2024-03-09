import Card2 from "../Carousel/Card2";
const Discout = ({ data }) => {
  return (
    <div className="w-[99%] sm:w-[560px] md:w-[99%] p-[1.5%] pt-1">
      <div className="flex flex-col md:flex-row gap-2 md:gap-[0.5%] overflow-hidden">
        {data &&
          data.map((element, index) => {
            return (
              <Card2
                key={index}
                name={element.name}
                image={element.image}
                score={element.score}
                price={element.price}
                available={element.available}
                NO={element.NO}
                sales={element.sales}
                discount={element.discount}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Discout;
