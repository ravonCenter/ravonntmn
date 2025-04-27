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
// https://script.google.com/macros/s/AKfycbzmziyRjsYS7RvLPcIJUcg757RHEgbJ99Vtse27uR4sgiSRjQNrnGtbFMB_U5vNaZI_/exec

export default function TopStudents() {
  const [data, setData] = useState([]);

  
    useEffect(() => {
      async function getSheetData() {
        const url = 'https://script.google.com/macros/s/AKfycbzmziyRjsYS7RvLPcIJUcg757RHEgbJ99Vtse27uR4sgiSRjQNrnGtbFMB_U5vNaZI_/exec';
  
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

  // Slider settings
  const sliderSettings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop the slides
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 3 cards at a time by default
    slidesToScroll: 1, // Scroll one item at a time
    autoplay: true, // Autoplay the slideshow
    autoplaySpeed: 5000, // Autoplay speed
    responsive: [
      {
        breakpoint: 1024, // For large screens (desktops/tablets)
        settings: {
          slidesToShow: 3, // Show 3 items on larger screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For medium screens (tablets)
        settings: {
          slidesToShow: 2, // Show 2 items on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For small screens (mobile)
        settings: {
          slidesToShow: 1, // Show 1 item on mobile screens
          slidesToScroll: 1,
        },
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
        Top O'quvchilar Bilan Tanishing
      </h2>

      {/* Slider component */}
      <Slider {...sliderSettings}>
        {data && data.length > 0 ? (
          data.map((student, idx) => (
            <motion.div
              key={student.id || idx}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="relative bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
            >
              {/* Profile Image */}
              <div className="w-32 h-32 mx-auto mt-6 rounded-full overflow-hidden border-4 border-white shadow-md">
                <motion.img
                  src={student[5]}
                  alt={student[4]}
                  className="w-full h-full object-contain rounded-full"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-800 mb-1">
                  {student[0]}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-medium">{student[3]}</span> Scholarship 🏅
                </p>

                {/* Achievements */}
                <div className="flex flex-wrap justify-center gap-2">
                    <Button
                      variant="outlined"
                      size="small"
                      color="info"
                      className="text-sm font-medium"
                    >
                      {student[3]}
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
