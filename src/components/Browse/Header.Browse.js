import { MdNotificationsNone } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  NETFLIX_LOGO_URL,
  SUPPORTED_LANGUAGES,
  USER_ICON_URL,
} from "../../utils/constants";
import GlowButton from "./GlowButton";
import { Link } from "react-router-dom";
import { changeLang } from "../../utils/configSlice";
import { toggleGptSearch } from "../../utils/gptSlice";

const HeaderBrowse = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [activeLinkIndex, setActiveLinkIndex] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const photoURL = useSelector((state) => state?.user?.photoURL);
  const gptSearchStatus = useSelector((state) => state.gpt.gptSearchStatus);

  const navMenu = [
    { name: "Home", index: 1 },
    { name: "TV Shows", index: 2 },
    { name: "Movies", index: 3 },
    { name: "New & Popular", index: 4 },
    { name: "My List", index: 5 },
    { name: "Browse by Languages", index: 6 },
  ];

  const chnageBg = () => {
    if (window.scrollY >= 80) {
      setNavbarScrolled(true);
    } else {
      setNavbarScrolled(false);
    }
  };

  const navItemOnClickHandler = (index) => {
    setActiveLinkIndex(index);
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const langChangeHandler = (e) => {
    dispatch(changeLang(e.target.value));
  };

  const gptBtnHandler = () => {
    dispatch(toggleGptSearch());
  };

  useEffect(() => {
    window.addEventListener("scroll", chnageBg);

    return () => {
      window.removeEventListener("scroll", chnageBg);
    };
  }, []);

  //

  return (
    <div
      className={
        "w-full px-[3%] py-1 fixed top-0 transition-[background-color] ease-out duration-1000 sm:py-2 z-50 shadow-header " +
        (navbarScrolled ? " bg-black" : "")
      }
    >
      {/* <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-black opacity-30"></div> */}
      <div className="w-full flex items-center">
        <img
          className="w-16 sm:w-32 md:w-24 lg:w-32 contrast-150 justify-self-start"
          alt="logo"
          src={NETFLIX_LOGO_URL}
        />
        <div className="text-[0.5rem] font-bold text-white mx-3 flex-1 md:hidden">
          <span>Browse</span>
        </div>
        <div className="text-[0.9rem] text-neutral-200 font-semibold mx-7 gap-x-5 flex-1 hidden md:flex items-center md:max-lg:text-[0.6rem] ">
          {navMenu.map((element) =>
            element.index === activeLinkIndex ? (
              <span
                className="text-neutral-50 cursor-pointer"
                key={element.index}
                onClick={() => navItemOnClickHandler(element.index)}
              >
                {element.name}
              </span>
            ) : (
              <span
                className="cursor-pointer hover:text-neutral-400 transition-[color] ease-in-out duration-300"
                key={element.index}
                onClick={() => navItemOnClickHandler(element.index)}
              >
                {element.name}
              </span>
            )
          )}
          <Link to={gptSearchStatus ? "/browse" : "/gpt"}>
            <GlowButton
              btnText={gptSearchStatus ? "Browse" : "GPT Search"}
              onClick={gptBtnHandler}
            />
          </Link>
        </div>
        <div className="justify-self-end flex items-center gap-x-4 sm:gap-x-5">
          {gptSearchStatus && (
            <select
              onChange={langChangeHandler}
              className="inline-block text-[0.6rem] md:text-[0.7rem] lg:text-[1rem] text-neutral-200 bg-[#000000a9] border-[1px] border-neutral-600 rounded-[6px] cursor-pointer px-2 lg:px-4 py-1 font-semibold"
            >
              {SUPPORTED_LANGUAGES.map((langObj) => {
                return (
                  <option
                    className="cursor-pointer"
                    key={langObj.id}
                    value={langObj.id}
                  >
                    {langObj.name}
                  </option>
                );
              })}
            </select>
          )}

          <IoSearch className="text-white" size={"1.75rem"} />
          <MdNotificationsNone className="text-white" size={"1.75rem"} />
          <div className="group flex items-center gap-x-1 relative">
            <img
              className="rounded-md cursor-pointer w-8 sm:w-10 lg:w-9"
              alt="profile-icon"
              src={
                photoURL === null || photoURL === undefined
                  ? USER_ICON_URL
                  : photoURL
              }
            />
            <span className="cursor-pointer">
              <FaCaretDown className="text-white hidden sm:block group-hover:rotate-180 transition duration-500" />
            </span>
            <div className="opacity-0 sm:group-hover:opacity-100 flex flex-col absolute top-14 right-0 w-[225px] bg-[#000000ab] border-[1px] border-neutral-700 transition duration-300">
              <div className="border-b-[1px] text-sm w-full text-white border-neutral-700 flex flex-col gap-y-4 p-4">
                <p className="hover:underline cursor-pointer">
                  Manage Profiles
                </p>
                <p className="hover:underline cursor-pointer">Exit Profiles</p>
                <p className="hover:underline cursor-pointer">
                  Transfer Profiles
                </p>
                <p className="hover:underline cursor-pointer">Account</p>
                <p className="hover:underline cursor-pointer">Help Center</p>
              </div>
              <div
                className="text-center text-white text-sm py-4 hover:underline cursor-pointer"
                onClick={signOutUser}
              >
                Sign out of Netflix
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBrowse;
