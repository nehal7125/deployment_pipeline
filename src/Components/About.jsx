/** @format */

import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
      id='About'
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className='text-2xl sm:text-4xl font-bold mb-2'
      >
        About{" "}
        <span className='underline underline-offset-4 decoration under font-light '>
          Our Brand{" "}
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className='text-gray-500 max-w-80 text-center mb-8'
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </motion.p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          src={assets.brand_img}
          className='w-full sm:w-1/2 max-w-lg'
          alt=''
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className='flex flex-col items-center md:items-start mt-10 text-gray-600'
        >
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            {[
              { count: "10+", label: "Years of Experience" },
              { count: "12+", label: "Projects Completed" },
              { count: "20+", label: "Minimum Square Foot Delivery" },
              { count: "25+", label: "Ongoing Projects" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
              >
                <p className='text-4xl font-medium text-gray-800'>
                  {item.count}
                </p>
                <p>{item.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            className='my-10 max-w-lg'
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            cum voluptates molestias <br />
            autem totam adipisci reiciendis eligendi esse similique, inventore
            incidunt eveniet ducimus libero! Blanditiis unde eos laborum
            temporibus dolorum?
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className='bg-blue-600 px-8 py-2 rounded text-white'
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
