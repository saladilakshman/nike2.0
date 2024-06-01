import { products } from "../constants/constants";
import { star } from "../assets/icons/index";
const Products = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-baseline">
        <div className="p-2">
          <h4 className="header-text ">
            Our <span className="text-[#d420ff]">Popular</span> Products
          </h4>
          <h6 className="header-desc ">
            Discover our popular products, where style meets demand.
            <br /> Explore the favorites of our customers, curated just for you.
          </h6>
          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-10 max-sm:mx-4">
            {Array.from(products, ({ name, imgURL, price }, index) => {
              return (
                <div className="flex flex-col gap-4 max-sm:gap-2" key={index}>
                  <div className="relative group" id="image-cards">
                    <img src={imgURL} alt="" className="w-[20rem]" />
                    <button className="absolute top-[45%] left-[30%] opacity-0 bg-violet-500 text-white px-6 py-2 rounded-lg font-normal font-sans hover:bg-violet-600 active:bg-violet-800  group-hover:opacity-100 transition-opacity max-sm:left-[10%] max-sm:w-auto">
                      Add to Cart
                    </button>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-2 ">
                    <img src={star} />
                    <p className="font-monteserrat text-gray-400 text-2xl font-normal max-sm:text-xl">
                      4.5
                    </p>
                  </div>
                  <h5 className="font-monteserrat text-2xl font-semibold max-sm:text-xl">
                    {name}
                  </h5>
                  <h6 className="text-xl font-montserrat font-semibold text-[#d420ff]">
                    {price}
                  </h6>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
