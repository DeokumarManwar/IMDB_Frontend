import React from "react";
import { motion } from "framer-motion";
import { BsStarFill } from "react-icons/bs";
import bg from "../assets/image/mobimg.png";
export const MovieCard = ({ data, index, type }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative w-[275px] h-[670px] bg-[#171717] shadow-md flex flex-col  hover:shadow-2xl m-8"
    >
      <div className=" h-[400px] drop-shadow-lg relative items-center overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={bg}
          className="w-[275px] h-[400px] object-cover"
        />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row px-2 gap-1 py-2 m-4">
          <p className="text-[#fee227] text-2xl">⭐</p>
          <p className="text-gray-600 font-sans text-2xl font-bold">8.7</p>
        </div>
      </div>
      <p className="flex items-center justify-center text-center">
        <span className="text-3xl text-center text-white my-2">
          Guardian Of the Galaxy volume 2
        </span>
      </p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center justify-center my-4"
      >
        <button className=" h-[50px] w-[200px] rounded-md hover:bg-[#232323] text-2xl text-white bg-[#000000]">
          More Info
        </button>
      </motion.div>
    </motion.div>
  );
};
