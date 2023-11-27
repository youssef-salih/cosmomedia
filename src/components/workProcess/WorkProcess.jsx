import React from "react";
import { motion } from "framer-motion";
import { consultation } from "../../assets/icons";
import WorkProcessAccordion from "./WorkProcessAccordion";

const WorkProcess = () => {
  const processes = [
    {
      name: "Consultation",
      icon: consultation,
      desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      name: "Research and Strategy Development",
      icon: consultation,
      desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      name: "Consultation",
      icon: consultation,
      desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      name: "Consultation",
      icon: consultation,
      desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
  ];
  return (
    <>
      {" "}
      <div className="px-16">
        <h1 className="text-[#F64E2A] text-8xl">WorkProcess</h1>
        <p className="font-montserat  text-black ">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Projects
        </p>
      </div>
      {processes.map(({ name, icon, desc }, i) => (
        <WorkProcessAccordion key={i} name={name} icon={icon} desc={desc} />
      ))}
    </>
  );
};

export default WorkProcess;
