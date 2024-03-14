import Footer from "../components/Login/Footer";
import HeaderLogin from "../components/Login/Header.Login";
import SignInForm from "../components/Login/SignInForm";

import useAuthStateChange from "../hooks/useAuthStateChange";

const LoginPage = () => {
  useAuthStateChange();

  return (
    <div className="relative">
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black -z-10 
        bg-no-repeat
        md:brightness-50
        md:bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/fa6f97d9-245e-43d7-bb56-af27cbf6d656/US-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg)]`}
      ></div>
      <HeaderLogin />
      <SignInForm />
      <Footer />
    </div>
  );
};

export default LoginPage;
