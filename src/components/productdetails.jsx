import { shoe8 } from "../assets/images";
const Productdetails = () => {
  return (
    <div className="grid lg:grid-cols-2  mt-40  max-lg:gap-4 max-lg:ms-0">
      <div className="flex flex-col justify-start items-baseline px-6">
        <h3 className="header-text">
          We Provide You{" "}
          <span className="text-[#d420ff]">
            Super
            <br /> Quality
          </span>{" "}
          Shoes
        </h3>
        <h6 className="header-desc w-3/4 text-balance tracking-normal leading-relaxed max-sm:w-full max-md:w-full">
          We take pride in delivering superior quality shoes that not only
          elevate your style but also prioritize comfort and durability. Our
          commitment to excellence ensures that every step you take is a step in
          the right direction, with shoes that meet the highest standards of
          craftsmanship and materials. <br />
          <br />
          Experience the difference in every pair, as we strive to provide you
          with nothing less than the best in footwear.
        </h6>
        <button className="bg-[#d420ff] py-3 px-8 rounded-full text-white font-montserrat text-lg transition hover:bg-black border-violet-400 hover:rotate-6">
          View Details
        </button>
      </div>
      <div>
        <img
          src={shoe8}
          alt=""
          className="w-[100%] h-3/4 sm:w-full transition hover:rotate-6"
        />
      </div>
    </div>
  );
};

export default Productdetails;
