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

  return (
    <div className="flex justify-center items-center">
        <div className='calculator w-[90%] min-h-[38rem] md:w-10/12 dark:bg-gray-600 bg-gray-200 rounded py-12 px-8 -mt-40 mb-12 shadow-md shadow-gray-700 dark:shadow-gray-400'>

            <CalculatorMenu changeMode={() => setMode()} />

            <div className="check-gp grid gap-8">
                <header className='md:col-span-2 mt-4 text-center font-bold text-xl dark:text-gray-200 text-gray-600'>Calculate your GP.
                </header>

                <AppContext.Provider value={{ borderStyles }}>
                    {mode === "cgpa" ? <CgpaForm /> : (mode === 4 ? <GpaForm scale={4} /> : <GpaForm scale={5} />)}
                </AppContext.Provider>

            </div>
        </div>
    </div>
  )
}

export default Calculator;