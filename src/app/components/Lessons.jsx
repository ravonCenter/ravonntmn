import React from 'react';
import { BookOpen, Globe, Calculator, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const subjects = [
  { name: "Ingliz Tili", icon: <Globe size={40} /> },
  { name: "Rus tili", icon: <Globe size={40} /> },
  { name: "Koreys tili", icon: <Globe size={40} /> },
  { name: "Arab tili", icon: <Globe size={40} /> },
  { name: "Ona tili adabiyot", icon: <BookOpen size={40} /> },
  { name: "Matematika", icon: <Calculator size={40} /> },
  { name: "Tarix", icon: <Globe size={40} /> },
  { name: "Dasturlash", icon: <Code size={40} /> },
];

export default function Advantages() {
  return (
    <section id="lessons" className="w-full bg-gradient-to-br from-teal-100 via-blue-200 to-indigo-300 py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-12">
        <p className="text-3xl md:text-4xl font-semibold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
          Bizdagi darslar!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {subjects.map((subject, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2 }}
            className="flex flex-col items-center justify-between bg-white shadow-lg rounded-3xl p-6 max-w-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="bg-gradient-to-r from-blue-400 to-indigo-500 p-4 rounded-full mb-4">
              <div className="text-white">{subject.icon}</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{subject.name}</h3>
            <p className="text-sm text-gray-600 text-center">{subject.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
