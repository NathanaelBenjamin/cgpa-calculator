import React, { useContext } from 'react';
import { AppContext } from '../../CONTEXT/AppContext';
import ScaleSelected from './ScaleSelected';

const CalculatorMenu = () => {

    const { mode, setMode, handleClearValues } = useContext(AppContext);

    const changeMode = (scale) => {
        setMode(scale);
        handleClearValues()
    }

  return (
    <div>
        <h1 className="header my-3">
        <span>Step 1: </span>Select your preferred scale
        </h1>
        <div className="scales flex justify-center gap-4">
                <div className="scale scale-four">
                    <button className="option-btn four"
                        onClick={() => {
                            changeMode(4)
                        }}
                    >4.0 scale
                    </button>

                    {mode === 4 && <ScaleSelected scaleText={4} />}
                </div>

                <div className="scale scale-five">
                    <button className="option-btn five"
                        onClick={() => {
                            changeMode(5)
                        }}
                    >5.0 scale
                    </button>

                   {mode === 5 && <ScaleSelected scaleText={5} />}
                </div>

                <div className="scale cgpa">
                    <button className="option-btn cgpa"
                        onClick={() => {
                            changeMode("cgpa")
                        }}
                    >Cumulative GPA
                    </button>

                   {mode === "cgpa" && <ScaleSelected scaleText={`Cumulative GPA`} />}
                </div>
            </div>
    </div>
  )
}

export default CalculatorMenu;