import React from "react";
import home from "../../assets/image/home.png";
import PayAVisit from "../../components/payAVisit/PayAVisit";
import Services from "../../components/services/Services";
import LetsMake from "../../components/letsMake/LetsMake";
import Projects from "../../components/projects/Projects";
import WorkProcess from "../../components/workProcess/WorkProcess";
import { motion } from "framer-motion";
import { RevealFromBottom } from "../../components/reveal/Reveal";

const Home = () => {
  return (
    <div className="">
      <motion.div className="flex px-4 items-center container mx-auto">
        <RevealFromBottom style={"flex"}>
          <div className="w-1/2 flex flex-col pt-[5%] pl-5">
            <p className="text-8xl w-2/3">We Create Impactful Stories</p>
            <p className="w-3/4 text-2xl font-montserat">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
          </div>
          <div className="">
            <img src={home} alt="" />
          </div>
        </RevealFromBottom>
      </motion.div>

      <PayAVisit />

      <RevealFromBottom style={"relative mb-24"}>
        <Services />
      </RevealFromBottom>

      <LetsMake />

      <RevealFromBottom>
        <Projects />
      </RevealFromBottom>

      <div className="bg-[#FFF2F2] -mx-60 -rotate-6 h-max py-24">
        <RevealFromBottom width="100%">
          <div className=" pt-16 rotate-6">
            <WorkProcess />
          </div>
        </RevealFromBottom>
      </div>
    </div>
  );
};

export default Home;
