"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "./hook_styles.css";

export default function Header({ setIsPage = () => {}, setLoading = () => {} }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLoaderAndScroll = (targetId) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      requestAnimationFrame(() => {
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }, 1500);
  };

  return (
    <header className="absolute top-0 left-0 w-full bg-white shadow-lg shadow-green-200 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="h-14 w-14 rounded-sm shadow-md shadow-green-700" />
          <span className="text-xl font-bold text-green-700">EduCenter</span>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-green-700 hover:text-white hover:bg-green-600 p-2 rounded-md transition duration-300"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-20 left-0 w-full md:static md:w-auto md:flex md:items-center bg-green-100 md:bg-transparent md:shadow-none shadow-md transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-0 text-center">
            {[
              { name: "Bosh sahifa", link: "#home" },
              { name: "Biz haqimizda", link: "#about" },
              { name: "Afzalliklarimiz", link: "#advantages" },
              { name: "Darslar", link: "#lessons" },
              { name: "Direktorlar", link: "#director" },
              { name: "Bog'lanish", link: "#contact" },
            ].map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLoaderAndScroll(item.link);
                  }}
                  className="text-gray-700 hover:text-white hover:bg-green-600 font-medium px-4 py-2 rounded-lg transition duration-300 w-full"
                >
                  {item.name}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setIsOpen(false);
                  if (setIsPage) setIsPage(true);
                }}
                className="bg-green-600 text-white hover:bg-green-700 font-semibold px-5 py-2 rounded-lg transition duration-300"
              >
                Sinov testi
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
