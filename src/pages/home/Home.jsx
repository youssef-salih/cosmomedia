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
      <motion.div className="flex items-center">
        <RevealFromBottom style={"flex flex-col lg:flex-row px-[5vw]"}>
          <div className="pt-[2vw] lg:w-1/2">
            <p className="lg:text-[8vw] text-[22vw]  text-center md:text-start leading-none">
              We Create Impactful Stories
            </p>
            <p className=" lg:text-[1.5vw] text-[5vw] font-montserat text-center md:text-start">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={home}
              alt="home image"
              className="lg:w-[50vw] md:w-[70vw]  "
            />
          </div>
        </RevealFromBottom>
      </motion.div>

      <div className="px-[2vw]">
        <PayAVisit />
      </div>

      <RevealFromBottom style={"relative mb-[5vw]"}>
        <Services />
      </RevealFromBottom>

      <LetsMake />

      <RevealFromBottom>
        <Projects />
      </RevealFromBottom>

      <div className="bg-[#FFF2F2] md:-mx-[4vw] md:-rotate-6 h-max md:py-[5vw] py-[2vw] md:mb-[2vw] px-[2vw] lg:px-[5vw]">
        <RevealFromBottom width="100%">
          <div className=" md:pt-[2vw] md:rotate-6">
            <WorkProcess />
          </div>
        </RevealFromBottom>
      </div>
    </>
  );
};

export default Home;
