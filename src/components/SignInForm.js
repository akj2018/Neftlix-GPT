const SignInForm = () => {
  return (
    <div className="mx-auto flex flex-col md:h-screen md:w-3/5">
      <div className="body border-b-[1px] border-neutral-500 md:border-none min-h-[550px] pt-2 pb-8 sm:pb-0 px-[5%] md:bg-[#000000c0] md:px-[15%] md:pt-[15%] md:pb-[30%]">
        <div className="main flex flex-col">
          <p className="text-white text-3xl font-semibold mb-7 tracking-wide">
            Sign In
          </p>
          <input
            className="px-4 py-4 rounded-sm w-full bg-[#333] text-sm placeholder-neutral-400 mb-4"
            type="email"
            placeholder="Email or phone number"
          ></input>
          <input
            className="px-4 py-4 rounded-sm w-full bg-[#333] text-sm placeholder-neutral-400 mb-8"
            type="password"
            placeholder="Password"
          ></input>
          <button className="w-full text-center py-3 text-white font-semibold bg-[#e50914] rounded-sm tracking-wide my-1 mb-3">
            Sign In
          </button>
          <div className="flex justify-between text-neutral-400 text-sm">
            <div className="flex items-center">
              <input type="checkbox" className="mr-1 rounded-md w-4 h-4 " />
              <p className="inline-block">Remember Me</p>
            </div>
            <p>Need help ?</p>
          </div>
        </div>
        <div className="other my-5 sm:mt-[5rem]">
          <p className="text-neutral-400 mb-3">
            New to Netflix?
            <span className="text-white font-semibold"> Sign up now.</span>
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
