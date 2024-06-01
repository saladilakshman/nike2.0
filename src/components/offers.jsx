import { offer } from "../assets/images/index";
import { arrowRight } from "../assets/icons/index";
const Offers = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 mt-40 place-items-center max-sm:gap-4 p-4">
      <div>
        <img src={offer} alt="" className="transition hover:rotate-2" />
      </div>
      <div>
        <h4 className="header-text">
          <span className="text-[#d420ff]">Special</span> Offer
        </h4>
        <h6 className="header-desc text-justify tracking-normal leading-relaxed max-sm:w-full max-md:w-full">
          Indulge in luxury without breaking the bank with our Special Offer.
          Discover premium products at prices that are too good to resist. From
          stylish footwear to fashion essentials, our special deals cater to
          every taste and budget
          <br />
          <br /> Treat yourself or find the perfect gift for a loved one. Our
          Special Offer makes it all possible, delivering exceptional quality at
          an extraordinary value.
        </h6>
        <div className="flex  flex-wrap justify-start items-center gap-3">
          <button className="flex justify-center items-center gap-3 bg-[#d420ff] text-white font-monteserrat py-3 px-6 text-lg rounded-full transition hover:bg-black border-violet-400 hover:rotate-6 max-w-sm">
            Shop Details
            <img src={arrowRight} alt="" />
          </button>
          <button className="flex justify-center items-center gap-3 bg-[#d420ff] text-white font-monteserrat py-3 px-6 text-lg rounded-full transition hover:bg-black border-violet-400 hover:rotate-6 max-w-sm">
            Learn More
            <img src={arrowRight} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
