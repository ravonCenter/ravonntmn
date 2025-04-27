"use client";
import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "./../certificate.css"

export default function MemberCertificate({toggleCertificate}) {
    console.log(toggleCertificate) 
    const [isDownload, setIsDownload] = useState(false);
    const [isDataFilled, setIsDataFilled] = useState(false);
    const [name,setName]=useState("")
    const [surname,setSurname]=useState("")
    const [subject,setSubject]=useState("")
    const [Grade,setGrade]=useState("")
    const [score,setScore]=useState("")
    const [mode,setMode]=useState(false)
    const [position,setPosition]=useState(0)

    const certificateRef = useRef(null);


const handleClick=()=>{
        setIsDataFilled(true)
        const member_name=document.getElementById("member_name").value
        const member_surname=document.getElementById("member_surname").value
        const member_subject=document.getElementById("member_subject").value
        const member_grade=document.getElementById("member_grade").value
        const member_score=document.getElementById("member_score").value
        
        console.log(member_grade) 
        setName(member_name)
        setSurname(member_surname)
        setGrade(member_grade)
        setScore(member_score)
        switch(member_subject){
            case "english":return setSubject("CAMBRIDGE ENGLISH SCALE")
            case "russian": return setSubject("RUSSIAN")
            case "history": return setSubject("HISTORY")
            case "arabic": return setSubject("ARABIC LANGUAGE")
            case "korean": return setSubject("KOREAN LANGUAGE")
            case "mother_tongue_vs_literature": return setSubject("ONA TILI VA ADABIYOT")
            case "math": return setSubject("MATHEMATICS")
            

        }
    
}       
    // Form to collect certificate data
    const InputForm = () => {
        return (
            <section className=" bg-[rgb(3,119,100)] flex flex-col gap-10 items-center justify-center w-screen min-h-screen text-black">
                <form className="w-96 flex flex-col gap-6 shadow-md shadow-green-950 bg-green-900 p-5"  onSubmit={(e) => { e.preventDefault(); setIsDataFilled(true); }}>
                <h1 className="w-full text-white text-2xl font-bold uppercase text-center"><b className="bg-orange-700 p-2 pb-1 shadow-md line-clamp-6 shadow-orange-900 mb-2">Ravon Muloqot</b> a'zolari uchun</h1>

                <input
                    id="member_name"
                    required
                    className="w-full px-2 py-1 rounded-md member_name"
                    type="text"
                    placeholder="Ism kiriting: "
                />
                <input
                    id="member_surname"
                    required
                    className="w-full px-2 py-1 rounded-md member_surname"
                    type="text"
                    placeholder="Familiya kiriting: "
                />
                <select
                    
                    required
                    id="member_subject"
                    
                >
                    <option value={"--"} disabled>
                        --Tanlang--
                    </option>
                    {[
                        { type: "english", name: "Ingliz tili" },
                        { type: "russian", name: "Rus tili" },
                        { type: "arabic", name: "Arab tili" },
                        { type: "korean", name: "Koreys tili" },
                        { type: "mother_tongue_vs_literature", name: "Ona tili va adabiyot" },
                        { type: "math", name: "Matematika" },
                        { type: "history", name: "Tarix" },
                    ].map((item) => (
                        <option key={item.type} onClick={()=>setPosition(item.type)} value={item.type}>
                            {item.name}
                        </option>
                    ))}
                </select>
                <select
                    id="member_grade"
                    required
                    name="grade"
                >
                    <option value={"--"} disabled>
                        --Tanlang--
                    </option>
                    {["Starter", "A1", "A2", "A2+", "IELTS", "B1", "B2", "C1"].map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
                <input
                    id="member_score"
                    required
                    className="w-full px-2 py-1 rounded-md member_score"
                    type="text"
                    placeholder="Balni kiring kiriting: "
                />
                {mode?<select id="member_position">
                    {[1,2,3].map(item=><option key={item} value={item}>{item}</option>)}
                </select>:""}
                <h2 onClick={(e)=>setMode(!mode)} className={`mr-auto py-2 px-5 ${!mode?"bg-green-950":"bg-green-500"} text-white`}>Toggle level</h2>
                <button onClick={(e)=>handleClick()} className="w-fit py-2 px-5 mx-auto bg-fuchsia-800">Submit</button>
            <button onClick={()=>toggleCertificate(false)} className="px-[25px]  top-2 py-[5px] bg-red-700 text-white">Exit</button>
            </form>
            </section>
        );
    };

    const generatePDF = () => {
        setIsDownload(true);
        setTimeout(() => {
            setIsDownload(false);
        }, 1000);

        const element = certificateRef.current;
        setTimeout(() => {
            html2canvas(element, { scale: 3 }).then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                const pdf = new jsPDF("l", "mm", "a4"); // Landscape A4

                const imgWidth = 297; // A4 width in mm
                const imgHeight = (canvas.height * imgWidth) / canvas.width;

                pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
                pdf.save("certificate.pdf");
            });
        }, 500); // Give time for rendering
    };
    
    
    const months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    };
    const date=new Date().toLocaleDateString()
    const month=new Date().getMonth()
    
    
    const [fontS,setFontS]=useState(19)
    const handleChange=()=>{
        const font_input=document.getElementById("font_size_certificate").value
        const certificate_member_name_surname=document.getElementById("certificate_member_name_surname")
        certificate_member_name_surname.style.fontSize=font_input+"px"
        console.log(font_input)
    }
    
    return isDataFilled ? (
        <div className="w-screen h-screen p-5 flex items-center justify-center bg-gray-100">
            <button
                onClick={generatePDF}
                className="absolute top-5 right-5 z-50 bg-green-600 text-white py-2 px-5 rounded-md shadow-lg hover:bg-green-700"
            >
                Download PDF
            </button>
            <input onChange={()=>handleChange()} className="text-black absolute top-10 m-auto" type="number" id="font_size_certificate" placeholder="Enter font size:"></input>
            <button
                onClick={() => setIsDataFilled(false)}
                className="absolute top-5 left-5 z-50 bg-green-600 text-white py-2 px-5 rounded-md shadow-lg hover:bg-green-700"
            >
                Orqaga
            </button>
            <div
                ref={certificateRef}
                id="certificate_pdf"
                style={{"backgroundImage":"url(certificate.png)"}}
                className="certificate_protected w-[600px] h-[425px] mt-5 bg-white shadow-xl  p-10 relative"
            >
                <h1 className="text-black text-center mt-10 text-4xl font-serif">CERTIFICATE</h1>
                <p className="text-red-800 text-center text-xl font-bold ">proudly presented to</p>
                
                
                <h1 className="absolute top-[500px] left-2 font-bold text-5xl text-red-800 text-center w-full">
                    {mode?position:""}
                </h1>
                <h1
                id="certificate_member_name_surname"
                    className={`absolute ${ "top-[160px] left-5"} uppercase text-${fontS} text-red-950 font-bold border-b-2 border-black w-96 border-dashed text-center left-[18%] `}
                >
                    {surname} {name}
                </h1>
                <h1 className="text-black text-xl  mt-[48px] text-center font-serif">
                    For {!mode?"taking Assessment Test based on ":" performing well in the month of  "} {mode?<br/>:""}
                    <strong>{mode?months[month]:""}</strong> {mode?"in ":""} {mode?<span><strong>{Grade} </strong>level {mode?`of ${subject}`:""}</span>:""}
                </h1>
                {!mode?<h1 className={`absolute ${"top-[222px]"}  text-gray-800  text-lg left-0 text-center font-bold w-full`}>
                    {subject || "Test Name"}
                </h1>:""}
                <h1 className={`text-black text-2xl ${mode?"mt-[0px]":"mt-[15px]"} text-center font-serif`}>
                    {mode?"by":"and"} reaching the {mode?"score":"level"} of 
                </h1>
                <h1 className="absolute top-[300px] left-0 font-bold text-3xl text-red-800 text-center w-full">
                    {!mode?Grade+"-":""}{score}
                </h1>
                <p
                id="certificate_member_name_surname"
                    className={`absolute  uppercase text-md  left-[-110px] bottom-[50px] underline text-gray-800 font-bold  text-center w-full`}
                >
                    {date}
                </p>
                <h1 className={`absolute text-black bottom-[90px] right-[100px] text-lg`}>M.Isoqulov</h1>
                <h1 className={`absolute text-black bottom-[70px] right-[110px] text-lg`}>director</h1>
            </div>
        </div>
    ) : (
        <InputForm />
    );
}
