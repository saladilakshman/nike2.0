import { services } from "../constants/constants";
const Services = () => {
  return (
    <div
      className="mt-40 grid grid-cols-3 gap-8 max-md:grid-cols-1 m-3 max-md:mt-20"
      id="service-elements"
    >
      {Array.from(services, ({ imgURL, label, subtext }, index) => {
        return (
          <div
            className=" p-16 max-sm:p-10 max-sm:min-h-[15rem] min-h-[20rem] bg-white shadow-xl border border-gray-100 flex flex-col justify-start items-baseline rounded-3xl gap-4 transition hover:scale-105"
            key={index}
          >
            <img
              src={imgURL}
              alt=""
              className="w-12 h-12 bg-[#d420ff] p-2 rounded-full"
            />
            <h5 className="font-semibold text-3xl font-montserrat">{label}</h5>
            <h6 className="text-xl text-gray-400">{subtext}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
