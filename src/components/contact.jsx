import { socialMedia, footerLinks } from "../constants/constants";
import { footerLogo } from "../assets/images";
const Contact = () => {
  function ContactLayout(params) {
    const { title, links } = params;
    return (
      <div className="text-gray-200 ">
        <div>
          <h4 className="text-2xl font-montserrat font-medium mb-6 text-nowrap">
            {title}
          </h4>
          <ul className="flex flex-col items-start">
            {Array.from(links, ({ name, link }, index) => {
              return (
                <li
                  key={index}
                  className="no-underline text-xl py-2 hover:text-fuchsia-500"
                >
                  <a href={link}>{name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className=" bg-black mt-14 text-gray-300 px-16 pt-16 pb-6">
      <div className="grid grid-cols-4 gap-10  max-lg:grid-cols-1">
        <div className="flex flex-col justify-start items-baseline gap-10 max-lg:col-span-4">
          <img src={footerLogo} alt="" className="w-[8rem]" />
          <h5 className="text-xl font-montserrat font-normal break-words">
            Prepare your shoe collection for the upcoming season at the nearest
            Nike store. Discover your ideal size in-store, and unlock rewards
            along the way.
          </h5>
          <div className="flex flexjustify-center items-center gap-10">
            {Array.from(socialMedia, ({ src, alt }, index) => {
              return (
                <div key={index} className="bg-white rounded-full p-2">
                  <img src={src} alt={alt} className="w-[2rem]" />
                </div>
              );
            })}
          </div>
        </div>
        {footerLinks.map((footerLink, index) => {
          return (
            <div
              key={index}
              className={`${
                index === 0 || index === 1 ? "max-md:col-span-2" : ""
              } max-sm:col-span-4`}
            >
              {ContactLayout(footerLink)}
            </div>
          );
        })}
      </div>
      <div className="flex flex-row flex-wrap justify-between items-center pt-20">
        <h5 className="font-montserrat text-lg ">
          <span className="font-montserrat text-lg">&copy;</span> Copyright. All
          rights reserved.
        </h5>
        <h6 className="font-montserrat text-md">Terms & Conditions</h6>
      </div>
    </div>
  );
};

export default Contact;
