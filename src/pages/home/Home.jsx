import React from "react";
import home from "../../assets/image/home.png";
const Home = () => {
  return (
    <div className="flex px-4 items-center ">
      <div className="w-1/2 flex flex-col pt-[5%] ps-2">
        <p className="text-8xl w-2/3">We Create Impactful Stories</p>
        <p className="w-1/2 text-2xl">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
      </div>
      <div className="">
        <img src={home} alt="" />
      </div>
    </div>
  );
};

export default Home;
