import React from 'react';
import { motion } from 'framer-motion';
import ContactBTN from './contactBTN';
import StatCard from './StatCard';

export default function AboutUs() {
  const year = new Date().getFullYear();

  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-b from-white via-emerald-100 to-emerald-50 text-emerald-950 py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-12 text-emerald-900 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Biz Haqimizda
        </motion.h1>

        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Side: About Text */}
          <motion.div
            className="md:w-1/2 bg-white/60 backdrop-blur-lg shadow-xl rounded-xl p-8 text-lg leading-relaxed space-y-6 border border-emerald-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <p className="text-xs sm:text-sm md:text-base"> {/* Set text size */}
              <span className="font-semibold text-emerald-700">Ravon Muloqot</span> O'quv markazi{' '}
              <strong>2018-yil</strong> <b>Isoqulov Ma'ruf</b> tomonidan asos solingan. 
              {year} yilgacha Urgut tumanida o'z faoliyatini muvaffaqiyatli davom ettirmoqda.
            </p>

            <div className="space-y-2">
              <StatCard title="Tashkil topgan yili:" value={2018} />
              <StatCard title="Shior:" value="Ilm najot kalitidir" />
            </div>

            <div className="pt-4">
              <ContactBTN />
            </div>
          </motion.div>

          {/* Right Side: Stats */}
          <motion.div
            className="md:w-1/2 bg-white/60 backdrop-blur-lg shadow-xl rounded-3xl p-8 border border-emerald-300"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-emerald-800"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              Markaz Statistikasi
            </motion.h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <StatCard title="O'qishga kirish" value="40+" />
              <StatCard title="Sertifikatlar" value="150+" />
              <StatCard title="Fanlar" value="10+" />
              <StatCard title="Ustozlar" value="20+" />
              <StatCard title="O'quvchilar" value="1000+" />
              <StatCard title="Tajriba (yil)" value={`${year - 2018}+`} />
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
