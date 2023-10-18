import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <div>
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
            {position}&nbsp;{" "}
            <a
              href={companyLink}
              target="_blank"
              className="text-primary capitalize dark:text-primaryDark"
            >
              @{company}
            </a>{" "}
          </h3>
          <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
            {time}|{address}
          </span>
          <p className="font-medium w-full md:text-sm">{work}</p>
        </div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-4xl xs:3xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]
    "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Fullstack Intern"
            company="LEGO AI"
            time="2023-Present"
            address="Bangalore"
            work="Part of the Development team and spearheaded the creation of a comprehensive portfolio website for the company, showcasing their product introductions with precision. Delved deeply into the intricacies of the main product, ensuring a seamless and dynamic user experience. Integrated interactive features, demonstrating both the company's vision and product capabilities, culminating in an engaging and functional platform."
          />

          <Details
            position="Organizing Comittee"
            company="Hackstory'23"
            time="2023-Present"
            address="VIT Vellore"
            work="Part of the Organizing Committee at VIT's one of the biggest student-run hackathon. Managed more
                    than 1000 students across the duration of the hack."
          />

          <Details
            position="Finance and Outreach Head"
            company="AI ML Club"
            time="2022-Present"
            address="VIT Vellore"
            work="Head of Finance and Outreach department at VIT’s one of the biggest machine learning club. 
                    As a part of the web development domain Successfully developed the portfolio website for the club"
          />

          <Details
            position="Core Committee"
            company="ACM VIT"
            time="2022-Present"
            address="VIT Vellore"
            work="Part of Web Development team, ideated and developed open-source projects. 
                    Developed and implemented a dynamic and user-friendly event website, integrating interactive features and
                    ensuring seamless functionality."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
