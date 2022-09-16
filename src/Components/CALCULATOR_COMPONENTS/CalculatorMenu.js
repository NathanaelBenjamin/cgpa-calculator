import React, { useContext } from 'react';
import { AppContext } from '../../CONTEXT/AppContext';

const CalculatorMenu = ({ changeMode }) => {

    const { setMode } = useContext(AppContext);

  return (
    <div>
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
    </div>
  )
}

export default CalculatorMenu;