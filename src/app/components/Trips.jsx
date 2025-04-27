// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function Trips() {
//   const [data, setData] = useState([]);

//   const makeRequest = async () => {
//     try {
//       const response = await fetch("https://ravondomain.up.railway.app/trips");
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       console.error("Error fetching trips:", error);
//     }
//   };

//   useEffect(() => {
//     makeRequest();
//   }, []);

//   return (
//     <motion.div
//       className="w-full py-16 px-4 md:px-12 bg-gradient-to-br from-sky-50 to-white"
//       initial={{ opacity: 0 }} // Starts invisible
//       whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and reset y position
//       viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the component is in view
//     >
//       <h2 className="text-center text-blue-600 text-4xl font-bold mb-12 border-b-4 border-blue-300 inline-block pb-2">
//         Bizda ham o'qish, ham sayohat!
//       </h2>

//       <div className="flex flex-wrap gap-8 justify-center">
//         {data && data.length > 0 ? (
//           data.map((item) => (
//             <motion.div
//               key={item.id}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white shadow-lg border border-gray-200 rounded-xl w-full max-w-sm overflow-hidden transition-all duration-300 transform"
//               whileInView={{ opacity: 1, y: 0 }} // Fade in and reset position
//               initial={{ opacity: 0, y: 50 }} // Start below the fold
//               viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the card is in view
//             >
//               {/* Image */}
//               <div className="overflow-hidden rounded-t-xl">
//                 <img
//                   // src={item.imageUrl}
//                   alt={item.destination}
//                   className="w-full rounded-full object-cover object-center transition-transform duration-500 transform hover:scale-110"
//                 />
//               </div>

//               {/* Text */}
//               <div className="p-6 text-gray-800">
//                 <div className="bg-blue-100 text-blue-600 text-sm rounded-full px-4 py-2 mb-3 max-w-max mx-auto shadow-md">
//                   {item.destination}
//                 </div>
//                 <h3 className="text-2xl font-semibold text-blue-800 mb-2">{item.destination}</h3>
//                 <p className="text-sm text-gray-600 mb-4 line-clamp-4">{item.description}</p>
//                 <p className="text-xs text-gray-400 text-right">
//                   {new Date(item.date).toLocaleDateString()}
//                 </p>
//               </div>

//               {/* Overlay effect */}
//               <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 rounded-xl transition-all duration-300 hover:opacity-0" />
//             </motion.div>
//           ))
//         ) : (
//           <p className="text-gray-500 text-center text-lg mt-10">
//             Sayohatlar hozircha mavjud emas.
//           </p>
//         )}
//       </div>
//     </motion.div>
//   );
// }
