/** @format */

import React from "react";
import assets from "../assets/assets";

const Footer = () => {
  return (
    <footer
      className='pt-10 px-4 md:px-20 lg:px-32 bg-blue-900 text-white w-full overflow-hidden'
      id='Footer'
    >
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        {/* Company Info Section */}
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={assets.logo_dark} alt='Logo' className='mb-4' />
          <p className='text-gray-300'>
            At Real Estate Demo, we specialize in helping you find your perfect
            home. Whether you're buying, renting, or selling, we provide a
            seamless experience with a wide range of properties to choose from.
            Our dedicated team is committed to making your real estate journey
            smooth and stress-free. With years of expertise in the housing
            market, we ensure you get the best deals and make informed
            decisions. Explore our listings today and discover the home of your
            dreams!
          </p>
        </div>

        {/* Company Links Section */}
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <li>
              <a href='#HeaderSection' className='hover:text-white'>
                Home
              </a>
            </li>
            <li>
              <a href='#About' className='hover:text-white'>
                About Us
              </a>
            </li>
            <li>
              <a href='#contact' className='hover:text-white'>
                Contact Us
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className='w-full md:w-1/3'>
          <h3 className='text-lg font-bold mb-4'>Newsletter</h3>
          <p className='text-gray-400 mb-4'>
            Stay updated with the latest news and properties. Subscribe to our
            newsletter for exclusive updates and offers.
          </p>
          <form className='flex flex-col md:flex-row'>
            <input
              type='email'
              placeholder='Enter your email'
              className='px-4 py-2 rounded-l-md text-gray-800 w-full md:w-2/3 mb-4 md:mb-0'
              required
            />
            <button
              type='submit'
              className='bg-blue-600 text-white px-8 py-2 rounded-r-md'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='mt-10 text-center text-gray-400'>
        <p>
          &copy; {new Date().getFullYear()} Real Estate Demo. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
