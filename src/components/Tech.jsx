import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const SkillBall = ({ index, name, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.22, 0.25)}
    className="w-28 h-28 green-pink-gradient p-1 rounded-full flex justify-center items-center shadow-card"
  >
    <div className="w-full h-full bg-slate-300 rounded-full py-2 px-2 flex justify-evenly items-center flex-col">
      <img src={icon} alt={name} className="w-16 h-16 object-contain" />
    </div>
  </motion.div>
);

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <SkillBall key={technology.name} index={index} {...technology} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
