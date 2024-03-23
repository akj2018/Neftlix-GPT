import { NETFLIX_LOGO_URL } from "../../utils/constants";

const HeaderError = () => {
  return (
    <div className="w-full px-[2%] relative py-3 bg-black">
      <img
        className="w-32 contrast-150 pl-4 md:pl-3"
        alt="logo"
        src={NETFLIX_LOGO_URL}
      />
    </div>
  );
};

export default HeaderError;
