import { reviews } from "../constants/constants";
import { star } from "../assets/icons";
const Review = () => {
  return (
    <div className="mt-40 bg-slate-200  pb-12 mb-8 mx-auto">
      <div className="py-20">
        <h5 className="header-text text-center">
          What Our <span className="text-[#d420ff] ">Connoisseurs</span> Say?
        </h5>
        <h6 className="max-w-[32rem] mx-auto header-desc text-center leading-relaxed max-sm:p-5">
          Gain valuable insights and heartfelt testimonials from our discerning
          clientele, as they share their experiences with our products and
          services.
        </h6>
      </div>
      <div className="flex flex-row justify-around items-center gap-8  max-lg:gap-20 max-md:flex-col">
        {Array.from(
          reviews,
          ({ imgURL, customerName, rating, feedback }, index) => {
            return (
              <div
                className="flex flex-col  justify-center items-center gap-3 transition hover:scale-110"
                key={index}
              >
                <img
                  src={imgURL}
                  alt=""
                  className="size-44 rounded-full max-md:size-24"
                />
                <p className="font-monteserrat text-xl text-gray-500 text-center  max-w-sm font-normal tracking-normal leading-normal max-sm:p-5 ">
                  {feedback}
                </p>
                <div className="flex justify-center items-center gap-2">
                  <img src={star} alt="" />
                  <p className="font-monteserrat text-2xl text-gray-500 font-normal">
                    {rating}
                  </p>
                </div>
                <h5 className="font-semibold text-3xl">{customerName}</h5>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Review;
