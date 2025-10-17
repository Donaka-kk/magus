import Customer1 from "../../utilities/customer1.jpg";
import Customer2 from "../../utilities/customer2.jpg";
import Customer3 from "../../utilities/customer3.jpg";

const Comments = () => {
  return (
    <div className="relative w-full flex flex-col items-center py-5">
      <h1 className="font-semibold text-4xl">What Our Customers Say</h1>

      <ul className="w-full flex flex-col items-center md:flex-row justify-around gap-4 px-4">
        <li className="">
          <p className="text-green-700 text-5xl">“</p>
          <p className="text-wrap">
            Fast shipping and excellent customer service. The product was even
            better than expected. I will definitely be a returning customer.
          </p>
          <img
            src={Customer1}
            alt="123"
            className="w-20 h-20 rounded-full my-3"
          />
          <h3>ENNIFER LEWIS</h3>
        </li>
        <li className="">
          <p className="text-green-700 text-5xl">“</p>
          <p className="w-full">
            Great user experience on your website. I found what I was looking
            for at a great price. I will definitely be telling my friends.
          </p>
          <img
            src={Customer2}
            alt="123"
            className="w-20 h-20 rounded-full my-3"
          />
          <p>ALICIA HEART</p>
        </li>
        <li className="">
          <p className="text-green-700 text-5xl">“</p>
          <p className="w-full">
            Thank you for the excellent shopping experience. It arrived quickly
            described. I will definitely be shopping you again the future.
          </p>
          <img
            src={Customer3}
            alt="123"
            className="w-20 h-20 rounded-full my-3"
          />
          <p>JUAN CARLOS</p>
        </li>
      </ul>
    </div>
  );
};

export default Comments;
