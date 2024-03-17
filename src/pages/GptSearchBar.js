import { useSelector } from "react-redux";
import lang from "../utils/languageContants";

const GptSearchBar = () => {
  const pageLang = useSelector((state) => state.config.lang);

  return (
    <div className="w-full sm:w-[60%]">
      <form className="flex flex-col gap-x-3 md:flex-row gap-y-4 w-full justify-center items-center sm:items-stretch sm:flex-row">
        <input
          placeholder={lang[pageLang].gptSearchPlaceholder}
          type="text"
          className="placeholder-neutral-400 py-3 px-3 w-[75%] text-white rounded-[4px] bg-[#00000072] border-[1px] border-neutral-600 focus:border-white text-[0.75rem] md:text-base md:w-[60%]"
        ></input>
        <button
          type="submit"
          className="bg-[rgb(193,17,17)] hover:bg-[rgb(170,15,15)] py-1 w-[20%] brightness-105 text-white rounded-[4px] text-[0.75rem] tracking-wide md:text-base md:w-[15%]"
        >
          {lang[pageLang].searchBtnText}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
