import { NETFLIX_LOGO_URL } from "../../utils/constants";

const HeaderLogin = () => {
  return (
    <div className="w-full px-[2%] relative">
      <img
        className="w-24 sm:w-52 contrast-150"
        alt="logo"
        src={NETFLIX_LOGO_URL}
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-black opacity-50 -z-10"></div>
    </div>
  );
};

export default HeaderLogin;
