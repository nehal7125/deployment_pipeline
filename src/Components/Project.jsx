/** @format */

import { useEffect, useState } from "react";
import assets, { projectsData } from "../assets/assets";
import { motion } from "framer-motion"; // Importing framer motion

const Project = () => {
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const [ShowCard, setShowCard] = useState(1);

  useEffect(() => {
    const UpdateShow = () => {
      if (window.innerWidth >= 1024) {
        setShowCard(projectsData.length); // Show all cards on large screens
      } else {
        setShowCard(1);
      }
    };

    UpdateShow(); // Call on initial render
    window.addEventListener("resize", UpdateShow);

    return () => {
      window.removeEventListener("resize", UpdateShow);
    };
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'
      id='Project'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Projects{" "}
        <span className='underline underline-offset-2 decoration-1 font-light'>
          Completed{" "}
        </span>
      </h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
        Crafting the projects since the last few years{" "}
      </p>

      {/* Slider buttons */}
      <div className='flex justify-end items-center mb-8'>
        <button
          onClick={prevProject}
          className='p-3 bg-gray-200 rounded mr-2'
          aria-label='Previous Project'
        >
          <img src={assets.left_arrow} alt='Previous' />
        </button>
        <button
          className='p-3 bg-gray-200 rounded mr-2'
          aria-label='Next Project'
          onClick={nextProject}
        >
          <img src={assets.right_arrow} alt='Next' />
        </button>
      </div>

      {/* Project slider container */}
      <motion.div
        className='overflow-hidden'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className='flex gap-8 transition transform duration-500 ease-in-out'
          style={{
            transform: `translateX(-${(CurrentIndex * 100) / ShowCard}%)`
          }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className='relative flex-shrink-0 w-full sm:w-1/4'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-auto mb-14'
              />
              <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                  <h2 className='text-xl font-semibold text-gray-500'>
                    {project.title}
                  </h2>
                  <p className='text-gray-300 text-sm'>
                    {project.price} <span className='px-1'></span>{" "}
                    {project.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Project;
