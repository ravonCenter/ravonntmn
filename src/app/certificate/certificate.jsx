"use client";
import React, { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "./certificate.css";

export default function Certificate({ data = {},setIsCertified=false }) {
    const [level, setLevel] = useState("unknown");
    const [isDownload,setIsDownload]=useState();
    const certificateRef = useRef(null);

    useEffect(() => {
        if (data.correct !== undefined) {
            if (data.correct > 15) {
                setLevel("B2");
            } else if (data.correct > 10) {
                setLevel("B1");
            } else if (data.correct > 7) {
                setLevel("A2");
            } else if (data.correct > 4) {
                setLevel("A1");
            } else {
                setLevel("unknown");
            }
        }
    }, [data]);

    const generatePDF = () => {
        setIsDownload(true)
        setTimeout(()=>{
            setIsDownload(false)
        },1000)
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

    return (
        <div className="w-screen h-screen p-5 flex items-center justify-center bg-gray-100">
            <button
                onClick={generatePDF}
                className="absolute top-5 right-5 z-50 bg-green-600 text-white py-2 px-5 rounded-md shadow-lg hover:bg-green-700"
            >
                Download PDF
            </button>
            <button
                onClick={()=>setIsCertified(false)}
                className="absolute top-5 left-5 z-50 bg-green-600 text-white py-2 px-5 rounded-md shadow-lg hover:bg-green-700"
            >
                Orqaga
            </button>
            <div ref={certificateRef} id="certificate_pdf" className="certificate sm:w-[200px] sm:h-[100px] w-[900px] h-[640px] mt-5 bg-white shadow-xl border-4 border-blue-500  relative">

<img src="/level_cert.jpg"></img>s
                <h1 className="absolute top-[180px] text-gray-800 font-bold text-2xl text-center w-full">
                    {data.test || "Test Name"}
                </h1>
                <h1 className="absolute top-[220px] text-gray-800 font-bold text-2xl text-center w-full">
                    {level}
                </h1>
                <p className="text-black text-center absolute top-[43%] left-[19%]">RAVON MULOQOT O'QUV MARKAZI TOMONIDAN TASHKILLASHTIRILGAN <br></br> DARAJA TESTIDAN YUQORIDA KO'RSATIB O'TILGAN <br/> DARAJANI QO'LGA KIRITGANI UCHUN</p>
                <h1 className={`absolute ${isDownload?"top-[345px]":"top-[355px]"} text-gray-800 font-bold text-2xl left-[35%] w-full`}>
                    {data.surname} {data.name}
                </h1>
            </div>
        </div>
    );
}
