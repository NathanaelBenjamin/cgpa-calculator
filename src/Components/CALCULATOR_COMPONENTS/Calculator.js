import React, { useState } from 'react';
import GpaForm from './GpaForm';
import CgpaForm from './CgpaForm';
import { AppContext } from '../../CONTEXT/AppContext';

const Calculator = () => {

    const [mode, setMode] = useState("cgpa");

    const tableBorderStyle = "border-collapse border border-rose-700";

  return (
    <div className="flex justify-center items-center">
        <div className='calculator w-[90%] min-h-[38rem] md:w-3/4 bg-gray-200 rounded py-12 px-8 -mt-20 mb-12 shadow-md shadow-gray-700'>
            <div className="scales flex justify-center gap-4">
                <button className="option four"
                    onClick={() => {
                        setMode(4)
                    }}
                >4.0 scale</button>
                <button className="option five"
                    onClick={() => {
                        setMode(5)
                    }}
                >5.0 scale</button>
                <button className="option total"
                    onClick={() => {
                        setMode("cgpa")
                    }}
                >Cumulative GPA</button>
            </div>

            <div className="check-gp grid gap-8">
                <header className='md:col-span-2 mt-4 text-center font-bold text-xl'>Calculate your GP.</header>

                <AppContext.Provider value={tableBorderStyle}>
                    {mode === "cgpa" ? <CgpaForm /> : (mode === 4 ? <GpaForm scale={4} /> : <GpaForm scale={5} />)}
                </AppContext.Provider>

            </div>
        </div>
    </div>
  )
}

export default Calculator;