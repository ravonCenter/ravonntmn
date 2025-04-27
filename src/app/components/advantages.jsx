import React from 'react';
import StatCard from './StatCard';
import { motion } from 'framer-motion';

export default function Advantages() {
  const advantages = [
    { title: "Joylashuv", value: "Qulay joylashuv" },
    { title: "Ustozlar", value: "Xalqaro toifadagi va tajribali ustozlar" },
    { title: "Sifat", value: "Sifat va tezlik uyg'unligi" },
    { title: "O'quv Tizimi", value: "Cambridge tizimi asosida tashkillashtirilgan darslar" },
    { title: "Imtihon", value: "Har 3 oyda olinadigan daraja testlari" }
  ];

  return (
    <section
      id="advantages"
      className="w-full bg-gradient-to-br from-emerald-50 via-emerald-100 to-white py-8 px-4 sm:px-6 md:px-8 lg:px-16"
    >
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-900 tracking-tight border-b-2 sm:border-b-4 border-emerald-600 inline-block pb-2 sm:pb-3 drop-shadow-md">
          Bizning Qulayliklarimiz!
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {advantages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="bg-white/60 border border-emerald-200 backdrop-blur-lg p-4 sm:p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          >
            <StatCard 
              title={item.title} 
              value={item.value} 
              className="text-xs sm:text-sm" // Explicitly ensure it's 12px or smaller on mobile
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
