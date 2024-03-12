const Header = () => {
  return (
    <div className="w-full px-[2%] relative">
      <img
        className="w-24 sm:w-52 contrast-150"
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-black opacity-50 -z-10"></div>
    </div>
  );
};

export default Header;
