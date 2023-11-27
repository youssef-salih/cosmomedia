import React from "react";
import home from "../../assets/image/home.png";
import PayAVisit from "../../components/payAVisit/PayAVisit";
import Services from "../../components/services/Services";
import LetsMake from "../../components/letsMake/LetsMake";
import Projects from "../../components/projects/Projects";
import WorkProcess from "../../components/workProcess/WorkProcess";
import { motion } from "framer-motion";
import Reveal from "../../components/reveal/Reveal";

const Home = () => {
  return (
    <div className="">
      <motion.div className="flex px-4 items-center container mx-auto">
        <Reveal style={"flex"}>
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
        </Reveal>
      </motion.div>

      <PayAVisit />
      <motion.div className="relative mb-24 container mx-auto">
        <Reveal>
          <Services />
        </Reveal>
      </motion.div>

      <LetsMake />

      <Reveal>
        <Projects />
      </Reveal>

      <div className="bg-[#FFF2F2] -mx-60 -rotate-6 h-max py-24">
        <Reveal width="100%">
          <div className=" pt-16 rotate-6">
            <WorkProcess />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Home;
