import React, { useEffect } from "react";
import home from "../../assets/image/home.png";
import PayAVisit from "../../components/payAVisit/PayAVisit";
import Services from "../../components/services/Services";
import LetsMake from "../../components/letsMake/LetsMake";
import Projects from "../../components/projects/Projects";
import WorkProcess from "../../components/workProcess/WorkProcess";
import { motion } from "framer-motion";
import { RevealFromBottom } from "../../components/reveal/Reveal";
import axios from "axios";
import { useMutation } from "@apollo/client";
import { send_current } from "../../request/graphql";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [sendCurrent] = useMutation(send_current);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const deiExpiration = localStorage.getItem("dei");
        const currentTime = new Date();
        // Check if local storage is empty or expired
        if (!deiExpiration || parseInt(deiExpiration) < currentTime.getTime()) {
          // Get geolocation data
          const response = await axios.get("https://geolocation-db.com/json/");
          const res = await axios.get(
            `https://ipapi.co/${response.data.IPv4}/json`
          );

          // Update local storage with current time + 24 hours
          const expirationTime = new Date();
          expirationTime.setHours(expirationTime.getHours() + 24);

          localStorage.setItem("dei", expirationTime.getTime().toString());

          // Call sendCurrent mutation
          const send = await sendCurrent({
            variables: {
              countryCode: res.data.country_code,
              ipAddress: res.data.ip,
              userAgent: window.navigator.userAgent,
            },
          });
          console.log(send.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-texture bg-cover bg-no-repeat">
        <motion.div className="flex items-center  ">
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

        <RevealFromBottom width="100%" style={"px-[2vw]"}>
          <PayAVisit />
        </RevealFromBottom>

        <RevealFromBottom style={"relative mb-[5vw]"}>
          <Services />
        </RevealFromBottom>

        <LetsMake />
      </div>
      {/* 
      <RevealFromBottom>
        <Projects />
      </RevealFromBottom> */}

      <div className="bg-[#FFF2F2] md:-mx-[4vw]  lg:-rotate-6 h-max md:py-[5vw] py-[2vw] md:mb-[2vw] px-[2vw] lg:px-[5vw] -z-10">
        <RevealFromBottom width="100%">
          <div className=" lg:pt-[2vw]  px-[2vw] lg:rotate-6">
            <WorkProcess />
          </div>
        </RevealFromBottom>
      </div>
    </>
  );
};

export default Home;
