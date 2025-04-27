"use client";
import React, { useState } from "react";

export default function ContactFormHandler({
  setClicked = false,
  setIsStart = false,
  setData = false,
}) {
  const Schools = Array.from({ length: 150 }, (_, i) => i + 1);
  const Classes = Array.from({ length: 11 }, (_, i) => i + 1);
  const [name, setName] = useState();
  const [surname, setSurname] = useState(false);
  const [school, setSchool] = useState(false);
  const [Class, setClass] = useState(false);
  const [phone, setPhone] = useState(false);
  const [isSent, setIsSent] = useState();

  const handleSubmit = async () => {
    if (setIsStart) {
      setIsStart(true);
    }
    setIsSent(true);
    setData ? setData({ name, surname }) : "";

    fetch(
      "https://script.google.com/macros/s/AKfycbwkNayorQKzPlN6iAb3Q3t7coEIizShup-_Lfl9zNJAMz5dTa77fkj57OoFa9b7ggTeRw/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, surname, school, class: Class, number: phone }),
      }
    );
  };

  return (
    <div
      id="contact"
      className="flex mt-5 mx-auto flex-col top-10 text-black w-full max-w-md bg-white shadow-xl rounded-xl p-8 gap-6 border border-gray-200"
    >
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Aloqa Formasi
      </h2>

      <input
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500 transition duration-300 hover:border-indigo-300"
        type="text"
        name="Name"
        placeholder="Ismingizni kiriting"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500 transition duration-300 hover:border-indigo-300"
        type="text"
        name="Surname"
        placeholder="Familiyangizni kiriting"
        onChange={(e) => setSurname(e.target.value)}
      />

      <select
        className="w-full p-4 text-black border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 hover:border-indigo-300"
        defaultValue=""
        onChange={(e) => setSchool(e.target.value)}
      >
        <option value="" disabled>
          --Maktabni tanlang--
        </option>
        {Schools.map((item) => (
          <option key={item} value={item}>
            {item}-maktab
          </option>
        ))}
      </select>

      <select
        className="w-full p-4 text-black border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 hover:border-indigo-300"
        defaultValue=""
        onChange={(e) => setClass(e.target.value)}
      >
        <option value="" disabled>
          --Sinfingizni tanlang--
        </option>
        {Classes.map((item) => (
          <option key={item} value={item}>
            {item}-sinf
          </option>
        ))}
      </select>

      <input
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500 transition duration-300 hover:border-indigo-300"
        type="tel"
        placeholder="Telefon raqam"
        onChange={(e) => setPhone(e.target.value)}
      />

      <button
        disabled={name == false || surname == false || school == false || Class == false || phone == false}
        type="submit"
        className={`w-full bg-${(name == false || surname == false || school == false || Class == false || phone == false) ? "gray" : "indigo"}-600 text-white py-3 rounded-lg hover:bg-${(name == false || surname == false || school == false || Class == false || phone == false) ? "gray" : "indigo"}-700 transition duration-300 ease-in-out transform hover:scale-105 font-semibold`}
        onClick={() => handleSubmit()}
      >
        {isSent ? "Yuborildi" : "Yuborish"}
      </button>
    </div>
  );
}
