import { headerLogo } from "../assets/images";
import { statistics, navLinks, shoes } from "../constants/constants";
import { arrowRight, hamburger } from "../assets/icons/index";
import { useState } from "react";
const Navbar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeimg, setActiveimg] = useState(shoes[0]?.bigShoe);
  return (
    <>
      <header className="pt-4 max-md:flex z-10 absolute left-0 right-0 md:px-20">
        <div className="flex justify-evenly items-center flex-nowrap ">
          <div className="pl-5 justify-self-start">
            <img src={headerLogo} alt="" className="" />
          </div>
          <div className="max-md:hidden flex-1">
            <ul className="flex flex-row gap-10 justify-center items-center">
              {navLinks.map(({ href, label }, index) => {
                return (
                  <li
                    key={index}
                    className="font-montserrat text-xl font-normal nav-item"
                  >
                    <a href={href}>{label}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <li className="font-monteserrat text-xl font-normal list-none max-md:hidden nav-item">
              <a href="/">Signup/Login</a>
            </li>
          </div>
        </div>
        <img
          src={hamburger}
          className=" hidden text-gray-500 max-md:block size-6 ml-auto mr-4"
          alt=""
        />
      </header>
      <div className="grid grid-cols-2 gap-10 mb-60 max-lg:grid-cols-1 max-sm:mb-24">
        <div className="flex flex-col justify-start items-baseline gap-14 pt-40 px-4 max-md:gap-8 max-md:pt-20">
          <h6 className="font-monteserrat font-normal text-fuchsia-500 text-xl">
            Summer Collection {new Date().getFullYear()}
          </h6>
          <h3 className="text-8xl font-semibold max-md:text-5xl">
            Latest Arrivals
            <br />{" "}
            <span className="text-fuchsia-600 font-monteserrat animate-bounce">
              Nike
            </span>{" "}
            Shoes
          </h3>
          <p className="font-monteserrat text-xl text-gray-400 font-normal ">
            Explore the Latest Nike Innovations for Your Active Lifestyle.
          </p>
          <button className="px-6 py-3 bg-fuchsia-500 text-white font-montserrat flex justify-between items-center gap-4 rounded-full hover:bg-fuchsia-400 active:bg-fuchsia-600 transition-colors">
            <p className="font-monteserrat text-xl">Shop now</p>
            <img src={arrowRight} alt="" />
          </button>
          <div>
            <div className="flex flex-row justify-center items-center gap-10">
              {Array.from(statistics, ({ value, label }, index) => {
                return (
                  <span key={index}>
                    <p className="font-palanquin text-5xl font-semibold max-md:text-2xl">
                      {value}
                    </p>

                    <p className="font-monteserrat text-xl text-gray-400 font-normal">
                      {label}
                    </p>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-cover bg-no-repeat bg-[url(assets/images/collection-background.svg)] bg-center bg-blend-multiply bg-gray-200 p-5 h-screen max-sm:h-[100%] ">
            <img
              src={activeimg}
              alt=""
              width={600}
              height={900}
              className="mx-auto max-sm:pb-20 object-contain lg:pt-10"
            />
          </div>
          <div className="flex flex-row justify-center items-center gap-3 absolute -bottom-3 right-10 left-10 ">
            {Array.from(shoes, ({ bigShoe }, index) => {
              return (
                <div
                  className={`bg-[url(assets/images/collection-background.svg)] bg-cover bg-no-repeat bg-center bg-gray-200 bg-blend-multiply rounded-lg shadow-lg border-1 p-2 ${
                    index === selectedIndex &&
                    "ring-1 ring-fuchsia-600 ring-offset-2"
                  }`}
                  key={index}
                  onClick={(e) => {
                    setSelectedIndex(index);
                    document.startViewTransition(() =>
                      setActiveimg(e.target.src)
                    );
                  }}
                >
                  <img src={bigShoe} alt="" width={200} height={200} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
