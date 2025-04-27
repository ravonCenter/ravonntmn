import React from 'react';
import StatCard from './StatCard';
import { motion } from 'framer-motion';

export default function AdministrativeStaff() {
  return (
    <section
      id="director"
      className="w-full mx-auto flex items-center justify-center text-gray-800 bg-gradient-to-r from-white via-gray-100 to-gray-200 py-16 px-6"
    >
      <div className="w-full max-w-5xl">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 tracking-tight">
          Founder
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Animated Director Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-60 md:w-80 mb-8 md:mb-0 rounded-xl overflow-hidden shadow-xl hover:scale-105 transform transition-all duration-300"
          >
            <img
              src="/staff/director.png"
              alt="Director"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Animated Stat Cards */}
          <div className="w-full md:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <StatCard title="Ism" value="Isoqulov Ma'ruf" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <StatCard title="Email" value="m.isoqulov@mail.ru" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <StatCard title="Telefon raqam" value="+99899 333 66 16" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <StatCard title="Manzil" value="Samarqand viloyati, Urgut tumani" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
