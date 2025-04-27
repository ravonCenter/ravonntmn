import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function TopStudents2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getSheetData() {
      const url = 'https://script.google.com/macros/s/AKfycbyVCST9CpMFi1Xe6h3JZVJ35ebjzcgPgg61KAAhtZvmfo4IragKDkltmbeW7JDXqHqu/exec';

      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        jsonData.shift()
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getSheetData();
  }, []);
  console.log(data)

  return (
    <motion.div
      className="w-full py-16 px-4 md:px-12 bg-gradient-to-br from-sky-50 to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-600 border-b-4 border-blue-300 inline-block pb-2">
        Yangiliklar
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.length > 0 ? (
          data.map((news) => (
            <motion.div
              key={news[0]}
              variants={cardVariants}
              className="bg-white shadow-lg border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
            >
              <div className="w-full h-56 overflow-hidden rounded-t-xl">
                <motion.img
                  src={news[3]}
                  alt={news[1]}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  🏅 {news[0]}
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  {news[1]}
                </p>
                <p className="text-xs text-gray-400 italic">{news[2]}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 mt-10">
            Yangiliklar hozircha mavjud emas.
          </p>
        )}
      </div>
    </motion.div>
  );
}
