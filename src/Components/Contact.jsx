/** @format */

import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2b271a7d-d597-42f6-9267-718399c8c5b1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'
      id='contact'
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='text-2xl sm:text-4xl font-bold text-center mb-2'
      >
        Contact US
        <span className='mx-3 underline underline-offset-4 decoration-1 font-light'>
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

      <motion.form
        onSubmit={onSubmit}
        className='max-w-2xl mx-auto pt-8 text-gray-300'
        initial='hidden'
        animate='visible'
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        <motion.div
          className='flex flex-wrap'
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
        >
          <div className='w-full md:w-1/2 text-left'>
            Your Name
            <input
              className='w-full border border-grey-200 rounded py-3 px-3 mt-2'
              name='name'
              type='text'
              placeholder='Nehal Ingole'
              required
            />
          </div>
          <div className='w-full md:w-1/2 text-left md:pl-4'>
            Your Email
            <input
              className='w-full border border-grey-200 rounded py-3 px-3 mt-2'
              name='Email'
              type='email'
              placeholder='Email'
              required
            />
          </div>
        </motion.div>
        <motion.div
          className='my-6 text-left'
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
        >
          Message
          <textarea
            className='w-full border border-grey-300 px-4 py-3 mt-2 h-48 resize-none'
            name='Message'
            placeholder='Message'
            required
          ></textarea>
        </motion.div>
        <motion.button
          className='bg-blue-800 text-white px-12 py-2 mb-10'
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
          }}
        >
          {result ? result : "Send Message "}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
