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
    <>
      <motion.div className="flex   px-4 items-center container mx-auto">
        <RevealFromBottom style={"flex flex-col lg:flex-row"}>
          <div className="lg:w-1/2 flex flex-col  pt-[5%] pl-5">
            <p className="text-8xl lg:w-2/3 text-center md:text-start">
              We Create Impactful Stories
            </p>
            <p className="lg:w-3/4 text-2xl font-montserat text-center md:text-start">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={home} alt="" />
          </div>
        </RevealFromBottom>
      </motion.div>

      <div className="px-4">
        <PayAVisit />
      </div>

      <RevealFromBottom style={"relative mb-24"}>
        <Services />
      </RevealFromBottom>

      <LetsMake />

      <RevealFromBottom>
        <Projects />
      </RevealFromBottom>

      <div className="bg-[#FFF2F2] md:-mx-20 md:-rotate-6 h-max md:py-24 py-8 md:mb-36">
        <RevealFromBottom width="100%">
          <div className=" md:pt-16 md:rotate-6">
            <WorkProcess />
          </div>
        </RevealFromBottom>
      </div>
    </>
  );
};

export default Home;
