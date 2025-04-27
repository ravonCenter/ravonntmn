import React, { useState } from 'react';

export default function TestCardForm({ level, test, options, correct, setCount, count }) {
    const [incorrect, setIncorrect] = useState(false);
    const [isAnswered,setIsAnswered]=useState(false)
    const [currentIndex,setCurrentIndex]=useState(null)

    const handleAnswer = (item,index) => {
        if (item === correct) {
            setCount(count + 1);
            setIncorrect(1);
        } else {
            setIncorrect(true);
        }
        setIsAnswered(true)
        setCurrentIndex(index)
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto border border-gray-300">
    <button className='mr-auto pl-5 w-fit px-5 py-2 bg-green-600'>{count}</button>

            <h2 className="text-lg font-bold text-gray-700">Level: {level}</h2>
        <p className="text-gray-800 text-md my-4 font-medium">{test}</p>

            <div className="flex flex-col gap-4">
                {options.map((item, index) => (
                    <button
                        disabled={isAnswered==true}
                        key={index}
                        onClick={() => handleAnswer(item,index)}
                        className={`w-full px-4 py-2 rounded-md text-white font-semibold transition-all duration-300 ${
                            item !== correct && currentIndex==index
                                ? 'bg-red-500 hover:bg-red-900'
                                :item==correct&& currentIndex==index?"bg-green-600":
                                 'bg-blue-500 hover:bg-blue-600'
                        }`}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
}
