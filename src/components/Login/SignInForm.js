import { useRef, useState } from "react";
import emailValidate from "../../utils/emailValidate";
import passwordValidate from "../../utils/passwordValidate";
import fullnameValidate from "../../utils/fullnameValidate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import { useDispatch } from "react-redux";
import { getAuth } from "firebase/auth";
import { addUser } from "../../utils/userSlice";
import { FaGoogle } from "react-icons/fa";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { isMobile } from "react-device-detect";

const SignInForm = () => {
  const dispatch = useDispatch();
  const auth = getAuth();

  const [isSignIn, setIsSignIn] = useState(true);
  const [emailValidMsg, setEmailValidMsg] = useState(null);
  const [passwordValidMsg, setPasswordValidMsg] = useState(null);
  const [fullnameValidMsg, setFullnameValidMsg] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const clearErrorMessages = () => {
    setEmailValidMsg(null);
    setPasswordValidMsg(null);
    setFullnameValidMsg(null);
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    clearErrorMessages();
  };

  const btnHandler = () => {
    const isEmailValid = emailValidate(email?.current?.value);
    const isPasswordValid = passwordValidate(password?.current?.value);
    let isFullnameValid = null;

    // Chnage UI depending upon Error
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

    setEmailValidMsg(isEmailValid);
    setPasswordValidMsg(isPasswordValid);

    if (!isSignIn) {
      isFullnameValid = fullnameValidate(fullName?.current?.value);
      setFullnameValidMsg(isFullnameValid);
      if (isFullnameValid !== null) {
        fullName.current.style.borderBottomWidth = "2px";
        fullName.current.style.borderBottomColor = "#e87c03";
      } else {
        fullName.current.style.borderBottomWidth = "0px";
      }
    }

    // If all the field values are null, do auth else return
    const fieldValues = [isEmailValid, isPasswordValid, isFullnameValid];

    const everyFieldValid = fieldValues.every((element) => element === null);
    if (!everyFieldValid) return;

    // Sign in / Sign Up user
    if (!isSignIn) {
      // Sign Up new user
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/43956935?v=4",
          })
            .then(() => {
              // Profile updated
              // Update Store (because it does not contain updated displayName and photoURL) and navigate
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              // An error occurred
              setPasswordValidMsg(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/email-already-in-use") {
            setEmailValidMsg("Email already registered. Try Sign In");
          } else {
            setEmailValidMsg(errorCode + " " + errorMessage);
          }
        });
    } else {
      // Sign in exisiting user
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/invalid-credential") {
            setPasswordValidMsg("Invalid Email ID or password. Retry");
          } else {
            setEmailValidMsg(errorCode + " " + errorMessage);
          }
        });
    }
  };

  const googleAuthHandler = async () => {
    const provider = await new GoogleAuthProvider();
    auth.useDeviceLanguage();
    if (isMobile) {
      signInWithRedirect(auth, provider);
    } else {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // The signed-in user info.
          // const user = result.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setEmailValidMsg(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div className="mx-auto flex flex-col md:h-min md:w-3/5 lg:max-w-[450px] ">
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
            className="w-full text-center py-3 text-white font-semibold bg-[#e50914] rounded-[4px] tracking-wide my-1 mb-3 hover:bg-[rgb(180,7,16)]"
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

          <div className="mt-7 mb-3">
            <button
              onClick={googleAuthHandler}
              className="flex rounded-full w-full bg-[#e50914] p-2 py-3 md:py-2 items-center hover:bg-[rgb(180,7,16)]"
            >
              <FaGoogle className="text-white" />
              <div className="text-white text-sm font-semibold text-center w-full">
                SIGN IN WITH GOOGLE
              </div>
            </button>
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
