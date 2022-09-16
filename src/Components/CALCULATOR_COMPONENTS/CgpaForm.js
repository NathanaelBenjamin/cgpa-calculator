import React, { useState, useContext } from 'react';
import { AppContext } from '../../CONTEXT/AppContext';
import ClearButton from './ClearButton';
import Result from './Result';

const CgpaForm = () => {

    const { borderStyles } = useContext(AppContext);

    const [ values, setValues ] = useState({
        gp1: "",
        gp2: "",
        cgpa: ""
    });

    const calculateCGPA = () => {
        setValues(prev => {
            return {
                gp1: prev.gp1,
                gp2: prev.gp2,
                cgpa: ((parseFloat(prev.gp1) + parseFloat(prev.gp2))/2).toFixed(2)
            }
        })
    }

    const clearValues = () => {
        setValues(() => {
            return {
                gp1: "",
                gp2: "",
                cgpa: ""
            }
        })
    }

  return (
    <div>
        <div className='grid md:grid-cols-4 gap-6'>
            <form className='bg-teal-700 h-80 py-8 px-5 rounded bg-gradient-to-br from-teal-700 to-teal-600 flex flex-col justify-between md:col-span-2'
                onSubmit={(event) => {
                    event.preventDefault()
                    calculateCGPA();
                }}
            >
                <div className="grid">
                    <input type="text" placeholder='First Semester GP' className='form-input w-full my-2 rounded' 
                    value={values.gp1}
                        onChange={(event) => {
                            setValues((prev) => {
                                return {
                                    gp1: event.target.value,
                                    gp2: prev.gp2,
                                    cgpa: prev.cgpa
                                }
                            });
                        }}
                    />

                    <input type="text" placeholder='Second Semester GP' className='form-input w-full my-2 rounded' 
                        value={values.gp2}
                        onChange={(event) => {
                            setValues((prev) => {
                                return {
                                    gp1: prev.gp1,
                                    gp2: event.target.value,
                                    cgpa: prev.cgpa
                                }
                            });
                        }}
                    />
                </div>

                <button className="w-44 flex gap-1 text-teal-700 bg-white py-2 px-4 hover:shadow-lg hover:shadow-teal-400 rounded transition duration-300">
                    <span>Calculate CGPA</span>
                </button>
            </form>

            <div className="entries md:col-span-2 flex flex-col gap-3">
                <table className={`${borderStyles(values.cgpa)}`}>
                    <thead>
                        <tr>
                            <th className={`${borderStyles(values.cgpa)}`}>First Semester GP</th>
                            <th className={`${borderStyles(values.cgpa)}`}>Second Semester GP</th>
                            <th className={`${borderStyles(values.cgpa)}`}>CGPA</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className={`${borderStyles(values.cgpa)}`}>{values.gp1}</td>
                            <td className={`${borderStyles(values.cgpa)}`}>{values.gp2}</td>
                            <td className={`${borderStyles(values.cgpa)}`}>{values.cgpa}</td>
                        </tr>
                    </tbody>
                </table>

                {
                    (values.gp1 && values.gp2) && 
                    <div className="flex gap-3">
                        <ClearButton 
                            text={`Clear values`}
                            clickFunction={() => clearValues()}  
                        />
                    </div> 
                }
            </div>

            {values.cgpa && <Result text={`CGPA`} result={values.cgpa} />}
        </div>
    </div>
  )
}

export default CgpaForm;