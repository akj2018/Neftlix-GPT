import { Link } from "react-router-dom";
import HeaderError from "../components/Error/Header.Error";

const ErrorPage = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black -z-10 brightness-[0.75]">
        <img
          className="w-full h-full object-cover bg-no-repeat"
          src="https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png"
          alt="bg-img"
        />
      </div>
      <HeaderError />
      <div className=" mx-auto w-[75%] sm:w-[60%] md:w-[50%] lg:w-[40%] mt-28 bg-[#000000be] rounded-md p-4 md:p-12">
        <h1 className="text-white font-semibold text-[2.5rem] lg:text-[3rem] text-center">
          Lost your way?
        </h1>
        <div className="text-white text-center tracking-tighter leading-tight py-3 my-3 md:text-[1.1rem]">
          <p>Sorry, we can't find your page.</p>
          <p className="leading-tight text-pretty my-2">
            You'll find lots of options to explore on the home page.
          </p>
        </div>
        <Link to="/browse">
          <button className="flex mx-auto rounded-sm bg-[#e50914] p-2 lg:p-3 items-center hover:bg-[rgb(180,7,16)] my-3 lg:my-5">
            <div className="text-white text-sm font-semibold text-center w-full md:text-[1.1rem]">
              Netflix Home
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
