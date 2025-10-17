import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Aboutus = () => {
  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div>
        <div className="text-center">
          <h1 className="text-4xl font-bold my-10">About Us</h1>
        </div>

        <div className="flex flex-col justify-center items-center gap-24 p-5 mb-3">
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6">
            <img
              src={
                "https://tinyworkshops.com/wp-content/uploads/2022/04/Leather-working-classes_FEATURE.jpg"
              }
              alt=""
              className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12"
            />
            <div className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12">
              <h1 className="text-2xl font-semibold">Who Are We ?</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt quasi, corrupti laboriosam temporibus magni sed
                molestias sequi adipisci reprehenderit eius est esse quisquam
                asperiores expedita! Veniam assumenda tenetur deleniti dolores
                mollitia unde quas possimus amet necessitatibus in incidunt,
                dignissimos aut expedita dolore esse? Expedita laboriosam
                explicabo sed itaque consequuntur voluptates commodi quia eaque?
                Dignissimos harum et dolor libero ullam delectus voluptatum
                cupiditate molestiae vitae mollitia corporis tempora cum,
                officiis fugiat eum ipsa, dicta vel enim.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row-reverse justify-center items-center gap-6">
            <img
              src={
                "https://greatpairstore.com/wp-content/uploads/2022/08/FEPITO-2.jpg"
              }
              alt=""
              className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12"
            />
            <div className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12">
              <h1 className="text-2xl font-semibold">Our Goal</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae laboriosam quia doloribus iure reprehenderit quas
                quaerat at eius error, sequi facere laudantium omnis. In
                reiciendis maiores aut labore voluptatum totam delectus nesciunt
                provident numquam, beatae, culpa porro deserunt dolorum mollitia
                et dicta repellat aliquid eos a corporis reprehenderit at
                veniam. Necessitatibus vero quibusdam quisquam autem
                exercitationem unde optio nesciunt minima dignissimos corporis
                laboriosam libero saepe itaque at, eum ipsum a omnis deleniti
                fuga ratione harum?
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mb-8">
          <button
            onClick={() => nav("/contact")}
            className="border-2 border-black rounded-sm px-3 py-1"
          >
            Feel Free To Contact Us
          </button>
        </div>
      </div>
  );
};

export default Aboutus;
