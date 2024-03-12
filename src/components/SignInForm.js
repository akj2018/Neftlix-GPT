import { useRef, useState } from "react";
import emailValidate from "../utils/emailValidate";
import passwordValidate from "../utils/passwordValidate";
import fullnameValidate from "../utils/fullnameValidate";

const SignInForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [emailValidMsg, setEmailValidMsg] = useState(null);
  const [passwordValidMsg, setPasswordValidMsg] = useState(null);
  const [fullnameValidMsg, setFullnameValidMsg] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const btnHandler = () => {
    const isEmailValid = emailValidate(email?.current?.value);
    const isPasswordValid = passwordValidate(password?.current?.value);
    const isFullnameValid = fullnameValidate(fullName?.current?.value);
    console.log(password.current.value);
    console.log(isPasswordValid);
    if (isEmailValid !== null) {
      email.current.style.borderBottomWidth = "2px";
      email.current.style.borderBottomColor = "#e87c03";
    } else {
      email.current.style.borderBottomWidth = "0px";
    }

    if (isPasswordValid !== null) {
      password.current.style.borderBottomWidth = "2px";
      password.current.style.borderBottomColor = "#e87c03";
    } else {
      password.current.style.borderBottomWidth = "0px";
    }

    if (fullName.current !== null && isFullnameValid !== null) {
      console.log(fullName);
      fullName.current.style.borderBottomWidth = "2px";
      fullName.current.style.borderBottomColor = "#e87c03";
    } else if (fullName.current !== null) {
      fullName.current.style.borderBottomWidth = "0px";
    }
    setEmailValidMsg(isEmailValid);
    setPasswordValidMsg(isPasswordValid);
    setFullnameValidMsg(isFullnameValid);
  };

  return (
    <div className="mx-auto flex flex-col md:h-screen md:w-3/5 lg:max-w-[450px] lg:max-h-[82vh]">
      <div className="body border-b-[1px] border-neutral-500 md:border-none min-h-[550px] pt-2 pb-8 sm:pb-0 px-[5%] md:bg-[#000000c0] md:px-[15%] md:pt-[15%] md:pb-[5%] lg:pb-[5rem] rounded-[4px] mb-10">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="main flex flex-col"
        >
          <p className="text-white text-3xl font-semibold mb-7 tracking-wide">
            {isSignIn ? "Sign In" : "Sign Up"}
          </p>
          {!isSignIn && (
            <input
              ref={fullName}
              className="px-4 py-4 rounded-[4px] w-full bg-[#333] text-white text-sm placeholder-neutral-400 mb-1 md:text-base lg:py-3"
              type="text"
              placeholder="Full Name"
            ></input>
          )}
          {!isSignIn && (
            <p className="text-[#e87c03] text-sm mb-4">{fullnameValidMsg}</p>
          )}
          <input
            ref={email}
            className="px-4 py-4 rounded-[4px] w-full bg-[#333] text-white text-sm placeholder-neutral-400 md:text-base mb-1 lg:py-3"
            type="email"
            placeholder="Email"
          ></input>
          <p className="text-[#e87c03] text-sm mb-4">{emailValidMsg}</p>
          <input
            ref={password}
            className="px-4 py-4 rounded-[4px] w-full bg-[#333] text-white text-sm placeholder-neutral-400 md:text-base mb-1 lg:py-3"
            type="password"
            placeholder="Password"
          ></input>
          <p className="text-[#e87c03] text-sm  mb-8">{passwordValidMsg}</p>
          <button
            onClick={btnHandler}
            className="w-full text-center py-3 text-white font-semibold bg-[#e50914] rounded-[4px] tracking-wide my-1 mb-3 "
          >
            Sign In
          </button>
          <div className="flex justify-between text-neutral-400 text-sm">
            <div className="flex items-center">
              <input type="checkbox" className="mr-1 rounded-md w-4 h-4 " />
              <p className="inline-block">Remember Me</p>
            </div>
            <p>Need help ?</p>
          </div>
        </form>
        <div className="other my-5 sm:mt-[3rem] lg:mt-[1rem]">
          <p
            className="text-neutral-400 mb-3 cursor-pointer"
            onClick={() => toggleSignIn()}
          >
            {isSignIn ? "New to Netflix?" : "Already have a account ?"}
            <span className="text-white font-semibold">
              {isSignIn ? " Sign up now." : " Sign in."}
            </span>
          </p>
          <p className="text-neutral-500 text-sm text-pretty">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <span className="text-blue-600 text-pretty"> Learn more.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
