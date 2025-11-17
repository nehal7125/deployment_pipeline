/** @format */

import NavBar from "./NavBar";
import url from "../assets/house.jpg";
import { motion } from "framer-motion";

const HeaderSection = () => {
  return (
    <div
      className='min-h-screen mb-4 bg-center items-center w-full overflow-hidden bg-cover flex flex-col justify-center'
      style={{ backgroundImage: `url(${url})` }} // Ensure correct syntax
      id='Header'
    >
      <NavBar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='container text-center mx-auto px-6 md:px-20 lg:px-32 text-white'
      >
        <h2 className='text-5xl md:text-[82px] lg:sm-text-6xl inline-block max-w-3xl font-semibold'>
          Explore home that fit your dream
        </h2>
        <div className='flex justify-center space-x-6 mt-16'>
          <a href='' className='border border-white px-8 py-3 rounded'>
            Project
          </a>
          <a href='' className='bg-blue-600 px-8 py-3 rounded'>
            Contact us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default HeaderSection;
