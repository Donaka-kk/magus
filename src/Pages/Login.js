// import bgImage1 from "../utilities/horse1.jpg";
// import bgImage2 from "../utilities/horse2.avif";
// import bgImage3 from "../utilities/horse3.avif";
// import bgImage4 from "../utilities/horse4.avif";
// import bgImage5 from "../utilities/horse5.png";
// import bgImage6 from "../utilities/horse6.avif";
import { useEffect, useRef, useState } from "react";
import bgImage7 from "../utilities/horse7.avif";
// import bgImage8 from "../utilities/horse8.avif";

const Login = () => {
  const [message, setMessage] = useState("");
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Incorrect username or password !");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <div>
        {/* 3 , 6 , 7 , 8 */}
        <img
          src={bgImage7}
          alt="backgroundImage"
          className="w-full h-[400px] md:h-[500px] object-cover"
        />
      </div>

      <div className="max-w-screen h-full bg-myPink flex justify-center items-center my-20">
        <div className="w-96 min-h-fit border-2 border-black rounded-lg">
          <form className="w-full h-full" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full h-full p-3 rounded-lg">
              <p className="text-2xl font-bold text-center m-5">Login</p>
              <label className="ml-2">Username</label>
              <input
                type="text"
                spellCheck={false}
                required
                maxLength={50}
                className="rounded-md border border-black  outline-none p-1 text-sm"
                placeholder="Username"
                ref={usernameRef}
                autoFocus
              />
              <label className="ml-2 mt-2">Password</label>
              <input
                type="password"
                spellCheck={false}
                required
                maxLength={50}
                className="rounded-md border border-black  outline-none p-1 text-sm"
                placeholder="Password"
                ref={passwordRef}
              />
              <div className="m-2">
                <p className="underline hover:cursor-pointer">
                  Forgot password ?
                </p>
              </div>

              <div className="text-red-600 text-center text-lg">{message}</div>
              <div className="flex flex-col w-full h-1/5 justify-center items-center rounded-lg mt-3">
                <input
                  type="submit"
                  value="Log in"
                  className="w-32 h-10 border-2 border-black text-myBlue rounded-lg text-lg hover:text-myPink hover:bg-myBlue  active:scale-90 hover:cursor-pointer"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
