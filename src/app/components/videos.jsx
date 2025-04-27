import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick"; // Import Slider component

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

export default function Videos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getSheetData() {
      const url = 'https://script.google.com/macros/s/AKfycbxmIe4A3xP6OxzY1Mgd8qXYyP-xALf9Ux68sdHS9RPAHsAwnet5U2o2NSgtPznBGMWy/exec';
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        jsonData.shift(); // Remove header row
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getSheetData();
  }, []);

  console.log("videos data", data);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <motion.div
      className="w-full py-16 px-4 md:px-12 bg-gradient-to-br from-sky-50 to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-600 border-b-4 border-blue-300 inline-block pb-2">
        Bizdagi Eventlar
      </h2>

      <Slider {...sliderSettings}>
        {data && data.length > 0 ? (
          data.map((student, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              className="relative bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl overflow-hidden shadow-md transition-all duration-300 p-4"
            >
              {/* Video iframe */}
              <div className="w-full aspect-video overflow-hidden border-4 border-white shadow-md rounded-xl">
                <motion.iframe
                  src={student[3]}
                  className="w-full h-full object-contain"
                  allowFullScreen
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-800 mb-1">
                  {student[0]}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-medium">{student[1]}</span>
                </p>

                {/* Achievements */}
                <div className="flex flex-wrap justify-center gap-2">
                  <Button
                    variant="outlined"
                    size="small"
                    color="info"
                    className="text-sm font-medium"
                  >
                    {student[2]}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 mt-10">
            Top students hozircha mavjud emas.
          </p>
        )}
      </Slider>
    </motion.div>
  );
}
