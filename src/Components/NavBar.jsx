/** @format */

import { useEffect, useState } from "react";
import assets from "../assets/assets";

const NavBar = () => {
  const [IsMobileMenu, setIsMobileMenu] = useState(false);
  useEffect(() => {
    if (IsMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [IsMobileMenu]);

  return (
    <nav className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt='Logo' />
        {/* Navigation menu */}
        <ul className='hidden md:flex space-x-6 lg:w-48 text-black'>
          <li>
            <a href='#header' className='cursor-pointer hover:text-gray-400'>
              Home
            </a>
          </li>
          <li>
            <a href='#About' className='cursor-pointer hover:text-gray-400'>
              About
            </a>
          </li>
          <li>
            <a
              href='#testimonials'
              className='cursor-pointer hover:text-gray-400'
            >
              Testimonials
            </a>
          </li>
          <li>
            <a href='#projects' className='cursor-pointer hover:text-gray-400'>
              Projects
            </a>
          </li>
        </ul>
        {/* Sign up button */}
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>
          Sign Up
        </button>
        <img
          onClick={() => {
            setIsMobileMenu(true);
          }}
          src={assets.menu_icon}
          className='md:hidden w-7 cursor-pointer '
          alt='menu_icon'
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          IsMobileMenu ? "fixed w-full" : "h-0 w-0"
        }  right-0 left-0 overflow-hidden  bg-white  transition-all `}
      >
        <div className='flex justify-end p-6 cursor-pointer'>
          <img
            onClick={() => {
              setIsMobileMenu(false);
            }}
            src={assets.cross_icon}
            className='w-6'
            alt=''
          />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium'>
          <a
            onClick={() => {
              setIsMobileMenu(false);
            }}
            href='#header'
            className='px-4 py-2 rounded-full inline-block'
          >
            Home
          </a>
          <a
            onClick={() => {
              setIsMobileMenu(false);
            }}
            href='#About'
            className='px-4 py-2 rounded-full inline-block'
          >
            About
          </a>
          <a
            onClick={() => {
              setIsMobileMenu(false);
            }}
            href='#Project'
            className='px-4 py-2 rounded-full inline-block'
          >
            Projects
          </a>
          <a
            onClick={() => {
              setIsMobileMenu(false);
            }}
            href='#Testimonial'
            className='px-4 py-2 rounded-full inline-block'
          >
            Testimonial
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
