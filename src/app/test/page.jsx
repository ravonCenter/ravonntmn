"use client";
import React, { useState } from "react";
import TestCard from "../components/TestCard";
import ContactFormHandler from "../components/Contact_form";
import TestComp from "./TestComp";
import MemberCertificate from "../certificate/MembersOnly/certificate";
import Center_member_passwords from "../certificate/MembersOnly/passwords";

const verifyIsMember = () => {
  const name = prompt("Ismingizni kiriting:");
  const password = prompt("Parolingizni kiriting:");
  for (let i of Center_member_passwords) {
    if (i.name === name && i.password === password) {
      return true;
    }
  }
  return false;
};

export default function TestPage() {
  const [isTest, setIsTest] = useState(false);
  const [testType, setTestType] = useState("");
  const [isStartButton, setSIsStart] = useState(false);
  const [isStartTest, setIsStartTest] = useState(false);
  const [formData, setFormdata] = useState();
  const [isMemberCertificate, setIsMemberCertificate] = useState(false);

  const handleMemberCertificationPort = () => {
    const isVerified = verifyIsMember();
    if (isVerified) {
      setIsMemberCertificate(true);
    } else {
      alert("Siz Ravon Muloqot O'quv markazi a'zosi emassiz!");
    }
  };

  return !isMemberCertificate ? (
    !isStartTest ? (
      <section className="bg-green-700 text-black min-h-screen flex flex-col">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center justify-center py-8 sm:py-10 bg-[rgb(3,119,100)] text-center">
          <img src="/logo.png" width="80px" alt="Logo" className="mb-6" />
          <h1 className="text-3xl sm:text-4xl text-white font-extrabold mb-4">
            Ravon Muloqot test markaziga
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6">Xush Kelibsiz</h2>
        </div>

        {/* Test Type Selection */}
        <nav className="px-6 sm:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xl sm:text-2xl font-semibold text-white">Test turini tanlang:</h1>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {[ 
              { type: "english", name: "Ingliz tili" }, 
              { type: "russian", name: "Rus tili" }, 
              { type: "arabic", name: "Arab tili" }, 
              { type: "korean", name: "Koreys tili" }, 
              { type: "mother_tongue_vs_literature", name: "Ona tili va adabiyot" }, 
              { type: "math", name: "Matematika" }, 
              { type: "history", name: "Tarix" }
            ].map((item) => (
              <TestCard
                key={item.name}
                title="Mavjud"
                value={item.name}
                setIsTest={setIsTest}
                setTestType={setTestType}
                className="hover:scale-105 transition-all duration-300 shadow-lg rounded-lg p-4 text-center bg-white text-gray-700"
              />
            ))}
            <div
              onClick={() => handleMemberCertificationPort()}
              className="bg-white bg-opacity-20 text-white p-4 rounded-lg shadow-md hover:scale-105 transition duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-medium">Xodimlar uchun</h3>
              <p className="text-2xl font-bold mt-2">CertiPort</p>
            </div>
          </ul>
        </nav>

        {/* Start Test Modal */}
        {isTest && (
          <section className="fixed p-5 top-0 left-0 w-full h-full flex items-center justify-center bg-orange-600 bg-opacity-80 z-50">
            <div className="w-full pt-36 max-w-lg p-6 sm:p-8 bg-white rounded-lg shadow-lg flex flex-col items-center">
              <ContactFormHandler setClicked={setIsTest} setIsStart={setSIsStart} setData={setFormdata} />
              <button
                disabled={!isStartButton}
                onClick={() => setIsStartTest(true)}
                className={`w-full px-6 py-2 text-white mt-6 ${isStartButton ? "bg-green-600" : "bg-gray-600"}`}
              >
                Testni boshlash
              </button>
            </div>
          </section>
        )}
      </section>
    ) : (
      <TestComp testType={testType} stopTest={{ setIsStartTest, isStartTest, isTest, setIsTest }} data={formData} />
    )
  ) : (
    <MemberCertificate toggleCertificate={setIsMemberCertificate} />
  );
}
