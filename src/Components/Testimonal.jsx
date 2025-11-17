/** @format */

import assets, { testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonal = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={containerVariants}
      className='container mx-auto py-10 lg:px-32 w-full overflow-hidden'
      id='testimonials'
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='text-2xl sm:text-4xl font-bold text-center mb-2'
      >
        Customer{" "}
        <span className='underline underline-offset-4 decoration-1 font-light'>
          Testimonal{" "}
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className='text-center mb-12 mx-auto max-w-80'
      >
        Stories from our loving customers. This is a demo.
      </motion.p>
      <motion.div
        variants={containerVariants}
        className='flex flex-wrap justify-center gap-8'
      >
        {testimonialsData.map((Testimonal, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'
          >
            <img
              src={Testimonal.image}
              alt={Testimonal.alt}
              className='w-20 h-20 rounded-full mx-auto mb-4'
            />
            <h2 className='text-xl text-gray-800 font-medium'>
              {Testimonal.name}
            </h2>
            <p className='text-gray-600 mb-4 text-sm'>{Testimonal.title}</p>
            <div className='flex justify-center gap-1 text-red-600 mb-4'>
              {Array.from({ length: Testimonal.rating }, (_, index) => (
                <img key={index} src={assets.star_icon} alt='Star' />
              ))}
            </div>
            <div>
              <p className='text-gray-600'>{Testimonal.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Testimonal;
