import React, { useState } from 'react';
import GpaForm from './GpaForm';
import CgpaForm from './CgpaForm';
import { AppContext } from '../../CONTEXT/AppContext';
import CalculatorMenu from './CalculatorMenu';

const Calculator = () => {

    const [mode, setMode] = useState(4);

    const borderStyles = (value=2) => {
        const tableBorderStyle = `border-collapse border border-rose-700`;
        const skyBlue = 'border-collapse border border-sky-500';

        const tableBorder =  value > 3 ? skyBlue : tableBorderStyle;
    
        return tableBorder;
    }

    const [ courses, setCourses ] = useState([]);

    const [ parameters, setParameters ] = useState({
        gradePoints: [],
        creditUnits: []
    });

    const [ result, setResult ] = useState(null);

    const handleClearValues = () => {
        setCourses([])
        setResult(null)
        setParameters(() => {
            return {
            gradePoint: [],
            creditUnits: []
            }
        })    
    }

  return (
    <div className="flex justify-center items-center">
    <AppContext.Provider value={{ borderStyles, setMode, courses, setCourses, parameters, setParameters, result, setResult, handleClearValues, mode }}>
        <div className='calculator w-[90%] min-h-[38rem] md:w-10/12 dark:bg-gray-600 bg-gray-200 rounded py-12 px-4 mt-12 md:-mt-20 mb-12 shadow-md shadow-gray-700 dark:shadow-gray-400'>

            <CalculatorMenu />

            <div className="check-gp grid gap-8">
                <h1 className='header md:col-span-2 mt-8 -mb-4 '><span>Step 2: </span>Calculate your GP.
                </h1>
                {mode === "cgpa" ? <CgpaForm /> : (mode === 4 ? <GpaForm scale={4} /> : <GpaForm scale={5} />)}
            </div>
        </div>
        </AppContext.Provider>
    </div>
  )
}

export default Calculator;