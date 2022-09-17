import React, { useContext } from 'react';
import { AppContext } from '../../CONTEXT/AppContext';

const CalculatorMenu = () => {

    const { setMode, handleClearValues } = useContext(AppContext);

    const changeMode = (scale) => {
        setMode(scale);
        handleClearValues()
    }

  return (
    <div>
        <div className="scales flex justify-center gap-4">
                <h1 className="font-bold text-2xl text-gray-200 my-3">
                    Select your preferred scale
                </h1>
                <button className="option four"
                    onClick={() => {
                        changeMode(4)
                    }}
                >4.0 scale</button>
                <button className="option five"
                    onClick={() => {
                        changeMode(5)
                    }}
                >5.0 scale</button>
                <button className="option total"
                    onClick={() => {
                        changeMode("cgpa")
                    }}
                >Cumulative GPA</button>
            </div>
    </div>
  )
}

export default CalculatorMenu;