const Signup = () => {
  return (
    <div className="flex flex-row  max-md:flex-col max-md:gap-12 justify-around items-center py-20">
      <div>
        <h5 className="header-text">
          Sign Up for <span className="text-fuchsia-600">Updates</span>
          <br />& Newsletter
        </h5>
      </div>
      <div className="relative">
        <input
          type="email"
          placeholder="susbscrbe@nike.com"
          className="w-[32rem] rounded-full p-5 border border-black outline-none max-lg:max-w-sm max-sm:w-[22rem]"
        />
        <button className="py-3 px-7 rounded-full bg-fuchsia-500 text-xl text-white absolute top-2 right-3 active:bg-fuchsia-600 transition-colors max-md:w-full max-md:right-0 max-md:top-20">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
