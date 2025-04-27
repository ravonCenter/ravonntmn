"use client";
import React, { useState, useEffect } from "react";
import Tests_english from "./source/english/english";
import Tests_I_q from "./source/IQ/IQ";
import Tests_I_T from "./source/IT/IT";
import Tests_russian from "./source/Russian/Russian";
import TestCardForm from "./TestCard";
import history from "./source/history/history";
import arabic_tests from "./source/arabic/arabic";
import korean_tests from "./source/korean/korean";
import math_tests from "./source/Math/Math";
import uzbek_ona_tili from "./source/uzbek/uzbek";
import "./test.css"
import Certificate from "../certificate/certificate";

export default function TestComp({ testType = false, stopTest,data={} }) {
  const [currentTest, setCurrentTest] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isCertified,setIsCertified]=useState(false)
console.log(data)
  useEffect(() => {
    if (testType === "Ingliz tili") {
      setCurrentTest(Tests_english);
    } else if (testType === "Rus tili") {
      setCurrentTest(Tests_russian);
    } else if (testType === "Arab tili") {
      setCurrentTest(arabic_tests);
    } else if (testType === "Koreys tili") {
      setCurrentTest(korean_tests);
    } else if (testType === "Ona tili va adabiyot") {
      setCurrentTest(uzbek_ona_tili);
    } else if (testType === "Matematika") {
      setCurrentTest(math_tests);
    } else if (testType === "Tarix") {
      setCurrentTest(history);
    } else {
      setCurrentTest(false); // Default if testType does not match
    }
  }, [testType]);

  const handleStopTest = () => {
    stopTest.setIsStartTest(!stopTest.isStartTest);
    stopTest.setIsTest(!stopTest.isTest);
  };
  
  data.test=testType
  data.correct=correctCount

  const handleSubmit=()=>{
    setIsCertified(!isCertified)
    fetch("https://script.google.com/macros/s/AKfycbwompR60lOyOwzPTlISuzkVv-FFQiltAm1DfHbYky6KQArEmtLi86AS4v-OLynOEj80/exec",{
      method:"POST",
      mode:"no-cors",
      header:"application/json",
      body:JSON.stringify({name:data.name,surname:data.surname,subject:testType,correct:correctCount,isCertified:correctCount>4?"yes":"no",level:(correctCount>15?"B2":correctCount>11?"B1":correctCount>7?"A2":correctCount>4?"A1":"undefined")})
    })
  }

  return isCertified?<Certificate setIsCertified={setIsCertified} data={data} />: (
    <div className="w-full h-fit min-h-screen flex mt-6 items-center justify-center flex-col bg-[rgb(3,119,100)]">
      <div className="timeline flex-grow w-full fixed top-0 bg-orange-600 h-6">
        <div className={`timer bg-green-600 h-full`}></div>
      </div>
      <header className="w-full px-4 sm:px-7 flex items-center justify-center shadow-lg drop-shadow-md shadow-orange-700 h-20 bg-green-900">
        <div className="logo top-2 left-2">
          <img src="./logo.png" width={"50px"} alt="Logo" />
        </div>
        <h1 className="w-full my-5 mx-auto text-2xl sm:text-4xl text-center">
          {testType} testiga xush kelibsiz!
        </h1>
      </header>
      <div className="w-full flex items-center justify-center">
        <button
          className="bg-red-600 ml-auto px-4 sm:px-5 py-2 text-sm sm:text-base"
          onClick={() => handleStopTest()}
        >
          Testni to'xtatish
        </button>
      </div>
      {currentTest ? (
        <div className="flex items-center justify-center flex-col gap-6 pt-4 w-full px-4 sm:px-7">
          {currentTest.map((item, index) => (
            <TestCardForm
              correct={item.answer}
              count={correctCount}
              level={item.level}
              options={item.options}
              setCount={setCorrectCount}
              test={item.question}
              key={index}
            />
          ))}
          <button className="py-2 px-5 bg-orange-700 rounded-md mt-[-20px] mb-9" onClick={()=>handleSubmit()}>Submit</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
