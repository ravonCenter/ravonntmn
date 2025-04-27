"use client";
import { useEffect, useState } from "react";
import Header from "./components/header";
import Hook from "./components/imagePart";
import AboutUs from "./components/AboutUs";
import Videos from "./components/videos";
import Advantages from "./components/advantages";
import Lessons from "./components/Lessons";
import AdminstrativeStaff from "./components/AdminstrativeStaff";
import  { QuestionBTN } from "./components/contactBTN";
import ContactFormHandler from "./components/Contact_form";
import TestPage from "./test/page";
import Footer from "./components/Footer";
import TopStudents from "./components/Top_student";

// Loader Component
import { motion } from 'framer-motion';
import React from 'react';
import TopStudents2 from "./components/News";

const Loader = () => (
  <div className="flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-br from-green-900 via-emerald-800 to-gray-900 fixed top-0 left-0 z-[99999] backdrop-blur-md">
    <motion.img
      src="/logo.png"
      alt="Loading..."
      className="w-24 h-24 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"
      initial={{ scale: 0.9, opacity: 0.5 }}
      animate={{
        scale: [0.9, 1.05, 0.9],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />

    <motion.div
      className="mt-6 text-white text-3xl tracking-wide font-semibold"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      Please wait...
    </motion.div>
  </div>
);



export default function Home() {
	const [isOpen, setIsOpen] = useState(false);
	const [isTestPage, setIsPage] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 1500); 
		return () => clearTimeout(timer);
	}, []);

	if (loading) return <Loader />;

	return isOpen ? (
		<div className="fixed lg:top-10 right-4 w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-[80vh] bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden z-[10002] border border-emerald-300">
		  <iframe
			src="https://www.chatbase.co/chatbot-iframe/yEoz12DdfKpQTdsNHF6jt"
			className="w-full h-full"
		  ></iframe>
		  <button
			onClick={() => setIsOpen(false)}
			className="absolute top-3 right-3 bg-gray-900 text-white p-2 rounded-full hover:bg-emerald-600 transition duration-300 shadow-md"
		  >
			✖
		  </button>
		</div>
	  ) : (
		<main className="flex items-center justify-center w-full flex-col bg-gradient-to-br white text-white">
		  {isTestPage ? (
			<TestPage setIsPage={setIsPage} />
		  ) : (
			<div className="w-screen">
			  <Header setLoading={setLoading} setIsPage={setIsPage} />
			  <Hook />
			  <AboutUs />
			  <Videos/>
			  <Advantages />
			  <TopStudents2/>
			  <TopStudents />
			  <Lessons />
			  <AdminstrativeStaff />
			  <div
				className="fixed top-[40%] right-[-30px] z-[10001] rotate-90 transition-transform hover:scale-110"
				onClick={() => setIsOpen(!isOpen)}
			  >
				{!isOpen ? <QuestionBTN /> : null}
			  </div>
			  <ContactFormHandler />
			</div>
		  )}
		  <Footer />
		</main>
	  );
	  
}
