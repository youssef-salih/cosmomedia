import React from "react";
import home from "../../assets/image/home.png";
import PayAVisit from "../../components/payAVisit/PayAVisit";
import Services from "../../components/services/Services";
const Home = () => {
  return (
    <>
      <div className="flex px-4 items-center ">
        <div className="w-1/2 flex flex-col pt-[5%] pl-5">
          <p className="text-8xl w-2/3">We Create Impactful Stories</p>
          <p className="w-3/4 text-2xl font-montserat">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
        </div>
        <div className="">
          <img src={home} alt="" />
        </div>
      </div>
      <PayAVisit />
      <div className="relative">
        <Services />
      </div>
    </>
  );
};

export default Home;
