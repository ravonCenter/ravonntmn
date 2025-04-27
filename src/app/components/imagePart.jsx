'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import ContactBTN from './contactBTN'; // Assuming this is your contact button component

export default function Hook() {
  return (
    <div className="relative h-screen top-10 flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Main Content */}
      <div className="text-center text-white z-10 space-y-6 px-6 md:px-12">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl font-extrabold tracking-tight"
        >
          Ravon Muloqot bilan Kelajagingizni quring
        </motion.h1>

        {/* Animated Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-xl sm:text-2xl font-medium"
        >
          Biz bilan eng yaxshi ta'lim, o'sish va imkoniyatlarni kashf eting
        </motion.p>

        {/* Contact Button with Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.4 }}
        >
          <ContactBTN />
        </motion.div>

        {/* Animated Down Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-8"
        >
          <a href="#about" className="text-3xl cursor-pointer">
            <FaArrowDown />
          </a>
        </motion.div>
      </div>

      {/* Floating Circles (Dynamic Elements) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <motion.div
          className="absolute w-40 h-40 bg-yellow-300 rounded-full opacity-80"
          animate={{ x: 150, y: -100 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-36 h-36 bg-green-400 rounded-full opacity-60"
          animate={{ x: -200, y: 50 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-52 h-52 bg-pink-500 rounded-full opacity-40"
          animate={{ x: 200, y: -150 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
}
