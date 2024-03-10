const Categories = ({ toChangeCategory }) => {
  return (
    <div className="flex flex-col w-36 text-sm md:w-56 md:text-base xl:w-72 xl:text-lg gap-2">
      <h1 className="w-full font-semibold text-xl text-center bg-gray-300">
        Categories
      </h1>
      <button onClick={() => toChangeCategory("All")}>All</button>
      <button onClick={() => toChangeCategory("Framed HorseShoe")}>
        Framed HorseShoe
      </button>
      <button onClick={() => toChangeCategory("Phone's Gaurd")}>
        Phone's gaurd
      </button>
      <button onClick={() => toChangeCategory("Wallet")}>Wallet</button>
      <button onClick={() => toChangeCategory("Hat")}>Hat</button>
    </div>
  );
};

export default Categories;
