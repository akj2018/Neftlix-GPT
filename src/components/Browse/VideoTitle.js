import { useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  const overviewRef = useRef(null);
  const titleRef = useRef(null);

  // Transition and Fade effect for video title and overview
  useEffect(() => {
    const containerHeight = titleRef?.current?.parentElement?.clientHeight;
    const titleHeight = titleRef?.current?.clientHeight;

    const timer = setTimeout(() => {
      overviewRef.current.style.opacity = "0";
      titleRef.current.style.transform = `translateY(${
        containerHeight - titleHeight
      }px)`;
    }, 10000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  });

  // use the props (title, overview) and render background movie info
  return (
    <div className="w-2/4 lg:w-[35%] z-[1] ">
      <div className="flex flex-col gap-y-2 lg:gap-y-6">
        <p
          ref={titleRef}
          className="text-[0.75rem] text-white font-semibold  transition-transform  duration-[1300ms] lg:text-2xl xl:text-5xl"
        >
          {title}
        </p>
        <p
          ref={overviewRef}
          className="text-[0.4rem] tracking-tight text-white text-justify  transition-opacity duration-1000 lg:text-[0.7rem] xl:text-[1rem] line-clamp-3 leading-snug"
        >
          {overview}
        </p>
      </div>

      <div className="flex gap-x-2 items-center mt-2 lg:mt-6 lg:gap-x-4">
        <button className=" text-[0.65rem] font-bold bg-neutral-100 text-black px-4 py-1 rounded-[4px] flex items-center gap-x-1 hover:bg-neutral-300 lg:gap-x-2 lg:text-lg lg:px-6 lg:py-2">
          <FaPlay className="text-black size-3 lg:size-7" />
          <span> Play</span>
        </button>
        <button className="min-w-5 text-[0.65rem] font-bold bg-[#7d7d7da2] text-neutral-100 px-3 py-1 rounded-[4px] flex items-center gap-x-1 hover:bg-[#7d7d7d69] lg:gap-x-2 lg:text-lg lg:px-6 lg:py-2">
          <IoIosInformationCircleOutline className="text-neutral-100 size-4 lg:size-[2rem]" />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
