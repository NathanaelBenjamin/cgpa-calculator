import React, { useState, useContext } from 'react';
import { AppContext } from '../../CONTEXT/AppContext';

const CgpaForm = () => {

    const borderStyles = useContext(AppContext);

    const [ values, setValues ] = useState({
        gp1: null,
        gp2: null,
        cgpa: null
    });

  return (
    <div>
        <div className='grid md:grid-cols-2 gap-8'>
            <form className='bg-teal-700 h-80 py-8 px-5 rounded bg-gradient-to-br from-teal-700 to-teal-600 flex flex-col justify-between'
                onSubmit={(event) => {
                    event.preventDefault()
                    setValues(prev => {
                        return {
                            gp1: prev.gp1,
                            gp2: prev.gp2,
                            cgpa: ((parseFloat(prev.gp1) + parseFloat(prev.gp2))/2).toFixed(2)
                        }
                    })
                }}
            >
                <div className="grid">
                    <input type="text" placeholder='First Semester GP' className='form-input w-full my-2 rounded' 
                        onChange={(event) => {
                            setValues((prev) => {
                                return {
                                    gp1: (parseFloat(event.target.value)).toFixed(2),
                                    gp2: prev.gp2,
                                    cgpa: prev.cgpa
                                }
                            });
                        }}
                    />

                    <input type="text" placeholder='Second Semester GP' className='form-input w-full my-2 rounded' 
                        onChange={(event) => {
                            console.log(event.target.value)
                            setValues((prev) => {
                                return {
                                    gp1: prev.gp1,
                                    gp2: (parseFloat(event.target.value)).toFixed(2),
                                    cgpa: prev.cgpa
                                }
                            });
                        }}
                    />
                </div>

                <button className="w-44 flex gap-1 text-teal-700 bg-white py-2 px-4 hover:shadow-lg hover:shadow-teal-400 rounded transition duration-300">
                    <span>Check CGPA</span>
                </button>
            </form>

            <div className="entries flex flex-col gap-3">
                <table className={`${borderStyles}`}>
                    <thead>
                        <tr>
                            <th className={`${borderStyles}`}>First Semester</th>
                            <th className={`${borderStyles}`}>Second Semester</th>
                            <th className={`${borderStyles}`}>CGPA</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className={`${borderStyles}`}>{values.gp1}</td>
                            <td className={`${borderStyles}`}>{values.gp2}</td>
                            <td className={`${borderStyles}`}>{values.cgpa}</td>
                        </tr>
                    </tbody>
                </table>

                {(values.gp1 && values.gp2) && <button className="flex gap-1 text-teal-700 bg-white w-44 py-2 px-4 hover:shadow-lg hover:shadow-teal-400 rounded transition duration-300">Calculate CGPA</button>}
            </div>
        </div>
    </div>
  )
}

export default CgpaForm;